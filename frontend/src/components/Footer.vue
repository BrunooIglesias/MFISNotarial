<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <img :src="logo" alt="Logo" class="h-10 inline-block mr-2" />
        <span class="font-bold">Estudio Notarial</span>
      </div>
      <div class="flex space-x-6">
        <a href="#" class="hover:text-white">Instagram</a>
        <a href="#" class="hover:text-white">LinkedIn</a>
        <a href="#" class="hover:text-white">WhatsApp</a>
      </div>
    </div>
    <div class="text-center text-sm mt-4">
      © 2025 Estudio Notarial. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup lang="ts">
const logo = new URL('@/assets/notarial-logo.png', import.meta.url).href;
</script>
