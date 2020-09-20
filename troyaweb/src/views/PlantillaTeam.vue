<template>
  <div class="home">
    <div class="try">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Plantilla</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <div class="cardPlayer">
        <div>
          <v-img contain class="seasonPhoto" :src="modalImg"></v-img>
        </div>
        <div class="cardPlayerText">
          <h3>Temporada 2020-2021</h3>
        </div>
      </div>

      <v-spacer></v-spacer>

            <v-toolbar class="toolbarsubPage blue lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Jugadores</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <PhotoCard
        v-for="player in squad"
        :key="player.id"
        :number="player.num"
        :name="player.name"
        :description="player.descrp"
      ></PhotoCard>

      <v-toolbar class="toolbarsubPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Cuerpo Técnico</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <PhotoCard
        v-for="player in directiva"
        :key="player.id"
        :number="player.num"
        :name="player.name"
        :description="player.descrp"
      ></PhotoCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import info from "@/information";
import PhotoCard from "@/components/PhotoCard";

export default {
  components: {
    PhotoCard,
  },
  data: function () {
    return {
      squad: [],
      directiva: [],
      modalImg: require("@/assets/Players/temporada.png"),
    };
  },
  created: function () {
    for (let i = 1; i < info.playersList.length; i++) {
      let p = {
        id: i,
        num: info.playersList[i].playerNumber,
        name: info.playersList[i].playerName,
        descrp: info.playersList[i].playerDescription,
      };

      this.squad.push(p);
    }

    this.directiva.push({
      id: 96,
      num: "Coach",
      name: "Rodri",
      descrp: "",
    });

    this.directiva.push({
      id: 97,
      num: "Trainer",
      name: "Misas",
      descrp: "",
    });

    this.directiva.push({
      id: 98,
      num: "Coach2",
      name: "Antonio",
      descrp: "",
    });

    this.directiva.push({
      id: 99,
      num: "Tech",
      name: "Rubén",
      descrp: "",
    });
  },
};
</script>
