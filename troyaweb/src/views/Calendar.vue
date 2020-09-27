<template>
  <div class="home">

    <div class="try">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Calendario</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-toolbar class="toolbarJornada indigo lighten-4 black--text">
        <v-btn icon @click="moveJornada(0)" class="black--text">
          <v-icon>mdi-arrow-left-bold</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-toolbar-title>Jornada {{jNum}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="moveJornada(1)" class="black--text">
          <v-icon>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card id="imgJornada">
        <v-img :src="img" style="margin:10px"></v-img>
      </v-card>

      <v-card id="resultJornada">
        <h4>Resultado:</h4>
        <h2>{{currentResult}}</h2>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import info from "@/information";
import fb from "@/fb";

export default {
  created: function() {
    this.init();

    fb.db.collection("Resultados").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.resultsList.push({
            ...change.doc.data()
          });
        }
      });

      this.setResult();
    });
  },
  data: function() {
    return {
      jNum: 0,
      img: null,
      resultsList: [],
      currentResult: ""
    };
  },
  methods: {
    moveJornada: function(direction) {
      if (direction == 0) {
        if (this.jNum > 1) {
          this.jNum--;
          this.img = require("@/assets/Jornadas/j" + this.jNum + ".png");
          this.setResult();
        }
      } else if (direction == 1) {
        if (this.jNum < 30) {
          this.jNum++;
          this.img = require("@/assets/Jornadas/j" + this.jNum + ".png");
          this.setResult();
        }
      }
    },
    setResult: function() {
      let i = 0;
      let found = false;
      let size = this.resultsList.length;

      while (i < size && !found) {
        if (this.jNum == this.resultsList[i].jNum) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        this.currentResult = this.resultsList[i].Result;
      }
    },
    init: function() {
      Date.prototype.getWeek = function() {
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
        this.jNum = 15;
      } else {
        this.jNum = info.matches[matchIndex].j;
      }
      this.img = require("@/assets/Jornadas/j" + this.jNum + ".png");
    },
    splitDate: function(fecha) {
      let array = fecha.split("/");

      array[0] = Number(array[0]);
      array[1] = Number(array[1]);
      array[2] = Number(array[2]);

      return array.reverse();
    },
    lookForMatch: function(week) {
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
    }
  }
};
</script>
