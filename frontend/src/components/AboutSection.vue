<template>
  <section id="about" class="relative min-h-[calc(100vh-4rem)] bg-white flex items-center">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image section -->
        <div class="relative">
          <div class="relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              :src="aboutImage" 
              alt="Estudio Notarial" 
              class="w-full h-auto object-cover"
            />
          </div>
        </div>

        <!-- Content section -->
        <div class="space-y-6">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold text-notarial-subtext">
              Sobre Nosotros
            </h2>
            <div class="h-1 w-16 bg-notarial-primary rounded"></div>
          </div>
          
          <p class="text-notarial-text text-lg leading-relaxed">
            En Estudio Notarial, combinamos experiencia y dedicación para brindar asesoramiento legal de alta calidad. Nuestro equipo se compromete a garantizar claridad y confianza en cada paso.
          </p>

          <div class="flex items-center gap-4 pt-4">
            <q-btn
              label="Nuestros Servicios"
              color="notarial-primary"
              text-color="white"
              unelevated
              class="rounded-full px-6"
              @click="scrollToServices"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const aboutImage = new URL('@/assets/notarial-placeholder.jpg', import.meta.url).href;

const scrollToServices = () => {
  const el = document.getElementById('services-section');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 1s ease-out;
}
</style>
