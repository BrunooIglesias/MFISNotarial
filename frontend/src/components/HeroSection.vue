<template>
  <section class="py-32 relative overflow-hidden bg-gradient-to-r from-[#7c3aed] to-[#5b21b6]">
    <svg class="absolute top-0 left-0 w-96 h-96 opacity-30 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffffff" d="M40.8,-52.7C53.4,-44.1,63.2,-32.4,69.2,-18.8C75.2,-5.2,77.5,10.2,73.7,24.1C69.8,38,59.7,50.3,46.1,57.5C32.6,64.7,15.3,66.9,-0.7,67.6C-16.7,68.3,-33.3,67.4,-45.7,60.1C-58,52.8,-66.1,39.2,-69.9,24.6C-73.7,10,-73.1,-5.7,-66.3,-19.7C-59.5,-33.8,-46.4,-45.1,-32.5,-53.5C-18.6,-61.9,-9.3,-67.4,2,-70.4C13.2,-73.5,26.4,-74.8,40.8,-52.7Z" transform="translate(100 100)" />
    </svg>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div class="space-y-8 animate-slide-in-left">
        <p class="uppercase text-sm tracking-widest text-white font-semibold">
          Estudio Notarial
        </p>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
          Compromiso, Confianza y Claridad Jurídica
        </h1>
        <p class="text-lg text-gray-200 max-w-2xl">
          Asesoramiento notarial integral para personas y empresas. Soluciones claras y profesionales adaptadas a tus necesidades. Más de 15 años acompañando decisiones importantes.
        </p>
        <div class="pt-4">
          <q-btn
              label="Contáctese con Nosotros"
              color="white"
              text-color="indigo-600"
              unelevated
              size="lg"
              class="shadow-xl rounded-full px-8 py-3 font-semibold hover:scale-105 transition-transform duration-300"
              @click="scrollToForm"
          />
        </div>
      </div>

      <div class="relative w-full max-w-lg mx-auto animate-zoom-in">
        <div class="absolute -inset-3 rounded-3xl bg-gradient-to-r from-white to-gray-200 shadow-2xl -z-10"></div>
        <img
            :src="notarial"
            alt="Mary Iglesias en su escritorio"
            class="rounded-3xl shadow-2xl object-cover w-full h-auto border-4 border-indigo-600"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const notarial = new URL('@/assets/notarial-placeholder.jpg', import.meta.url).href;

const scrollToForm = () => {
  const el = document.getElementById('contact-form');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  const el = document.getElementById('contact-form');
  if (el) {
    // Optionally store the form element reference
  }
});
</script>

<style scoped>
@keyframes slide-in-left {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes zoom-in {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-slide-in-left {
  animation: slide-in-left 1s ease-out;
}

.animate-zoom-in {
  animation: zoom-in 1.2s ease-in-out;
}
</style>
