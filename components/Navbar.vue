<template>
  <div class="sticky top-0 w-full h-16 bg-white border-b z-50">
    <div class="w-11/12 max-w-screen-2xl h-full mx-auto flex items-center justify-between">
      <div>
        <h1 class="text-2xl text-black font-black">Recipe AI</h1>
      </div>
      <div>
        <button class="flex items-center gap-x-1 text-white text-sm font-bold bg-green-500 px-3 py-1.5 rounded-md"
          @click="isOpen = true">
          <UIcon name="i-heroicons-bolt-solid" /> Upgrade
        </button>
      </div>
    </div>

    <UModal v-model="isOpen">
      <div class="w-full mx-auto h-fit pb-5 bg-white">
        <div class="w-full py-4 border-b flex items-center justify-center">
          <h1 class="text-lg text-left text-green-500 font-bold">Upgrade to premium</h1>
        </div>
        <div class="flex flex-col-reverse sm:flex-row items-start justify-between h-full">
          <!-- Free plan -->
          <div class="w-full sm:w-1/2 h-full sm:border-r p-3">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold">Free plan</h2>
              <p class="font-semibold text-gray-500">$0/mo</p>
            </div>
            <button class="w-full h-10 font-semibold text-gray-600 text-sm rounded-md bg-gray-200 mt-3">You current plan</button>
            <div class="mt-5">
              <div class="flex items-center gap-x-2">
                <span class="text-gray-300 mt-1"><UIcon name="i-heroicons-check-circle-solid" /></span>
                <p class="text-sm font-medium">Generate 10 recipe per month</p>
              </div>
              <div class="flex items-center gap-x-2">
                <span class="text-gray-300 mt-1"><UIcon name="i-heroicons-check-circle-solid" /></span>
                <p class="text-sm font-medium">Access only food recipes</p>
              </div>
              <div class="flex items-start gap-x-2 mt-1">
                <span class="text-gray-300 mt-"><UIcon name="i-heroicons-check-circle-solid" /></span>
                <p class="text-sm font-medium">Access to new features when available</p>
              </div>
            </div>
          </div>
          <!-- Premium plan -->
          <div class="w-full sm:w-1/2 h-full p-3">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold">Premium plan</h2>
              <p class="font-semibold text-gray-500">$7,99/mo</p>
            </div>
            <button class="w-full h-10 font-semibold text-white text-sm rounded-md bg-green-500 mt-3">Upgrade plan</button>
            <div class="mt-5">
              <div class="flex items-center gap-x-2">
                <span class="text-green-500 mt-1"><UIcon name="i-heroicons-check-circle-solid" /></span>
                <p class="text-sm font-medium">Generate unlimited recipes</p>
              </div>
              <div class="flex items-center gap-x-2">
                <span class="text-green-500 mt-1"><UIcon name="i-heroicons-check-circle-solid" /></span>
                <p class="text-sm font-medium">Access to food and drink recipes</p>
              </div>
              <div class="flex items-center gap-x-2">
                <span class="text-green-500 mt-1"><UIcon name="i-heroicons-check-circle-solid" /></span>
                <p class="text-sm font-medium">Make your recipe private</p>
              </div>
              <div class="flex items-center gap-x-2">
                <span class="text-green-500 mt-1"><UIcon name="i-heroicons-check-circle-solid" /></span>
                <p class="text-sm font-medium">Priority access to new features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>
const isOpen = ref(false)
</script>

<style></style>