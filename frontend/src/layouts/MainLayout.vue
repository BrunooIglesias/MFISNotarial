<template>
  <q-layout view="lHh Lpr lFf" class="text-notarial-text font-sans">
    <Header />

    <q-page-container class="p-0 bg-notarial-bg no-header-offset">
      <div class="min-h-screen flex flex-col">
        <div class="flex-grow">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
        <Footer />
      </div>
    </q-page-container>

    <div
        class="fixed bottom-8 right-8 z-40 bg-notarial-primary text-notarial-bg w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-notarial-secondary transition-all duration-300 transform hover:scale-110"
        :class="{ 'translate-y-0 opacity-100': showBackToTop, 'translate-y-20 opacity-0': !showBackToTop }"
        @click="scrollToTop"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </div>

    <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-notarial-bg">
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 mb-4 relative">
          <img :src="logo" alt="Logo" class="w-full h-full object-contain animate-pulse" />
        </div>
        <div class="h-1 w-48 bg-gray-200 rounded overflow-hidden">
          <div class="h-full bg-notarial-primary animate-progress"></div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const logo = new URL('@/assets/notarial-logo.png', import.meta.url).href;
const loading = ref(true);
const showBackToTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    loading.value = false;
  }, 1000);

  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.no-header-offset {
  padding-top: 0 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes progress {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.animate-progress {
  animation: progress 1s linear;
}
</style>