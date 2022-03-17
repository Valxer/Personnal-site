<script setup lang="ts">

import { goTo, projects } from '~/composables'

</script>

<template>
  <div class="main-container z-1" w-full flex flex-wrap flex-col xl:flex-row xl:justify-evenly items-center>
    <div
      v-for="project in projects"
      :key="project.name"
      class="card-container w-7/10 xl:w-38/100"
      relative
      flex
      flex-col
      items-center
      text-center sm:text-left
      mb-75px
      rounded-xl
      data-tilt
    >
      <img
        :src="project.image"
        :alt="project.name"
        class="card-image w-9/10"
        top-0
        left-0
        mt-25px sm:mt-0
        sm:w-full
        sm:h-full
        rounded-xl
      >
      <div
        class="card-content"
        w-full
        flex
        flex-col
        justify-evenly
        items-center sm:items-end
        sm:rounded-xl
        py-25px
        sm:pr-20px
      >
        <h3 class="card-title w-17/20 sm:w-15/20" font-bold text-xl text-dark-700>
          {{ project.name }}
        </h3>
        <p class="card-excerpt w-17/20 sm:w-15/20">
          {{ project.excerpt }}
        </p>
        <div class="skills w-17/20 sm:w-15/20" flex flex-wrap justify-center sm:justify-start>
          <div v-for="skill in project.skills" :key="skill" class="skill" text-dark>
            {{ skill }}
          </div>
        </div>
        <div class="btn-container w-15/20" flex justify-center sm:justify-start text-dark-700 text-sm sm:text-lg mt-10px>
          <button
            v-show="project.livelink"
            class="card-btn"
            px-10px sm:px-15px
            py-5px
            border-3
            border-fuchsia600
            font-semibold
            @click="goTo(project.livelink)"
          >
            LIVE VERSION
          </button>
          <button
            v-show="project.link"
            class="card-btn"
            ml-20px
            px-15px
            py-5px
            border-3
            border-fuchsia600
            font-semibold
            @click="goTo(project.link)"
          >
            GITHUB LINK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  &:hover .card-image, &:focus .card-image {
     @media screen and (min-width: 640px) {
       transform: scale(0.4) translateX(-125%);
       transition: 300ms ease-out;
     }
  }
}
.card-content {
  aspect-ratio: 16/10;
  gap: 15px;
}
.card-image {
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  @media screen and (min-width: 640px) {
    position: absolute;
    transition: 300ms ease-out;
  }
}
.skills {
  gap: 10px;
  .skill{
      padding: 2px 10px;
      border-radius: 5px;
      background-color: rgb(153, 153, 153, 0.5);
  }
}
.card-btn {
  transition: 300ms ease;
  &:hover, &:focus {
    transform: scale(1.1);
    transition: 300ms ease;
  }
}
@media screen and (max-width: 475px) {
    .btn-container {
      width: 50%;
      flex-direction: column;
      gap: 10px;
      .card-btn {
        margin-left: 0;
      }
    }
  }
</style>
