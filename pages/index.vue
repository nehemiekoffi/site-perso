<template>
  <div class="bg-[#0A0A0A] w-full min-h-screen pb-16">
    <div class="w-7/12 mx-auto pt-16">
      <div class="relative w-44 h-56 mx-auto h-24 rounded-md border border-stone-600 p-1">
        
        <img src="~/assets/images/profil.jpg" alt="artboard" class="w-full h-full object-cover rounded-md">
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

      <img src="~/assets/images/art_1.png" alt="artboard" class="absolute top-40 right-44 w-10">

      <div class="w-96 mx-auto mt-10 flex justify-center">
        <button
          class="relative w-80 h-11 rounded-lg bg-neutral-800 text-stone-500 text-center text-sm font-semibold flex items-center justify-center gap-x-2 hover:bg-neutral-700 hover:text-stone-200">
          <!-- <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-500"></div> -->
          <UIcon name="i-mdi-laptop-account" class="text-xl" /> Book a 30 minutes call
          <img src="~/assets/images/art_4.png" alt="artboard" class="absolute top-5 right-0 w-10 -rotate-12">
        </button>
      </div>
    </div>

    <!-- <img src="~/assets/images/art_2.png" alt="artboard" class="absolute top-10 right-40 w-10 rotate-45"> -->

    <div class="relative w-[600px] mx-auto pt-16">
      <h3 class="text-lg text-white font-bold">About me</h3>
      <p class="text-stone-400 font-normal mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
        deserunt mollitia sed ut officia minima, architecto libero excepturi pariatur quisquam ea inventore veritatis
        velit? Similique voluptatum commodi quod repudiandae!</p>
      <p class="text-stone-400 font-normal mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
        deserunt mollitia sed ut officia minima, architecto libero excepturi pariatur quisquam ea inventore veritatis
        velit? Similique voluptatum commodi quod repudiandae!</p>
    </div>

    <img src="~/assets/images/art_2.png" alt="artboard" class="absolute top-80 left-72 w-10">

    <div class="w-[600px] mx-auto pt-16">
      <h3 class="text-lg text-white font-bold">Work experience</h3>
      <p class="text-stone-400 font-normal mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
        deserunt mollitia sed ut officia minima, architecto libero excepturi pariatur quisquam ea inventore veritatis
        velit? Similique voluptatum commodi quod repudiandae!</p>
      <p class="text-stone-400 font-normal mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
        deserunt mollitia sed ut officia minima, architecto libero excepturi pariatur quisquam ea inventore veritatis
        velit? Similique voluptatum commodi quod repudiandae!</p>
    </div>

    <!-- <div class="w-7/12 mx-auto pt-16 flex justify-center">
      <div class="w-8/12 flex items-start gap-x-5">
        <div class="w-24">
          <h3 class="text-base text-zinc-500 text-center font-medium">About me</h3>
        </div>
        <div class="w-full">
          <p class="text-zinc-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti accusamus quo labore. Molestiae,
            eligendi sequi? Fuga dignissimos cum eveniet voluptatum neque nostrum, quisquam distinctio veniam incidunt
            vitae. Beatae, inventore! <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti
            accusamus quo labore. Molestiae,
            eligendi sequi? Fuga dignissimos cum eveniet voluptatum neque nostrum, quisquam distinctio veniam incidunt
            vitae. Beatae, inventore!
          </p>
          <button
            class="bg-[#282828] hover:bg-[#3e3e3e] w-full h-11 text-white flex items-center justify-center gap-x-2 rounded-lg border border-[#2e2e2e] mt-5">
            Know more
            <UIcon name="i-mdi-arrow-right" />
          </button>
        </div>
      </div>
    </div>

    <div class="w-7/12 mx-auto pt-16 flex justify-center">
      <div class="w-8/12 flex items-start gap-x-5">
        <div class="w-24">
          <h3 class="text-base text-zinc-500 text-center font-medium">Work</h3>
        </div>
        <div class="w-full">
          <div class="bg-[#282828] w-full h-fit border border-neutral-700 rounded-lg p-3">
            <h2 class="text-xl text-white font-semibold">EconoNote</h2>
            <p class="text-sm text-neutral-400 font-medium">Application de suivi de dépense</p>
            <button class="mt-3 text-neutral-200 text-sm font-medium flex items-center gap-x-1">View site
              <UIcon name="i-mdi-arrow-top-right" class="mt-1" />
            </button>
          </div>
          <div class="bg-[#282828] w-full h-fit border border-neutral-700 rounded-lg p-3 mt-5">
            <h2 class="text-xl text-white font-semibold">Mem'word</h2>
            <p class="text-sm text-neutral-400 font-medium">Application de suivi de dépense</p>
            <button class="mt-3 text-neutral-200 text-sm font-medium flex items-center gap-x-1">View site
              <UIcon name="i-mdi-arrow-top-right" class="mt-1" />
            </button>
          </div>
          <button
            class="bg-[#282828] hover:bg-[#3e3e3e] w-full h-11 text-white flex items-center justify-center gap-x-2 rounded-lg border border-[#2e2e2e] mt-5">
            View all
            <UIcon name="i-mdi-arrow-right" />
          </button>
        </div>
      </div>
    </div>

    <div class="w-7/12 mx-auto pt-20 flex justify-center">
      <div class="w-full mt-5">
        <h1 class="text-5xl text-center text-white font-semibold">Let's talk about your new idea</h1>
        <p class="text-center text-white w-7/12 mx-auto mt-8">If you have an idea or a project and you a help, just leave me
          a message or book a 30 minutes call</p>
      </div>
    </div> -->

    <BottomNavigation />
  </div>
</template>

<script setup>
import BottomNavigation from '~/components/BottomNavigation.vue';
import Layout from '~/layouts/Layout.vue';

</script>

<style></style>