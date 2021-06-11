<template>
  <div class="container min-w-full">
    <Loader v-if="$fetchState.pending" message="Loading" />
    <Failed v-else-if="$fetchState.error" code="</>" message="Something went wrong!" />
    <div v-else>
      <p>{{ article }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const SRC = (path:string) => `https://raw.githubusercontent.com/vnsnippets/project-snippets/master/blog/articles/${path}.md`;
const ARTICLES_SOURCE = (path: string) => `https://api.github.com/​repos/vnsnippets/project-snippets/master/blog/articles/${path}.md`;

type DataType = {
  article: string
}

export default Vue.extend({
  layout: 'blog',
  data: () : DataType => ({
    article: ''
  }),
  async fetch() {
    const params = this.$route.params;
    const uri:string = SRC(`${params.year}/${params.month}/${params.title}`);
    
    this.article = await fetch(uri)
      .then((response) => response.text());
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
