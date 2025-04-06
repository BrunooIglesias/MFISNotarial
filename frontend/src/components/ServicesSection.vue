<template>
  <section id="services-section" class="relative py-20 bg-gradient-to-br from-white to-gray-50">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-notarial-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-notarial-secondary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-notarial-subtext mb-4">
          Servicios Notariales
        </h2>
        <p class="text-lg text-notarial-text/80 max-w-2xl mx-auto">
          Ofrecemos una amplia gama de servicios notariales para satisfacer todas sus necesidades legales.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          title="Escrituras" 
          description="Redacción y autenticación de documentos legales y contratos."
          icon="mdi mdi-file-document-outline"
        />
        <ServiceCard 
          title="Certificados" 
          description="Emisión de certificados notariales y legalizaciones."
          icon="mdi mdi-certificate-outline"
        />
        <ServiceCard 
          title="Constitución de Sociedades" 
          description="Asesoría y tramitación para la creación de empresas."
          icon="mdi mdi-domain"
        />
        <ServiceCard 
          title="Testamentos" 
          description="Elaboración y registro de testamentos y sucesiones."
          icon="mdi mdi-gavel"
        />
        <ServiceCard 
          title="Poderes" 
          description="Otorgamiento y registro de poderes notariales."
          icon="mdi mdi-shield-check-outline"
        />
        <ServiceCard 
          title="Autorizaciones de Viaje" 
          description="Documentación para viajes de menores y otros trámites."
          icon="mdi mdi-airplane"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue';
</script>
