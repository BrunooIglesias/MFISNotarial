<template>
  <form @submit.prevent="handleSubmit" class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-2">
        <label class="block text-sm font-medium text-notarial-subtext">Nombre</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-notarial-text/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </div>
          <input
            v-model="form.name"
            type="text"
            required
            class="pl-10 w-full px-4 py-3 rounded-xl border border-notarial-text/20 bg-white/50 focus:border-notarial-primary focus:ring-2 focus:ring-notarial-primary/20 transition-all duration-200"
            placeholder="Ingrese su nombre"
          />
        </div>
      </div>
      <div class="space-y-2">
        <label class="block text-sm font-medium text-notarial-subtext">Correo Electrónico</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-notarial-text/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <input
            v-model="form.email"
            type="email"
            required
            class="pl-10 w-full px-4 py-3 rounded-xl border border-notarial-text/20 bg-white/50 focus:border-notarial-primary focus:ring-2 focus:ring-notarial-primary/20 transition-all duration-200"
            placeholder="ejemplo@correo.com"
          />
        </div>
      </div>
    </div>
    <div class="space-y-2">
      <label class="block text-sm font-medium text-notarial-subtext">Mensaje</label>
      <div class="relative">
        <div class="absolute top-3 left-3 pointer-events-none">
          <svg class="h-5 w-5 text-notarial-text/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
          </svg>
        </div>
        <textarea
          v-model="form.message"
          required
          rows="4"
          class="pl-10 w-full px-4 py-3 rounded-xl border border-notarial-text/20 bg-white/50 focus:border-notarial-primary focus:ring-2 focus:ring-notarial-primary/20 transition-all duration-200 resize-none"
          placeholder="Escriba su mensaje aquí..."
        ></textarea>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        type="submit"
        class="group relative w-full md:w-auto px-8 py-3 bg-notarial-primary text-white rounded-xl font-medium hover:bg-notarial-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <span class="relative z-10">Enviar Mensaje</span>
        <div class="absolute inset-0 bg-gradient-to-r from-notarial-primary to-notarial-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const form = ref({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  form.value = { name: '', email: '', message: '' };
};
</script>
