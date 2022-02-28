<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Kevin Le Van Phung | Web Developer',
  meta: [
    { name: 'Le Van Phung Kevin', content: 'Personnal website of Kevin Le Van Phung used to promote and highlight my work to potential recruiters' },
  ],
})
</script>

<template>
  <router-view />
</template>
