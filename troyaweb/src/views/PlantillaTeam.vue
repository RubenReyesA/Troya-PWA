<template>
  <div class="home">
    <div class="try">
      <v-toolbar class="toolbarPage teal lighten-4 black--text">
        <v-spacer></v-spacer>

        <v-toolbar-title>Plantilla 2019-2020</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <PhotoCard
        v-for="player in squad"
        :key="player.num"
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
    PhotoCard
  },
  data: function() {
    return {
      squad: []
    };
  },
  created: function() {
    for (let i = 1; i < info.playersList.length; i++) {
      let p = {
        num: info.playersList[i].playerNumber,
        name: info.playersList[i].playerName,
        descrp: info.playersList[i].playerDescription
      };

      this.squad.push(p);
    }
  }
};
</script>
