<!-- MessageForm.vue -->
<template>
  <form @submit.prevent="sendMessage">
    <label for="message-text">Текст сообщения:</label>
    <textarea
      id="message-text"
      v-model="messageText"
      aria-describedby="message-help"
      required
    ></textarea>
    <span id="message-help" class="visually-hidden">
      Введите ваше сообщение. Обязательное поле.
    </span>
    <button type="submit">Отправить</button>

    <!-- Сообщение об успешной отправке -->
    <div
      v-if="statusMessage"
      :class="{'visually-hidden': !showStatusVisually}"
      aria-live="polite"
    >
      {{ statusMessage }}
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['send']);
const messageText = ref('');
const statusMessage = ref('');
const showStatusVisually = ref(false);

const sendMessage = () => {
  if (messageText.value.trim() !== '') {
    emit('send', messageText.value);
    messageText.value = '';
    statusMessage.value = 'Сообщение отправлено.';
    showStatusVisually.value = true;
    clearStatusMessage();
  } else {
    alert('Сообщение не должно быть пустым.');
  }
};

const clearStatusMessage = () => {
  setTimeout(() => {
    statusMessage.value = '';
    showStatusVisually.value = false;
  }, 5000);
};
</script>

<style>
.visually-hidden {
  position: absolute;
  overflow: hidden;
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  white-space: nowrap;
}
</style>
