<!-- Home.vue -->

<template>
  <div class="relative">
    <NavbarComp class="border-b-2 border-b-gray-400"></NavbarComp>
    <VerticalNavbarComp class="hidden md:flex fixed top-0 z-10"></VerticalNavbarComp>
    <HeroComp></HeroComp>
    <div
      class="px-16 py-36 lg:px-36 bg-cover bg-[url('../assets/background.svg')] brightness-50 flex flex-col items-center space-y-16 pb-20">
      <ScrollingElementComp></ScrollingElementComp>
      <section class="flex flex-col justify-center lg:flex-row lg:items-end space-y-10 lg:space-x-10 relative">
        <div class="space-y-10">
          <section
            class="px-4 py-4 bg-[#1D232A] w-44 lg:w-60 rounded-br-xl rounded-tl-xl outline outline-[5px] outline-[#12F7D6]">
            <h1 class="text-center text-2xl lg:text-3xl text-white">About Me</h1>
          </section>
          <section class="rounded-xl bg-[#1D232A] px-4 py-6 space-y-2 max-w-full lg:max-w-96">
            <p class="text-start text-[#12F7D6] text-xs">&lt;p&gt;</p>
            <h1 class="text-bold text-4xl text-[#12F7D6]">Hello!</h1>
            <article class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum vitae vero
              magnam
              repellendus, amet nostrum
              dolorum quo. Consequatur, fuga eligendi labore corporis modi veniam? Ipsum hic cumque maiores dolor.
              <br>
              <br>
              Suscipit odit recusandae minus harum hic corporis ab sapiente id culpa? Culpa ex accusantium labore
              consequatur
              dolorem ut doloremque, nobis amet beatae et voluptate cupiditate mollitia enim perferendis at placeat!
            </article>
            <p class="text-start text-[#12F7D6] text-xs">&lt;/p&gt;</p>
          </section>
        </div>
        <div class="flex justify-center lg:w-96">
          <img class="w-[600px] rounded-2xl"
            src="https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="programmer image">
        </div>
      </section>
    </div>
    <div class="px-16 py-36 relative overflow-hidden">
      <img class="absolute left-0 top-0 w-full opacity-10 h-full"
        src="https://images.unsplash.com/photo-1557853197-aefb550b6fdc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="coding image">
      <div class="flex flex-col items-center space-y-16 relative">
        <ScrollingElementComp></ScrollingElementComp>
        <section class="space-y-2">
          <h1 class="text-center text-5xl lg:text-5xl text-[#12F7D6]">Skills</h1>
          <svg width="174" height="12" viewBox="0 0 174 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM162.667 6C162.667 8.94552 165.054 11.3333 168 11.3333C170.946 11.3333 173.333 8.94552 173.333 6C173.333 3.05448 170.946 0.666667 168 0.666667C165.054 0.666667 162.667 3.05448 162.667 6ZM6 7H168V5H6V7Z"
              fill="#12F7D6" />
          </svg>
        </section>
      </div>
      <p class="text-center mt-4 relative">Lorem ipsum, dolor sit amet consectetur</p>
      <div
        class="flex flex-col lg:flex-row items-center justify-evenly space-y-10 lg:space-y-0 relative my-8 lg:space-x-0">
        <div class="h-36 w-60 bg-[#98FAEC] rounded-xl overflow-hidden">
          <div class="w-2 h-full bg-[#0C73B8]"></div>
        </div>
        <div class="h-36 w-60 bg-[#98FAEC] rounded-xl overflow-hidden">
          <div class="w-2 h-full bg-[#0C73B8]"></div>
        </div>
      </div>
      <div
        class="relative px-16 mt-24 grid grid-cols-2 grid-rows-2 items-center gap-8 justify-items-center lg:grid-rows-1 lg:grid-cols-4">
        <div class="w-40 h-40 bg-white rounded-full">

        </div>
        <div class="w-40 h-40 bg-white rounded-full">

        </div>
        <div class="w-40 h-40 bg-white rounded-full">

        </div>
        <div class="w-40 h-40 bg-white rounded-full">

        </div>
      </div>
    </div>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import VerticalNavbarComp from "@/components/VerticalNavbarComp.vue";
import HeroComp from '@/components/HeroComp.vue';
import ScrollingElementComp from '@/components/ScrollingElementComp.vue';

export default {
  components: {
    NavbarComp,
    FooterComp,
    VerticalNavbarComp,
    HeroComp,
    ScrollingElementComp,
  }
}
</script>

