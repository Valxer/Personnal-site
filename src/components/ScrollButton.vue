<script setup lang="ts">

import { aboutScroll } from '~/composables'

</script>

<template>
  <div class="scroll" absolute bottom-5 flex flex-col items-center @click="aboutScroll">
    <p class="scroll-text" text-xs>
      SCROLL DOWN
    </p>
    <span class=" scroll-arrow i-carbon-chevron-down" text-fuchsia-600 text-xl />
  </div>
</template>

<style scoped lang="scss">
.scroll {
  transition: 300ms ease;
  &:hover {
      cursor: pointer;
      transform: scale(1.3) translateY(5px);
      transition: 300ms ease;
  }
}
</style>
