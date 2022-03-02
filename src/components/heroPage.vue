<script setup lang="ts">

</script>

<template>
  <section class="hero-section z-1" relative w-screen h-screen flex justify-center items-center>
    <div class="color-overlay -z-1" absolute h-screen w-screen />
    <div class="menu" absolute top-0 h-100px w-screen flex justify-between items-center>
      <div class="site-logo" w-50px h-50px ml-25px />
      <div class="navbar" mr-25px>
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
    <div class="hello w-3/4" flex flex-col items-center>
      <div class="hello_main w-1/1" h-250px flex flex-col justify-between>
        <div class="hello_main-text" flex flex-col items-center>
          <p class="text-title" relative text-fuchsia-600 font-medium>
            HELLO THERE
          </p>
          <h1 class="text-description" text-2xl mt-10px mx-auto>
            I am Kevin Le Van Phung
          </h1>
          <div class="wrappper" text-2xl relative w-300px h-32px>
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
          <button>MORE ABOUT ME</button>
        </div>
      </div>
      <div class="hello_scroll" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-image: url("/LandingBackground.jpg");
  background-size: cover;
}
.color-overlay {
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 100%);
}
.site-logo {
  background-image: url("/logo.svg");
  background-size: cover;
}
.text-title {
  width: 15ch;
}
.text-title:before {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background:rgb(192, 38, 211);
  position: absolute;
  left:0;
  top: 50%
}
.text-title:after {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background:rgb(192, 38, 211);
  position: absolute;
  right:0;
  top: 50%
}
.typing {
  position: absolute;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  border-right: none;
  text-align: left;
}
.typing1 {
  animation: typing1 12s steps(15) infinite , blink .5s step-end infinite alternate;
}
.typing2 {
  animation: typing2 12s steps(26) infinite , blink .5s step-end infinite alternate;
}
.typing3 {
  animation: typing3 12s steps(22) infinite , blink .5s step-end infinite alternate;
}
button {
  border: 2px solid white;
  width: 175px;
  padding-top: 5px;
  padding-bottom: 5px;
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
}
@keyframes typing2 {
  0% {
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
}
@keyframes typing3 {
  0% {
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
