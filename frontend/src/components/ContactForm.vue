<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label class="block text-gray-700">Nombre</label>
      <input
          v-model="form.name"
          type="text"
          required
          class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
      />
    </div>
    <div>
      <label class="block text-gray-700">Correo Electrónico</label>
      <input
          v-model="form.email"
          type="email"
          required
          class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
      />
    </div>
    <div>
      <label class="block text-gray-700">Mensaje</label>
      <textarea
          v-model="form.message"
          required
          class="mt-1 w-full border-gray-300 rounded-md shadow-sm"
      ></textarea>
    </div>
    <q-btn
        label="Enviar Mensaje"
        type="submit"
        color="purple-600"
        text-color="white"
        unelevated
        class="w-full py-3 rounded-full"
    />
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
