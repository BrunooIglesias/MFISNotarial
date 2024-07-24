<template>
  <q-header :class="{'shadow-md': hasScrolled}" class="bg-white text-gray-900 fixed top-0 w-full z-50 transition-shadow duration-300">
    <q-toolbar class="container mx-auto px-4 flex justify-between items-center py-2">
      <div class="flex items-center space-x-4 cursor-pointer" @click="navigateHome">
        <img src="logo-url.png" alt="MFISLogo" class="h-8 w-auto" />
      </div>
      <div class="flex items-center space-x-6">
        <q-btn flat label="Sobre Mí" @click="navigateToExperience" class="text-purple-700 hover:text-purple-600" />
        <q-btn label="Contáctese con Nosotros" class="bg-purple-600 text-white hover:bg-purple-700 font-bold py-2 px-4 rounded-md" @click="handleContactClick" />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const hasScrolled = ref(false);

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navigateHome = () => {
  router.push('/');
};

const navigateToExperience = () => {
  router.push('/about-us');
};

const handleContactClick = () => {
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        const formSection = document.getElementById('contact-form');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Adjust this delay if needed
    });
  } else {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
