<template>
  <div class="cardPlayer">
    <PhotoModal :srcImg="modalImg" :style="modalStyle" v-on:close="closeClick"></PhotoModal>
    <v-spacer></v-spacer>
    <div>
      <v-img contain class="cardPlayerShirt" :src="shirtImg" @click="modalClick(0)"></v-img>
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-img contain class="cardPlayerPhoto" :src="photoImg" @click="modalClick(1)"></v-img>
    </div>
    <v-spacer></v-spacer>
    <div class="cardPlayerText">
      <h3>{{name}}</h3>
      <p>{{description}}</p>
    </div>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
import PhotoModal from "@/components/PhotoModal";

export default {
  props: ["number", "name", "description"],
  components: {
    PhotoModal
  },
  data: function() {
    return {
      shirtImg: null,
      photoImg: null,
      modalImg: null,
      modalStyle: "display:none"
    };
  },
  created: function() {
    this.shirtImg = require("@/assets/Extras/Camisetas/p" +
      this.number +
      ".png");
    this.photoImg = require("@/assets/Players/player" + this.number + ".png");
  },
  methods: {
    closeClick: function(){
            console.log(33);
      this.modalStyle = "display:none";
    },
    modalClick: function(id) {
      if (id == 0) {
        this.modalImg = this.shirtImg;
      } else if (id == 1) {
        this.modalImg = this.photoImg;
      }
      this.modalStyle = "display:block";
    }
  }
};
</script>