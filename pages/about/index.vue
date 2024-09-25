<template>
  <PortfolioLayout>
    <div class="bg-[#0A0A0A] w-full min-h-screen pb-40">
      <div class="w-11/12 sm:w-9/12 md:w-10/12 lg:w-8/12 max-w-5xl mx-auto pt-16">
        <h1 class="text-4xl sm:text-5xl text-white text-center font-bold mt-10">
          About
        </h1>

        <div class="flex flex-col md:flex-row items-start gap-x-2 mt-20">
          <div class="w-full md:w-1/3 lg:w-1/2">
            <img src="~/assets/images/photo_nehemie.jpeg" alt="artboard"
              class="w-72 md:w-full lg:w-8/12 mx-auto object-cover object-bottom rounded-2xl" />
          </div>
          <div class="w-full md:w-2/3 lg:w-1/2 mt-16 md:mt-0">
            <h3 class="text-xl md:text-lg text-white font-extrabold">
              My story
            </h3>
            <p class="text-stone-400 mt-5">
              My journey as a programmer started with a deep curiosity for technology and how things work. After
              pursuing formal education in IT, my first professional role at SODERTOUR-LACS gave me the opportunity to
              build websites and manage content, sparking my passion for turning ideas into real solutions. This early
              experience laid the foundation for my development career and deepened my love for coding.
            </p>
            <br />
            <p class="text-stone-400">
              In 2014, I joined MTN Côte d'Ivoire as a Software Engineer, where I spent nearly seven years developing
              business applications and internal tools. My time there was instrumental in shaping my technical skills,
              particularly in front-end and back-end development. It also fostered my interest in UX design as I worked
              closely with users to create intuitive products. This experience helped me balance technical demands with
              user-centered design.
            </p>
            <br />
            <p class="text-stone-400">
              Currently, at Djamo, I serve as a Senior Software Engineer and Technical Lead, where I develop mobile
              applications and lead feature development. The fintech space has been particularly rewarding, allowing me
              to contribute to impactful solutions. Looking back, my journey has been marked by continuous growth and
              learning, and I’m excited about the innovations yet to come.
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
            <div class="grid grid-rows-2 grid-flow-col gap-6">
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/openai.svg" alt="artboard" class="w-10 mx-auto object-cover" />
              </div>
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/typescript.svg" alt="artboard" class="w-10 mx-auto object-cover" />
              </div>
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/node.svg" alt="artboard" class="w-10 mx-auto object-cover" />
              </div>
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/nest.svg" alt="artboard" class="w-10 mx-auto object-cover" />
              </div>
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/vuejs.svg" alt="artboard" class="w-10 mx-auto object-cover" />
              </div>
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/nuxt.svg" alt="artboard" class="w-10 mx-auto object-cover" />
              </div>
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/wordpress.svg" alt="artboard" class="w-12 mx-auto object-cover" />
              </div>
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/notion.svg" alt="artboard" class="w-10 mx-auto object-cover" />
              </div>
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/figma.svg" alt="artboard" class="w-7 mx-auto object-cover" />
              </div>
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 max-w-xs overflow-hidden rounded-2xl shadow-md bg-[#1a1a1a] hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                <img src="~/assets/images/tailwind.svg" alt="artboard" class="w-10 mx-auto object-cover" />
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
          <a href="https://wa.me/+2250556987000" target="_blank" rel="noopener noreferrer">
            <div class="mt-10 flex justify-center">
              <button
                class="bg-indigo-500 w-80 h-12 rounded-full text-white text-center sm:text-lg md:text-xl font-bold">
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
