<script setup lang="ts">

</script>

<template>
  <div class="footer" w-screen flex flex-col justify-between items-center mt-30px>
    <div class="banner w-7/10" flex-col justify-evenly items-center mt-30px>
      <div class="banner__desc" flex flex-col items-center>
        <h2 class="desc-title" w-full text-xl font-500>
          KEVIN LE VAN PHUNG
        </h2>
        <p class="desc-text" w-full text-sm text-true-gray-500 mt-10px>
          A Frontend focused Web Developer that keeps developping his skills in order to be the Web Developer you need!
        </p>
      </div>
      <div class="banner__social" mt-20px>
        <h2 class="social-title" text-xl mb-20px>
          SOCIAL LINKS
        </h2>
        <div class="social-icons" flex justify-between mb-20px>
          <a href="#" flex flex-col justify-between items-center>
            <span class="icon i-carbon-logo-linkedin" mb-5px />
            <p class="icon-text" text-xs>
              Linkedin
            </p>
          </a>
          <a href="#" flex flex-col justify-between items-center>
            <span class="icon i-carbon-logo-github" />
            <p class="icon-text" text-xs>
              Github
            </p>
          </a>
          <a href="#" flex flex-col justify-between items-center>
            <span class="icon i-carbon-application-web" />
            <p class="icon-text" text-xs>
              Website
            </p>
          </a>
        </div>
      </div>
    </div>
    <div class="copyright" relative text-xs mt-30px mb-15px>
      Copyright 2022, Made by <a href="#">Kevin Le Van Phung</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: black;
}
.icon {
  font-size: large;
  color: white;
  background-color: white;
}
.copyright::before {
 content: '';
 position: absolute;
 top: -15px;
 left: calc(50% - 100px);
 width: 200px;
 height: 1px;
 background-color: grey;
}
</style>
