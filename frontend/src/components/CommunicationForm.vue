<template>
  <div class="bg-notarial-bg rounded-3xl p-8 md:p-12 shadow-xl">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="space-y-8">
        <div>
          <h2 class="text-3xl font-bold text-notarial-subtext mb-4">
            Contáctenos
          </h2>
          <p class="text-notarial-text/80">
            Complete el formulario y nos pondremos en contacto con usted a la brevedad.
          </p>
        </div>

        <div class="space-y-6">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 rounded-xl bg-notarial-primary/10 flex items-center justify-center flex-shrink-0">
              <i class="fas fa-map-marker-alt text-notarial-primary text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-notarial-subtext mb-1">Ubicación</h3>
              <p class="text-notarial-text/80">Av. Principal 123, Santiago, Chile</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 rounded-xl bg-notarial-primary/10 flex items-center justify-center flex-shrink-0">
              <i class="fas fa-phone text-notarial-primary text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-notarial-subtext mb-1">Teléfono</h3>
              <p class="text-notarial-text/80">+56 2 1234 5678</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 rounded-xl bg-notarial-primary/10 flex items-center justify-center flex-shrink-0">
              <i class="fas fa-envelope text-notarial-primary text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-notarial-subtext mb-1">Email</h3>
              <p class="text-notarial-text/80">contacto@estudionotarial.cl</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 rounded-xl bg-notarial-primary/10 flex items-center justify-center flex-shrink-0">
              <i class="fas fa-clock text-notarial-primary text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-notarial-subtext mb-1">Horario</h3>
              <p class="text-notarial-text/80">Lunes a Viernes: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <label for="name" class="block text-sm font-medium text-notarial-subtext">
              Nombre completo
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="w-full px-4 py-2.5 rounded-xl border border-notarial-primary/20 bg-white/50 focus:border-notarial-primary focus:ring-2 focus:ring-notarial-primary/20 transition-all duration-200"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-notarial-subtext">
              Correo electrónico
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-2.5 rounded-xl border border-notarial-primary/20 bg-white/50 focus:border-notarial-primary focus:ring-2 focus:ring-notarial-primary/20 transition-all duration-200"
              placeholder="ejemplo@correo.com"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <label for="phone" class="block text-sm font-medium text-notarial-subtext">
              Teléfono
            </label>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              required
              class="w-full px-4 py-2.5 rounded-xl border border-notarial-primary/20 bg-white/50 focus:border-notarial-primary focus:ring-2 focus:ring-notarial-primary/20 transition-all duration-200"
              placeholder="+56 9 XXXX XXXX"
            />
          </div>
          <div class="space-y-2">
            <label for="subject" class="block text-sm font-medium text-notarial-subtext">
              Asunto
            </label>
            <select
              id="subject"
              v-model="formData.subject"
              required
              class="w-full px-4 py-2.5 rounded-xl border border-notarial-primary/20 bg-white/50 focus:border-notarial-primary focus:ring-2 focus:ring-notarial-primary/20 transition-all duration-200"
            >
              <option value="" disabled>Seleccione un asunto</option>
              <option value="consulta">Consulta general</option>
              <option value="cotizacion">Cotización de servicios</option>
              <option value="asesoria">Asesoría legal</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>

        <div class="space-y-2">
          <label for="message" class="block text-sm font-medium text-notarial-subtext">
            Mensaje
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            required
            class="w-full px-4 py-2.5 rounded-xl border border-notarial-primary/20 bg-white/50 focus:border-notarial-primary focus:ring-2 focus:ring-notarial-primary/20 transition-all duration-200 resize-none"
            placeholder="Escriba su mensaje aquí..."
          ></textarea>
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="w-full px-8 py-3 bg-notarial-primary text-white rounded-xl font-medium hover:bg-notarial-secondary transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
};
</script> 