<template>
  <BaseLayout>
    <div class="p-5">
      <h1 class="text-2xl md:text-3xl text-center text-black font-black mt-5">
        Generate new recipe
      </h1>
      <div class="mt-10">
        <div class="w-full sm:w-96 mx-auto">
          <p class="text-sm text-gray-500 font-medium mb-1">
            Add new ingredients
          </p>
          <UPopover class="w-full sm:w-96 mx-auto">
            <div
              class="w-full sm:w-96 mx-auto h-11 bg-white border border-gray-300 rounded-md flex items-center justify-between px-3"
            >
              <p class="text-sm font-medium">Added ingredients</p>
              <span
                class="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white font-semibold"
                >{{ addedIngredient.length }}</span
              >
            </div>

            <template #panel>
              <div class="w-80 mx-auto sm:w-96 h-fit bg-white p-2">
                <div class="">
                  <p
                    v-if="addedIngredient.length === 0"
                    class="text-center text-sm text-red-500 font-medium py-8"
                  >
                    No added ingredients
                  </p>
                  <UBadge
                    v-for="(item, index) in addedIngredient"
                    :key="index"
                    color="blue"
                    size="sm"
                    class="m-1 py-2"
                    @click="() => removeIngredient(index)"
                    >{{ item.label }}</UBadge
                  >
                </div>
                <UButton
                  color="black"
                  class="mt-3 h-10 text-white w-full flex items-center justify-center"
                  @click="isPaletteOpen = true"
                  >Add an ingredient</UButton
                >
              </div>
            </template>
          </UPopover>

          <div class="mt-4">
            <p class="text-sm text-gray-500 font-medium mb-1">
              Select a cooking time
            </p>
            <USelectMenu
              v-model="selectedCookingTime"
              :options="cookingTime"
              class="w-full h-10 font-medium"
            >
              <template #label>
                {{ selectedCookingTime.label }}
              </template>
            </USelectMenu>
          </div>
          <div class="w-full sm:w-96 mx-auto mt-8">
            <UButton
              :loading="loadingRecipe"
              class="h-10 w-full mx-auto font-semibold text-black flex items-center justify-center bg-green-500"
              @click="generateRecipe"
              >Generate recipe</UButton
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Commande palette select ingredients -->
    <UModal v-model="isPaletteOpen">
      <UCommandPalette
        icon="i-ep-food"
        placeholder="Search an ingredient..."
        :close-button="{
          icon: 'i-heroicons-x-mark-20-solid',
          color: 'gray',
          variant: 'link',
          padded: false,
        }"
        :empty-state="{
          icon: 'i-heroicons-magnifying-glass-20-solid',
          label: 'We couldn\'t find any items.',
          queryLabel:
            'We couldn\'t find any items with that term. Please try again.',
        }"
        v-model="addedIngredient"
        multiple
        nullable
        :groups="groups"
      />
    </UModal>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "~/layouts/BaseLayout.vue";

const cookingTime = [
  {
    id: 1,
    label: "15 mins",
  },
  {
    id: 2,
    label: "30 mins",
  },
  {
    id: 3,
    label: "45 mins",
  },
  {
    id: 4,
    label: "1h00",
  },
  {
    id: 5,
    label: "1h30",
  },
  {
    id: 6,
    label: "2h00",
  },
];
const toast = useToast()
const loadingRecipe = ref(false);
const isPaletteOpen = ref(false);
const addedIngredient = ref([]);
const selectedCookingTime = ref(cookingTime[0]);

const groups = computed(() => {
  return [
    {
      key: "users",
      label: (q) => q && `Ingredients matching “${q}”...`,
      search: async (q) => {
        if (!q) {
          return [];
        }

        const users = await $fetch(
          `https://jsonplaceholder.typicode.com/users`,
          { params: { q } }
        );

        return users.map((user) => ({
          id: user.id,
          label: user.name,
          suffix: user.email,
        }));
      },
    },
  ].filter(Boolean);
});

const removeIngredient = (ingredientIndex) => {
  addedIngredient.value.splice(ingredientIndex, 1);
};

const generateRecipe = () => {
  loadingRecipe.value = true

  setTimeout(() => {
    loadingRecipe.value = false
    toast.add({ title: 'Success!', description: 'Your recipe has been successfully generated.' })
  }, 3000);
}

definePageMeta({
  colorMode: "light",
});
</script>

<style></style>
