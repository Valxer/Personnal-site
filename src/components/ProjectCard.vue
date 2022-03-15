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
    items-center
    text-left
    mb-75px
  >
    <img
      :src="project.image"
      class="card-image"
      absolute
      top-0
      left-0
      w-full
      rounded-xl
      border-2
      border-true-gray-500
    >
    <div
      class="card-content"
      w-full
      flex
      flex-col
      justify-evenly
      items-end
      rounded-xl
      border-2
      border-true-gray-500
      bg-true-gray-200
      pr-20px
    >
      <h3 class="card-title w-15/20" font-bold text-xl text-dark-700>
        {{ project.name }}
      </h3>
      <p class="card-excerpt  w-15/20">
        {{ project.excerpt }}
      </p>
      <div class="skills w-15/20" flex flex-wrap justify-start>
        <div v-for="skill in project.skills" :key="skill" class="skill">
          {{ skill }}
        </div>
      </div>
      <div
        class="btn-container w-15/20"
        flex
        justify-start
        text-dark-700
        text-lg
      >
        <button
          class="card-btn"
          mr-30px
          px-15px
          py-5px
          border-2
          border-fuchsia600
          font-semibold
          @click="goTo(project.livelink)"
        >
          LIVE VERSION
        </button>
        <button
          class="card-btn"
          px-15px
          py-5px
          border-2
          border-fuchsia600
          font-semibold
          @click="goTo(project.link)"
        >
          SEE MORE
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-content, .card-image {
    aspect-ratio: 16/9;
}
.card-image {
  transition: 300ms ease-out;
}
.card-container:hover .card-image {
  border-width: 5px;
  transform: scale(0.4) translateX(-125%);
  transition: 300ms ease-out;
}
.skills {
  gap: 10px;
}
.skill{
    padding: 2px 10px;
    border-radius: 5px;
    background-color: rgb(153, 153, 153, 0.5);
}
.card-btn {
  transition: 300ms ease;
  &:hover {
    transform: scale(1.2);
    transition: 300ms ease;
  }
}
</style>
