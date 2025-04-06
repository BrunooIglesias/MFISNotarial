<template>
  <div class="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
    <div class="mb-4">
      <q-icon :name="icon" size="48px" color="purple-600" />
    </div>
    <h3 class="text-xl font-semibold text-gray-800">{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string, icon: string }>();
</script>
