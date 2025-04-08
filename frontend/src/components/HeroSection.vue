<template>
  <section id="hero-section" class="relative overflow-hidden bg-gradient-to-br from-notarial-primary to-notarial-secondary min-h-screen pt-24 sm:pt-32 pb-8 sm:pb-16 flex flex-col">
    <div class="absolute inset-0 z-0">
      <svg class="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 opacity-20 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M40.8,-52.7C53.4,-44.1,63.2,-32.4,69.2,-18.8C75.2,-5.2,77.5,10.2,73.7,24.1C69.8,38,59.7,50.3,46.1,57.5C32.6,64.7,15.3,66.9,-0.7,67.6C-16.7,68.3,-33.3,67.4,-45.7,60.1C-58,52.8,-66.1,39.2,-69.9,24.6C-73.7,10,-73.1,-5.7,-66.3,-19.7C-59.5,-33.8,-46.4,-45.1,-32.5,-53.5C-18.6,-61.9,-9.3,-67.4,2,-70.4C13.2,-73.5,26.4,-74.8,40.8,-52.7Z" transform="translate(100 100)" />
      </svg>

      <svg class="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 opacity-15 transform translate-x-1/3 translate-y-1/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M47.7,-51.2C59.9,-38.8,66.9,-21.6,67.2,-4.3C67.5,13,61.2,30.4,49,41.1C36.9,51.8,18.4,55.7,0.4,55.3C-17.7,54.9,-35.3,50.1,-47.6,39C-59.8,27.8,-66.7,10.2,-66.1,-7.3C-65.6,-24.8,-57.6,-42.1,-44.5,-54.3C-31.3,-66.6,-15.7,-73.7,1,-74.8C17.8,-75.9,35.5,-63.7,47.7,-51.2Z" transform="translate(100 100)" />
      </svg>

      <div class="absolute inset-0 opacity-5">
        <div class="h-full w-full bg-stripes"></div>
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
      <div class="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        <div class="lg:col-span-7 space-y-6 sm:space-y-8 animate-slide-in-left">
          <div class="inline-flex items-center space-x-2 bg-notarial-bg/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            <div class="h-1 w-6 sm:w-8 bg-notarial-bg rounded"></div>
            <p class="uppercase text-xs sm:text-sm tracking-widest text-notarial-bg font-semibold">
              Estudio Notarial
            </p>
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold text-notarial-bg leading-tight">
            <span class="block">Compromiso,</span>
            <span class="block">Confianza y</span>
            <span class="block relative">
              Claridad Jurídica
              <svg class="absolute -bottom-4 left-0 w-24 sm:w-32 h-2 sm:h-3 text-notarial-bg opacity-60" viewBox="0 0 172 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C20 2.5 40.5 9.5 65 10C89.5 10.5 112 6 137.5 5.5C163 5 166 11.5 171 5.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </span>
          </h1>

          <p class="text-base sm:text-lg text-notarial-bg/90 max-w-2xl font-light leading-relaxed">
            Asesoramiento notarial integral para personas y empresas. Soluciones claras y profesionales adaptadas a tus necesidades. Más de <span class="font-medium">25 años</span> acompañando decisiones importantes.
          </p>

          <div class="pt-6 flex flex-col sm:flex-row gap-4">
            <q-btn
                label="Contáctese con Nosotros"
                color="notarial-bg"
                text-color="notarial-text"
                unelevated
                size="lg"
                class="shadow-xl rounded-full px-6 sm:px-8 py-3 sm:py-4 font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                @click="scrollToForm"
            />
            <q-btn
                label="Nuestros Servicios"
                color="transparent"
                text-color="notarial-bg"
                outline
                size="lg"
                class="rounded-full px-6 sm:px-8 py-3 sm:py-4 font-semibold border-2 hover:bg-notarial-bg/10 transition-all duration-300"
                @click="scrollToServices"
            />
          </div>

          <div class="pt-8 sm:pt-10 border-t border-notarial-bg/20">
            <div class="flex flex-nowrap gap-2 sm:gap-4 items-center text-notarial-bg/90 text-xs sm:text-sm overflow-x-auto pb-2">
              <div class="flex items-center gap-2 bg-notarial-bg/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Legalmente Certificados</span>
              </div>
              <div class="flex items-center gap-2 bg-notarial-bg/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Respuesta en 24 horas</span>
              </div>
              <div class="flex items-center gap-2 bg-notarial-bg/5 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span>Satisfacción Garantizada</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative animate-zoom-in mt-6 sm:mt-8 lg:mt-0">
          <div class="absolute -inset-4 rounded-xl bg-gradient-to-br from-notarial-bg/70 to-notarial-secondary/70 blur-md -z-10"></div>
          <div class="relative overflow-hidden rounded-xl shadow-2xl border-2 border-notarial-bg/30">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-notarial-text/30 to-transparent z-10"></div>
            <img
                :src="notarial"
                alt="Mary Iglesias en su escritorio"
                class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute bottom-4 right-4 bg-notarial-bg/80 text-notarial-text text-xs px-3 py-1 rounded-full z-20 backdrop-blur-sm">
              Estudio Iglesias © 2025
            </div>
          </div>

          <div class="absolute -top-6 -left-6 bg-notarial-bg text-notarial-text rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-lg transform rotate-3 z-20 animate-float backdrop-blur-sm">
            <p class="font-semibold text-sm sm:text-base">25+ años de experiencia</p>
          </div>
        </div>
      </div>

      <div class="relative z-10 flex flex-col items-center text-notarial-bg animate-bounce-slow mt-6 sm:mt-8">
        <span class="text-xs sm:text-sm font-light mb-2">Scroll para descubrir</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const notarial = new URL('@/assets/notarial-picture.jpeg', import.meta.url).href;

const scrollToForm = () => {
  const el = document.getElementById('contact-form');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToServices = () => {
  const el = document.getElementById('services-section');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
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

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(3deg);
  }
  50% {
    transform: translateY(-10px) rotate(3deg);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-slide-in-left {
  animation: slide-in-left 1s ease-out;
}

.animate-zoom-in {
  animation: zoom-in 1.2s ease-in-out;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.bg-stripes {
  background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.05) 10px,
      rgba(255, 255, 255, 0.05) 20px
  );
}
</style>