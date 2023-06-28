<template>
  <PortfolioLayout>
    <div class="bg-[#0A0A0A] w-full min-h-screen pb-40">
      <div class="w-11/12 sm:w-9/12 md:w-7/12 max-w-5xl mx-auto pt-16 pb-10">
        <h1 class="text-4xl sm:text-5xl text-white text-center font-bold mt-10">
          Things I've worked on for customers or for my own projects
        </h1>

        <p class="text-center text-base text-neutral-400 mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          deleniti quas debitis doloribus sint. Accusamus vitae velit totam
          nobis iste aspernatur ullam rerum nemo tempore, cupiditate officiis,
          necessitatibus architecto earum?
        </p>

        <div class="w-full mt-20">
          <nuxt-link to="/work/econonote">
            <div
              class="relative lg:w-8/12 mx-auto h-fit bg-[#0f0f0f] border border-stone-800 rounded-xl px-5 py-4"
            >
              <div
                class="absolute right-2 top-2 bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md"
              >
                Side project
              </div>
              <h3 class="text-2xl text-white font-medium">EconoNote</h3>
              <p class="text-stone-400 text-sm mt-px">
                Expense tracking application
              </p>
            </div>
          </nuxt-link>

          <div
            class="relative lg:w-8/12 mx-auto h-fit bg-[#0f0f0f] border border-stone-800 rounded-xl px-5 py-4 mt-8"
          >
            <div
              class="absolute right-2 top-2 bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md"
            >
              Side project
            </div>
            <div
              class="absolute right-24 top-2 bg-red-500 text-black text-xs font-semibold px-2 py-1 rounded-md"
            >
              Soon
            </div>
            <h3 class="text-2xl text-white font-medium">My AI sensei</h3>
            <p class="text-stone-400 text-sm mt-px">
              A new way to master japanese with the power of AI
            </p>
          </div>

          <nuxt-link to="/work/hgi-institute">
            <div
              class="relative lg:w-8/12 mx-auto h-fit bg-[#0f0f0f] border border-stone-800 rounded-xl px-5 py-4 mt-8"
            >
              <div
                class="absolute right-2 top-2 bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md"
              >
                Client project
              </div>
              <h3 class="text-2xl text-white font-medium">
                Higher Ground International Institute
              </h3>
              <p class="text-stone-400 text-sm mt-px">
                Showcase site for English coach Joel
              </p>
            </div>
          </nuxt-link>

          <nuxt-link to="/work/moya-barikaa">
            <div
              class="relative lg:w-8/12 mx-auto h-fit bg-[#0f0f0f] border border-stone-800 rounded-xl px-5 py-4 mt-8"
            >
              <div
                class="absolute right-2 top-2 bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md"
              >
                Client project
              </div>
              <h3 class="text-2xl text-white font-medium">
                Moya - now Barikaa
              </h3>
              <p class="text-stone-400 text-sm mt-px">
                Discover a wide range of ads and find the best craftsman for
                your work
              </p>
            </div>
          </nuxt-link>

          <nuxt-link to="/work/subscription-portal">
            <div
              class="relative lg:w-8/12 mx-auto h-fit bg-[#0f0f0f] border border-stone-800 rounded-xl px-5 py-4 mt-8"
            >
              <div
                class="absolute right-2 top-2 bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md"
              >
                Client project
              </div>
              <h3 class="text-2xl text-white font-medium">
                MTN CI subscription portal
              </h3>
              <p class="text-stone-400 text-sm mt-px">
                Buy or top up your mobile Internet package without leaving your
                browser
              </p>
            </div>
          </nuxt-link>

          <nuxt-link to="/work/matos">
            <div
              class="relative lg:w-8/12 mx-auto h-fit bg-[#0f0f0f] border border-stone-800 rounded-xl px-5 py-4 mt-8"
            >
              <div
                class="absolute right-2 top-2 bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md"
              >
                Client project
              </div>
              <h3 class="text-2xl text-white font-medium">Matos</h3>
              <p class="text-stone-400 text-sm mt-px">
                Corporate equipment management application
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </PortfolioLayout>
</template>
<script setup>
import PortfolioLayout from "~/layouts/PortfolioLayout.vue";
</script>

<style></style>
