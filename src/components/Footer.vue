<script setup lang="ts">

</script>

<template>
  <div class="footer" w-screen flex flex-col justify-between items-center mt-30px>
    <div class="banner w-7/10" flex flex-col items-center mt-30px>
      <div class="banner__desc" w-full flex flex-col items-center mb-20px>
        <h2 class="desc-title" w-full text-xl font-500>
          KEVIN LE VAN PHUNG
        </h2>
        <p class="desc-text" w-full text-sm text-true-gray-500 mt-15px>
          A Frontend focused Web Developer that keeps developping his skills in order to be the Web Developer you need!
        </p>
      </div>
      <div class="banner__social" max-w-300px w-full flex flex-col>
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
    <div class="copyright" w-screen relative text-xs mt-50px mb-25px>
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
 top: -25px;
 left: 20%;
 width: 60%;
 height: 1px;
 background-color: grey;
}
@media screen and (min-width: 1024px) {
  .banner {
    width: 85%;
    flex-direction: row;
    justify-content: space-between;
    &__desc, &__social {
      width: 45%;
      height: 110px;
      text-align: left;
    }
  }
}
</style>
