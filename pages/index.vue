<template>
  <PortfolioLayout>
    <div class="bg-[#0A0A0A] w-full min-h-screen pb-40">
      <div class="w-11/12 sm:w-9/12 md:w-7/12 mx-auto pt-16">
        <div class="relative w-44 h-44 mx-auto h-24 rounded-xl border border-stone-600 p-1">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQG1ECTur4E63A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1664353503671?e=1732147200&v=beta&t=SkQecrKNv3w-wpjE0sY5bV6pHaVDUEC1JnG0he1IliA"
            alt="artboard" class="w-full h-full object-contain rounded-lg" />
        </div>
        <h1 class="text-4xl sm:text-5xl text-white text-center font-extrabold mt-10">
          Nehemie KOFFI
        </h1>
        <h1 class="text-lg sm:text-xl text-white text-center font-semibold mt-2">
          Fullstack Developer / Product Designer / Life Coach
        </h1>
        <div class="flex items-center justify-center gap-x-2 mt-4">
          <div class="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center">
            <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
          <p class="text-sm text-zinc-400 text-center font-normal">
            Available for new opportunities
          </p>
        </div>
        <div class="flex items-center justify-center gap-x-10 mt-8">
          <a href="https://www.linkedin.com/in/nehemiekoffi" target="_blank" rel="noopener noreferrer">
            <div
              class="text-neutral-400 text-base sm:text-lg md:text-xl font-semibold flex items-center justify-center gap-x-1">
              <UIcon name="i-mdi-linkedin" />
              <span>Linkedin</span>
            </div>
          </a>
          <a href="https://github.com/nehemiekoffi" target="_blank" rel="noopener noreferrer">
            <div
              class="text-neutral-400 text-base sm:text-lg md:text-xl font-semibold flex items-center justify-center gap-x-1">
              <UIcon name="i-mdi-github" />
              <span>Github</span>
            </div>
          </a>
        </div>

        <div class="md:w-96 mx-auto mt-10 flex justify-center">
          <a href="https://calendly.com/nehemiekoffi/30min" target="_blank" rel="noopener noreferrer">
            <button
              class="relative w-80 h-12 rounded-full bg-[#282828] text-stone-400 text-center text-sm font-semibold flex items-center justify-center gap-x-2 hover:bg-neutral-700 hover:text-stone-200">
              <UIcon name="i-mdi-laptop-account" class="text-xl" /> Book a 30
              minutes call
            </button>
          </a>
        </div>
      </div>

      <div class="relative w-11/12 sm:w-[600px] mx-auto pt-24 px-2 sm:px-10 md:px-0">
        <h3 class="text-lg text-white font-bold">About me</h3>
        <p class="text-stone-400 font-normal mt-5">
          I am Néhemie KOFFI, a Senior Software Engineer, Product Designer, AI enthusiast based in Abidjan with over a
          decade of experience in building innovative and scalable solutions. With a strong background in full-stack
          development, I’ve had the
          opportunity to work across various
          industries, from finance to telecommunications, using cutting-edge technologies such as NodeJS, Flutter, AWS,
          and VueJS. My passion for creating user-friendly, stable, and impactful products drives me to continuously
          refine my skills in both software development and design. I am deeply invested in problem-solving and enjoy
          combining technical expertise with creative thinking to deliver solutions that meet both user and business
          needs.
        </p>
        <p class="text-stone-400 font-normal mt-5">
          Beyond coding, I am also a life coach and a strong advocate for personal growth and leadership. I believe that
          the power of technology goes hand in hand with the power of people, which is why I strive to cultivate a
          collaborative, growth-oriented mindset in the teams I lead. Whether through mentoring or creating tools that
          enhance user experiences, I’m always seeking ways to make a meaningful impact in the lives of others while
          pushing the boundaries of what technology can achieve.
        </p>

        <nuxt-link to="/about"
          class="bg-[#282828] hover:bg-[#3e3e3e] w-full h-11 text-white flex items-center justify-center gap-x-2 rounded-lg border border-[#2e2e2e] mt-10">
          Know more
          <UIcon name="i-mdi-arrow-right" />
        </nuxt-link>
      </div>

      <div class="w-11/12 sm:w-[600px] mx-auto pt-16 px-2 sm:px-10 md:px-0">
        <h3 class="text-lg mb-5 text-white font-bold">Work experience</h3>

        <div class="mt-5 flex items-start justify-between">
          <div class="w-[200px]">
            <p class="text-stone-600 text-sm font-semibold">Apr. 2024 - Now</p>
          </div>
          <div class="w-fit">
            <h4 class="text-white">Technical Lead</h4>
            <div class="inline-block bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md">
              Djamo
            </div>
            <p class="text-sm text-stone-400 font-normal">
              Leading the technical team at Djamo, responsible for mobile app development and troubleshooting.
            </p>
          </div>
        </div>

        <div class="mt-5 flex items-start justify-between">
          <div class="w-[200px]">
            <p class="text-stone-600 text-sm font-semibold">Jul. 2021 - Now</p>
          </div>
          <div class="w-fit">
            <h4 class="text-white">Senior Software Engineer</h4>
            <div class="inline-block bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md">
              Djamo
            </div>
            <p class="text-sm text-stone-400 font-normal">
              Developing and maintaining Djamo mobile app features, troubleshooting bugs and incidents.
            </p>
          </div>
        </div>

        <div class="mt-5 flex items-start justify-between">
          <div class="w-[200px]">
            <p class="text-stone-600 text-sm font-semibold">Jan. 2023 - Jun. 2024</p>
          </div>
          <div class="w-fit">
            <h4 class="text-white">Growth Software Engineer</h4>
            <div class="inline-block bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md">
              Djamo
            </div>
            <p class="text-sm text-stone-400 font-normal">
              Implemented and improved features, user onboarding, user acquisition, tooling, and analytics.
            </p>
          </div>
        </div>

        <div class="mt-5 flex items-start justify-between">
          <div class="w-[200px]">
            <p class="text-stone-600 text-sm font-semibold">Oct. 2014 - Aug. 2021</p>
          </div>
          <div class="w-fit">
            <h4 class="text-white">Software Engineer</h4>
            <div class="inline-block bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md">
              MTN Côte d'Ivoire
            </div>
            <p class="text-sm text-stone-400 font-normal">
              Designed and developed business web applications, internal employee tools, and mobile apps using Angular,
              React, ASP.Net.
            </p>
          </div>
        </div>

        <div class="mt-5 flex items-start justify-between">
          <div class="w-[200px]">
            <p class="text-stone-600 text-sm font-semibold">Nov. 2012 - Oct. 2014</p>
          </div>
          <div class="w-fit">
            <h4 class="text-white">Web Developer</h4>
            <div class="inline-block bg-indigo-300 text-black text-xs font-semibold px-2 1.5 py-1 rounded-md">
              SODERTOUR-LACS
            </div>
            <p class="text-sm text-stone-400 font-normal">
              Developed and maintained websites for hotels, along with content management platforms using HTML, CSS,
              Jquery, PHP, WordPress.
            </p>
          </div>
        </div>


      </div>

      <div class="w-11/12 sm:w-[600px] mx-auto pt-24 px-2 sm:px-10 md:px-0">
        <h2 class="text-3xl text-center text-white font-semibold">
          Got a question or project idea? Contact me and let's discuss how we
          can work together to bring your ideas to life.
        </h2>

        <div class="relative mt-14 w-full flex flex-col items-center justify-center gap-y-2">
          <a href="mailto:nehemiekoffi@gmail.com">
            <button class="bg-indigo-500 w-80 h-12 rounded-full text-lg sm:text-xl text-white font-bold">
              nehemiekoffi@gmail.com
            </button>
          </a>

          <span class="text-lg font-semibold text-stone-500">or</span>

          <img src="~/assets/images/art_7.png" alt="artboard" class="absolute top-10 right-20 w-14" />

          <a href="https://wa.me/+2250556987000" target="_blank" rel="noopener noreferrer">
            <button class="bg-stone-900 w-80 h-12 rounded-full text-lg sm:text-xl text-white font-bold">
              Send a message
            </button>
          </a>
        </div>
      </div>
    </div>
  </PortfolioLayout>
</template>

<script setup>
import PortfolioLayout from "~/layouts/PortfolioLayout.vue";

useSeoMeta({
  title: 'Nehemie KOFFI - Developer javascript',
  description: 'I\'m a passionate and experienced Fullstack Developer / Product Designer / Life Coach, cat lover, AI enthusiast based in Abidjan',
  // reactive example
  // ogImage: () => someData.value?.image
})
</script>

<style></style>
