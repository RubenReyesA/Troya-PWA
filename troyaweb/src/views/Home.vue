<template>
  <div class="home">
    <div class="try">
      <div id="titleProxPartido">
        <h3 class="black--text">{{ text }}</h3>
      </div>
      <div id="FechaHoraPartido">
        <h2>{{ date }}</h2>
        <h2>{{ hour }}</h2>
      </div>
      <div id="MatchLayout">
        <div id="localTeam" class="teamcontainer">
          <v-img
            :src="localTeam.img"
            width="80px"
            class="hidden-md-and-up"
          ></v-img>
          <v-img
            :src="localTeam.img"
            width="150px"
            class="hidden-sm-and-down"
          ></v-img>
          <p class="textHome">{{ localTeam.name }}</p>
        </div>

        <div v-if="showVS" class="resultcontainer">
          <v-img
            src="../assets/Extras/Marcadores/nvs.png"
            width="50px"
            style="margin: 5px"
            class="hidden-md-and-up"
          ></v-img>

          <v-img
            src="../assets/Extras/Marcadores/nvs.png"
            width="75px"
            style="margin: 5px"
            class="hidden-sm-and-down"
          ></v-img>
        </div>

        <div v-if="showResult" id="resultScore" class="resultcontainer">
          <v-img
            :src="localTeam.score"
            width="50px"
            style="margin: 5px"
            class="hidden-md-and-up"
          ></v-img>

          <v-img
            :src="localTeam.score"
            width="75px"
            style="margin: 5px"
            class="hidden-sm-and-down"
          ></v-img>

          <p style="font-size: 75px" class="spacer">-</p>

          <v-img
            :src="visitanteTeam.score"
            width="50px"
            style="margin: 5px"
            class="hidden-md-and-up"
          ></v-img>

          <v-img
            :src="visitanteTeam.score"
            width="75px"
            style="margin: 5px"
            class="hidden-sm-and-down"
          ></v-img>
        </div>

        <div id="visitanteTeam" class="teamcontainer">
          <v-img
            :src="visitanteTeam.img"
            width="80px"
            class="hidden-md-and-up"
          ></v-img>
          <v-img
            :src="visitanteTeam.img"
            width="150px"
            class="hidden-sm-and-down"
          ></v-img>
          <p class="textHome">{{ visitanteTeam.name }}</p>
        </div>
      </div>

      <v-alert type="info" id="homeComment">{{ comment }}</v-alert>

      <v-row justify="center">
        <v-dialog v-model="GPSDialog" persistent max-width="85vw">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="blue-grey"
              dark
              class="ma-2 white--text"
              @click="loadGPS"
            >
              <v-icon left>mdi-map-marker</v-icon>Conducir al campo
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline"> Conducir al campo </v-card-title>

            <div class="try">
              <div class="gpsData" style="width:80vw">
                <p style="margin-right: 10px; text-decoration: underline">
                  Nombre:
                </p>
                <p>{{ selectedName }}</p>
                <p style="margin-right: 10px; text-decoration: underline">
                  Dirección:
                </p>
                <p>{{ selectedLocation }}</p>
                <p style="margin-right: 10px; text-decoration: underline">
                  Coordenadas:
                </p>
                <p>{{ selectedCoords }}</p>
              </div>
              <div class="clothesData">
                <div class="clothesImages">
                  <v-img class="cPict" :src="shirt"> </v-img>
                  <p style="color: white">kkkkkk</p>
                  <v-img class="cPict" :src="pants"> </v-img>
                </div>
                <p id="text">Vestimenta</p>
              </div>
            </div>

        
            <div class="clothesData2">
            <v-alert type="info">{{
              GPScomment
            }}</v-alert>
            </div>

            <div class="clothesData2">
            <v-btn
                class="btnMaps"
                color="secondary"
                large
                @click="driveTo(1)"
                >Google Maps</v-btn
              >
              <v-btn
                class="btnMaps"
                color="secondary"
                large
                @click="driveTo(2)"
                >Apple Maps (iOS)</v-btn
              >
              <v-btn
                class="btnMaps"
                color="secondary"
                large
                @click="driveTo(3)"
                >Waze</v-btn
              >
              <v-btn
                class="btnMaps"
                color="secondary"
                large
                @click="driveTo(4)"
                >Otros (Android)</v-btn
              >
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="GPSDialog = false">
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import fb from "@/fb";
import info from "@/information";

