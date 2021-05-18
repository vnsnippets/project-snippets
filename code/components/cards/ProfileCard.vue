<template>
  <div class="card-container">
    <div class="card text-white antialiased">
      <div class="card-body p-5 h-full flex flex-col items-center justify-center">
        <div class="overflow-scroll w-full" align="center">
          <div class="icon flex justify-center items-center">
            <i class="cap-icon ci-notification-alt text-3xl"></i>
          </div>

          <div class="my-5 text-center">
            <h6>Let's connect!</h6>
          </div>

          <div class="links" align="left">
            <a v-for="(e, index) in social" :key="`Social:${index}`" class="w-full" :href="e.link">
              <div class="link p-5 border-b-2 border-gray-800">
                <span><i class="cap-icon mr-2" :class="e.icon"></i></span>
                <span>{{ e.label }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    social: {
      instagram: {
        link: 'https://instagram.com/vnsnippets',
        icon: 'ci-camera',
        label: 'Check out my Instagram'
      },
      twitter: {
        link: 'https://twitter.com/vhnamah',
        icon: 'ci-twitter',
        label: 'Follow me on Twitter'
      },
      github: {
        link: 'https://github.com/vnsnippets',
        icon: 'ci-laptop',
        label: 'Peek at my Github'
      }
    }
  })
})
</script>

<style lang="scss" scoped>
.card {
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #1f2937;

  .icon {
    background: #111827;
    padding: 10px;
    width: 75px;
    height: 75px;
    border-radius: 999px;
    text-align: center;
  }

  h6 {
    font-size: 1.5em;
    font-family: 'Luckiest Guy', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .links {
    a {
      font-size: 0.95em;
      transition: all ease-in-out 0.2s;
    }

    a .link:hover {
      background: #11182775;
      transition: all ease-in-out 0.2s;
    }

    a:first-of-type .link {
      border-top-width: 2px;
    }
  }
}
</style>
