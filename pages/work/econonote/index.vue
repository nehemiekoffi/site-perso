<template>
  <PortfolioLayout>
    <div class="bg-[#0A0A0A] w-full min-h-screen pb-40">
      <div
        class="relative w-11/12 sm:w-9/12 md:w-7/12 max-w-5xl mx-auto pt-10 pb-"
      >
        <nuxt-link to="/work">
          <div
            class="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center text-2xl text-white border border-stone-700"
          >
            <UIcon name="i-mdi-arrow-left" />
          </div>
        </nuxt-link>
        <h1 class="text-4xl sm:text-5xl text-white text-center font-bold mt-5">
          EconoNote
        </h1>
        <p class="text-center text-stone-500 text-lg font-semibold mt-5">
          Expense tracking app
        </p>

        <a href="https://econonote.aimedesire.com" target="_blank" rel="noopener noreferrer">
          <div class="text-center text-indigo-400 font-medium mt-5  flex items-center justify-center gap-x-1">
            view website
            <UIcon name="i-mdi-arrow-right" class="mt-1" />
          </div>
        </a>

        <div class="w-full h-40 rounded-2xl bg-stone-800 mt-10">
          <img src="~/assets/images/econonote.png" class="w-full h-full object-cover rounded-2xl" />
        </div>

        <div class="w-full lg:w-9/12 mx-auto rounded-2xl mt-10">
          <h3 class="text-3xl text-white font-semibold">Overview</h3>
          <p class="mt-3 text-stone-400">
            Econonote is an expense tracking application that I created for my own needs. After trying out other expense tracking applications that already existed, I couldn't find the one that suited me in terms of both simplicity and functionality. So I decided to create my own application that would meet my own requirements and have only the unique features I would need to track my expenses.
          </p>

          <h3 class="text-3xl text-white font-semibold mt-8">Stack</h3>
          <p class="mt-3 text-stone-400">
            For this project I used javascript technologies for the frontend and the backend.
          </p>
          <ul class="mt-3 text-stone-400">
            <li>- React Native</li>
            <li>- Tailwindcss</li>
            <li>- Nestjs</li>
            <li>- MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  </PortfolioLayout>
</template>

<script setup>
import PortfolioLayout from "~/layouts/PortfolioLayout.vue";
</script>

<style></style>
