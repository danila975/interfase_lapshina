<template>
  <form @submit.prevent="register">
    <input type="email" v-model="email" placeholder="Email" required>
    <input type="tel" v-model="phone" placeholder="Телефон" required>
    <button type="submit">Зарегистрироваться</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const phone = ref('');

const emit = defineEmits(['register']);

const register = () => {
  emit('register', { email: email.value, phone: phone.value });
  email.value = '';
  phone.value = '';
};
</script>
