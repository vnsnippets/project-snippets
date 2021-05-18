<template>
  <div class="card-container">
    <div class="card article text-white antialiased">
      <nuxt-link class="no-underline block link" :to="url">
        <div class="cover">
          <div :style="`--bg-image: url('${meta.cover || defaultImage}');`" class="cover-image" />
        </div>
        <div class="article-body p-5">
          <div class="icon flex justify-center items-center">
            <i class="cap-icon ci-ghost text-3xl"></i>
          </div>

          <div class="h-full flex flex-col justify-between pt-4 text-center">
            <div class="p-1 content">
              <h6 class="category inline-block text-gray-300 border-2 border-gray-700 ">{{ meta.tag }}</h6>
              <h5 class="title text-white mt-3">{{ meta.title }}</h5>
            </div>
          </div>
        </div>
        <CardFooter :date="meta.timestamp" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CardFooter from '~/components/cards/CardFooter.vue'
import { DEFAULT_IMG } from '~/Extensions'

export default Vue.extend({
  props: ['meta', 'url'],
  components: { CardFooter },
  computed: {
    defaultImage: () => DEFAULT_IMG
  }
})
</script>

<style lang="scss" scoped>
.link:hover {
  .cover-image {
    transform: scale(1.25);
    filter: brightness(75%);
    transition: all ease-in-out 300ms;
  }
}

.cover {
  overflow: hidden;

  .cover-image {
    background-image: var(--bg-image);
    background-position: center center;
    background-size: cover;
    transform: scale(1);
    filter: brightness(100%);
    width: 100%;
    height: 100%;
    transition: all ease-in-out 300ms;
  }
}

.article-body {
  position: relative;
  padding-bottom: 5.25em;

  .icon {
    font-family: 'Luckiest Guy', cursive;
    background: #111827;
    padding: 10px;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
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

  .content {
    max-height: 100%;
    overflow: hidden;
  }
}

// Additional CSS for normal Article with Image
// This section is different in Article with Image XL
.cover {
  width: 100%;
  height: 250px;
}

.article-body {
  height: 250px;

  .icon {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
  }
}
</style>
