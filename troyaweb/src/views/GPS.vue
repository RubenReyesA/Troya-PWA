<template>
  <div class="gps">
    <div class="try">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Campos de Fútbol (GPS)</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card id="gpsframe">
        <v-select
          v-model="value"
          label="Campos de Fútbol"
          :items="gpsListNames"
          style="width: 70vw"
        ></v-select>

        <div class="try">
          <div class="gpsData">
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

        <v-alert type="info" id="infoGO">{{ comment }}</v-alert>

        <div id="btnLayout">
          <v-btn
            class="btnMaps"
            color="secondary"
            large
            :disabled="!selected"
            @click="driveTo(1)"
            >Google Maps</v-btn
          >
          <v-btn
            class="btnMaps"
            color="secondary"
            large
            :disabled="!selected"
            @click="driveTo(2)"
            >Apple Maps (iOS)</v-btn
          >
          <v-btn
            class="btnMaps"
            color="secondary"
            large
            :disabled="!selected"
            @click="driveTo(3)"
            >Waze</v-btn
          >
          <v-btn
            class="btnMaps"
            color="secondary"
            large
            :disabled="!selected"
            @click="driveTo(4)"
            >Otros (Android)</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import info from "@/information";

export default {
  data: function () {
    return {
      value: "",
      selected: false,
      gpsList: [],
      gpsListNames: [],
      comment: "Selecciona el navegador GPS preferido",
      selectedName: "",
      selectedLocation: "",
      selectedCoords: "",
      selectedPlaceID: "",
      shirt: "",
      pants: "",
    };
  },
  watch: {
    value: function () {
      let index = this.lookforIndex();
      this.selectedName = this.gpsList[index].stadium["name"];
      this.selectedLocation = this.gpsList[index].stadium["location"];

      this.selectedCoords =
        this.gpsList[index].stadium["lat"] +
        " , " +
        this.gpsList[index].stadium["lon"];

      this.selectedPlaceID = this.gpsList[index].stadium["place_id"];

      this.shirt = require("../assets/Clothes/s" + (index+1) + ".png");
      this.pants = require("../assets/Clothes/p" + (index+1) + ".png");

      this.selected = true;
    },
  },
  created: function () {
    this.gpsList = info.teams;
    this.generateListNames();
  },
  methods: {
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
    generateListNames: function () {
      for (let i = 0; i < this.gpsList.length; i++) {
        this.gpsListNames.push(this.gpsList[i].name);
      }
    },
    lookforIndex: function () {
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
    },
  },
};
</script>
