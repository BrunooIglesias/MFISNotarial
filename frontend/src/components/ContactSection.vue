<template>
  <section id="contact" class="relative py-24 bg-gradient-to-br from-notarial-bg to-gray-50">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-notarial-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-notarial-secondary/10 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative max-w-5xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-notarial-subtext mb-4">
          Contáctate con Nosotros
        </h2>
        <p class="text-lg text-notarial-text/80 max-w-2xl mx-auto">
          Estamos aquí para ayudarte con todas tus necesidades notariales. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
        </p>
      </div>

      <div class="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-gray-100">
        <ContactForm />
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex items-center space-x-4 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
          <div class="flex-shrink-0 w-12 h-12 bg-notarial-primary/10 rounded-xl flex items-center justify-center">
            <svg class="h-6 w-6 text-notarial-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-medium text-notarial-subtext">Ubicación</h3>
            <p class="text-sm text-notarial-text/80">Av. Principal 123, Santiago, Chile</p>
          </div>
        </div>

        <div class="flex items-center space-x-4 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
          <div class="flex-shrink-0 w-12 h-12 bg-notarial-primary/10 rounded-xl flex items-center justify-center">
            <svg class="h-6 w-6 text-notarial-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-medium text-notarial-subtext">Teléfono</h3>
            <p class="text-sm text-notarial-text/80">+56 2 1234 5678</p>
          </div>
        </div>

        <div class="flex items-center space-x-4 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
          <div class="flex-shrink-0 w-12 h-12 bg-notarial-primary/10 rounded-xl flex items-center justify-center">
            <svg class="h-6 w-6 text-notarial-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm font-medium text-notarial-subtext">Email</h3>
            <p class="text-sm text-notarial-text/80">contacto@estudionotarial.cl</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
</script>
