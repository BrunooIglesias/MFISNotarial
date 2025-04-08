<template>
  <form @submit.prevent="handleSubmit" class="space-y-6 sm:space-y-8 bg-white/80 rounded-2xl p-6 sm:p-8 shadow-sm border border-notarial-text/10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
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
              class="block w-full pl-10 pr-3 py-2.5 border border-notarial-text/20 rounded-xl bg-white/70 focus:ring-2 focus:ring-notarial-primary focus:border-transparent text-sm sm:text-base shadow-sm"
              :class="{ 'border-red-500 ring-1 ring-red-500': errors.name }"
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
              class="block w-full pl-10 pr-3 py-2.5 border border-notarial-text/20 rounded-xl bg-white/70 focus:ring-2 focus:ring-notarial-primary focus:border-transparent text-sm sm:text-base shadow-sm"
              :class="{ 'border-red-500 ring-1 ring-red-500': errors.email }"
              placeholder="ejemplo@correo.com"
              @input="validateEmail"
          />
        </div>
        <p v-if="errors.email" class="mt-1 text-xs sm:text-sm text-red-500">{{ errors.email }}</p>
      </div>
    </div>

    <div class="space-y-2">
      <label for="phone" class="block text-sm font-medium text-notarial-text">Celular</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-notarial-text/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <input
            id="phone"
            v-model="form.phone"
            type="tel"
            inputmode="numeric"
            class="block w-full pl-10 pr-3 py-2.5 border border-notarial-text/20 rounded-xl bg-white/70 focus:ring-2 focus:ring-notarial-primary focus:border-transparent text-sm sm:text-base shadow-sm"
            :class="{ 'border-red-500 ring-1 ring-red-500': errors.phone }"
            placeholder="Solo números (ej: 091234567)"
            @input="validatePhone"
        />
      </div>
      <p v-if="errors.phone" class="mt-1 text-xs sm:text-sm text-red-500">{{ errors.phone }}</p>
    </div>

    <div class="space-y-2">
      <label for="message" class="block text-sm font-medium text-notarial-text">Mensaje</label>
      <div class="relative">
        <div class="absolute top-3 left-3 flex items-start pointer-events-none">
          <svg class="h-5 w-5 text-notarial-text/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <textarea
            id="message"
            v-model="form.message"
            rows="4"
            class="block w-full pl-10 pr-3 py-2.5 border border-notarial-text/20 rounded-xl bg-white/70 focus:ring-2 focus:ring-notarial-primary focus:border-transparent resize-none text-sm sm:text-base shadow-sm"
            :class="{ 'border-red-500 ring-1 ring-red-500': errors.message }"
            placeholder="Escriba su mensaje aquí..."
            @input="validateMessage"
        ></textarea>
      </div>
      <p v-if="errors.message" class="mt-1 text-xs sm:text-sm text-red-500">{{ errors.message }}</p>
    </div>

    <div class="pt-2">
      <button
          type="submit"
          class="w-full bg-gradient-to-r from-notarial-primary to-notarial-subtext text-white py-3 px-6 rounded-xl font-medium text-sm sm:text-base hover:opacity-90 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-notarial-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          :disabled="!isFormValid"
      >
        <div class="flex items-center justify-center space-x-2">
          <span>Enviar Mensaje</span>
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const errors = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const sanitizeInput = (input: string): string => {
  return input
      .replace(/[<>;&]/g, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/^\s+|\s+$/g, '');
};

const validateName = () => {
  const name = form.value.name;
  if (!name.trim()) {
    errors.value.name = 'El nombre es requerido';
  } else if (name.length < 2) {
    errors.value.name = 'El nombre debe tener al menos 2 caracteres';
  } else if (name.length > 50) {
    errors.value.name = 'El nombre no puede exceder los 50 caracteres';
  } else {
    errors.value.name = '';
  }
};

const validateEmail = () => {
  const email = form.value.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    errors.value.email = 'El email es requerido';
  } else if (!emailRegex.test(email)) {
    errors.value.email = 'Por favor ingrese un email válido';
  } else {
    errors.value.email = '';
  }
};

const validatePhone = () => {
  const phone = form.value.phone.trim();
  const numericOnly = /^\d+$/;

  if (!phone) {
    errors.value.phone = 'El celular es requerido';
  } else if (!numericOnly.test(phone)) {
    errors.value.phone = 'El celular debe contener solo números';
  } else if (phone.length < 7 || phone.length > 15) {
    errors.value.phone = 'El celular debe tener entre 7 y 15 dígitos';
  } else {
    errors.value.phone = '';
  }
};

const validateMessage = () => {
  const message = form.value.message;
  if (!message.trim()) {
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
      !errors.value.phone &&
      !errors.value.message &&
      form.value.name &&
      form.value.email &&
      form.value.phone &&
      form.value.message
  );
});

const handleSubmit = async () => {
  validateName();
  validateEmail();
  validatePhone();
  validateMessage();

  if (!isFormValid.value) {
    return;
  }

  try {
    const sanitizedName = sanitizeInput(form.value.name);
    const sanitizedEmail = sanitizeInput(form.value.email);
    const sanitizedMessage = sanitizeInput(form.value.message);

    await fetch(`${process.env.VUE_APP_API_URL}/contact_messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: sanitizedName,
        email: sanitizedEmail,
        phone: form.value.phone,
        message: sanitizedMessage
      })
    });

    form.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
</script>