export default {
  data: function () {
    return {
      noMatch: false,
      text: null,
      comment: null,
      GPScomment: "Selecciona el navegador GPS preferido",
      hour: null,
      showVS: false,
      showResult: true,
      date: null,
      GPSDialog: false,
      stadium:null,
      localTeam: {
        name: null,
        img: "null",
        score: "null",
      },
      visitanteTeam: {
        name: null,
        img: "null",
        score: "null",
      },
      selectedName: "",
      selectedLocation: "",
      selectedCoords: "",
      selectedPlaceID: "",
      shirt: "",
      pants: "",
    };
  },
  created: function () {
    fb.db.collection("Home").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          let t = change.doc.data();
          this.comment = t.Comentario;

          if (this.noMatch) {
            this.hour = "puedes buscarlo en el calendario.";
          } else {
            this.hour = t.HoraPartido;
          }
          info.currentInfo.currentHour = this.hour;
          this.$cookies.set("currentHour", this.hour);
          this.$cookies.set("currentEHour", t.HoraEntreno);
        }
      });
    });

    Date.prototype.getWeek = function () {
      let dt = this;
      var tdt = new Date(dt.valueOf());
      var dayn = (dt.getDay() + 6) % 7;
      tdt.setDate(tdt.getDate() - dayn + 3);
      var firstThursday = tdt.valueOf();
      tdt.setMonth(0, 1);
      if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay() + 7) % 7));
      }
      return 1 + Math.ceil((firstThursday - tdt) / 604800000);
    };

    let today = new Date();

    let todayWeek = today.getWeek();

    let matchIndex = this.lookForMatch(todayWeek);

    if (matchIndex == -1) {
      this.noMatch = true;
      this.text = "Esta semana no hay partido";
      this.date = "Para ver el próximo partido,";
      info.currentInfo.currentDay = this.date;
      this.$cookies.set("currentDay", this.date);

      info.currentInfo.currentMatch = "No disponible";

      this.$cookies.set("currentMatch", info.currentInfo.currentMatch);
    } else {
      this.noMatch = false;

      info.currentInfo.currentJ = info.matches[matchIndex].j;
      this.$cookies.set("currentJ", info.matches[matchIndex].j);

      this.date = info.matches[matchIndex].day;
      info.currentInfo.currentDay = this.date;
      this.$cookies.set("currentDay", this.date);
      this.$cookies.set("currentEDay", info.matches[matchIndex].eday);

      this.localTeam.name = info.matches[matchIndex].localTeam.name;
      this.localTeam.img = require("@/assets/Teams/" +
        info.matches[matchIndex].localTeam.logo);
      this.stadium = info.matches[matchIndex].localTeam.stadium;

      this.visitanteTeam.name = info.matches[matchIndex].visitanteTeam.name;
      this.visitanteTeam.img = require("@/assets/Teams/" +
        info.matches[matchIndex].visitanteTeam.logo);

      info.currentInfo.currentMatch =
        this.localTeam.name + " --.vs.-- " + this.visitanteTeam.name;

      this.$cookies.set(
        "currentMatch",
        this.localTeam.name + " --.vs.-- " + this.visitanteTeam.name
      );

      this.getResult(info.matches[matchIndex].j);
    }
  },
  methods: {
    getScore: function (j) {
      return j.split("-");
    },
    splitDate: function (fecha) {
      let array = fecha.split("/");

      array[0] = Number(array[0]);
      array[1] = Number(array[1]);
      array[2] = Number(array[2]);

      return array.reverse();
    },
    getResult: function (j) {
      fb.db.collection("Resultados").onSnapshot((res) => {
        const changes = res.docChanges();

        changes.forEach((change) => {
          if (change.type === "added") {
            let t = change.doc.data();
            if (t.jNum == j) {
              if (t.Result == "No Jugado") {
                this.showVS = true;
                this.showResult = false;
                this.text = "Próximo partido:";
              } else {
                this.showVS = false;
                this.showResult = true;
                this.text = "Resultado del partido:";

                let score = this.getScore(t.Result);

                this.localTeam.score = require("@/assets/Extras/Marcadores/n" +
                  score[0] +
                  ".png");
                this.visitanteTeam.score = require("@/assets/Extras/Marcadores/n" +
                  score[1] +
                  ".png");
              }
            }
          }
        });
      });
    },
    lookForMatch: function (week) {
      let found = false;
      let i = 0;
      let size = info.matches.length;

      while (i < size && !found) {
        let array = this.splitDate(info.matches[i].date);
        let testDate = new Date(array[0], array[1] - 1, array[2]);
        let matchWeek = testDate.getWeek();

        if (matchWeek == week) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        return i;
      } else {
        return -1;
      }
    },
    driveTo: function (id) {
      let s = "";
      switch (id) {
        case 1:
          //s = "comgooglemaps://?q=" + this.selectedCoords;
          s =
            "https://www.google.com/maps/search/?api=1&query=" +
            this.selectedCoords +
            "&query_place_id=" +
            this.selectedPlaceID;

          window.open(s);

          break;
        case 2:
          s =
            "http://maps.apple.com/?q=" +
            this.selectedName +
            "&ll=" +
            this.selectedCoords;

          window.open(s);

          break;
        case 3:
          s = "waze://?ll=" + this.selectedCoords;

          window.open(s);

          break;
        case 4:
          s = "geo:" + this.selectedCoords;

          window.open(s);

          break;
        default:
          break;
      }
    },
    loadGPS: function () {

      this.selectedName = this.stadium["name"];
      this.selectedLocation = this.stadium["location"];

      this.selectedCoords =
        this.stadium["lat"] +
        " , " +
        this.stadium["lon"];

      this.selectedPlaceID = this.stadium["place_id"];

      this.shirt = require("../assets/Clothes/s" + (this.stadium["code"]) + ".png");
      this.pants = require("../assets/Clothes/p" + (this.stadium["code"]) + ".png");

      this.GPSDialog = true;


    },
  },
};
</script>
