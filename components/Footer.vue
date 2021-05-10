<template>
  <div class="footer-container bg-black border-t-2 border-gray-800">
    <div class="p-5 bg-gray-900">
      <div class="flex flex-col items-center justify-center py-5">
        <section class="mb-5">
          <h2 class="text-2xl" align="center">
            <span class="text-gray-600">VN</span>
            <span class="text-gray-400">SNIPPETS.</span>
          </h2>
        </section>

        <section align="center">
          <div class="text-gray-400 text-sm uppercase">
            <nuxt-link v-for="e in links" :key="e.label" :to="e.url" class="mx-3">
              {{ e.label }}
            </nuxt-link>
          </div>

          <SocialMedia theme="light" class="mt-5" align="center" />
        </section>
      </div>
    </div>
    <section class="py-5">
      <p class="text-gray-400 text-xs uppercase mb-3 text-center">
        Articles and Projects created with <i class="cap-icon ci-heart mx-1"></i>
        <!-- THE BEST TECHNIQUES ARE PASSED ON BY THE SURVIVORS -->
      </p>
      <h6 class="text-gray-500 text-xs text-center">&copy; VIDUSH H. NAMAH ({{ new Date().getFullYear() }})</h6>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import SocialMedia from '~/components/SocialMedia.vue'

export default Vue.extend({
  components: { SocialMedia },
  data: () => ({
    links: [
      { label: 'Home', url: '/' },
      { label: 'Blog', url: '/blog' },
      { label: 'Projects', url: '/projects' },
      { label: 'About', url: '/about' }
    ]
  })
})
</script>

<style lang="scss" scoped>
h2 {
  font-family: 'Luckiest Guy', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a:first-of-type {
   margin-left: 0;
}

a:last-of-type {
   margin-right: 0;
}

a:hover {
  color: white;
  transition: all 0.2s ease-in-out;
}

@media only screen and (max-width: 767px) {
  .footer-container {
    padding-bottom: 3.5em;
  }
}
</style>
