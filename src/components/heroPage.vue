<script setup lang="ts">

import { aboutScroll } from '~/composables'

</script>

<template>
  <section class="hero-section z-1" relative w-screen h-screen flex justify-center items-center shadow-lg shadow-gray-500>
    <div class="color-overlay -z-1" absolute h-screen w-screen />
    <router-view />
    <Navbar />
    <div class="hello w-3/4" flex flex-col items-center>
      <div class="hello_main w-1/1" h-250px flex flex-col justify-between>
        <div class="hello_main-text" flex flex-col items-center>
          <p class="text-title" relative text-fuchsia-500 font-medium>
            HELLO THERE
          </p>
          <h1 class="text-description" text-2xl mt-10px mx-auto>
            I am Kevin Le Van Phung
          </h1>
          <div class="wrapper" text-2xl relative w-300px h-32px>
            <div class="typing typing1">
              A Web Developer
            </div>
            <div class="typing typing2">
              A Challenge-driven creator
            </div>
            <div class="typing typing3">
              An Ever-evolving coder
            </div>
          </div>
        </div>
        <div class="hello_main-links" h-90px flex flex-col justify-between items-center>
          <button>MY PROJECTS</button>
          <button @click="aboutScroll()">
            MORE ABOUT ME
          </button>
        </div>
      </div>
      <ScrollButton />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  background-image: url("/LandingBackground.jpg");
  background-size: cover;
}
.color-overlay {
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 100%);
}
.text-title {
  width: 15ch;
  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background:rgb(192, 38, 211);
    position: absolute;
    left:0;
    top: 50%
  }
  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background:rgb(192, 38, 211);
    position: absolute;
    right:0;
    top: 50%
  }
}
.typing {
  position: absolute;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  text-align: left;
  &1 {
    animation: typing1 12s steps(20) 1.5s infinite, blink .5s step-end infinite alternate ;
  }
  &2 {
    animation: typing2 12s steps(20) 1.5s infinite , blink .5s step-end infinite alternate;
  }
  &3 {
    animation: typing3 12s steps(20) 1.5s infinite , blink .5s step-end infinite alternate;
  }
}
button {
  border: 2px solid white;
  width: 175px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.wrapper {
    width: 0;
    animation: typing 12s steps(20) 1.5s infinite;
  }

@media screen and (min-width: 1024px){
  .text-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  .text-description, .wrapper {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

@keyframes typing {
  0% {
    width: 0;
  }
  0.5% {
    width: 0;
  }
  16.5% {
    width: 12ch;
  }
  22% {
    width: 12ch;
  }
  30% {
    width: 0;
  }
  36% {
    width: 0;
  }
  49.5% {
    width: 18.5ch;
  }
  55% {
    width: 18.5ch;
  }
  63% {
    width: 0;
  }
  69% {
    width: 0;
  }
  82.5%  {
    width: 16ch;
  }
  88.5% {
    width: 16ch;
  }
  97% {
    width: 0;
  }
  100% {
    width: 0;
  }
}

@keyframes typing1 {
  0% {
    border-right: 3px solid;
    width: 0;
  }
  0.5% {
    border-right: 3px solid;
    width: 0;
  }
  16.5% {
    width: 12ch;
    border-right: 3px solid;
  }
  22% {
    width: 12ch;
    border-right: 3px solid;
  }
  30% {
    width: 0;
    border-right: 3px solid;
  }
  33% {
    border-right: none;
  }
  100%{
    border-right: none;
  }
}
@keyframes typing2 {
  0% {
    border-right: none;
    width: 0;
  }
  30% {
    border-right: none;
  }
  36% {
    border-right: 3px solid;
    width: 0;
  }
  49.5% {
    border-right: 3px solid;
    width: 18.5ch;
  }
  55% {
    border-right: 3px solid;
    width: 18.5ch;
  }
  63% {
    border-right: 3px solid;
    width: 0;
  }
  66% {
    border-right: none;
  }
  100% {
    border-right: none;
  }
}
@keyframes typing3 {
  0% {
    border-right: none;
    width: 0;
  }
  63% {
    border-right: none;
  }
  69% {
    border-right: 3px solid;
    width: 0;
  }
  82.5%  {
    border-right: 3px solid;
    width: 16ch;
  }
  88.5% {
    border-right: 3px solid;
    width: 16ch;
  }
  97% {
    border-right: 3px solid;
    width: 0;
  }
  100% {
    border-right: none;
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}

</style>
