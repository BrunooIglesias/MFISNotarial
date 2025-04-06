<template>
  <section id="about" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <img :src="aboutImage" alt="Sobre Nosotros" class="rounded-lg shadow-lg" />
      </div>
      <div class="md:w-1/2 md:pl-12">
        <h2 class="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p class="text-gray-700 text-lg">
          En Estudio Notarial, combinamos experiencia y dedicación para brindar asesoramiento legal de alta calidad. Nuestro equipo se compromete a garantizar claridad y confianza en cada paso.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const aboutImage = new URL('@/assets/notarial-placeholder.jpg', import.meta.url).href;
</script>
