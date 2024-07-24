<template>
  <div class="bg-white text-black shadow-md rounded-lg p-6 transition-opacity duration-1000 ease-in-out opacity-0" ref="formElement">
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
import { ref, onMounted } from 'vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

const formElement = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
      }
    });
  }, {
    threshold: 0.1,
  });

  if (formElement.value) {
    observer.observe(formElement.value);
  }
});

const onSubmit = () => {
  console.log({
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  });
};
</script>
