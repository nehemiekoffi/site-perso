<template>
  <div>
    <SeoKit />
    <!-- a. Generates browser screenshots for every page -->
    <OgImageScreenshot />
    <!-- b. Generate satori images for every page (uses the default template) -->
    <OgImageStatic />
    <slot />
    <BottomNavigation />
  </div>
</template>
<script setup>
import BottomNavigation from '~/components/BottomNavigation.vue';

</script>
<style></style>