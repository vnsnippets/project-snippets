<template>
  <div class="card-container">
    <div class="card article text-white antialiased">
      <nuxt-link class="no-underline block link" :to="url">
        <div class="article-body p-5 flex items-center justify-center">
          <div class="max-h-full overflow-hidden">
            <div class="icon flex justify-center items-center mb-4">
              <i class="cap-icon ci-ghost text-3xl"></i>
            </div>
            <div class="content p-1">
              <h6 class="category inline-block text-gray-300 border-2 border-gray-700 ">{{ meta.tag }}</h6>
              <h5 class="title text-white my-3">{{ meta.title }}</h5>

              <p class="abstract text-gray-200">{{ meta.abstract }}</p>
            </div>
          </div>
        </div>
        <CardFooter :date="this.meta.timestamp" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CardFooter from '~/components/cards/CardFooter.vue'

export default Vue.extend({
  props: ['meta', 'url'],
  components: { CardFooter }
})
</script>

<style lang="scss" scoped>
.link {
  height: 500px;
  display: flex;
  flex-direction: column;
}

.article-body {
  position: relative;
  padding-bottom: 5.25em;
  height: 100%;

  .icon {
    background: #111827;
    padding: 10px;
    width: 75px;
    height: 75px;
    border-radius: 999px;
    text-align: center;
  }

  .category {
    font-family: 'Merriweather', serif;
    font-size: 0.85em;
    line-height: 1;
    text-transform: uppercase;
    padding: 0.75em;
    border-radius: 5px;
  }

  .title {
    font-family: 'Merriweather', serif;
    font-size: 1.35em;
    font-weight: 500;
  }

  .abstract {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1em;
    line-height: 1.5;
  }
}
</style>
