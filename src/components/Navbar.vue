<script setup lang="ts">

import { aboutScroll, contactScroll } from '~/composables'

const router = useRouter()

function toggleNavBar() {
  const navBar = document.querySelector('.navbar')
  const toggle = document.querySelector('.toggle-navbar')
  navBar?.classList.toggle('active')
  toggle?.classList.toggle('active')
}

function routerHome() {
  router.push('/')
}
function routerAbout() {
  router.push('/#about-section')
}
function routerProjects() {
  router.push('/#project-section')
}
function routerContact() {
  router.push('/#contact-section')
}

</script>

<template>
  <div class="menu" absolute top-0 w-screen min-w-300px flex justify-between items-start>
    <div class="site-logo z-3" w-50px h-50px ml-25px mt-25px />
    <div class="nav-container w-4/10 z-2" relative h-screen min-w-150px>
      <button href="#" class="toggle-navbar z-3" fixed top-0 flex flex-col justify-between w-30px h-25px @click="toggleNavBar()">
        <span class="slice" />
        <span class="slice" />
        <span class="slice" />
      </button>
      <nav class="navbar" fixed flex justify-end w-full h-full>
        <ul class="navlist h-1/3" w-full min-w-125px min-h-300px flex flex-col justify-between items-start pt-100px mr-25px>
          <a href="#" @click="routerHome">
            <li>HOME</li>
          </a>
          <a href="#about-section" @click="routerAbout">
            <li>ABOUT</li>
          </a>
          <a href="#project-section" @click="routerProjects">
            <li>PROJECTS</li>
          </a>
          <a href="#contact-section" @click="routerContact">
            <li>CONTACT</li>
          </a>
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
    transition: 300ms ease;
    &:hover {
      transform: scale(1.3);
      transition: 300ms ease;
    }
    &.active .slice {
      &:last-child {
        opacity: 0;
        transition: 300ms ease;
      }
      &:first-child {
        transform: rotate(45deg) translate(4px, 4px);
        transition: 300ms ease;
      }
      &:nth-child(2) {
        transform: rotate(-45deg) translate(4px, -4px);
        transition: 300ms ease;
      }
    }
}
.slice {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  transition: 300ms ease;
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
a{
  padding: 15px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  transition: transform 300ms ease, color 300ms ease, font-weight 300ms ease;
  &:hover {
    transform: scale(1.5);
    color: rgb(217,70,239);
    transition: transform 300ms ease, color 300ms ease, font-weight 300ms ease;
  }
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
