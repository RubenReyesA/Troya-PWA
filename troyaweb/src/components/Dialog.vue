<template>
  <v-layout row justify-center>
    <v-dialog v-model="statusDialog" persistent max-width="80vw">
      <v-card>
        <v-card-title class="headline">{{content.title}}</v-card-title>
        <v-card-text style="white-space: pre;" id="informationAsistencia">{{content.info}}</v-card-text>

        <div class="centeredRow">
          <v-alert
            v-model="showSuccess"
            type="success"
            style="width:90%;"
          >Copiado al portapapeles con éxito!</v-alert>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="finish">Copiar y cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>

export default {
  props: ["statusDialog", "content"],
  data: function() {
    return {
      showSuccess: false,
    };
  },
  methods: {
    finish: function() {
      this.showSuccess = true;

       this.$copyText(this.content.info).then(function (e) {
         console.log(e);
         navigator.clipboard.writeText(e.text);
       });

      setTimeout(() => {
        this.showSuccess = false;
        this.$emit("statusClosed");
      }, 2000);
      
    }
  }
};
</script>