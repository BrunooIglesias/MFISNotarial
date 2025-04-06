<template>
  <div class="overflow-hidden">
    <HeroSection />
    <AboutSection />
    <div id="services-section">
      <ServicesSection />
    </div>
    <div class="relative">
      <div class="absolute inset-0 z-0">
        <svg class="absolute top-0 right-0 w-64 h-64 opacity-10 transform translate-x-1/4 -translate-y-1/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#6b7b62" d="M47.7,-51.2C59.9,-38.8,66.9,-21.6,67.2,-4.3C67.5,13,61.2,30.4,49,41.1C36.9,51.8,18.4,55.7,0.4,55.3C-17.7,54.9,-35.3,50.1,-47.6,39C-59.8,27.8,-66.7,10.2,-66.1,-7.3C-65.6,-24.8,-57.6,-42.1,-44.5,-54.3C-31.3,-66.6,-15.7,-73.7,1,-74.8C17.8,-75.9,35.5,-63.7,47.7,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <TestimonialsSection />
    </div>
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
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import ContactForm from '@/components/ContactForm.vue';
</script>