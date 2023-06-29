<template>
  <PortfolioLayout>
    <div
      class="bg-[#0A0A0A] w-full min-h-screen flex items-center justify-center pb-20"
    >
      <div
        class="relative w-11/12 sm:w-10/12 md:w-9/12 mx-auto max-w-5xl pt-20"
      >
        <h1 class="text-center text-4xl md:text-5xl text-white font-bold">
          Let's start the journey together
        </h1>
        <img
          src="~/assets/images/art_2.png"
          alt="artboard"
          class="absolute w-8 -rotate-35"
        />
        <p class="text-stone-400 text-lg md:text-xl text-center mt-10">
          I'm available for new exciting javascript opportunities. I take
          freelance projects occasionally. You can reach out to me via email or
          send me a fast message. Or even better, book a 30-minute call
        </p>

        <div class="flex items-center justify-center gap-x-10 mt-8">
          <a
            href="https://twitter.com/dams9ix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="text-neutral-200 text-base md:text-lg font-semibold flex items-center justify-center gap-x-1"
            >
              <UIcon name="i-mdi-twitter" />
              <span>Twitter</span>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/aimedesireofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="text-neutral-200 text-base md:text-lg font-semibold flex items-center justify-center gap-x-1"
            >
              <UIcon name="i-mdi-linkedin" />
              <span>Linkedin</span>
            </div>
          </a>
          <a
            href="https://github.com/devDams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="text-neutral-200 text-base md:text-lg font-semibold flex items-center justify-center gap-x-1"
            >
              <UIcon name="i-mdi-github" />
              <span>Github</span>
            </div>
          </a>
        </div>

        <div
          class="mt-16 flex flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0 md:gap-x-4 pb-10"
        >
          <a
            href="https://calendly.com/aime-desire/quick-chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              class="bg-white w-72 md:w-62 h-12 rounded-full text-black text-center text-sm font-semibold"
            >
              Book a 30-minutes call
            </button>
          </a>
          <a href="mailto:ad.aimedesire@gmail.com">
            <button
              class="bg-[#282828] w-72 md:w-62 h-12 rounded-full text-white text-center text-sm font-semibold"
            >
              ad.aimedesire@gmail.com
            </button>
          </a>
          <a href="https://notionforms.io/forms/leave-a-message-jzrxto" target="_blank" rel="noopener noreferrer">
            <button
              class="bg-indigo-500 w-72 md:w-62 h-12 rounded-full text-white text-center text-sm font-semibold"
            >
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
</script>
<style></style>
