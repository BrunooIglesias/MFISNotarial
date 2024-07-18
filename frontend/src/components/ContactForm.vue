<template>
  <q-page class="q-pa-none" id="contact" @mouseover="showForm = true">
    <q-card flat bordered class="bg-white text-dark q-pa-md" :class="{'animate-fade-in': showForm}">
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input filled v-model="name" label="Nombre" required class="q-mb-md"/>
          <q-input filled v-model="email" label="Email" type="email" required class="q-mb-md"/>
          <q-input filled v-model="phone" label="Teléfono" type="tel" required class="q-mb-md"/>
          <q-input filled v-model="message" label="Mensaje" type="textarea" class="q-mb-md"/>
          <q-btn type="submit" label="Enviar" class="full-width"/>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
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

<style scoped>
.bg-white {
  background-color: #f9f9f9;
}
.text-dark {
  color: #333;
}
.q-pa-md {
  padding: 24px;
}
.q-mb-md {
  margin-bottom: 16px;
}
.full-width {
  width: 100%;
}
.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
