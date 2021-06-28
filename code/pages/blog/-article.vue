<template>
  <div class="container min-w-full">
    <Loader v-if="$fetchState.pending" message="Loading" />
    <Failed v-else-if="$fetchState.error" code="</>" message="Something went wrong!" />
    <article v-else v-html="$md.render(article)"></article>
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

    // const githubMarkdown = await fetch('https://api.github.com/markdown', {
    //   method: "POST",
    //   headers: {
    //     "Accept": "application/vnd.github.v3+json"
    //   },
    //   body: JSON.stringify({
    //     text: rawArticle
    //   })
    // }).then((response) => response.text());

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
  text-align: center;
}
</style>
