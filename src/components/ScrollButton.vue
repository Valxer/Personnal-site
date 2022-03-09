<script setup lang="ts">

import { aboutScroll } from '~/composables'

</script>

<template>
  <div class="scroll" absolute bottom-2 flex flex-col items-center @click="aboutScroll">
    <p class="scroll-text" text-lg>
      SCROLL DOWN
    </p>
    <span class=" scroll-arrow i-carbon-chevron-down" text-fuchsia-600 text-4xl />
  </div>
</template>

<style scoped lang="scss">
.scroll {
  transition: 300ms ease;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  &:hover {
      cursor: pointer;
      transform: scale(1.3);
      transition: 300ms ease;
  }
}
</style>
