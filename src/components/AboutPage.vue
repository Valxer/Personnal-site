<script setup lang="ts">

import { contactScroll, skills } from '~/composables'

</script>

<template>
  <section
    id="about-section"
    class="about-section"
    relative
    w-screen
    flex
    flex-col
    justify-center
    items-center
    text-true-gray600
  >
    <div class="content h-9/10" flex flex-col justify-start items-center mt-40px>
      <h2 class="header" flex flex-col justify-between items-center mb-50px lg:mt-140px>
        <span class="header__title" relative text-fuchsia-500 text-2xl font-semibold text-center mb-30px>
          ABOUT ME
        </span>
        <span class="header__text w-6/10" text-sm font-600 leading-tight>
          Get to know more about me and my current skills
        </span>
      </h2>
      <div class="details" w-full flex flex-col justify-between items-center text-left>
        <div class="details__main w-7/10" mb-30px>
          <h3 class="details__main-title" text-true-gray800 font-600 text-xl mb-25px>
            Hello !
          </h3>
          <div class="details__main-details" text-justify text-sm>
            <p class="details__main-details-para">
              My name is Kevin Le Van Phung and I'm a passionate <strong>Web Developer</strong>
              with a preference towards<strong>Frontend development</strong>.
            </p>
            <p class="details__main-details-para">
              I love to be up-to-date about the tools I'm using especially my preferred framework :
              <strong>Vue</strong>.
            </p>
            <p class="details__main-details-para" mt-25px>
              I'm curently working on my portfolio in order to display my skills to any person interested
              in seeing what I'm capable of.
            </p>
            <p class="details__main-details-para" mt-25px>
              I would love to hear from you. Whether it's a <strong>project</strong>, <strong>job</strong>
              opportunity,helpful <strong>criticism</strong> about my work or just a chat. Feel free to
              <strong>contact</strong> me!
            </p>
          </div>
        </div>
        <div class="details__skills w-7/10">
          <h3 class="details__skills-title" text-dark-700 font-600 text-xl mb-40px>
            My Skills
          </h3>
          <div class="skills" flex flex-wrap justify-center>
            <div v-for="skill in skills" :key="skill" class="skills__skill">
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
      <button
        class="contact-btn"
        mt-50px
        mb-75px
        px-15px sm:px-30px
        py-5px sm:py-10px
        border-3
        border-fuchsia600
        text-dark-700
        text-lg sm:text-2xl
        font-semibold
        @click="contactScroll"
      >
        CONTACT
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-section {
    background-color: #EEEEEE;
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
.skills{
  gap: 10px;
}
.skills__skill{
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgb(153, 153, 153, 0.5);
}
.contact-btn {
  transition: 300ms ease;
  &:hover {
    transform: scale(1.3);
    transition: 300ms ease;
  }
}
@media screen and (min-width: 1024px) {
  .about-section {
    background-image: url("/About.svg");
    background-repeat: no-repeat;
    background-size: 19%;
    background-position: 100% 15%;
    @media screen and (min-width: 1350px) {
      background-position: 100% 50%;
    }
    @media screen and (min-width: 1800px) {
      background-size: 25%;
      background-position: 100% 50%;
    }
    @media screen and (min-width: 2200px) {
      background-size: contain;
      background-position: 95% 50%;
    }
  }
  .details {
      margin-top: 15px;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      width: 80%;
      @media screen and (min-width:1350px) {
              width: 60%
          }
      &__main {
          width: 60%;
          display: flex;
          flex-direction: column;
      }
      &__skills {
          width: 30%;
      }
  }
}
</style>
