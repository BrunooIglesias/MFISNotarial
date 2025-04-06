<template>
  <section id="about" class="relative min-h-[calc(100vh-4rem)] bg-notarial-bg flex items-center">
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 gap-16">
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-notarial-subtext mb-4">
            Sobre Nosotros
          </h2>
          <div class="h-1 w-16 bg-notarial-primary rounded mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-notarial-light hover:border-notarial-primary transition-all duration-300 shadow-lg hover:shadow-xl">
            <div class="text-notarial-primary text-3xl sm:text-4xl mb-4">
              <i class="fas fa-eye"></i>
            </div>
            <h3 class="text-xl sm:text-2xl font-semibold text-notarial-subtext mb-3 sm:mb-4">Nuestra Visión</h3>
            <p class="text-sm sm:text-base text-notarial-text leading-relaxed">
              Ser el referente en servicios notariales, destacando por nuestra excelencia, profesionalismo y compromiso con cada cliente.
            </p>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-notarial-light hover:border-notarial-primary transition-all duration-300 shadow-lg hover:shadow-xl">
            <div class="text-notarial-primary text-3xl sm:text-4xl mb-4">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3 class="text-xl sm:text-2xl font-semibold text-notarial-subtext mb-3 sm:mb-4">Nuestra Misión</h3>
            <p class="text-sm sm:text-base text-notarial-text leading-relaxed">
              Brindar asesoramiento legal de excelencia, garantizando claridad y confianza en cada paso del proceso notarial.
            </p>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-notarial-light hover:border-notarial-primary transition-all duration-300 shadow-lg hover:shadow-xl">
            <div class="text-notarial-primary text-3xl sm:text-4xl mb-4">
              <i class="fas fa-handshake"></i>
            </div>
            <h3 class="text-xl sm:text-2xl font-semibold text-notarial-subtext mb-3 sm:mb-4">Nuestros Valores</h3>
            <p class="text-sm sm:text-base text-notarial-text leading-relaxed">
              Integridad, profesionalismo y dedicación son los pilares que guían nuestro trabajo diario y nuestra relación con los clientes.
            </p>
          </div>
        </div>

        <div class="text-center mt-8 sm:mt-12">
          <q-btn
            label="Conoce Nuestros Servicios"
            color="notarial-primary"
            text-color="white"
            unelevated
            class="rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg hover:scale-105 transition-transform duration-300"
            @click="scrollToServices"
          />
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
</style>
