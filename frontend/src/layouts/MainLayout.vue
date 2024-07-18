<template>
  <q-layout view="hHh lpR fFf" class="bg-light-gray dark:bg-dark-gray">
    <Header />
    <q-page-container class="q-pa-md">
      <ExperienceSection />
      <div class="q-pt-none">
        <h2 class="text-center q-mb-md">Contáctate con Nosotros</h2>
        <ContactForm />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import ContactForm from '../components/ContactForm.vue';
</script>

<style scoped>
.q-pa-md {
  padding: 24px;
}
.q-pt-none {
  padding-top: 0px;
}
.text-center {
  text-align: center;
}
.q-mb-md {
  margin-bottom: 16px;
}
.bg-light-gray {
  background-color: #f0f0f0;
}
.dark:bg-dark-gray {
  background-color: #2c2c2c;
}
</style>
