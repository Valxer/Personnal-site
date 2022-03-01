<script setup lang="ts">

</script>

<template>
  <section class="hero-section" relative h-screen>
    <div class="color-overlay" absolute h-screen w-screen />
    <div class="menu" h-100px flex justify-between items-center>
      <div class="site-logo" w-50px h-50px ml-25px z-1 />
      <div class="navbar" mr-25px z-1>
        <ul w-300px flex justify-around>
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
  </section>
</template>

<style scoped>
.hero-section {
  background-image: url("../../public/LandingBackground.jpg");
  background-size: cover;
}
.color-overlay {
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 100%);
}
.site-logo {
  background-image: url("../../public/logo.svg");
  background-size: cover;
}
</style>
