<template>
  <PortfolioLayout>
    <div class="bg-[#0A0A0A] w-full min-h-screen pb-40">
      <div class="relative w-11/12 sm:w-9/12 md:w-7/12 max-w-5xl mx-auto pt-10 pb-10">
        <div class="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center text-2xl text-white" onclick="">
          <UIcon name="i-mdi-arrow-left" />
        </div>
        <h1 class="text-4xl sm:text-5xl text-white text-center font-bold mt-5">EconoNote</h1>
        <p class="text-center text-stone-500 text-lg font-semibold mt-5">Expense tracking app</p>

        <div class="w-full h-40 rounded-2xl bg-orange-500 mt-10"></div>

        <div class="w-9/12 mx-auto h-40 rounded-2xl bg-orange-500 mt-10"></div>
      </div>
    </div>
  </PortfolioLayout>
</template>

<script setup>
import PortfolioLayout from '~/layouts/PortfolioLayout.vue';
</script>

<style></style>