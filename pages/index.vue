<template>
  <div class="bg-[#232323] w-full min-h-screen pb-16">
    <div class="w-7/12 mx-auto pt-16">
      <div class="w-24 mx-auto h-24 bg-gray-100 rounded-full"></div>
      <h1 class="text-5xl text-white text-center font-bold mt-5">Adams Aimé-Désiré</h1>
      <h1 class="text-xl text-neutral-400 text-center font-normal mt-2">Javascript developer</h1>
      <div class="flex items-center justify-center gap-x-2 mt-4">
        <div class="w-2 h-2 rounded-full bg-green-500"></div>
        <p class="text-sm text-zinc-300 text-center font-normal">Available for new opportunities</p>
      </div>
      <div class="flex items-center justify-center gap-x-5 mt-5">
        <UTooltip class="cursor-pointer" text="Twitter">
          <div class="text-neutral-600 text-3xl">
            <UIcon name="i-mdi-twitter" />
          </div>
        </UTooltip>
        <UTooltip class="cursor-pointer" text="Linkedin">
          <div class="text-neutral-600 text-3xl">
            <UIcon name="i-mdi-linkedin" />
          </div>
        </UTooltip>
        <UTooltip class="cursor-pointer" text="Github">
          <div class="text-neutral-600 text-3xl">
            <UIcon name="i-mdi-github" />
          </div>
        </UTooltip>
      </div>

      <div class="flex items-center justify-center gap-x-3 mt-8">
        <button class="bg-white text-black font-medium flex items-center justify-center w-72 h-11 rounded-lg">
          Send an email
        </button>
        <span class="font-medium text-sm text-lg text-neutral-600">or</span>
        <button
          class="bg-neutral-800 border border-neutral-700 text-white font-medium flex items-center justify-center w-72 h-11 rounded-lg">
          Leave a message
        </button>
      </div>
    </div>

    <div class="w-7/12 mx-auto pt-16 flex justify-center">
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
          <button class="bg-[#282828] hover:bg-[#3e3e3e] w-full h-11 text-white flex items-center justify-center gap-x-2 rounded-lg border border-[#2e2e2e] mt-5">
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
          <button class="bg-[#282828] hover:bg-[#3e3e3e] w-full h-11 text-white flex items-center justify-center gap-x-2 rounded-lg border border-[#2e2e2e] mt-5">
            View all
            <UIcon name="i-mdi-arrow-right" />
          </button>
        </div>
      </div>
    </div>

    <div class="w-7/12 mx-auto pt-16 flex justify-center">
      <div class="w-8/12">
        <h3 class="text-2xl text-white text-center font-medium">You have a project ? Let's talk about it</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import Layout from '~/layouts/Layout.vue';

</script>

<style></style>