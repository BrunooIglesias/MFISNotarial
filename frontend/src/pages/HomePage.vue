<template>
  <div class="container mx-auto py-16 px-4 bg-white">
    <div class="hero-section text-center md:text-left md:flex md:justify-between md:items-center">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <p class="text-sm uppercase text-gray-500 mb-2">Atención en línea con nuestros notarios asociados</p>
        <h1 class="text-4xl font-bold mb-4">Bienvenidos a la Notaría</h1>
        <p class="text-xl mb-8">Ofrecemos servicios notariales profesionales y confiables.</p>
        <q-btn label="Conócenos" class="bg-purple-600 text-white hover:bg-purple-700 font-bold py-2 px-4 rounded" @click="scrollToForm" />
      </div>
      <div class="md:w-1/2">
        <img src="https://via.placeholder.com/600x400" alt="Notaría" class="rounded-lg shadow-lg" />
      </div>
    </div>
    <ExperienceSection class="mb-8 mt-16" />
    <div id="contact-form" class="w-full text-center mt-16">
      <h2 class="text-2xl font-semibold mb-4">Contáctate con Nosotros</h2>
      <ContactForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import ExperienceSection from '../components/ExperienceSection.vue';
import ContactForm from '../components/ContactForm.vue';

const scrollToForm = () => {
  const formSection = document.getElementById('contact-form');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
