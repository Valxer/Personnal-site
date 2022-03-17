<template>
  <div
    class="loader-container"
    w-screen
    h-screen
    fixed
    bg-dark900
    flex
    justify-center
    items-center
  >
    <div class="container" relative w-full flex justify-center items-center>
      <span class="ring" />
      <span class="ring" />
      <span class="ring" />
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader-container {
    animation: fade-out 2s both linear;
}
.ring {
    position: relative;
    width: 150px;
    height: 150px;
    margin: -30px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top: 4px solid #46efd9;
    animation: animate 1s linear infinite;
    box-shadow: unset;
    &:nth-child(2) {
        animation: animate2 1s linear infinite;
        animation-delay: -500ms;
        border-left: 4px solid #efd946;
        border-top: 4px solid transparent;
        &::before {
            content: '';
            position: absolute;
            top: initial;
            bottom: 12px;
            left: 12px;
            width: 15px;
            height:15px;
            background: #efd946;
            border-radius: 50%;
            box-shadow: 0 0 0 5px #efd94633,
            0 0 0 10px #efd94622,
            0 0 0 20px #efd94611,
            0 0 20px #efd946,
            0 0 50px #efd946;
        }
    }
    &:nth-child(3) {
        position: absolute;
        top: -66.66px;
        animation: animate2 1s linear infinite;
        animation-delay: -875ms;
        border-top: 4px solid transparent;
        border-left: 4px solid #d946ef;
        &::before {
            content: '';
            position: absolute;
            top: initial;
            bottom: 12px;
            left: 12px;
            width: 15px;
            height:15px;
            background: #d946ef;
            border-radius: 50%;
            box-shadow: 0 0 0 5px #d946ef33,
            0 0 0 10px #d946ef22,
            0 0 0 20px #d946ef11,
            0 0 20px #d946ef,
            0 0 50px #d946ef;
        }
    }
    &::before {
        content: '';
        position: absolute;
        top: 12px;
        right: 12px;
        width: 15px;
        height:15px;
        background: #46efd9;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #46efd933,
        0 0 0 10px #46efd922,
        0 0 0 20px #46efd911,
        0 0 20px #46efd9,
        0 0 50px #46efd9;

    }
}
p {
    position: absolute;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.15rem;
    bottom: -100px;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes animate2 {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
@keyframes fade-out {
    0%{
        opacity: 1;
        z-index: 5;
    }
    90%{
        opacity: 1;
        z-index: 5;
    }
    99%{
        opacity: 0;
        z-index: 5;
    }
    100% {
        opacity: 0;
        z-index: -5
    }
}
</style>
