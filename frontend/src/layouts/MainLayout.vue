<template>
  <q-layout class="bg-white min-h-screen">
    <Header />
    <q-page-container class="flex flex-col items-center w-full overflow-y-auto">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>
