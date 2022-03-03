<script setup lang="ts">

function aboutScroll() {
  const about = document.querySelector('.about-section')
  about?.scrollIntoView()
}

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
.scroll:hover {
    transform: scale(1.3);
    transition: 300ms;
}
</style>
