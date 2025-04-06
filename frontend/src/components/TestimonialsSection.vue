<template>
  <section id="testimonials" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Testimonios</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard author="Juan Pérez" text="Excelente servicio y asesoramiento. Me sentí en buenas manos." />
        <TestimonialCard author="María López" text="Profesionales de confianza. Altamente recomendado." />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from '@/components/TestimonialCard.vue';
</script>
