<template>
  <div>
    <nav class="max-w-7xl mx-auto p-4 pb-5">
      <div class="flex items-center pb-4 header">
        <SocialMedia theme="dark" />
      </div>

      <div class="relative items-center">
        <div class="flex flex-col items-center">
          <nuxt-link class="mx-auto block brand" to="/">
            <h1 class="animated">
              <span v-for="(e, index) in title" :key="index" class="text-gray-300">{{ e === ' ' ? '&nbsp;' : e }}</span>
            </h1>
          </nuxt-link>
          <p class="motto block text-gray-600">
            THE BEST TECHNIQUES ARE PASSED ON BY THE SURVIVORS
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    title: 'VN SNIPPETS'
  })
})
</script>

<style lang="scss" scoped>
.brand {
  font-family: 'Luckiest Guy', sans-serif;
  font-weight: 100;
  font-size: 3rem;
}

.motto {
  text-align: center;
  background: #1f2937;
  padding: 15px 25px;
  border-radius: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1em;
  margin-top: 10px;
}

.header {
  justify-content: flex-end;
}

@media only screen and (max-width: 767px) {
  .header {
    justify-content: center;
    margin: 1rem 0;
  }

  .brand {
    font-size: 1.75rem;
  }
}
/* 
.brand:hover .text-gray-200 {
  color: #9ca3af;
  transition: all 200ms ease;
}
.brand:hover .text-gray-600 {
  color: #e5e7eb;
  transition: all 200ms ease;
} */

.animated {
  letter-spacing: 0;
  text-align: center;

  span {
    margin: 0;
    display: inline-block;
    transition: all 250ms ease-out;
  }
}

.animated {
  span:hover {
    padding: 0 0.5em;
    opacity: 50%;
  }
}

// SHUDDER EFFECT
// .brand:hover {
//   .animated span {
//     color: #FFF;
//     margin: 0 0.3625em;
//     animation: shudder 0.1s linear infinite;
//   }
// }

// @keyframes shudder {
//   0% { transform: rotateZ(0); }
//   25% { transform: rotateZ(5deg); }
//   75% { transform: rotateZ(-5deg); }
//   100% { transform: rotateZ(0); }
// }
</style>
