<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <section id="contact-form" class="bg-gray-100 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Contáctate con Nosotros</h2>
        <div class="bg-white shadow-md rounded-2xl p-10">
          <ContactForm />
        </div>
      </div>
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