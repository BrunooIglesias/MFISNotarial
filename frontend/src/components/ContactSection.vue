<template>
  <section id="contact" class="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-white mb-12">Contáctate con Nosotros</h2>
      <div class="bg-white shadow-xl rounded-2xl p-10">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
</script>
