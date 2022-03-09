<script setup lang="ts">

import { goTo, projects } from '~/composables'

</script>

<template>
  <div
    v-for="project in projects"
    :key="project.name"
    class="card-container w-7/10 "
    relative
    flex
    flex-col
    justify-between
    items-left
    text-left
    mb-50px
  >
    <img :src="project.image" class="card-image">
    <h3 class="card-title">
      {{ project.name }}
    </h3>
    <p class="card-excerpt">
      {{ project.excerpt }}
    </p>
    <div class="skills" flex flex-wrap justify-center>
      <div v-for="skill in project.skills" :key="skill" class="skill">
        {{ skill }}
      </div>
    </div>
    <button class="card-btn" @click="goTo(project.link)">
      LIEN TENTANT
    </button>
  </div>
</template>

<style scoped lang="sccs">
</style>
