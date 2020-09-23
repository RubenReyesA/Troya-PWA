<template>
  <nav>
    <v-app-bar app class="light-green lighten-3 black--text">
      <v-app-bar-nav-icon @click="drawer =!drawer" class="black--text"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-icon style="padding:10px" class="black--text">mdi-soccer</v-icon>

      <v-toolbar-title>
        <h3 class="font-weight-regular text-decoration-underline">V.C.S. TROYA</h3>
      </v-toolbar-title>

      <v-icon style="padding:10px" class="black--text">mdi-soccer</v-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="refresh">mdi-refresh</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item class="nav">
          <v-img src="@/assets/Teams/team1.png" max-width="120px"></v-img>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">V.C.S. TROYA</v-list-item-title>
            <v-list-item-subtitle>Temporada 2020-2021</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item,i) in activeItems" v-bind:key="i" route :to="item.route">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import info from "@/information";

export default {
  computed: {
    activeItems: function () {
      return this.navigationList.filter(function (u) {
        return u.active;
      });
    },
  },
  methods: {
    refresh: function () {
      console.log("32");
      this.$emit("refresh");
    },
  },
  watch: {
    drawer: function () {
      if (info.logInformation.logStatus) {
        this.navigationList[8].active = true;
        this.navigationList[9].title = "Cerrar Sesión";
      } else {
        this.navigationList[8].active = false;
        this.navigationList[9].title = "Iniciar Sesión";
      }
    },
  },
  data: function () {
    return {
      gpsStyle: "display:flex",
      drawer: false,
      navigationList: [
        {
          icon: "mdi-home",
          title: "Inicio",
          route: "/",
          active: true,
        },
        {
          icon: "mdi-poll-box",
          title: "Estadísticas",
          route: "/stats",
          active: true,
        },
        {
          icon: "mdi-format-list-numbered",
          title: "Resultados - Clasificación",
          route: "/classf",
          active: true,
        },
        {
          icon: "mdi-calendar",
          title: "Calendario",
          route: "/calendar",
          active: true,
        },
        {
          icon: "mdi-crosshairs-gps",
          title: "Ubicación - GPS",
          route: "/gps",
          active: true,
        },
        {
          icon: "mdi-run",
          title: "Convocatorias",
          route: "/convocatorias",
          active: true,
        },

        {
          icon: "mdi-account-group",
          title: "Plantilla",
          route: "/plantillateam",
          active: true,
        },
        {
          icon: "mdi-database-settings",
          title: "Gestión del Club",
          route: "/management",
          active: true,
        },
        {
          icon: "mdi-cog-outline",
          title: "Ajustes",
          route: "/settings",
          active: true,
        },
        {
          icon: "mdi-account-key",
          title: "Iniciar Sesión",
          route: "/login",
          active: true,
        },
      ],
    };
  },
};
</script>