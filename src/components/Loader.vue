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
    <div class="box-wrap">
      <div class="box one" />
      <div class="box two" />
      <div class="box three" />
      <div class="box four" />
      <div class="box five" />
      <div class="box six" />
      <p>Loading ...</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
$b-size: 30vmin;
$box-wrapper-margin: calc((100% - #{$b-size})/2) calc((100% - #{$b-size})/2);

.loader-container {
    animation: fade-out 3s both linear;
}
.box-wrap {
    position: relative;
    width: $b-size;
    height: $b-size;
    margin: $box-wrapper-margin;
    .box {
        transform: rotate(-45deg);
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(to right, #46efd9, #efd946, #8b1c9c);
        background-position: 0% 50%;
        background-size: 1000% 1000%;
        visibility: hidden;

        &.one {
            animation:
                moveGradient 3s infinite,
                oneMove 2s infinite;
        }

        &.two {
            animation:
                moveGradient 3s infinite,
                twoMove 2s .085s infinite;
        }

        &.three {
            animation:
                moveGradient 3s infinite,
                threeMove 2s .17s infinite;
        }

        &.four {
            animation:
                moveGradient 3s infinite,
                fourMove 2s .3285s infinite;
        }

        &.five {
            animation:
                moveGradient 3s infinite,
                fiveMove 2s .4143s infinite;
        }

        &.six {
            animation:
                moveGradient 3s infinite,
                sixMove 2s .5s infinite;
        }
    }
    p {
        position: absolute;
        font-size: 2rem;
        bottom: -30%;
        left: calc(50% - 3ch)
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
@keyframes moveGradient {

    to {
        background-position: 100% 100%
    }
}

@keyframes oneMove {

    0% {
        visibility: visible;
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes twoMove {

    0% {
        visibility: visible;
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes threeMove {

    0% {
        visibility: visible;
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
    71.4285% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes fourMove {

    0% {
        visibility: visible;
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
    71.4285% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes fiveMove {

    0% {
        visibility: visible;
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes sixMove {

    0% {
        visibility: visible;
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}
</style>
