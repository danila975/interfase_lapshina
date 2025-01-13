<!-- FileUpload.vue -->
<template>
  <div>
    <label for="file-upload">Загрузите файл:</label>
    <input
      id="file-upload"
      type="file"
      @change="onFileChange"
      @keydown.enter.prevent="triggerClick"
      ref="fileInput"
    >
    <!-- Сообщение о статусе загрузки -->
    <div
      v-if="statusMessage"
      aria-live="polite"
      class="status-message visually-hidden"
    >{{ statusMessage }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['uploaded', 'failed']);
const fileInput = ref(null);
const statusMessage = ref('');

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      emit('uploaded', reader.result);
      statusMessage.value = 'Файл успешно загружен.';
      clearStatusMessage();
    };
    reader.onerror = (error) => {
      emit('failed', error);
      console.error('Ошибка при чтении файла:', error);
      statusMessage.value = 'Ошибка при загрузке файла.';
      clearStatusMessage();
    };
    reader.readAsDataURL(file);
  } else {
    statusMessage.value = 'Файл не выбран.';
    clearStatusMessage();
  }
};

const triggerClick = () => {
  fileInput.value.click();
};

const clearStatusMessage = () => {
  setTimeout(() => {
    statusMessage.value = '';
  }, 5000);
};
</script>

<style>
.visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  white-space: nowrap;
}
</style>
