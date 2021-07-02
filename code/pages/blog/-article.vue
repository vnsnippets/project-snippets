<template>
  <div class="container min-w-full">
    <Loader v-if="$fetchState.pending" message="Loading" />
    <Failed v-else-if="$fetchState.error" code="</>" message="Something went wrong!" />
    <article v-else v-html="$md.render(article)" class="pb-5" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const SRC = (path:string) => `https://raw.githubusercontent.com/vnsnippets/project-snippets/master/blog/articles/${path}.md`;

type DataType = {
  article: any
}

export default Vue.extend({
  layout: 'blog',
  data: () : DataType => ({
    article: null
  }),
  async fetch() {
    const params = this.$route.params;
    const uri:string = SRC(`${params.year}/${params.month}/${params.title}`);
    
    const rawArticle = await fetch(uri)
      .then((response) => response.text());

    this.article = rawArticle;
  }
})
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}


@media only screen and (max-width: 767px) {
  .container {
    padding: 0.5em 1em 0em;
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

article {
  color: #E0E0E0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  hr { border-color: #1f2937; margin: 1em 0; }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 16px;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1em; }
  h5 { font-size: .875em; }
  h6 { font-size: .85em; }

  blockquote, details, dl, ol, p, pre, table, ul {
    margin-bottom: 16px;
    margin-top: 0;
  }
}
</style>
