<script setup lang="ts">
</script>

<template>
  <section class="about-section" relative w-screen h-screen flex flex-col justify-center items-center text-true-gray600>
    <div class="content h-8/10" flex flex-col justify-between items-center>
      <h2 class="header" flex flex-col justify-between items-center>
        <span class="header__title" relative text-fuchsia-500 text-lg font-semibold mb-10px>ABOUT ME</span>
        <span class="header__text w-7/10" font-600>Get to know more about me, what I do and my current skills in terms of programming and technology</span>
      </h2>
      <div class="details">
        <div class="details__main">
          <h3 class="details__main-title">
            Hello !
          </h3>
          <div class="details__main-details">
            <p class="details__main-details-para">
              I'm
            </p>
            <p class="details__main-details-para">
              I'm working on
            </p>
            <p class="details__main-details-para">
              I'm looking for
            </p>
          </div>
        </div>
        <div class="details__skills">
          <h3 class="details__skills-title">
            My Skills
          </h3>
          <div class="skills">
            <div class="skills__skill">
              HTML
            </div>
            <div class="skills__skill">
              CSS
            </div>
            <div class="skills__skill">
              SASS
            </div>
            <div class="skills__skill">
              Javascript
            </div>
            <div class="skills__skill">
              Typecript
            </div>
            <div class="skills__skill">
              VUE
            </div>
            <div class="skills__skill">
              Express
            </div>
            <div class="skills__skill">
              Github
            </div>
            <div class="skills__skill">
              SEO
            </div>
            <div class="skills__skill">
              SQL
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScrollButton />
  </section>
</template>

<style scoped lang="scss">
.about-section {
    background-color: #FAFAFA;
}
.header__title::after {
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    background:rgb(192, 38, 211);
    position: absolute;
    left:0;
    top: 50%
}
</style>
