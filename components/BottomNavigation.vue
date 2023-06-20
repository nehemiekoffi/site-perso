<template>
  <div class="fixed bottom-10 left-0 w-full h-fit flex items-center justify-center">
    <div
      class="w-96 h-12 rounded-full backdrop-blur-md bg-white/10 shadow-2xl drop-shadow-xl backdrop-blur-md border border-neutral-700 flex items-center gap-x-4 px-2">
      <button
        :class="currentPage === 'HOME' ? 'w-1/4 h-8 bg-black text-sm text-white font-semibold rounded-full' : 'w-1/4 h-8 bg-neutral-00 text-sm text-neutral-400 font-semibold rounded-full'"
        @click="() => navigate('HOME')">Home</button>
      <button
        :class="currentPage === 'ABOUT' ? 'w-1/4 h-8 bg-black text-sm text-white font-semibold rounded-full' : 'w-1/4 h-8 bg-neutral-00 text-sm text-neutral-400 font-semibold rounded-full'"
        @click="() => navigate('ABOUT')">About</button>
      <button
        :class="currentPage === 'WORK' ? 'w-1/4 h-8 bg-black text-sm text-white font-semibold rounded-full' : 'w-1/4 h-8 bg-neutral-00 text-sm text-neutral-400 font-semibold rounded-full'"
        @click="() => navigate('WORK')">Work</button>
      <button
        :class="currentPage === 'CONTACT' ? 'w-1/4 h-8 bg-black text-sm text-white font-semibold rounded-full' : 'w-1/4 h-8 bg-neutral-00 text-sm text-neutral-400 font-semibold rounded-full'"
        @click="() => navigate('CONTACT')">Contact</button>
    </div>
  </div>
</template>
<script setup>
const currentPage = ref('HOME')

const navigate = (page) => {
  currentPage.value = page
}
</script>
<style></style>