<script setup lang="ts">
import AboutPage from '~/components/AboutPage.vue'
</script>

<template>
  <router-view />
  <HeroPage />
  <AboutPage />
</template>

<style>
html{
  scroll-behavior: smooth;
}
main{
  padding: 0 !important
}
</style>
