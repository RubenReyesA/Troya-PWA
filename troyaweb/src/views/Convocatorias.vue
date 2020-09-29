<template>
  <div class="convocatoria">
    <div class="try">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Convocatorias</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card class="toolbarPage black--text">
        <v-tabs
          background-color="teal lighten-4"
          v-model="tabs"
          centered
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab1">
            Partido
            <v-icon>mdi-account-group</v-icon>
          </v-tab>

          <v-tab href="#tab2">
            Entrenamiento
            <v-icon>mdi-run-fast</v-icon>
          </v-tab>
        </v-tabs>
      </v-card>

      <v-tabs-items v-model="tabs">
        <v-tab-item value="tab1">
          <Meeting
            :title="pTitle"
            :day="pDay"
            :hour="pHour"
            :match="pMatch"
            :title2="pTitle2"
            :subtitle2="pSubtitle2"
            :name="pName"
          ></Meeting>
        </v-tab-item>
        <v-tab-item value="tab2">
          <Meeting
            :title="eTitle"
            :day="eDay"
            :hour="eHour"
            :match="eMatch"
            :title2="eTitle2"
            :subtitle2="eSubtitle2"
            :name="eName"
          ></Meeting>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import Meeting from "@/components/Meeting";
export default {
  components: {
    Meeting,
  },
  data: function () {
    return {
      tabs: null,
      pTitle: null,
      pDay: null,
      pHour: null,
      pMatch: null,
      pTitle2: null,
      pSubtitle2: null,
      pName: null,
      eTitle: null,
      eDay: null,
      eHour: null,
      eMatch: null,
      eTitle2: null,
      eSubtitle2: null,
      eName: null,
    };
  },
  mounted: function () {
    this.pTitle = "Datos de la Convocatoria";
    this.pDay = this.$cookies.get("currentDay");
    this.pHour = this.$cookies.get("currentHour");
    this.pMatch = this.$cookies.get("currentMatch");
    this.pTitle2 = "Marca tu asistencia al partido";
    this.pSubtitle2 = "¿Vas a asistir al partido?";
    this.pName = "Convocatoria";

    this.eTitle = "Datos del Entrenamiento";
    this.eDay = this.$cookies.get("currentEDay");
    this.eHour = this.$cookies.get("currentEHour");
    if (this.$cookies.get("currentMatch") == "No disponible") {
      this.eMatch = "Sin partido";
    } else {
      this.eMatch = this.$cookies.get("currentMatch");
    }
    this.eTitle2 = "Marca tu asistencia al entrenamiento";
    this.eSubtitle2 = "¿Vas a asistir al entrenamiento?";
    this.eName = "Entrenamiento";
  },
};
</script>

    
