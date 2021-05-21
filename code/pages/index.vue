<template>
  <div class="container text-white">
    You have reached the realm of Lord Snippets
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: [
    function({ redirect }) {
        redirect('/blog');
    },
  ]
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
