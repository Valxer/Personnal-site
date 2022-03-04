<script setup lang="ts">

import { aboutScroll, contactScroll } from '~/composables'

function toggleNavBar() {
  const navBar = document.querySelector('.navbar')
  navBar?.classList.toggle('active')
}

</script>

<template>
  <div class="menu" absolute top-0 w-screen flex flex-col justify-between items-start>
    <div class="site-logo" w-50px h-50px ml-25px mt-25px />
    <a href="#" class="toggle-navbar" flex flex-col justify-between w-30px h-21px @click="toggleNavBar()">
      <span class="slice" />
      <span class="slice" />
      <span class="slice" />
    </a>
    <div class="navbar" flex justify-end w-full mr-25px mt-15px>
      <ul w-125px mr-25px flex flex-col justify-between items-end>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.site-logo {
  background-image: url("/logo.svg");
  background-size: cover;
}
.toggle-navbar {
    position: absolute;
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
    display: none;
  &.active{
      display: flex;
}
}
li{
    margin-bottom: 3px;
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
    .navbar{
        width: 400px;
        display: flex;
        margin-top: 0px;
    }
    ul{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

</style>
