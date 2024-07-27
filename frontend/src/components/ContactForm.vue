<template>
  <div class="bg-white text-black shadow-md rounded-lg p-6 transition-opacity duration-1000 ease-in-out opacity-0" ref="formElement">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-input filled v-model="formData.name" label="Nombre" :error="!!errors.name" :error-message="errors.name" class="mb-4 rounded-lg" />
      <q-input filled v-model="formData.email" label="Email" type="email" :error="!!errors.email" :error-message="errors.email" class="mb-4 rounded-lg" />
      <q-input filled v-model="formData.phone" label="Teléfono" type="tel" :error="!!errors.phone" :error-message="errors.phone" class="mb-4 rounded-lg" />
      <q-input filled v-model="formData.message" label="Mensaje" type="textarea" :error="!!errors.message" :error-message="errors.message" class="mb-4 rounded-lg" />
      <q-btn type="submit" label="Enviar" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const hasTriedToSubmit = ref(false);

const errors = computed(() => {
  const errs = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  if (hasTriedToSubmit.value) {
    if (!formData.name) {
      errs.name = 'El nombre es obligatorio';
    }

    if (!formData.email && !formData.phone) {
      errs.email = 'Debe proporcionar un email o un teléfono';
      errs.phone = 'Debe proporcionar un email o un teléfono';
    }

    if (!formData.message) {
      errs.message = 'El mensaje es obligatorio';
    }
  }

  return errs;
});

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
  hasTriedToSubmit.value = true;

  if (!errors.value.name && !errors.value.email && !errors.value.phone && !errors.value.message) {
    console.log({ ...formData });
    $q.notify({
      type: 'positive',
      message: 'Formulario enviado con éxito'
    });
  } else {
    $q.notify({
      type: 'negative',
      message: 'Por favor, corrija los errores en el formulario'
    });
  }
};
</script>
