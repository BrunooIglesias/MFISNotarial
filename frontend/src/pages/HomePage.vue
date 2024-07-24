<template>
  <div class="container mx-auto py-16 px-4 bg-white">
    <div class="hero-section text-center md:text-left md:flex md:justify-between md:items-center mb-16">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <p class="text-sm uppercase text-gray-500 mb-2">Estudio Notarial</p>
        <h1 class="text-4xl font-bold mb-4">Escribana Mary Iglesias</h1>
        <p class="text-xl mb-8">Ofrecemos servicios notariales profesionales y confiables.</p>
        <q-btn label="Contáctese con Nosotros" class="bg-purple-600 text-white hover:bg-purple-700 font-bold py-2 px-4 rounded-md" @click="scrollToForm" />
      </div>
      <div class="md:w-1/2">
        <img src="https://via.placeholder.com/600x400" alt="Mary Iglesias - Escribana Pública" class="rounded-lg shadow-lg" />
      </div>
    </div>
    <div id="contact-form" ref="contactForm" class="w-full text-center mt-16">
      <h2 class="text-2xl font-semibold mb-4">Contáctate con Nosotros</h2>
      <ContactForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ContactForm from '../components/ContactForm.vue';

const contactForm = ref<HTMLElement | null>(null);

const scrollToForm = () => {
  if (contactForm.value) {
    contactForm.value.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
