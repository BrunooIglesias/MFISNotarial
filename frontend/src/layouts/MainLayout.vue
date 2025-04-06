<template>
  <q-layout view="lHh Lpr lFf" class="text-gray-900">
    <Header />
    <q-page-container class="p-0 bg-notarial-bg no-header-offset">
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.no-header-offset {
  padding-top: 0 !important;
}
</style>
