<template>
  <div class="bg-gray-800 flex flex-1 flex-col justify-center items-center h-full">
    <p v-if="code" class="text-gray-600 error-code">{{ code }}</p>
    <p v-if="message" class="text-gray-600 error-text pb-5">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
   props: [ 'code', 'message' ]
})
</script>

<style scoped>
.error-code {
  font-family: 'Luckiest Guy', cursive;
  letter-spacing: 0.05em;
  font-size: 12rem;
  line-height: 1;
}

.error-text {
  line-height: 1;
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

h1 {
  font-size: 10rem;
}

@media only screen and (max-width: 767px) {
  .error-code {
    font-size: 7.5rem;
  }
  
  .error-text {
    font-size: 1rem;
  }
}
</style>
