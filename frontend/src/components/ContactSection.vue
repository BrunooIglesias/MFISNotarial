<template>
  <section id="contact-form" class="relative bg-gradient-to-br from-notarial-bg to-gray-100 py-24">
    <div class="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-notarial-text mb-4 relative inline-block">
          Contáctate con Nosotros
          <div class="absolute bottom-0 left-0 w-full h-1 bg-notarial-primary rounded-full transform translate-y-2"></div>
        </h2>
        <p class="text-notarial-subtext max-w-2xl mx-auto mt-4">Estamos aquí para ayudarte con todas tus necesidades notariales. Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
      </div>
      <div class="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-gray-100">
        <ContactForm />
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-notarial-bg/20 to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
</script>
