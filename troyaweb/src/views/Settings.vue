<template>
  <div class="settings">
    <div class="try" v-if="toShow">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Ajustes de la aplicación</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <h3>Jornada actual: {{$cookies.get("currentJ")}}</h3>

      <v-row justify="center">
        <v-dialog v-model="showDialog" persistent max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{dialogInfo.title}}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" :style="dialogInfo.showTime">
                    <v-time-picker
                      v-model="timepicker"
                      :label="dialogInfo.timeLabel"
                      format="24hr"
                      class="mt-2"
                      color="green lighten-1"
                    ></v-time-picker>
                  </v-col>

                  <v-col cols="12" :style="dialogInfo.showSelector">
                    <v-select
                      v-model="selector"
                      :label="dialogInfo.selectorTitle"
                      :items="dialogInfo.selectorItems"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" :style="dialogInfo.showInput1">
                    <v-text-field
                      :disabled="dialogInfo.input1disabled"
                      v-model="dialogInfo.input1"
                      :label="dialogInfo.label1"
                      :placeholder="placeholderCB"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" :style="dialogInfo.showInput2">
                    <v-text-field
                      :disabled="dialogInfo.input2disabled"
                      v-model="dialogInfo.input2"
                      :label="dialogInfo.label2"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" :style="dialogInfo.showCheckBox">
                    <v-checkbox v-model="checkbox" label="Resetear Convocatorias"></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
              <v-alert v-model="dialogInfo.showError" type="error">{{dialogInfo.errorText}}</v-alert>
              <v-alert v-model="dialogInfo.showSuccess" type="success">{{dialogInfo.successText}}</v-alert>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn
                color="blue darken-1"
                :disabled="dialogInfo.btnDisabled"
                text
                @click="dialogInfo.FBfunction"
              >{{dialogInfo.btnText}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-btn
        class="btnStyled light-green lighten-2 black--text"
        @click="updateScore"
      >Actualizar Resultado Jornada</v-btn>
      <v-btn
        class="btnStyled light-green lighten-2 black--text"
        @click="changeMatchHour"
      >Cambiar Hora Partido</v-btn>
      <v-btn
        class="btnStyled light-green lighten-2 black--text"
        @click="changeTrainingHour"
      >Cambiar Hora Entreno</v-btn>
      <v-btn
        class="btnStyled light-green lighten-2 black--text"
        @click="changeComment"
      >Cambiar Comentario</v-btn>
      <v-btn
        class="btnStyled light-green lighten-2 black--text"
        @click="resetConvocatoria"
      >Resetear Convocatoria</v-btn>
      <v-btn
        class="btnStyled light-green lighten-2 black--text"
        @click="resetEntrenamiento"
      >Resetear Entrenamiento</v-btn>
    </div>
    <div class="try">
      <v-alert v-model="showError" type="error">Acceso no autorizado. Inicie sesión</v-alert>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import info from "@/information";
import fb from "@/fb";

export default {
  methods: {
    updateScore: function () {
      this.showDialog = true;
      this.dialogInfo.title = "Actualizar Resultado Jornada";
      this.dialogInfo.input1disabled = true;
      this.dialogInfo.btnDisabled = true;
      this.dialogInfo.showSelector = true;
      this.dialogInfo.showCheckBox = "display:block";
      this.checkbox = true;
      this.placeholderCB = "Opciones: (No Jugado) <--> (X-X)";
      this.dialogInfo.label1 = "Resultado";
      this.dialogInfo.selectorTitle =
        "Escoger jornada. Actual --> " + this.$cookies.get("currentJ");
      this.dialogInfo.errorText = "Falta algún campo por rellenar";
      this.dialogInfo.successText = "Resultado actualizado con éxito";
      this.dialogInfo.btnText = "Actualizar";
      this.dialogInfo.showInput1 = "display:block";
      this.dialogInfo.showInput2 = "display:none";

      this.dialogInfo.selectorItems = [];

      for (let i = 0; i < 30; i++) {
        let j = i + 1;
        this.dialogInfo.selectorItems.push("Jornada " + j);
      }

      this.dialogInfo.FBfunction = () => {
        if (this.dialogInfo.input1 == "") {
          this.dialogInfo.showError = true;
        } else {
          let ar = this.selector.split(" ");
          let id = this.lookforID(ar[1]);

          fb.db.collection("Resultados").doc(id).update({
            jNum: ar[1],
            Result: this.dialogInfo.input1,
          });

          if (this.checkbox) {
            this.resetConvocatoria();
            this.resetEntrenamiento();
          }

          this.dialogInfo.showSuccess = true;

          setTimeout(this.close, 2000);
        }
      };
    },
    changeMatchHour: function () {
      this.showDialog = true;
      this.dialogInfo.title = "Actualizar Hora Partido";
      this.dialogInfo.btnDisabled = true;
      this.dialogInfo.errorText = "Falta seleccionar la hora del partido";
      this.dialogInfo.successText = "Hora actualizada con éxito";
      this.dialogInfo.btnText = "Actualizar";
      this.dialogInfo.showInput1 = "display:none";
      this.dialogInfo.showInput2 = "display:none";
      this.dialogInfo.timeLabel = "Seleccionar hora del partido";
      this.dialogInfo.showTime =
        "display:flex; flex-direction:row; align-items:center; justify-content:center";

      this.dialogInfo.FBfunction = () => {
        fb.db
          .collection("Home")
          .doc("K5VdQLI9s6TVYOKYswA0")
          .update({
            HoraPartido: this.timepicker + "h",
          });

        this.dialogInfo.showSuccess = true;

        setTimeout(this.close, 2000);
      };
    },
    changeTrainingHour: function () {
      this.showDialog = true;
      this.dialogInfo.title = "Actualizar Hora Entrenamiento";
      this.dialogInfo.btnDisabled = true;
      this.dialogInfo.errorText = "Falta seleccionar la hora del entrenamiento";
      this.dialogInfo.successText = "Hora actualizada con éxito";
      this.dialogInfo.btnText = "Actualizar";
      this.dialogInfo.showInput1 = "display:none";
      this.dialogInfo.showInput2 = "display:none";
      this.dialogInfo.timeLabel = "Seleccionar hora del entrenamiento";
      this.dialogInfo.showTime =
        "display:flex; flex-direction:row; align-items:center; justify-content:center";

      this.dialogInfo.FBfunction = () => {
        fb.db
          .collection("Home")
          .doc("K5VdQLI9s6TVYOKYswA0")
          .update({
            HoraEntreno: this.timepicker + "h",
          });

        this.dialogInfo.showSuccess = true;

        setTimeout(this.close, 2000);
      };
    },
    changeComment: function () {
      this.showDialog = true;
      this.dialogInfo.title = "Actualizar Comentario";
      this.dialogInfo.errorText = "Falta el texto";
      this.dialogInfo.successText = "Comentario actualizado con éxito";
      this.dialogInfo.btnText = "Actualizar";
      this.dialogInfo.label1 = "Nuevo comentario";
      this.dialogInfo.showInput1 = "display:block";
      this.dialogInfo.input1disabled = false;

      this.dialogInfo.FBfunction = () => {
        if (this.dialogInfo.input1 == "") {
          this.dialogInfo.showError = true;
        } else {
          fb.db.collection("Home").doc("K5VdQLI9s6TVYOKYswA0").update({
            Comentario: this.dialogInfo.input1,
          });

          this.dialogInfo.showSuccess = true;

          setTimeout(this.close, 2000);
        }
      };
    },
    resetConvocatoria: function () {
      fb.db.collection("Convocatoria").onSnapshot((res) => {
        const changes = res.docChanges();

        changes.forEach((change) => {
          if (change.type === "added") {
            let t = change.doc.data();

            if (t.Type == "1") {
              let p = {
                PlayerNum: t.PlayerNum,
                Status: 2,
              };

              fb.db.collection("Convocatoria").doc(change.doc.id).update(p);
            }
          }
        });
      });
    },
    resetEntrenamiento: function () {},
    close: function () {
      this.showDialog = false;
      this.dialogInfo.title = "";
      this.dialogInfo.input1disabled = true;
      this.dialogInfo.input2disabled = true;
      this.dialogInfo.input1 = "";
      this.dialogInfo.input2 = "";
      this.dialogInfo.label1 = "";
      this.dialogInfo.label2 = "";
      this.dialogInfo.showCheckBox = "display:none";
      this.checkbox = "";
      this.placeholderCB = "";
      this.dialogInfo.selectorTitle = "";
      this.dialogInfo.selectorItems = [];
      this.dialogInfo.timeLabel = "";
      this.dialogInfo.errorText = "";
      this.dialogInfo.successText = "";
      this.dialogInfo.showError = false;
      this.dialogInfo.showSuccess = false;
      this.dialogInfo.showSelector = "display:none";
      this.dialogInfo.showTime = "display:none";
      this.dialogInfo.showInput1 = "display:none";
      this.dialogInfo.showInput2 = "display:none";
      this.dialogInfo.btnText = "";
      this.dialogInfo.FBfunction = null;
      this.selector = "";
    },
    lookforID: function (jNum) {
      let i = 0;
      let size = this.itemsResultados.length;
      let found = false;

      while (i < size && !found) {
        if (this.itemsResultados[i].j == jNum) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        return this.itemsResultados[i].id;
      }
    },
  },
  data: function () {
    return {
      toShow: null,
      showError: null,
      showDialog: false,
      checkbox: "",
      selector: "",
      timepicker: "",
      placeholderCB: "",
      itemsResultados: [],
      dialogInfo: {
        title: "",
        input1disabled: true,
        input2disabled: true,
        input1: "",
        input2: "",
        label1: "",
        label2: "",
        selectorTitle: "",
        selectorItems: [],
        timeLabel: "",
        errorText: "",
        successText: "",
        showError: false,
        showSuccess: false,
        showSelector: "display:none",
        showTime: "display:none",
        showInput1: "display:none",
        showInput2: "display:none",
        btnText: "",
        showCheckBox: "display:none",
        FBfunction: null,
      },
    };
  },
  watch: {
    selector: function () {
      if (this.selector == "") {
        this.dialogInfo.input1disabled = true;
        this.dialogInfo.btnDisabled = true;
      } else {
        this.dialogInfo.input1disabled = false;
        this.dialogInfo.btnDisabled = false;
      }
    },
    timepicker: function () {
      if (this.timepicker == "") {
        this.dialogInfo.btnDisabled = true;
      } else {
        this.dialogInfo.btnDisabled = false;
      }
    },
  },
  created: function () {
    fb.db.collection("Resultados").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          let t = change.doc.data();

          let p = {
            id: change.doc.id,
            j: t.jNum,
            r: t.Result,
          };
          this.itemsResultados.push(p);
        }
      });
    });
  },
  mounted: function () {
    if (info.logInformation.logStatus) {
      this.toShow = true;
      this.showError = false;
    } else {
      this.toShow = false;
      this.showError = true;
    }
    this.toShow = true;
    this.showError = false;
  },
};
</script>
