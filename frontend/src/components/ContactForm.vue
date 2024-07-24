<template>
  <div class="bg-white text-black shadow-md rounded-lg p-6 transition-opacity duration-700 ease-in-out" :class="{ 'opacity-100': showForm, 'opacity-0': !showForm }" @mouseover="showForm = true">
    <q-form @submit="onSubmit">
      <q-input filled v-model="name" label="Nombre" required class="mb-4 rounded-lg" />
      <q-input filled v-model="email" label="Email" type="email" required class="mb-4 rounded-lg" />
      <q-input filled v-model="phone" label="Teléfono" type="tel" required class="mb-4 rounded-lg" />
      <q-input filled v-model="message" label="Mensaje" type="textarea" class="mb-4 rounded-lg" />
      <q-btn type="submit" label="Enviar" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

const showForm = ref(false);

const onSubmit = () => {
  console.log({
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  });
};
</script>
