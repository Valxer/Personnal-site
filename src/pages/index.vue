<script setup lang="ts">
import AboutPage from '~/components/AboutPage.vue'
</script>

<template>
  <router-view />
  <HeroPage />
  <AboutPage />
</template>

<style>
html {
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* firefox */
}
html::-webkit-scrollbar {
  display: none; /* chrome */
}
main{
  padding: 0 !important
}
</style>
