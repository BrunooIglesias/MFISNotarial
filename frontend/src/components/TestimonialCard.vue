<template>
  <div class="bg-notarial-testimonial-card rounded-2xl p-8 shadow-lg">
    <p class="text-notarial-testimonial-quote text-lg leading-relaxed mb-8">
      "{{ text }}"
    </p>
    <div class="flex items-center space-x-4">
      <div class="w-12 h-12 rounded-full bg-notarial-primary/10 flex items-center justify-center">
        <span class="text-notarial-primary font-semibold">{{ initials }}</span>
      </div>
      <div>
        <h4 class="font-semibold text-notarial-subtext">{{ author }}</h4>
        <p class="text-sm text-notarial-text/70">{{ role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  author: string;
  role: string;
  initials: string;
}>();
</script>
