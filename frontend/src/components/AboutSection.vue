<template>
  <section id="about-section" class="relative min-h-screen bg-notarial-bg flex items-center py-12 md:py-16">
    <div class="w-full">
      <div class="grid grid-cols-1 gap-8 md:gap-16">
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-notarial-subtext mb-4">
            Sobre Nosotros
          </h2>
          <div class="h-1 w-16 bg-notarial-primary rounded mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8">
          <div class="bg-white p-6 rounded-2xl border border-notarial-light hover:border-notarial-primary transition-all duration-300 shadow-lg hover:shadow-xl">
            <div class="text-notarial-primary text-3xl sm:text-4xl mb-4">
              <i class="fas fa-binoculars"></i>
            </div>
            <h3 class="text-xl font-semibold text-notarial-subtext mb-3">Visión</h3>
            <p class="text-sm sm:text-base text-notarial-text leading-relaxed">
              Ser un estudio de referencia por la confianza, el trato personalizado y la eficacia en cada gestión.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-notarial-light hover:border-notarial-primary transition-all duration-300 shadow-lg hover:shadow-xl">
            <div class="text-notarial-primary text-3xl sm:text-4xl mb-4">
              <i class="fas fa-scroll"></i>
            </div>
            <h3 class="text-xl font-semibold text-notarial-subtext mb-3">Misión</h3>
            <p class="text-sm sm:text-base text-notarial-text leading-relaxed">
              Brindar un servicio notarial cercano, transparente y profesional, con más de 25 años de experiencia al servicio de cada cliente.
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-notarial-light hover:border-notarial-primary transition-all duration-300 shadow-lg hover:shadow-xl">
            <div class="text-notarial-primary text-3xl sm:text-4xl mb-4">
              <i class="fas fa-gem"></i>
            </div>
            <h3 class="text-xl font-semibold text-notarial-subtext mb-3">Valores</h3>
            <p class="text-sm sm:text-base text-notarial-text leading-relaxed">
              Profesionalismo, transparencia, eficiencia, cercanía y compromiso real con cada persona.
            </p>
          </div>
        </div>

        <div class="text-center mt-8">
          <q-btn
              label="Conoce Nuestros Servicios"
              color="notarial-primary"
              text-color="white"
              unelevated
              class="rounded-full px-6 py-2 text-base hover:scale-105 transition-transform duration-300"
              @click="scrollToServices"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</style>