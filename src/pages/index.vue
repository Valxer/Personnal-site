<script setup lang="ts">
</script>

<template>
  <router-view />
  <HeroPage />
  <AboutPage />
  <ContactPage />
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
