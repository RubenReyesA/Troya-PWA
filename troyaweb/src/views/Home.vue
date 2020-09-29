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
          <p>{{ localTeam.name }}</p>
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
          <p>{{ visitanteTeam.name }}</p>
        </div>
      </div>

      <v-alert type="info" id="homeComment">{{ comment }}</v-alert>

      <v-btn color="blue-grey" class="ma-2 white--text" @click="driveTo">
        <v-icon left>mdi-map-marker</v-icon>Conducir al campo
      </v-btn>
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
      hour: null,
      showVS: false,
      showResult: true,
      date: null,
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
    driveTo: function(){
      window.open("tomtomgo://x-callback-url/navigate?destination=41.5147329684223,2.1132101325321173")
    },
  },
};
</script>
