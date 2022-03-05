<script setup lang="ts">

import { aboutScroll, contactScroll } from '~/composables'

function toggleNavBar() {
  const navBar = document.querySelector('.navbar')
  navBar?.classList.toggle('active')
}

</script>

<template>
  <div class="menu" absolute top-0 w-screen flex justify-between items-start>
    <div class="site-logo" w-50px h-50px ml-25px mt-25px />
    <div class="nav-container w-4/10" relative h-screen min-w-125px>
      <button href="#" class="toggle-navbar z-2" fixed top-0 flex flex-col justify-between w-30px h-21px @click="toggleNavBar()">
        <span class="slice" />
        <span class="slice" />
        <span class="slice" />
      </button>
      <nav class="navbar z-1" fixed flex justify-end w-full h-full>
        <ul class="navlist h-1/3" w-full min-w-125px min-h-300px flex flex-col justify-between items-start pt-100px pl-25px>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.site-logo {
  background-image: url("/logo.svg");
  background-size: cover;
}
.toggle-navbar {
    top: 2.5rem;
    right: 25px;
}
.slice {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}
.navbar {
    background: hsl(0 0% 10% / 0.8);
    backdrop-filter: blur(1rem);
    @media screen and (max-width: 640px) {

      transform: translateX(100%);
      transition: 500ms ease-out;
      &.active{
          display: flex;
          transform: translateX(0%);
          transition: 500ms ease-out;
      }
    }
}
li{
    margin-bottom: 3px;
    cursor: pointer;
}
@media screen and (min-width: 640px) {
    .toggle-navbar{
        display: none;
    }
    .menu{
        flex-direction: row;
        align-items: center;
        padding-top: 25px;
        padding-left: 25px
    }
    .site-logo{
        margin: 0;
    }
    .nav-container {
      height: 100px;
      width: 75%;
      max-width: 650px;
    }
    .navbar{
        position: static;
        background: none;
        backdrop-filter: none;
        width: 100%;
        display: flex;
        margin-top: 0px;
    }
    .navlist {
      padding: 0;
      justify-content: space-around;
      min-height: 100px;
    }
    ul{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

</style>
