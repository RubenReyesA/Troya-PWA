<template>
  <div class="accounts">
    <div class="try">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Gestión del Club</v-toolbar-title>

        <v-spacer></v-spacer>

        <div :style="p1">
          <v-btn icon @click="changeModeto(1)" class="black--text" :disabled="!status1">
            <v-icon>mdi-plus-thick</v-icon>
          </v-btn>
          <v-btn icon @click="changeModeto(2)" class="black--text" :disabled="!status1">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="changeModeto(3)" class="black--text" :disabled="!status1">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>

        <div :style="p2">
          <v-btn icon @click="enableEditing" class="black--text" :disabled="!status2">
            <v-icon>{{btnMdi}}</v-icon>
          </v-btn>
          <v-btn icon @click="enableSharing" class="black--text" :disabled="!status3">
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </div>
      </v-toolbar>

      <v-card class="toolbarPage black--text">
        <v-tabs background-color="teal lighten-4" v-model="tabs" centered icons-and-text>
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab1">
            Cuentas
            <v-icon>mdi-cash-multiple</v-icon>
          </v-tab>

          <v-tab href="#tab2">
            Asistencia
            <v-icon>mdi-account-multiple-check</v-icon>
          </v-tab>
        </v-tabs>
      </v-card>

      <v-tabs-items v-model="tabs">
        <v-tab-item value="tab1">
          <Cuentas :mode="m1" v-on:finish="m1=0;"></Cuentas>
        </v-tab-item>
        <v-tab-item value="tab2">
          <Asistencia :mode="m2" :share="s2" v-on:endSharing="s2=0;"></Asistencia>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import info from "@/information";
import Cuentas from "@/components/Cuentas";
import Asistencia from "@/components/Asistencia";

export default {
  components: {
    Cuentas,
    Asistencia
  },
  mounted: function(){
    if(info.logInformation.logStatus && 
    (info.logInformation.logNum == 2 || info.logInformation.logNum == 3)){
      this.status1 = true;
      this.status2 = true;
      this.status3 = true;
    }
    else{
      this.status1 = false;
      this.status2 = false;
      this.status3 = true;
    }
  },
  data: function() {
    return {
      m1: 0,
      m2: 0,
      s2:0,
      p1: "display:none",
      p2: "display:none",
      status1: false,
      status2: false,
      status3: false,
      tabs: null,
      btnMdi: "mdi-pencil"
    };
  },
  watch: {
    tabs: function() {
      if (this.tabs == "tab1") {
        this.p1 = "display:block";
        this.p2 = "display:none";
      } else {
        this.p1 = "display:none";
        this.p2 = "display:block";
      }
    }
  },
  methods: {
    changeModeto: function(t) {
      this.m1 = t;
    },
    enableEditing: function() {
      if (this.m2 == 0) {
        this.m2 = 1;
        this.btnMdi = "mdi-pencil-off";
        this.status3 = false;
      } else {
        this.m2 = 0;
        this.btnMdi = "mdi-pencil";
        this.status3= true;
      }
    },
    enableSharing: function(){
      this.s2 = 1;
    }
  },
  created: function() {
    if (
      (info.logInformation.logStatus == true &&
        info.logInformation.logNum == 2) ||
      info.logInformation.logNum == 3
    ) {
      this.status = true;
    } else {
      this.status = true;
    }
  }
};
</script>
