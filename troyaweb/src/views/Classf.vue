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
                <th class="text-center"></th>
                <th class="text-center">{{ text3 }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in table1" :key="item.i">
                <td class="text-center">{{ item["Equipo 1"] }}</td>
                <td class="text-center">{{ item["2"] }}</td>
                <td class="text-center">{{ item["3"] }}</td>
                <td class="text-center">{{ item["Equipo 2"] }}</td>
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
export default {
  data: function () {
    return {
      text1: "",
      text2: "",
      text3: "",
      table1: [],
      table2: [],
      headers2: [
        {
          text: "POS",
          align: "start",
          sortable: false,
          value: "POS",
        },
        { text: "Equipo", value: "Equipos" },
        { text: "PTS", value: "PTS" },
        { text: "PJ", value: "PJ" },
        { text: "PG", value: "PG" },
        { text: "PE", value: "PE" },
        { text: "PP", value: "PP" },
        { text: "GF", value: "GF" },
        { text: "GC", value: "GC" },
        { text: "DIF", value: "DIFF" },
      ],
    };
  },
  methods: {
    restyleNames:function(){

      let dict = {
        "v.gladiador":"V. Gladiador",
        "FC.can buxeras":"Can Buxeres",
        "ud.andalucia":"UD. Andalucía",
        "vcs.troya":"V.C.S. Troya",
        "esc.ripollet":"Esc. Ripollet",
        "creueta 2":"La Creueta",
        'u.d.lourdes "b"':"UD. Lourdes B",
        "aev.suinguerlin":"V. Singuerlín",
        "v.lli�a d'avall":"V. Lliçà de Vall",
        "v. turo de la peira":"V. Turó - Peira",
        "vtcf damm":"C.F. Damm",
        "ud.lourdes a":"UD. Lourdes A",
        "gornal derbi":"Gornal Derbi",
        "vet.ubellvitge a":"U. Bellvitge",
        "v.alzamora":"V. Alzamora",
        "v.la celeste":"La Celeste"
      }

      for(let i = 0; i< this.table1.length; i++){
        this.table1[i]["Equipo 1"]=dict[this.table1[i]["Equipo 1"]];
        this.table1[i]["Equipo 2"]=dict[this.table1[i]["Equipo 2"]];
      }

      for(let j = 0; j< this.table2.length; j++){
        this.table2[j]["Equipos"]=dict[this.table2[j]["Equipos"]];
      }

    },
    getTables: function () {
      const request = require("request");
      const cheerio = require("cheerio");
      const HtmlTableToJson = require("html-table-to-json");

      request.get(
        "https://cors-anywhere.herokuapp.com/https://www.aec84.com/cdo.htm",
        (err, res, body) => {
          const $ = cheerio.load(body);

          this.table1 = HtmlTableToJson.parse(
            "<table>" + $("table").first().html() + "</table>"
          ).results[0];

          this.table2 = HtmlTableToJson.parse(
            "<table>" + $("table").last().html() + "</table>"
          ).results[0];

          this.restyleNames();
        }
      );
    },
    getTextInformation: function () {
      const cheerio = require("cheerio");
      const request = require("request");

      request(
        "https://cors-anywhere.herokuapp.com/https://www.aec84.com/cdo.htm",
        (error, response, body) => {
          let span1 = (
            cheerio("span", body)[2]["children"][0].data +
            cheerio("span", body)[3]["children"][0].data
          ).split(":");
          let span2 = cheerio("span", body)[3]["children"][2].data.split(":");
          let span3 = cheerio("span", body)[3]["children"][4].data.split(":");

          this.text1 = span1[1];
          this.text2 = span2[0] + "--> " + span2[1];
          this.text3 = span3[0] + "--> " + span3[1];
        }
      );
    },
  },
  created: function () {
    this.getTextInformation();
    this.getTables();
  },
};
</script>
