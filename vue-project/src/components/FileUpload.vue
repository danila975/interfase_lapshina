<template>
  <div>
    <input type="file" @change="onFileChange">
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['uploaded', 'failed']);

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      emit('uploaded', reader.result);
    };
    reader.onerror = (error) => {
      emit('failed', error);
      console.error('Error reading file:', error);
    };
    reader.readAsDataURL(file);
  }
};
</script>
