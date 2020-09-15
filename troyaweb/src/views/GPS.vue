<template>
  <div class="gps">
    <div class="try">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Campos de Fútbol (GPS)</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card id="gpsframe">
        <v-select v-model="value" label="Campos de Fútbol" :items="gpsListNames" style="width:70%"></v-select>

        <div id="map" ref="map">
          <iframe
            :src="iframe"
            v-if="selected"
            id="frameGO"
            frameborder="0"
            style="border:0;"
            allowfullscreen="false"
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <v-img :src="imageMapsLogo" id="frameGO" v-if="!selected"></v-img>
        </div>

        <v-alert type="info" id="infoGO">{{comment}}</v-alert>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import info from "@/information";

export default {
  data: function() {
    return {
      value: "",
      selected: false,
      gpsList: [],
      gpsListNames: [],
      imageMapsLogo: require("@/assets/Extras/maps.png"),
      iframe: null,
      comment: "Para abrir Google Maps haz click en 'Ampliar el mapa'"
    };
  },
  watch: {
    value: function() {
      let index = this.lookforIndex();
      this.iframe = this.gpsList[index].maps;
      this.selected = true;
    }
  },
  created: function() {
    this.gpsList = info.teams;
    this.generateListNames();
  },
  methods: {
    generateListNames: function() {
      for (let i = 0; i < this.gpsList.length; i++) {
        this.gpsListNames.push(this.gpsList[i].name);
      }
    },
    lookforIndex: function() {
      let i = 0;
      let found = 0;
      let size = this.gpsListNames.length;

      while (i < size && !found) {
        if (this.gpsListNames[i] == this.value) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        return i;
      } else {
        return 0;
      }
    }
  }
};
</script>
