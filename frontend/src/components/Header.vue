<template>
  <q-header
      elevated
      class="bg-notarial-bg text-notarial-text fixed top-0 w-full z-50 transition-all duration-300"
      :class="{ 'header-scrolled': scrolled }"
  >
    <q-toolbar class="container mx-auto px-2 xs:px-4 lg:px-8 flex flex-wrap justify-between items-center h-14 xs:h-16 sm:h-20">
      <div class="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
        <div class="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 relative overflow-hidden rounded-full shadow-md bg-white p-1">
          <img :src="logo" alt="Logo" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col">
          <span class="text-sm xs:text-base sm:text-lg font-bold leading-tight">
            Mary Iglesias
          </span>
          <span class="text-[9px] xs:text-[10px] sm:text-xs text-notarial-text/80">
            Escribana Pública
          </span>
        </div>
      </div>

      <div class="hidden md:flex items-center space-x-4">
        <template v-for="(item, index) in navItems" :key="index">
          <q-btn
              flat
              :label="item.label"
              @click="navigateTo(item.section)"
              class="font-medium text-notarial-text hover:text-notarial-subtext transition-colors duration-200"
              :class="{ 'border-b-2 border-notarial-primary pb-1': activeSection === item.section }"
          />
        </template>
      </div>

      <div class="flex items-center space-x-2 xs:space-x-2 sm:space-x-4">
        <a
            href="tel:+59899943824"
            class="hidden md:flex items-center text-notarial-text hover:text-notarial-subtext transition-colors duration-200"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 xs:h-4 xs:w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="text-xs xs:text-sm md:text-sm font-medium">Llamar</span>
        </a>
        <q-btn
            label="Contáctenos"
            class="bg-notarial-primary text-notarial-bg hover:bg-notarial-secondary transition-colors duration-300 shadow-md rounded-full text-xs xs:text-sm sm:text-sm px-2 xs:px-4 sm:px-6 py-1 xs:py-2"
            @click="navigateTo('contact-form')"
        />

        <q-btn
            flat
            round
            dense
            class="md:hidden"
            @click="drawer = !drawer"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 xs:h-5 xs:w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </q-btn>
      </div>
    </q-toolbar>

    <q-drawer
        v-model="drawer"
        side="right"
        bordered
        :width="280"
        class="bg-notarial-bg"
    >
      <q-list padding>
        <q-item-label header class="text-notarial-text font-bold text-lg py-4">
          Menu
        </q-item-label>
        <q-separator class="mb-4" />
        <q-item
            v-for="(item, index) in navItems"
            :key="index"
            clickable
            v-ripple
            @click="navigateTo(item.section); drawer = false"
            class="text-notarial-text"
        >
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
        <q-separator class="my-4" />
        <q-item
            clickable
            v-ripple
            @click="navigateTo('contact-form'); drawer = false"
            class="bg-notarial-primary text-notarial-bg rounded-lg my-2"
        >
          <q-item-section>Contáctenos</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="callPhone" class="text-notarial-text">
          <q-item-section avatar>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 xs:h-4 xs:w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </q-item-section>
          <q-item-section>Llámenos</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </q-header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const logo = new URL('@/assets/notarial-logo.png', import.meta.url).href;
const drawer = ref(false);
const scrolled = ref(false);
const activeSection = ref('hero-section');

const navItems = [
  { label: 'Inicio', section: 'hero-section' },
  { label: 'Sobre Nosotros', section: 'about-section' },
  { label: 'Servicios', section: 'services-section' },
  { label: 'Testimonios', section: 'testimonials' }
];

const navigateTo = (section: string) => {
  const el = document.getElementById(section);
  if (el) {
    drawer.value = false;

    setTimeout(() => {
      const headerHeight =
          document.querySelector('.q-header')?.clientHeight || 0;
      const elementPosition =
          el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      activeSection.value = section;
      console.log(`Scrolled to section: ${section}`);
    }, 100);
  } else {
    console.error(`Section not found: ${section}`);
  }
};

const callPhone = () => {
  window.location.href = 'tel:+59899943824';
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
  const sections = [
    'hero-section',
    'about-section',
    'services-section',
    'testimonials',
    'contact-form'
  ];
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header-scrolled {
  @apply bg-notarial-bg/95 backdrop-blur-md shadow-md;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
