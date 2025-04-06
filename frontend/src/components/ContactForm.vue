<template>
  <form @submit.prevent="handleSubmit" class="space-y-6 sm:space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <div class="space-y-2">
        <label for="name" class="block text-sm font-medium text-notarial-text">Nombre Completo</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-notarial-text/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="block w-full pl-10 pr-3 py-2 sm:py-2.5 border border-notarial-text/20 rounded-xl bg-white/50 focus:ring-2 focus:ring-notarial-primary focus:border-transparent text-sm sm:text-base"
            :class="{ 'border-red-500': errors.name }"
            placeholder="Ingrese su nombre completo"
            @input="validateName"
          />
        </div>
        <p v-if="errors.name" class="mt-1 text-xs sm:text-sm text-red-500">{{ errors.name }}</p>
      </div>

      <div class="space-y-2">
        <label for="email" class="block text-sm font-medium text-notarial-text">Correo Electrónico</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-notarial-text/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="block w-full pl-10 pr-3 py-2 sm:py-2.5 border border-notarial-text/20 rounded-xl bg-white/50 focus:ring-2 focus:ring-notarial-primary focus:border-transparent text-sm sm:text-base"
            :class="{ 'border-red-500': errors.email }"
            placeholder="ejemplo@correo.com"
            @input="validateEmail"
          />
        </div>
        <p v-if="errors.email" class="mt-1 text-xs sm:text-sm text-red-500">{{ errors.email }}</p>
      </div>
    </div>

    <div class="space-y-2">
      <label for="message" class="block text-sm font-medium text-notarial-text">Mensaje</label>
      <div class="relative">
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          class="block w-full px-3 py-2 sm:py-2.5 border border-notarial-text/20 rounded-xl bg-white/50 focus:ring-2 focus:ring-notarial-primary focus:border-transparent resize-none text-sm sm:text-base"
          :class="{ 'border-red-500': errors.message }"
          placeholder="Escriba su mensaje aquí..."
          @input="validateMessage"
        ></textarea>
      </div>
      <p v-if="errors.message" class="mt-1 text-xs sm:text-sm text-red-500">{{ errors.message }}</p>
    </div>

    <button
      type="submit"
      class="w-full bg-gradient-to-r from-notarial-primary to-notarial-subtext text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-medium text-sm sm:text-base hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notarial-primary disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="!isFormValid"
    >
      Enviar Mensaje
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const errors = ref({
  name: '',
  email: '',
  message: ''
});

const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
    .replace(/[&]/g, '')
    .replace(/[;]/g, '')
    .trim();
};

const validateName = () => {
  const name = sanitizeInput(form.value.name);
  if (!name) {
    errors.value.name = 'El nombre es requerido';
  } else if (name.length < 2) {
    errors.value.name = 'El nombre debe tener al menos 2 caracteres';
  } else if (name.length > 50) {
    errors.value.name = 'El nombre no puede exceder los 50 caracteres';
  } else {
    errors.value.name = '';
  }
  form.value.name = name;
};

const validateEmail = () => {
  const email = sanitizeInput(form.value.email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    errors.value.email = 'El email es requerido';
  } else if (!emailRegex.test(email)) {
    errors.value.email = 'Por favor ingrese un email válido';
  } else {
    errors.value.email = '';
  }
  form.value.email = email;
};

const validateMessage = () => {
  const message = form.value.message;
  if (!message) {
    errors.value.message = 'El mensaje es requerido';
  } else if (message.length < 10) {
    errors.value.message = 'El mensaje debe tener al menos 10 caracteres';
  } else if (message.length > 1000) {
    errors.value.message = 'El mensaje no puede exceder los 1000 caracteres';
  } else {
    errors.value.message = '';
  }
};

const isFormValid = computed(() => {
  return (
    !errors.value.name &&
    !errors.value.email &&
    !errors.value.message &&
    form.value.name &&
    form.value.email &&
    form.value.message
  );
});

const handleSubmit = async () => {
  validateName();
  validateEmail();
  validateMessage();

  if (!isFormValid.value) {
    return;
  }

  try {
    console.log('Form submitted:', form.value);
    
    form.value = {
      name: '',
      email: '',
      message: ''
    };
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
</script>
