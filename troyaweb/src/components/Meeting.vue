<template>
  <div class="try">
    <v-card class="cardConvocatoria">
      <div>
        <h3 style="text-decoration:underline; margin-bottom:10px">{{t}}</h3>
      </div>
      <div id="itemsCardConvocatoria">
        <div class="infoConvocatoria">
          <p style="margin-right: 10px; text-decoration:underline">Día:</p>
          <p>{{d}}</p>
        </div>
        <div class="infoConvocatoria">
          <p style="margin-right: 10px; text-decoration:underline">Hora:</p>
          <p>{{h}}</p>
        </div>
        <div class="infoConvocatoria">
          <p style="margin-right: 10px; text-decoration:underline">Partido:</p>
          <p>{{m}}</p>
        </div>
      </div>
    </v-card>

    <div class="try2">
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">- VOY ({{playersVoy.length}}) -</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in playersVoy.length" :key="i">
              <td style="text-align:center">{{playersVoy[i-1]}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">- NO VOY ({{playersNoVoy.length}}) -</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in playersNoVoy.length" :key="i">
              <td style="text-align:center">{{playersNoVoy[i-1]}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">- DUDA ({{playersDuda.length}}) -</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in playersDuda.length" :key="i">
              <td style="text-align:center">{{playersDuda[i-1]}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <v-card class="cardConvocatoria" style="width:40vh">
      <v-select v-model="selectedPlayer" label="Escoger jugador" :items="playersListNames"></v-select>

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290" :disabled="!isselected">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              style="width:90%"
              v-bind="attrs"
              v-on="on"
            >Confirmar Asistencia</v-btn>
          </template>
          <v-card>
            <v-card-title class="headline">{{t2}}</v-card-title>
            <v-card-text>{{st2}}</v-card-text>

            <v-col cols="12" sm="12">
              <v-text-field
                outlined
                v-model="pass"
                label="Introduzca dorsal"
                prepend-icon="mdi-numeric"
                single-line
                type="number"
              ></v-text-field>
              <v-alert v-model="showError" type="error">{{errorText}}</v-alert>
            </v-col>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="assist(0)">Voy</v-btn>
              <v-btn color="green darken-1" text @click="assist(1)">No Voy</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

import info from "@/information";
import fb from "@/fb";

export default {
  props: ["title", "day", "hour", "match", "title2", "subtitle2", "name"],
  watch: {
    selectedPlayer: function() {
      if (this.selectedPlayer != "") {
        this.isselected = true;
      } else {
        this.isselected = false;
      }
    }
  },
  data: function() {
    return {
      t: this.title,
      d: this.day,
      h: this.hour,
      m: this.match,
      t2: this.title2,
      st2: this.subtitle2,
      pass: null,
      showError: false,
      errorText: "Contraseña incorrecta",
      dialog: false,
      playersListNames: [],
      playersVoy: [],
      playersNoVoy: [],
      playersDuda: [],
      playersIDsFB: [],
      selectedPlayer: null,
      isselected: false
    };
  },
  methods: {
    checkDorsal: function() {
      let found = false;
      let i = 0;
      let size = info.playersList.length;

      while (i < size && !found) {
        if (info.playersList[i].playerName == this.selectedPlayer) {
          found = true;
        } else {
          i++;
        }
      }
      if (found) {
        if(info.playersList[i].playerNumber == this.pass){
            return true;
        }
        else{
            return false;
        }
      } else {
        return false;
      }
    },
    assist: function(type) {
      this.showError = false;
      let checked = this.checkDorsal();

      if (checked) {
        this.dialog = false;

        if (type == 0) {
          let index = this.lookforPosition(this.selectedPlayer);
          console.log(index);

          fb.db
            .collection(this.name)
            .doc(this.playersIDsFB[index])
            .update({
              Status: 0
            });
        } else if (type == 1) {
          let index = this.lookforPosition(this.selectedPlayer);
          fb.db
            .collection(this.name)
            .doc(this.playersIDsFB[index])
            .update({
              Status: 1
            });
        }

        this.update();
      } else {
        this.showError = true;
      }
    },
    update: function() {
      this.playersListNames = [];
      this.playersVoy = [];
      this.playersNoVoy = [];
      this.playersDuda = [];
      this.playersIDsFB = [];

      fb.db.collection(this.name).onSnapshot(res => {
        const changes = res.docChanges();

        let r = false;

        changes.forEach(change => {
          if (change.type === "added") {
            let t = change.doc.data();

            if (t.Type == "0") {
              if (t.Jornada != this.$cookies.get("currentJ")) {
                r = true;
                let p = {
                  Type: "0",
                  Jornada: this.$cookies.get("currentJ")
                };
                fb.db
                  .collection(this.name)
                  .doc(change.doc.id)
                  .update(p);
              }
            } else if (t.Type == "1") {
              let name = this.lookforNamefromNum(t.PlayerNum);
              this.playersListNames.push(name);
              this.playersIDsFB.push(change.doc.id);

              switch (t.Status) {
                case 0:
                  this.playersVoy.push(name);
                  break;

                case 1:
                  this.playersNoVoy.push(name);
                  break;

                case 2:
                  this.playersDuda.push(name);
                  break;

                default:
                  break;
              }
            }
          }
        });

        if (r) {
          fb.db.collection(this.name).onSnapshot(res => {
            const changes = res.docChanges();

            changes.forEach(change => {
              if (change.type === "added") {
                let t = change.doc.data();

                if (t.Type == "1") {
                  let p = {
                    PlayerNum: t.PlayerNum,
                    Status: 2
                  };

                  fb.db
                    .collection(this.name)
                    .doc(change.doc.id)
                    .update(p);
                }
              }
            });
          });
          this.update();
        }
      });
    },
    add: function() {
      for (let i = 0; i < info.playersList.length; i++) {
        let p = {
          PlayerNum: info.playersList[i].playerNumber,
          Status: 2
        };

        fb.db.collection(this.name).add(p);
      }
    },
    lookforPosition: function(name) {
      let i = 0;
      let found = false;
      let size = this.playersListNames.length;

      while (i < size && !found) {
        if (this.playersListNames[i] == name) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        return i;
      }
    },
    lookforNamefromNum: function(num) {
      let i = 0;
      let found = false;
      let size = info.playersList.length;

      while (i < size && !found) {
        if (info.playersList[i].playerNumber == num) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        return info.playersList[i].playerName;
      }
    }
  },
  created: function() {
    this.update();
  }
};
</script>