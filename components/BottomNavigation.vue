<template>
  <div class="fixed bottom-10 left-0 w-full h-fit flex items-center justify-center px-4 sm:px-0">
    <div
      class="w-96 h-12 rounded-full backdrop-blur-md bg-white/10 shadow-2xl drop-shadow-xl backdrop-blur-md border border-neutral-700 flex items-center gap-x-4 px-2">
      <nuxt-link to="/"
        :class="route.name === 'index' ? 'w-1/4 h-8 bg-black text-sm text-white font-semibold rounded-full flex items-center justify-center' : 'w-1/4 h-8 bg-neutral-00 text-sm text-neutral-400 font-semibold rounded-full flex items-center justify-center'">Home</nuxt-link>
      <nuxt-link to="/about"
        :class="route.name === 'about' ? 'w-1/4 h-8 bg-black text-sm text-white font-semibold rounded-full flex items-center justify-center' : 'w-1/4 h-8 bg-neutral-00 text-sm text-neutral-400 font-semibold rounded-full flex items-center justify-center'">About</nuxt-link>
      <nuxt-link to="/work"
        :class="route.name === 'work' || workPage ? 'w-1/4 h-8 bg-black text-sm text-white font-semibold rounded-full flex items-center justify-center' : 'w-1/4 h-8 bg-neutral-00 text-sm text-neutral-400 font-semibold rounded-full flex items-center justify-center'">Work</nuxt-link>
      <nuxt-link to="/contact"
        :class="route.name === 'contact' ? 'w-1/4 h-8 bg-black text-sm text-white font-semibold rounded-full flex items-center justify-center' : 'w-1/4 h-8 bg-neutral-00 text-sm text-neutral-400 font-semibold rounded-full flex items-center justify-center'">Contact</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const workPage = ref(false)

if (route.name.includes("work")) {
  workPage.value = true
}
</script>

<style></style>