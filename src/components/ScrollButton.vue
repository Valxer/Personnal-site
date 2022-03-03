<script setup lang="ts">

function scrolldown() {
  const pageHeight = window.innerHeight
  window.scrollBy(0, pageHeight)
}

</script>

<template>
  <div class="scroll" absolute bottom-5 flex flex-col items-center @click="scrolldown()">
    <p class="scroll-text" text-xs>
      SCROLL DOWN
    </p>
    <span class=" scroll-arrow i-carbon-chevron-down" text-fuchsia-600 text-xl />
  </div>
</template>

<style scoped>
.scroll:hover {
    transform: scale(1.3);
    transition: 300ms;
}
</style>
