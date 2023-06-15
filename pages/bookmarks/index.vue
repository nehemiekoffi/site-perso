<template>
  <BaseLayout>
    <h1 class="text-3xl text-black font-extrabold">Bookmark</h1>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '~/layouts/BaseLayout.vue';

definePageMeta({
  colorMode: 'light',
})

const bookmarksList = ref([])
</script>

<style></style>