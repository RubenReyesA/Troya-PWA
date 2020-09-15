<template>
  <div class="login">
    <div class="try">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Iniciar Sesión</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
    </div>

    <v-row justify="center">
      <v-dialog v-model="showDialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Iniciar Sesión</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="inputUser" label="Usuario" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="inputPass" label="Contraseña" type="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-alert v-model="showError" type="error">Usuario o Contraseña no válida.</v-alert>
            <v-alert v-model="showSuccess" type="success">Sesión iniciada correctamente.</v-alert>
            <v-alert
              v-model="showWarn"
              type="warning"
            >Sesión cerrada correctamente. Redirigiendo a la pantalla principal.</v-alert>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="goHome">Cancelar</v-btn>
            <v-btn color="blue darken-1" text @click="startLogIn">Iniciar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

import info from "@/information";
import firebase from "@firebase/app";
import("firebase/auth");

export default {
  data: function() {
    return {
      showDialog: true,
      inputUser: "",
      inputPass: "",
      showError: false,
      showSuccess: false,
      showWarn: false
    };
  },
  mounted: function() {
    this.isLog();
  },
  methods: {
    isLog: function() {
      if (info.logInformation.logStatus) {
        this.showWarn = true;
        this.showError = false;
        this.showSuccess = false;

        info.logInformation.logStatus = false;

        firebase
          .auth()
          .signOut()
          .then(function() {
            // Sign-out successful.
          })
          .catch(function(error) {
            console.log("Error: " + error);

            // An error happened.
          });

        setTimeout(this.goHome, 2000);
      }
    },
    goHome: function() {
      this.$router.push("/");
    },
    findUser: function() {
      let i = 0;
      let size = info.accounts.length;
      let found = false;

      while (i < size && !found) {
        if (
          this.inputUser == info.accounts[i].user &&
          this.inputPass == info.accounts[i].pass
        ) {
          found = true;
        } else {
          i++;
        }
      }

      info.logInformation.logStatus = true;
      info.logInformation.logNum = i + 1;

      return {
        found: found,
        account: info.accounts[i]
      };
    },
    startLogIn: function() {
      if (this.inputUser == "" || this.inputPass == "") {
        this.showError = true;
        this.showSuccess = false;
        this.showWarn = false;
      } else {
        let t = this.findUser();
        if (t.found) {
          firebase
            .auth()
            .signInWithEmailAndPassword(t.account.mailFB, t.account.passFB)
            .catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log("Error: " + errorCode + " -- " + errorMessage);
            });
          this.showError = false;
          this.showSuccess = true;
          this.showWarn = false;

          setTimeout(this.goHome, 2000);
        } else {
          this.showError = true;
          this.showSuccess = false;
          this.showWarn = false;
        }
      }
    }
  }
};
</script>
