<template>
  <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
    <div class="mb-6">
      <div class="w-14 h-14 rounded-xl bg-notarial-primary/5 flex items-center justify-center group-hover:bg-notarial-primary/10 transition-colors duration-300">
        <i :class="icon" class="text-2xl text-notarial-primary"></i>
      </div>
    </div>

    <div class="space-y-3">
      <h3 class="text-xl font-semibold text-notarial-subtext group-hover:text-notarial-primary transition-colors duration-300">
        {{ title }}
      </h3>
      <p class="text-base text-notarial-text/80 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>
