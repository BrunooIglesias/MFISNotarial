<template>
  <section id="services-section" class="min-h-[calc(100vh-4rem)] bg-notarial-service-bg flex items-center py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
      <div class="text-center mb-24">
        <h2 class="text-4xl font-bold text-notarial-subtext mb-6">
          Servicios Notariales
        </h2>
        <p class="text-lg text-notarial-text/80 max-w-2xl mx-auto">
          Ofrecemos una amplia gama de servicios notariales para satisfacer todas sus necesidades legales.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <ServiceCard 
          title="Escrituras" 
          description="Redacción y autenticación de documentos legales y contratos."
          icon="mdi-file-document-outline"
        />
        <ServiceCard 
          title="Certificados" 
          description="Emisión de certificados notariales y legalizaciones."
          icon="mdi-certificate-outline"
        />
        <ServiceCard 
          title="Constitución de Sociedades" 
          description="Asesoría y tramitación para la creación de empresas."
          icon="mdi-domain"
        />
        <ServiceCard 
          title="Testamentos" 
          description="Elaboración y registro de testamentos y sucesiones."
          icon="mdi-gavel"
        />
        <ServiceCard 
          title="Poderes" 
          description="Otorgamiento y registro de poderes notariales."
          icon="mdi-shield-check-outline"
        />
        <ServiceCard 
          title="Autorizaciones de Viaje" 
          description="Documentación para viajes de menores y otros trámites."
          icon="mdi-airplane"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue';
</script>
