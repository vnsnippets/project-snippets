<template>
  <div class="footer flex justify-between text-gray-400 border-t-2 border-gray-800">
    <p>{{ timestamp }}</p>
    <div>
      <span class="mx-1">99</span>
      <span><i class="cap-icon ci-heart"></i></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

export default Vue.extend({
  props: ['date'],
  computed: {
    timestamp() {
      return dayjs.unix(this.date).format('MMMM DD, YYYY')
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0.25em;
  right: 0.25em;
  padding: 1.5em 1.25em;
  font-family: 'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1;
}
</style>
