<template>
  <div class="bg-[#0A0A0A] w-full min-h-screen pb-40">
    <div class="w-7/12 mx-auto pt-16">
      <div class="relative w-44 h-56 mx-auto h-24 rounded-xl border border-stone-600 p-1">

        <img src="~/assets/images/profil.jpg" alt="artboard" class="w-full h-full object-cover rounded-xl">
      </div>
      <h1 class="text-5xl text-white text-center font-bold mt-10">Adams Aimé-Désiré</h1>
      <h1 class="text-xl text-white text-center font-semibold mt-2">Javascript developer</h1>
      <div class="flex items-center justify-center gap-x-2 mt-4">
        <div class="w-4 h-4 rounded-full border border-green-500 flex items-center justify-center">
          <div class="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <p class="text-sm text-zinc-400 text-center font-normal">Available for new opportunities</p>
      </div>
      <div class="flex items-center justify-center gap-x-10 mt-8">
        <UTooltip class="cursor-pointer" text="Twitter">
          <div class="text-neutral-400 text-xl flex items-center justify-center gap-x-1">
            <UIcon name="i-mdi-twitter" />
            <span>Twitter</span>
          </div>
        </UTooltip>
        <UTooltip class="cursor-pointer" text="Linkedin">
          <div class="text-neutral-400 text-xl flex items-center justify-center gap-x-1">
            <UIcon name="i-mdi-linkedin" />
            <span>Linkedin</span>
          </div>
        </UTooltip>
        <UTooltip class="cursor-pointer" text="Github">
          <div class="text-neutral-400 text-xl flex items-center justify-center gap-x-1">
            <UIcon name="i-mdi-github" />
            <span>Github</span>
          </div>
        </UTooltip>
      </div>

      <div class="w-96 mx-auto mt-10 flex justify-center">
        <button
          class="relative w-80 h-11 rounded-lg bg-[#282828] text-stone-400 text-center text-sm font-semibold flex items-center justify-center gap-x-2 hover:bg-neutral-700 hover:text-stone-200">
          <UIcon name="i-mdi-laptop-account" class="text-xl" /> Book a 30 minutes call
          <img src="~/assets/images/art_5.png" alt="artboard" class="absolute top-10 left-0 w-10 rotate-12">
        </button>
      </div>
    </div>

    <div class="relative w-[600px] mx-auto pt-24">
      <h3 class="text-lg text-white font-bold">About me</h3>
      <p class="text-stone-400 font-normal mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
        deserunt mollitia sed ut officia minima, architecto libero excepturi pariatur quisquam ea inventore veritatis
        velit? Similique voluptatum commodi quod repudiandae!</p>
      <p class="text-stone-400 font-normal mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
        deserunt mollitia sed ut officia minima, architecto libero excepturi pariatur quisquam ea inventore veritatis
        velit? Similique voluptatum commodi quod repudiandae!</p>

      <button
        class="bg-[#282828] hover:bg-[#3e3e3e] w-full h-11 text-white flex items-center justify-center gap-x-2 rounded-lg border border-[#2e2e2e] mt-10">
        Know more
        <UIcon name="i-mdi-arrow-right" />
      </button>
    </div>

    <div class="w-[600px] mx-auto pt-16">
      <h3 class="text-lg text-white font-bold">Work experience</h3>

      <div class="mt-10 flex items-start justify-between">
        <div class="w-[220px]">
          <p class="text-stone-600 text-sm font-semibold">Sep. 2022 - Now</p>
        </div>
        <div class="w-fit">
          <p class="text-stone-400 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
            deserunt mollitia sed ut officia minima, architecto libero excepturi pariatur quisquam ea inventore veritatis
            velit? Similique voluptatum commodi quod repudiandae!</p>
        </div>
      </div>

      <div class="mt-5 flex items-start justify-between">
        <div class="w-[220px]">
          <p class="text-stone-600 text-sm font-semibold">Mar. 2022 - Sep. 2022</p>
        </div>
        <div class="w-fit">
          <p class="text-stone-400 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
            deserunt mollitia sed ut officia minima, architecto libero excepturi pariatur quisquam ea inventore veritatis
            velit? Similique voluptatum commodi quod repudiandae!</p>
        </div>
      </div>

      <button
        class="bg-[#282828] hover:bg-[#3e3e3e] w-full h-11 text-white flex items-center justify-center gap-x-2 rounded-lg border border-[#2e2e2e] mt-10">
        Know more
        <UIcon name="i-mdi-arrow-right" />
      </button>
    </div>

    <div class="w-[600px] mx-auto pt-24">
      <h2 class="text-3xl text-center text-white font-bold">Got a question or project idea? Contact me and let's discuss how we can work together to bring your ideas to
        life.</h2>

        <div class="mt-14 w-full flex-col items-center">
          <button class="bg-indigo-500 w-80 h-12 rounded-full text-xl text-white font-bold">
            ad.aimedesire@gmail.com
          </button>

          <button class="bg-indigo-500 w-80 h-12 rounded-full text-xl text-white font-bold mt-5">
            Leave a message
          </button>
        </div>
    </div>

    <BottomNavigation />
  </div>
</template>

<script setup>
import BottomNavigation from '~/components/BottomNavigation.vue';
import Layout from '~/layouts/Layout.vue';

</script>

<style></style>