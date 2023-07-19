<template>
  <PortfolioLayout>
    <div class="bg-[#0A0A0A] w-full min-h-screen pb-40">
      <div class="w-11/12 sm:w-9/12 md:w-10/12 lg:w-8/12 max-w-5xl mx-auto pt-16">
        <h1
          class="text-stone-300 text-center text-sm font-medium underline underline-offset-4 decoration-1 decoration-wav uppercase thickness-8">
          Discover more about me
        </h1>
        <div class="flex flex-col md:flex-row items-start gap-x-4 mt-20">
          <div class="w-full md:w-1/3 lg:w-1/2">
            <img src="~/assets/images/photo3.jpeg" alt="artboard"
              class="w-72 md:w-full lg:w-8/12 mx-auto h- object-cover object-bottom rounded-2xl -mt-5" />
          </div>
          <div class="w-full md:w-2/3 lg:w-1/2 mt-16 md:mt-0">
            <h3 class="text-xl md:text-lg text-white font-extrabold">
              The story
            </h3>
            <p class="text-stone-400 mt-5">
              My journey as a developer begins at the end of 2019, with my
              discovery of programming and its possibilities. Possibilities that
              I set out to explore toug by learning the different programming
              languages I saw most published on the internet.
            </p>
            <br />
            <p class="text-stone-400">
              After learning a bit of java, php, python, not
              forgetting the famous html and css, I finally decided to
              concentrate fully on javascript for its ability to allow me to
              develop my own front and back-end applications.
            </p>
            <br />
            <p class="text-stone-400">
              Today, with nearly 3 years' experience under my belt, I've had to work on projects that have helped me
              consolidate my knowledge and get out of my comfort zone.
            </p>
            <br />
            <p class="text-stone-400">
              Currently, I'm a front-end developer at Skan Technologie, but the journey is just beginning and I'm planning
              to launch my own saas projects and become my own boss.
            </p>
          </div>
        </div>

        <div class="h-px w-44 mx-auto bg-stone-800 mt-20"></div>

        <div class="flex flex-col md:flex-row items-start justify-between gap-x-5 mt-20">
          <div class="w-full md:w-1/2">
            <p class="text-2xl sm:text-3xl text-white font-bold">
              I value open and honest communication for more effective
              collaboration.
            </p>
          </div>
          <div class="w-full md:w-1/2 mt-5 md:mt-0">
            <p class="text-lg md:text-xl text-stone-600">
              I prioritize transparent communication for productive
              collaboration, creating an environment where feedback is valued,
              and exceptional outcomes are achieved.
            </p>
          </div>
        </div>

        <div class="mt-28">
          <h2 class="text-3xl md:text-4xl text-center text-white font-bold">
            What I am capable of
          </h2>

          <div class="mt-6 sm:mt-10 flex items-center">
            <div class="box-shadow w-8 h-8 md:w-16 md:h-16 md:ml-10"></div>
            <div class="relative flex overflow-x-hidden">
              <div class="marq py-12 animate-marquee whitespace-nowrap">
                <span class="text-xl text-stone-400 mx-4">Web Design</span>
                <span class="text-xl text-stone-400 mx-4">User Interface Design</span>
                <span class="text-xl text-stone-400 mx-4">Web Development</span>
                <span class="text-xl text-stone-400 mx-4">Mobile App Development</span>
                <span class="text-xl text-stone-400 mx-4">API Integration</span>
                <span class="text-xl text-stone-400 mx-4">Backend Development</span>
                <span class="text-xl text-stone-400 mx-4">Wordpress Development</span>
              </div>

              <div class="marq absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span class="text-xl text-stone-400 mx-4">Web Design</span>
                <span class="text-xl text-stone-400 mx-4">User Interface Design</span>
                <span class="text-xl text-stone-400 mx-4">Web Development</span>
                <span class="text-xl text-stone-400 mx-4">Mobile App Development</span>
                <span class="text-xl text-stone-400 mx-4">API Integration</span>
                <span class="text-xl text-stone-400 mx-4">Backend Development</span>
                <span class="text-xl text-stone-400 mx-4">Wordpress Development</span>
              </div>
            </div>
            <div class="box-shadow w-8 h-8 md:w-16 md:h-16 md:mr-10"></div>
          </div>
        </div>

        <div class="w-full h-fit rounded-3xl bg-[#0f0f0f] border border-stone-800 mt-20 px-5 py-8">
          <h4 class="text-xl md:text-2xl text-stone-500 text-center font-semibold">
            Tools & Sofware I use
          </h4>
          <p class="text-stone-700 text-center text-sm">
            Tips: scroll horizontally
          </p>

          <div class="w-full md:w-10/12 lg:w-8/12 mx-auto overflow-x-scroll hide-scroll-bar mt-8">
            <div class="flex flex-nowrap">
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/openai.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/javascript.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/typescript.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/node.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/nest.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/react.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/vuejs.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/nuxt.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/angular.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/netlify.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/vite.svg" alt="artboard" class="w-12 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/wordpress.svg" alt="artboard" class="w-12 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/mongodb.svg" alt="artboard" class="w-5 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/notion.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/figma.svg" alt="artboard" class="w-7 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/tailwind.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/materialui.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/gitlab.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/github.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/git.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
              <div class="inline-block px-1 sm:px-3">
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <img src="~/assets/images/postman.svg" alt="artboard" class="w-10 mx-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:items-start justify-center mt-28">
          <div class="w-full md:w-1/2 relative flex md:block justify-between">
            <p class="text-4xl md:text-5xl text-white font-bold">
              Education <br />
              & Career
            </p>
            <img src="~/assets/images/art_2.png" alt="artboard"
              class="absolute right-10 top-5 md:relative md:mt-32 md:ml-16 w-8 -rotate-35" />
            <!-- <img src="~/assets/images/art_5.png" alt="artboard" class="mt-28 ml-16 w-16 -rotate-90"> -->
          </div>
          <div class="w-full md:w-1/2 mt-16 md:mt-0">
            <div class="">
              <p class="text-lg text-stone-500 font-semibold flex items-center gap-x-1">
                <UIcon name="i-heroicons-book-open-20-solid" />
                Education
              </p>
              <div class="bg-[#1a1a1a] w-full h-fit rounded-2xl border border-stone-800 px-5 py-3 mt-3">
                <p class="text-lg text-white font-normal">
                  Javascript developer
                </p>
                <p class="text-base text-stone-500 font-normal mt-1">
                  NaN Digital Academy
                </p>
                <p class="text-xs text-stone-600 font-medium mt-1">
                  Fev 2021 - Aout 2021
                </p>
              </div>
              <div class="bg-[#1a1a1a] w-full h-fit rounded-2xl border border-stone-800 px-5 py-3 mt-3">
                <p class="text-lg text-white font-normal">
                  Faculty of Bioscience
                </p>
                <p class="text-base text-stone-500 font-normal mt-1">
                  Félix Houphouet Boigny University
                </p>
                <p class="text-xs text-stone-600 font-medium mt-1">
                  Mar 2019 - Aout 2020
                </p>
              </div>
              <div class="bg-[#1a1a1a] w-full h-fit rounded-2xl border border-stone-800 px-5 py-3 mt-3">
                <p class="text-lg text-white font-normal">
                  Science baccalaureate
                </p>
                <p class="text-base text-stone-500 font-normal mt-1">
                  Lycée Moderne Abengourou
                </p>
                <p class="text-xs text-stone-600 font-medium mt-1">
                  Sep 2017 - Juillet 2018
                </p>
              </div>
            </div>
            <div class="mt-10">
              <p class="text-lg text-stone-500 font-semibold flex items-center gap-x-1">
                <UIcon name="i-mdi-account-tie" />
                Career
              </p>
              <div class="bg-[#1a1a1a] w-full h-fit rounded-2xl border border-stone-800 px-5 py-3 mt-3">
                <p class="text-lg text-white font-normal">ReactJS developer</p>
                <p class="text-base text-stone-500 font-normal mt-1">
                  Skan Technologie
                </p>
                <p class="text-xs text-stone-600 font-medium mt-1">
                  Sep 2022 - Now
                </p>
              </div>
              <div class="bg-[#1a1a1a] w-full h-fit rounded-2xl border border-stone-800 px-5 py-3 mt-3">
                <p class="text-lg text-white font-normal">
                  Fullstack developer (Angular x Nestjs)
                </p>
                <p class="text-base text-stone-500 font-normal mt-1">
                  Southern IT Consulting
                </p>
                <p class="text-xs text-stone-600 font-medium mt-1">
                  Mar 2022 - Sep 2022
                </p>
              </div>
              <div class="bg-[#1a1a1a] w-full h-fit rounded-2xl border border-stone-800 px-5 py-3 mt-3">
                <p class="text-lg text-white font-normal">Vuejs developer</p>
                <p class="text-base text-stone-500 font-normal mt-1">Quenium</p>
                <p class="text-xs text-stone-600 font-medium mt-1">
                  Sep 2021 - Dec 2021
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-36 pb-16">
          <h2 class="text-4xl lg:text-5xl text-white text-center font-bold">
            Let's start your project together
          </h2>
          <p class="sm:w-[500px] mx-auto text-stone-500 text-center text-lg font-medium mt-10">
            If you have a project to develop or an idea still in the pipeline,
            please contact me and we can get it moving quickly.
          </p>
          <a href="https://notionforms.io/forms/leave-a-message-jzrxto" target="_blank" rel="noopener noreferrer">
            <div class="mt-10 flex justify-center">
              <button class="bg-indigo-500 w-80 h-12 rounded-full text-white text-center sm:text-lg md:text-xl font-bold">
                Send a message
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </PortfolioLayout>
</template>

<script setup>
import PortfolioLayout from "~/layouts/PortfolioLayout.vue";
</script>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

.box-shadow {
  box-shadow: 1px -1px 95px 48px #0a0a0a;
  -webkit-box-shadow: 1px -1px 95px 48px #0a0a0a;
  -moz-box-shadow: 1px -1px 95px 48px #0a0a0a;
  z-index: 9999;
}

.marq {
  z-index: 0;
}
</style>
