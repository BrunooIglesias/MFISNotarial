<template>
  <q-header elevated class="bg-white text-gray-900 fixed top-0 w-full z-50">
    <q-toolbar class="container mx-auto px-4 flex justify-between items-center py-3">
      <div class="flex items-center space-x-4">
        <img :src="logo" alt="Logo" class="h-10" />
        <span class="text-xl font-bold">Mary Iglesias Escribana Pública</span>
      </div>
      <div class="hidden md:flex items-center space-x-6">
        <q-btn flat label="Inicio" @click="navigateTo('home')" />
        <q-btn flat label="Sobre Nosotros" @click="navigateTo('about')" />
        <q-btn flat label="Servicios" @click="navigateTo('services')" />
        <q-btn flat label="Testimonios" @click="navigateTo('testimonials')" />
      </div>
      <q-btn
          label="Contáctenos"
          class="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-4 py-2"
          @click="scrollToContact"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const logo = new URL('@/assets/notarial-logo.png', import.meta.url).href;

const navigateTo = (section: string) => {
  if (section === 'home') {
    router.push('/');
  } else {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
</script>
