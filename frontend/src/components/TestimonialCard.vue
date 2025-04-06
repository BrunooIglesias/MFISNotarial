<template>
  <div class="bg-white p-6 rounded-xl shadow-md">
    <p class="text-gray-700 italic">“{{ text }}”</p>
    <p class="mt-4 text-sm font-medium text-gray-900">— {{ author }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ author: string; text: string }>();
</script>
