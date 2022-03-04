<script setup lang="ts">
</script>

<template>
  <section class="contact-section z-1" relative w-screen h-screen flex flex-col justify-start items-center>
    <div class="color-overlay -z-1" absolute h-screen w-screen />
    <h2 class="header" flex flex-col justify-between items-center mb-50px mt-50px>
      <span class="header__title" relative text-fuchsia-500 text-lg font-semibold text-center mb-15px>CONTACT</span>
      <span class="header__text w-6/10" text-sm font-600 leading-tight text-true-gray500>Submit the form below so I can get back to you as soon as possible</span>
    </h2>
    <div class="form-container w-15/20">
      <form class="form" action="https://formsubmit.co/levanphungk@gmail.com" method="POST" w-full flex flex-col justify-between>
        <label class="form-field" aria-label="Enter Name">
          <input type="text" name="name" placeholder="&nbsp;" required>
          <span class="placeholder">Enter Name</span>
        </label>
        <label class="form-field" aria-label="Enter Email">
          <input type="email" name="email" placeholder="&nbsp;" required>
          <span class="placeholder">Enter Email</span>
          <span class="error-message" aria-live="polite" />
        </label>
        <label class="form-field" aria-label="Enter Subject">
          <input type="text" name="_subject" value="" placeholder="&nbsp;" required>
          <span class="placeholder">Enter Subject</span>
        </label>
        <label class="form-field" aria-label="Write your Message">
          <textarea name="message" placeholder="&nbsp;" rows="10" />
          <span class="placeholder">Write your message</span>
        </label>
        <input type="hidden" name="_template" value="table">
        <!-- <input type="hidden" name="_next" value="http://localhost:4000/"> TO CHNAGE WHEN I PUT IT ONLINE -->
        <input type="hidden" name="_captcha" value="false">
        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-section {
  background-image: url("/LandingBackground.jpg");
  background-size: cover;
}
.color-overlay {
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 100%);
}
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
.form-field{
    position: relative;
    border-top: 20px solid transparent;
    input , textarea{
        border: none;
        appearance: none;
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(8px);
        padding: 12px;
        border-radius: 3px;
        width: 100%;
        height: 30px;
        &[name="message"] {
            height:150px
        }
        &:focus, &:not(:placeholder-shown) {
            border-color: transparent;
            & + .placeholder{
                top : -14px;
                left: 0px;
                font-size: 10px;
                color: #D946EF;
            }
        }
    }
    .placeholder {
        position: absolute;
        left: 12px;
        top: 2.5px;
        color: #737373;
        transition: top 300ms ease, color 300ms ease, font-size 300ms ease;
    }
    .error-message {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 8px;
        font-size: 12px;
        background: #d30909;
        color: #fff;
        height: 20px;
        &:empty {
            display: none;
        }
    }
}
</style>
