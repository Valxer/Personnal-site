<script setup lang="ts">

import { aboutScroll, contactScroll, homeScroll, projectScroll } from '~/composables'
const router = useRouter()

function toggleNavBar() {
  const navBar = document.querySelector('.navbar')
  const toggle = document.querySelector('.toggle-navbar')
  navBar?.classList.toggle('active')
  toggle?.classList.toggle('active')
}

async function routerHome() {
  await router.push('/')
  homeScroll()
}
async function routerAbout() {
  await router.push('/#about-section')
  aboutScroll()
}
async function routerProjects() {
  await router.push('/#project-section')
  projectScroll()
}
async function routerContact() {
  await router.push('/#contact-section')
  contactScroll()
}

</script>

<template>
  <div class="menu" absolute top-0 w-screen min-w-300px flex justify-between items-start>
    <div class="site-logo z-3" w-50px h-50px ml-25px mt-25px />
    <div class="nav-container w-4/10 z-2" relative h-screen min-w-150px>
      <button
        href="#"
        class="toggle-navbar z-3"
        aria-label="toggle navbar button"
        fixed
        top-0
        flex
        flex-col
        justify-between
        pb-2px
        w-30px
        h-25px
        @click="toggleNavBar()"
      >
        <span class="slice" />
        <span class="slice" />
        <span class="slice" />
      </button>
      <nav class="navbar" fixed flex justify-end w-full h-full text-lg sm:text-xl>
        <ul
          class="navlist h-1/3"
          w-full
          min-w-125px
          min-h-400px
          flex
          flex-col
          justify-between
          items-start
          pt-100px
          mr-25px
        >
          <li @click="routerHome">
            HOME
          </li>
          <li @click="routerAbout">
            ABOUT
          </li>
          <li @click="routerProjects">
            PROJECTS
          </li>
          <li @click="routerContact">
            CONTACT
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  color: white;
}
.site-logo {
  background-image: url("/logo.svg");
  background-size: cover;
}
.toggle-navbar {
    top: 2.5rem;
    right: 25px;
    transition: 300ms ease;
    &:hover, &:focus {
      transform: scale(1.3);
      transition: 300ms ease;
    }
    &.dark-btn .slice{
      background-color: black;
    }
    &.active .slice {
      background-color: white;
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
    @media screen and (max-width: 1024px) {

      transform: translateX(100%);
      transition: 300ms ease-out;
      &.active{
          display: flex;
          transform: translateX(0%);
          transition: 300ms ease-out;
      }
    }
}
li {
  padding: 15px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  transition: transform 300ms ease, color 300ms ease, font-weight 300ms ease;
  &:hover, &:focus {
    transform: scale(1.5) translateX(5px);
    color: rgb(217,70,239);
    transition: transform 300ms ease, color 300ms ease;
  }
}
@media screen and (min-width: 1024px) {
    .toggle-navbar{
        display: none;
    }
    .menu{
      flex-direction: row;
      align-items: center;
      padding-left: 25px;
      &.sticky{
        position: fixed;
        z-index: 3;
        background-color: black;
        transition: 500ms ease;
      }
    }
    .site-logo{
        margin: 0;
    }
    .nav-container {
      height: 100px;
      width: 85%;
      max-width: 800px;
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
