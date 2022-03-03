<script setup lang="ts">
</script>

<template>
  <section class="about-section" relative w-screen h-screen>
    <h2 class="header">
      <span class="header__title">ABOUT ME</span>
      <span class="header__text">Get to know more about me, what I do and my current skills in terms of programming and technology</span>
    </h2>
    <div class="content">
      <div class="content__main">
        <h3 class="content__main-title">
          Hello !
        </h3>
        <div class="content__main-details">
          <p class="content__main-details-para">
            I'm
          </p>
          <p class="content__main-details-para">
            I'm working on
          </p>
          <p class="content__main-details-para">
            I'm looking for
          </p>
        </div>
      </div>
      <div class="content__skills">
        <h3 class="content__skills-title">
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
    <ScrollButton />
  </section>
</template>

<style scoped lang="scss">
.about-section {
    background-color: #FAFAFA;
}
</style>
