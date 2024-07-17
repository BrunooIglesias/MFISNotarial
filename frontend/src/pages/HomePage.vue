<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <!-- Notarial Information Section -->
    <section class="mb-8">
      <h1 class="text-2xl font-bold mb-4">Notarial Information</h1>
      <p class="mb-2">Experience: 10 years</p>
      <p class="mb-2">Specialization: Property Law</p>
      <p class="mb-2">Contact: notarial@example.com</p>
    </section>

    <!-- Form Section -->
    <section>
      <h2 class="text-xl font-bold mb-4">Contact Us</h2>
      <q-form @submit="onSubmit" class="space-y-4">
        <q-input filled v-model="form.name" label="Name" required />
        <q-input filled v-model="form.email" label="Email" type="email" required />
        <q-input filled v-model="form.subject" label="Subject" required />
        <q-input filled v-model="form.message" label="Message" type="textarea" required />
        <q-btn label="Submit" type="submit" class="bg-blue-500 text-white" />
      </q-form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const onSubmit = () => {
  // Handle form submission
  console.log(form.value);
}
</script>
