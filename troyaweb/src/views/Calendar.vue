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

        <v-toolbar-title>Jornada {{ jNum }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="moveJornada(1)" class="black--text">
          <v-icon>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card id="imgJornada">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">{{ v1 }}</th>
                <th class="text-center"></th>
                <th class="text-center">{{ v2 }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in jToShow" :key="item.i">
                <td class="text-center">{{ item[0] }}</td>
                <td class="text-center">.vs.</td>
                <td class="text-center">{{ item[1] }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>

      <v-card id="resultJornada">
        <h4>Resultado:</h4>
        <h2>{{ currentResult }}</h2>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import info from "@/information";
import fb from "@/fb";

export default {
  created: function () {
    this.init();

    fb.db.collection("Resultados").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.resultsList.push({
            ...change.doc.data(),
          });
        }
      });

      this.setResult();
    });
  },
  data: function () {
    return {
      jNum: 0,
      img: null,
      resultsList: [],
      currentResult: "",
      arrayJ: [],
      jToShow: [],
      v1: "",
      v2: "",
    };
  },
  methods: {
    moveJornada: function (direction) {
      if (direction == 0) {
        if (this.jNum > 1) {
          this.jNum--;

          this.jToShow = [];
          this.v1 = "";
          this.v2 = "";

          let count = -1;

          for (let i = 0; i < this.arrayJ[this.jNum - 1].length; i++) {
            if (i % 2 == 0) {
              count++;
              this.jToShow.push([]);
            }

            this.jToShow[count].push(this.arrayJ[this.jNum - 1][i]);
          }

          this.v1 = this.jToShow[0][0];
          this.v2 = this.jToShow[0][1];

          this.jToShow.shift();

          this.setResult();
        }
      } else if (direction == 1) {
        if (this.jNum < 30) {
          this.jNum++;

          this.jToShow = [];
          this.v1 = "";
          this.v2 = "";

          let count = -1;

          for (let i = 0; i < this.arrayJ[this.jNum - 1].length; i++) {
            if (i % 2 == 0) {
              count++;
              this.jToShow.push([]);
            }

            this.jToShow[count].push(this.arrayJ[this.jNum - 1][i]);
          }

          this.v1 = this.jToShow[0][0];
          this.v2 = this.jToShow[0][1];

          this.jToShow.shift();

          this.setResult();
        }
      }
    },
    setResult: function () {
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
    init: function () {
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
        this.jNum = 15;
      } else {
        this.jNum = info.matches[matchIndex].j;
      }

      let t = JSON.parse(info.jornadasText);

      let count = -1;

      for (let i = 0; i < t.length; i++) {
        if (i % 18 == 0) {
          count++;
          this.arrayJ.push([]);
        }

        this.arrayJ[count].push(t[i]);
      }

      count = -1;

      for (let i = 0; i < this.arrayJ[this.jNum - 1].length; i++) {
        if (i % 2 == 0) {
          count++;
          this.jToShow.push([]);
        }

        this.jToShow[count].push(this.arrayJ[this.jNum - 1][i]);
      }

      this.v1 = this.jToShow[0][0];
      this.v2 = this.jToShow[0][1];

      this.jToShow.shift();
    },
    splitDate: function (fecha) {
      let array = fecha.split("/");

      array[0] = Number(array[0]);
      array[1] = Number(array[1]);
      array[2] = Number(array[2]);

      return array.reverse();
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
  },
};
</script>
