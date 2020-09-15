<template>
  <v-app class="grey lighten-4"> <!-- Root -->
  <Navbar> </Navbar>
    <v-main> <!-- All content should be inside this -->
      <router-view> </router-view>
    </v-main>

  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar"


export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: function(){
    return{
    }
  },
    
};
</script>

<style>
  @import 'styles/style.css';
</style>
