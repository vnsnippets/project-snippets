<template>
  <div class="bg-gray-800 min-w-full min-h-screen flex flex-col">
    <Navigation />
    <Header />
    <nuxt class="flex flex-1" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'

export default Vue.extend({
  layout: 'default',
  components: { Header }
})
</script>

<style>
@media only screen and (max-width: 320px) {
  html {
    min-width: 320px;
  }
}
</style>
