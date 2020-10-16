<template>
  <div class="classf">
    <div class="try">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Resultados - Última Jornada</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card class="resultsFrame">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">{{ text1 }}</th>
                <th class="text-center"></th>
                <th class="text-center">{{ text3 }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in table1" :key="item.i">
                <td class="text-center">{{ item["EquipoLocal"] }}</td>
                <td class="text-center">{{ item["Resultado"] }}</td>
                <td class="text-center">{{ item["EquipoVisitante"] }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>

      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Clasificación</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card class="resultsFrame">
        <v-data-table
          hide-default-footer
          mobile-breakpoint="0"
          :headers="headers2"
          :items="table2"
          class="elevation-1"
          :footer-props="{ 'items-per-page-options': [-1] }"
        ></v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
import fb from "@/fb";

export default {
  data: function () {
    return {
      text1: "Domingos 2",
      text2: " --> ",
      text3: "",
      done1: false,
      done2: false,
      table1: [],
      table2: [],
      headers2: [
        {
          text: "POS",
          align: "start",
          sortable: false,
          value: "Pos",
        },
        { text: "Equipo", value: "Equipo" },
        { text: "PTS", value: "Puntos" },
        { text: "PJ", value: "J" },
        { text: "PG", value: "G" },
        { text: "PE", value: "E" },
        { text: "PP", value: "P" },
        { text: "GF", value: "GF" },
        { text: "GC", value: "GC" },
        { text: "DIF", value: "DIFF" },
      ],
    };
  },
  methods: {
    restyleNames: function (id) {
      let dict = {
        "v.gladiador": "V. Gladiador",
        "can buxeras": "Can Buxeres",
        "ud.andalucia": "UD. Andalucía",
        "vcs.troya": "V.C.S. Troya",
        "esc.ripollet": "Esc. Ripollet",
        "la creueta": "La Creueta",
        "ud.lourdes b": "UD. Lourdes B",
        "V.singuerlin": "V. Singuerlín",
        "sabadell nord": "Sabadell Nord",
        "v.turo de la peira": "V. Turó - Peira",
        "v.polinya b": "V. Polinyà B",
        "ud.lourdes a": "UD. Lourdes A",
        "gornal-derbi": "Gornal Derbi",
        "v.mirasol": "V. Mirasol",
        "sacachispas": "Sacachispas",
        "V.GLADIADOR": "V. Gladiador",
        "CAN BUXERAS": "Can Buxeres",
        "UD.ANDALUCIA": "UD. Andalucía",
        "VCS.TROYA": "V.C.S. Troya",
        "ESC.RIPOLLET": "Esc. Ripollet",
        "LA CREUETA": "La Creueta",
        "UD.LOURDES B": "UD. Lourdes B",
        "V.SINGUERLIN": "V. Singuerlín",
        "SABADELL NORD": "Sabadell Nord",
        "V.TURO DE LA PEIRA": "V. Turó - Peira",
        "V.POLINYA B": "V. Polinyà B",
        "UD.LOURDES A": "UD. Lourdes A",
        "GORNAL-DERBI": "Gornal Derbi",
        "V.MIRASOL": "V. Mirasol",
        "SACACHISPAS": "Sacachispas",
        "DESCANSA": "DESCANSA",
      };

      if (id == 1 && !this.done1) {
        this.done1=true;
        for (let i = 0; i < this.table1.length; i++) {
          this.table1[i]["EquipoLocal"] = dict[this.table1[i]["EquipoLocal"]];
          this.table1[i]["EquipoVisitante"] =
            dict[this.table1[i]["EquipoVisitante"]];
        }
      } else if (id == 2 && !this.done2) {
        this.done2=true;
        for (let j = 0; j < this.table2.length; j++) {
          this.table2[j]["Equipo"] = dict[this.table2[j]["Equipo"]];
        }
      }
    },
    getTablesandInformation: function () {
      fb.db.collection("Clasf").onSnapshot((res) => {
        const changes = res.docChanges();

        changes.forEach((change) => {
          if (change.type === "added") {
            let t = change.doc.data();
            this.table2.push(t);
          }
        });

        this.restyleNames(2);

        this.table2.sort(function (a, b) {
          return a.Pos - b.Pos;
        });

      });

      fb.db.collection("LastWeek").onSnapshot((res) => {
        const changes = res.docChanges();

        changes.forEach((change) => {
          if (change.type === "added") {
            let t = change.doc.data();
            this.table1.push(t);
          }
        });

        this.restyleNames(1);
      });

      fb.db.collection("Jornada").onSnapshot((res) => {
        const changes = res.docChanges();

        changes.forEach((change) => {
          if (change.type === "added") {
            let t = change.doc.data();
            this.text3 = t.j;
          }
        });
      });
    },
  },
  created: function () {
    this.getTablesandInformation();
  },
};
</script>
