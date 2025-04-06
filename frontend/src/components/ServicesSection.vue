<template>
  <section id="services" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Servicios</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard title="Escrituras" icon="document-text" />
        <ServiceCard title="Certificados" icon="check-circle" />
        <ServiceCard title="Constitución de Sociedades" icon="users" />
        <ServiceCard title="Testamentos" icon="file-text" />
        <ServiceCard title="Poderes" icon="shield-check" />
        <ServiceCard title="Autorizaciones de Viaje" icon="plane" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue';
</script>
