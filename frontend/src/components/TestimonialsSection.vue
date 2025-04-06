<template>
  <section id="testimonials" class="min-h-[calc(100vh-4rem)] bg-notarial-testimonial-bg flex items-center py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div class="text-center mb-24">
        <h2 class="text-4xl font-bold text-notarial-subtext mb-6">
          Lo que dicen nuestros clientes
        </h2>
        <p class="text-lg text-notarial-text/80 max-w-2xl mx-auto">
          Descubra las experiencias de nuestros clientes y cómo hemos ayudado a resolver sus necesidades legales.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.author"
          v-bind="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from '@/components/TestimonialCard.vue';

const testimonials = [
  {
    text: "Excelente servicio y atención personalizada. El equipo de Estudio Notarial me ayudó a resolver mi situación legal de manera eficiente y profesional.",
    author: "Juan Díaz",
    role: "Cliente Satisfecho",
    initials: "JD"
  },
  {
    text: "La asesoría recibida fue impecable. Me sentí acompañado en todo momento y los resultados superaron mis expectativas.",
    author: "María Rodríguez",
    role: "Empresaria",
    initials: "MR"
  },
  {
    text: "Profesionalismo y eficiencia en cada paso del proceso. Recomiendo ampliamente sus servicios notariales.",
    author: "Carlos Pérez",
    role: "Profesional",
    initials: "CP"
  }
];
</script>
