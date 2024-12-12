<template>
  <form @submit.prevent="sendMessage">
    <textarea v-model="messageText" placeholder="Текст сообщения"></textarea>
    <button type="submit">Отправить</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['send']);
const messageText = ref('');

const sendMessage = () => {
  emit('send', messageText.value);
  messageText.value = '';
};
</script>
