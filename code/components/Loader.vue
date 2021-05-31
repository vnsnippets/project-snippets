<template>
<div class="min-w-full flex flex-col items-center justify-center">
      <div class="loader">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
      <div v-if="message" class="pt-5 text-gray-600">
         <p class="uppercase text-center">{{ message }}</p>
      </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   props: [ 'message' ]
})
</script>

<style lang="scss" scoped>
.loader {
	position: relative;
	display: grid;
	grid-template-columns: 25px 25px 25px;
   grid-template-rows: 25px 25px 25px;
	grid-gap: 5px;
	
	> div {
		position: relative;
		width: 100%;
		height: 100%;
		background: #1f2937;
		transform: scale(0.0);
		transform-origin: center center;
		animation: loading 2s infinite linear;
		
		&:nth-of-type(1),
		&:nth-of-type(5), 
		&:nth-of-type(9) {
			animation-delay: 0.4s;
		}
		
		&:nth-of-type(4),
		&:nth-of-type(8) {
			animation-delay: 0.2s;
		}
		
		&:nth-of-type(2),
		&:nth-of-type(6) {
			animation-delay: 0.6s;
		}
		
		&:nth-of-type(3) {
			animation-delay: 0.8s;
		}
	}
}

@keyframes loading {
	0%   { transform: scale(0.0); }
	40%  { transform: scale(1.0); }
	80%  { transform: scale(1.0); }
	100% { transform: scale(0.0); }
}
</style>