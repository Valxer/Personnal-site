<template>
    <section id="project-section" class="project-section" w-screen h-screeen>
        <h2 class="header" flex flex-col justify-between items-center mb-30px mt-50px>
            <span class="header__title" relative text-fuchsia-500 text-lg font-semibold text-center mb-30px>PROJECTS</span>
            <span class="header__text w-6/10" text-sm font-600 leading-tight text-true-gray500>Here you will find some of the personal projects I relaised<br/>Click the button to see more</span>
        </h2>
    </section>
</template>

<style scoped lang="scss">
.header__title::after {
    content: '';
    display: block;
    width: 3rem;
    height: 2px;
    background:rgb(192, 38, 211);
    position: absolute;
    left: 50%;
    top: calc(100% + .2rem);
    transform: translateX(-50%);
    border-radius: 5px;
}
</style>