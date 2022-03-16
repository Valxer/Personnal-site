<script setup lang="ts">
</script>

<template>
  <section
    id="project-section"
    class="project-section"
    relative
    w-screen
    h-screeen
    flex
    flex-col
    justify-between
    items-center
    text-true-gray600
  >
    <h2 class="header z-1" flex flex-col justify-between items-center mb-50px mt-40px lg:mt-140px>
      <span class="header__title" relative text-fuchsia-500 text-2xl font-semibold text-center mb-30px>
        PROJECTS
      </span>
      <span class="header__text w-6/10" text-sm font-600 leading-tight>
        Here you will find some of the personal projects I realised
      </span>
    </h2>
    <router-view />
    <ProjectCard />
  </section>
</template>

<style scoped lang="scss">
.project-section {
  overflow: hidden;
  background-color: #FFFFFF;
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -35%;
    width: 100%;
    height:100%;
    background: linear-gradient(#46efd9, #d946ef);
    clip-path: circle();
    @media screen and (min-width: 1024px) {
      width: 75%;
      height: 75%;
      top: 1%;
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    background: linear-gradient(#d946ef, #efd946);
    clip-path: circle();
    bottom: -20%;
    right:-35%;
  }
}
.header__title::after {
    content: '';
    display: block;
    width: 3rem;
    height: 2px;
    background:rgb(192, 38, 211);
    position: absolute;
    left: 50%;
    top: calc(100% + .2rem);
    transform: translateX(-50%);
    border-radius: 5px;
}
</style>
