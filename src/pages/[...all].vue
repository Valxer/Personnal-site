<template>
  <router-view />
  <Navbar />
  <div class="error-container" min-w-300px w-screen min-h-750px flex flex-col justify-end items-center>
    <div class="text-section w-8/10 h-3/10" flex flex-col justify-center items-center mb-100px text-white>
      <h1 text-8xl font-700>
        Oops!
      </h1>
      <p text-3xl mt-50px>
        We couldn't find that page.
      </p>
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
.error-container {
  background-color: #111111;
  background-image: url("/404.svg");
  background-repeat: no-repeat;
  background-size: 78%;
  background-position: 50% 25%;
  @media screen and (min-width: 640px) {
    height: 100vh;

    background-size: 633px 500px;
    background-position: 50% 25%;
  }
  @media screen and (min-width: 1023px) {
     @media screen and (max-height:1280px) {
       justify-content: center;
       align-items: flex-end;
       background-size: 50%;
       background-position: 5% 50%;
       .text-section {
         margin: 0;
         height: 50%;
         width: 45%;
         align-items: flex-start;
       }
     }
    @media screen and (min-height:1280px) {
      background-size: 950px 700px;
      background-position: 50% 25%;
      .text-section {
        margin-bottom: 100px;
        margin-top: 200px;
        p {
          font-size: 3rem;
          line-height: 1;
        }
      }
    }
  }
  @media screen and (min-width: 1600px) {
    justify-content: center;
    align-items: flex-end;
    background-size: auto;
    background-position: 5% 70%;
    .text-section {
      height: 50%;
      width: 45%;
      align-items: flex-start;
    }
  }
}
</style>
