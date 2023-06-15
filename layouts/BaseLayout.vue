<template>
  <div class="w-full max-w-screen-3xl mx-auto">
    <!-- NAVBAR MOBILE -->
    <div
      class="sticky top-0 w-full h-16 bg-white border-b z-50 shadow shadow-gray-500/10"
    >
      <div
        class="w-11/12 xl:w-10/12 max-w-8xl h-full mx-auto flex items-center justify-between"
      >
        <div class="">
          <h1 class="text-xl text-black font-black">Recipe AI</h1>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center justify-center text-3xl"
            @click="isSidebarOpen = true"
          >
            <UIcon name="i-mdi-menu" />
          </button>
        </div>
        <div class="hidden lg:block">
          <button
            class="flex items-center gap-x-1 text-white text-sm font-bold bg-green-500 px-3 py-2 rounded-md"
            @click="isModalOpen = true"
          >
            <UIcon name="i-heroicons-bolt-solid" />
            <span class="text-xs">Upgrade</span>
          </button>
        </div>
      </div>
    </div>

    <div
      class="relative w-full lg:w-fit lg:grid lg:grid-cols-11 max-w-8xl mx-auto"
    >
      <div
        class="hidden lg:block lg:col-span-3 max-h-[calc(100vh-64px)] sticky top-16"
      >
        <Sidebar />
      </div>
      <div class="lg:col-span-8">
        <slot />
      </div>
    </div>

    <!-- Modal subscription premium -->
    <UModal v-model="isModalOpen">
      <div class="w-full mx-auto h-fit pb-5 bg-white">
        <div class="w-full py-4 border-b flex items-center justify-center">
          <h1 class="text-lg text-left text-green-500 font-bold">
            Upgrade to premium
          </h1>
        </div>
        <div
          class="flex flex-col-reverse sm:flex-row items-start justify-between h-full"
        >
          <!-- Free plan -->
          <div class="w-full sm:w-1/2 h-full sm:border-r p-3">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold">Free plan</h2>
              <p class="font-semibold text-gray-500">$0/mo</p>
            </div>
            <button
              class="w-full h-10 font-semibold text-gray-600 text-sm rounded-md bg-gray-200 mt-3"
            >
              You current plan
            </button>
            <div class="mt-5">
              <div class="flex items-center gap-x-2">
                <span class="text-gray-300 mt-1">
                  <UIcon name="i-heroicons-check-circle-solid" />
                </span>
                <p class="text-sm font-medium">Generate 10 recipe per month</p>
              </div>
              <div class="flex items-center gap-x-2">
                <span class="text-gray-300 mt-1">
                  <UIcon name="i-heroicons-check-circle-solid" />
                </span>
                <p class="text-sm font-medium">Access only food recipes</p>
              </div>
              <div class="flex items-start gap-x-2 mt-1">
                <span class="text-gray-300 mt-">
                  <UIcon name="i-heroicons-check-circle-solid" />
                </span>
                <p class="text-sm font-medium">
                  Access to new features when available
                </p>
              </div>
            </div>
          </div>
          <!-- Premium plan -->
          <div class="w-full sm:w-1/2 h-full p-3">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold">Premium plan</h2>
              <p class="font-semibold text-gray-500">$7,99/mo</p>
            </div>
            <button
              class="w-full h-10 font-semibold text-white text-sm rounded-md bg-green-500 mt-3"
            >
              Upgrade plan
            </button>
            <div class="mt-5">
              <div class="flex items-center gap-x-2">
                <span class="text-green-500 mt-1">
                  <UIcon name="i-heroicons-check-circle-solid" />
                </span>
                <p class="text-sm font-medium">Generate unlimited recipes</p>
              </div>
              <div class="flex items-center gap-x-2">
                <span class="text-green-500 mt-1">
                  <UIcon name="i-heroicons-check-circle-solid" />
                </span>
                <p class="text-sm font-medium">
                  Access to food and drink recipes
                </p>
              </div>
              <div class="flex items-center gap-x-2">
                <span class="text-green-500 mt-1">
                  <UIcon name="i-heroicons-check-circle-solid" />
                </span>
                <p class="text-sm font-medium">Make your recipe private</p>
              </div>
              <div class="flex items-center gap-x-2">
                <span class="text-green-500 mt-1">
                  <UIcon name="i-heroicons-check-circle-solid" />
                </span>
                <p class="text-sm font-medium">
                  Priority access to new features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UModal>

    <!-- Sidebar mobile -->
    <USlideover v-model="isSidebarOpen" side="left" class="w-10/12">
      <!-- <div class="w-full h-full"></div> -->
      <div class="min-w-[200px] w-full min-h-screen border-r px-6">
        <div class="w-full mx-auto pt-5">
          <nuxt-link to="/new-recipe">
            <button
              class="w-full h-10 rounded-md bg-green-500 text-white text-sm font-semibold flex items-center justify-center gap-x-2"
            >
              <UIcon name="i-mdi-auto-fix" />
              Generate new recipe
            </button>
          </nuxt-link>
        </div>
        <div class="w-full pt-5">
          <p class="text-sm font-semibold">Recipe</p>
          <div class="mt-2">
            <UVerticalNavigation
              :links="links"
              :ui="{
                wrapper:
                  'border-l border-gray-200 dark:border-gray-800 space-y-2',
                base: 'group block border-l border-l-2 text-gray-500 -ml-px lg:leading-6',
                padding: 'pl-2',
                rounded: '',
                font: '',
                ring: '',
                active:
                  'text-green-500 dark:text-green-400 border-current font-semibold',
                inactive:
                  'border-transparent hover:border-green-400 dark:hover:border-green-500 text-gray-400 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 font-medium',
              }"
            />
          </div>
        </div>
        <div class="mt-5 w-full">
          <p class="text-sm font-semibold">Account</p>
          <div class="mt-2 account-nav">
            <UVerticalNavigation
              :links="links2"
              :ui="{
                wrapper:
                  'border-l border-gray-200 dark:border-gray-800 space-y-2',
                base: 'group block border-l border-l-2 text-gray-500 -ml-px lg:leading-6',
                padding: 'pl-2',
                rounded: '',
                font: '',
                ring: '',
                active:
                  'text-green-500 dark:text-green-400 border-current font-semibold',
                inactive:
                  'border-transparent hover:border-green-400 dark:hover:border-green-500 text-gray-400 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 font-medium',
              }"
            />
          </div>
        </div>
      </div>
    </USlideover>

    <UNotifications timeout="2000" />
  </div>
</template>

<script setup>
import Sidebar from "~/components/Sidebar.vue";

const isModalOpen = ref(false);
const isSidebarOpen = ref(false);

const links = [
  {
    label: "All",
    to: "/",
  },
  {
    label: "Bookmark",
    to: "/bookmarks",
  },
  {
    label: "Favoris",
    to: "/navigation/command-palette",
  },
];

const links2 = [
  {
    label: "Upgrade to premium",
    click: () => {
      isModalOpen.value = true
    }
  },
  {
    label: "Profil",
    to: "/navigation/vertical-navigation",
  },
  {
    label: "Log out",
    // to: '',
    click: () => welcome(),
  },
];

const welcome = () => {
  console.log("click");
};
</script>

<style></style>
