<template>
  <div class="container min-w-full">
    <client-only>
      <div class="pb-5 min-w-full mx-0">
      <Loader v-if="$fetchState.pending" message="Loading" />
      <Failed v-else-if="$fetchState.error" code="</>" message="Something went wrong!" />
      
      <div v-else class="cards">
        <div class="wrapper">
          <ProfileCard />
        </div>

        <div
          v-for="(meta, index) in articles"
          :key="index"
          class="wrapper"
          :class="meta.options.UseLargeArticle === true ? 'lg' : null"
          align="center"
        >
          <a :id="Anchor(meta)"></a>

          <ArticleWithImageXL v-if="meta.options.UseLargeArticle === true" :meta="meta" :url="URL(meta)" />
          <ArticleWithImage v-else-if="meta.options.UseImageArticle === true" :meta="meta" :url="URL(meta)" />
          <ArticleWithText v-else :meta="meta" :url="URL(meta)" />
        </div>
      </div>

      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Metadata } from '~/models/Article'

import ProfileCard from '~/components/cards/ProfileCard.vue'

import ArticleWithImage from '~/components/articles/ArticleWithImage.vue'
import ArticleWithImageXL from '~/components/articles/ArticleWithImageXL.vue'
import ArticleWithText from '~/components/articles/ArticleWithText.vue'
import Loader from '~/components/Loader.vue'
import dayjs from 'dayjs'

const ARTICLES_SOURCE = 'https://raw.githubusercontent.com/vnsnippets/project-snippets/master/blog/index.json';

type DataType = {
  articles: Metadata[]
}

export default Vue.extend({
  layout: 'blog',
  components: { ArticleWithImage, ArticleWithImageXL, ArticleWithText, ProfileCard, Loader },
  data: (): DataType => ({
    articles: []
  }),
  methods: {
    URL: (meta: Metadata) => {
      // return `blog/${meta.tag.toLowerCase().replace(/\s/g, '-')}/${meta.title.toLowerCase().replace(/\s/g, '-')}`
      const date = dayjs.unix(meta.timestamp).format('YYYY/MM');
      const title = meta.title.toLowerCase().replace('\'', '').replace(/\s/g, '-')
      return `blog/${date}/${title}`
    },
    Anchor: (meta: Metadata) => {
      return `${meta.tag.toLowerCase().replace(/\s/g, '-')}--${meta.title.toLowerCase().replace(/\s/g, '-')}`
    }
  },
  created() { },
  async fetch() {
    const data = await fetch(ARTICLES_SOURCE)
      .then((response) => response.json());

    data.sort((a: Metadata, b: Metadata) => b.timestamp - a.timestamp)

    this.articles = data.map((article: Metadata, index: Number) => {
      const options = {
        UseImageArticle: false,
        UseLargeArticle: false
      }

      if (index < 4) {
        options.UseImageArticle = true
        options.UseLargeArticle = false
      } else {
        options.UseImageArticle = Math.random() < 0.75
        options.UseLargeArticle = options.UseImageArticle ? Math.random() < 0.5 : false
      }

      return { ...article, options }
    });
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  flex: 1 1 300px;
  margin: 0.75em;
}

.wrapper.lg {
  flex: 2 1 700px;
}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0.5em 0.5em 0em;
  }

  .wrapper {
    margin: 0 0.5em 1.5em;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1150px) {
  .container {
    padding: 1.25em 5em 2em;
  }
}

@media only screen and (min-width: 1150px) {
  .container {
    padding: 1.25em 9.25em;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (max-width: 400px) {
  .cards {
    display: block;
    margin: auto;
  }
}

// CSS that will apply to the Article Components
// @media only screen and (max-width: 919px) {
//   .card-container {
//     max-width: 525px;
//   }
// }

.card-container {
  // width: 100%;
  flex: 1;
  position: relative;
}

@media only screen and (max-width: 768px) {
  .card-container {
    flex: unset;
    min-width: auto;
  }
}
</style>

<style lang="scss">
.cards {
  * {
    animation: animate-appear 0.5s ease-in-out;
  }

  .article {
    width: 100%;

    .link {
      overflow: hidden;
      background: #1f2937;
      // border-radius: 7.5px;
    }

    .link:hover {
      background: #111827;
      transition: all ease-in-out 200ms;
    }
  }
}
</style>
