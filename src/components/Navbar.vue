<template>
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
</template>

<style>
.site-logo {
  background-image: url("/logo.svg");
  background-size: cover;
}
</style>
