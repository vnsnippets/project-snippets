<template>
  <div class="card-container">
    <div class="card article text-white antialiased">
      <nuxt-link class="no-underline block link" :to="url">
        <div class="cover">
          <div :style="`--bg-image: url('${meta.cover || defaultImage}');`" class="cover-image" />
        </div>
        <div class="article-body p-5">
          <div class="p-1 h-full content flex flex-col justify-center items-center">
            <div class="overflow-hidden">
              <h6 class="category inline-block text-gray-300 border-2 border-gray-700 ">{{ meta.tag }}</h6>
              <h5 class="title text-white mt-3">{{ meta.title }}</h5>

              <p class="abstract text-gray-200">{{ meta.abstract }}</p>
            </div>
          </div>
          <CardFooter :date="meta.timestamp" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CardFooter from '~/components/cards/CardFooter.vue'
import { BackgroundURL, DEFAULT_IMG } from '~/Extensions'

export default Vue.extend({
  components: { CardFooter },
  name: 'article-with-image-xl',
  props: ['meta', 'url'],
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
    transition: all ease-in-out 200ms;
  }
}

.cover {
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all ease-in-out 300ms;

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

.link {
  height: 500px;
  display: flex;
}

.article-body {
  position: relative;
  height: 100%;
  width: 50%;
  padding-bottom: 5.25em;
  transition: all ease-in-out 300ms;

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
    margin-top: 2em;
  }
}

@media only screen and (max-width: 768px) {
  .cover {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 200ms ease-in-out;
  }

  .footer {
    border-color: #ffffff75;
    transition: all 200ms ease-in-out;
  }

  .article-body {
    width: 100%;
    background: #000000af;
    padding: 3em 3em 7em 3em;
    transition: all 200ms ease-in-out;
  }

  .article-body:hover {
    background: #000000cf;
    transition: all 200ms ease-in-out;
  }
}
</style>
