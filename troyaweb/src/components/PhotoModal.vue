<template>
  <!-- The Modal -->
<div id="myModal" class="modal" style="display:block">

  <!-- The Close Button -->
  <span class="close" @click="close">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01" :src="srcImg">

</div>
</template>

<script>

export default {
  props: ["srcImg"],
  data: function() {
    return {
    };
  },
  methods: {
    close: function(){
      this.$emit('close');
    }
  }

};
</script>