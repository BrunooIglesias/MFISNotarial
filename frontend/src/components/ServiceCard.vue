<template>
  <div class="group bg-notarial-service-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden hover:bg-notarial-service-hover">
    <div class="relative mb-8 p-5 rounded-2xl bg-notarial-primary/5 group-hover:bg-notarial-primary/10 transition-all duration-300">
      <i :class="['mdi', icon, 'text-4xl', 'text-notarial-primary']"></i>
    </div>
    
    <div class="relative space-y-4">
      <h3 class="text-xl font-semibold text-notarial-subtext group-hover:text-notarial-primary transition-colors duration-300">
        {{ title }}
      </h3>
      <p class="text-notarial-text/80 text-base leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  title: string, 
  description: string,
  icon: string 
}>();
</script>
