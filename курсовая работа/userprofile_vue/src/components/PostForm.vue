<!-- PostForm.vue -->
<template>
  <form @submit.prevent="createPost">
    <label for="post-text">Текст поста:</label>
    <textarea
      id="post-text"
      v-model="postText"
      aria-describedby="post-help"
      required
    ></textarea>
    <span id="post-help" class="visually-hidden">
      Введите текст вашего поста. Обязательное поле.
    </span>
    <button type="submit">Опубликовать</button>

    <!-- Сообщение об успешной публикации -->
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

const emit = defineEmits(['post']);
const postText = ref('');
const statusMessage = ref('');
const showStatusVisually = ref(false);

const createPost = () => {
  if (postText.value.trim() !== '') {
    emit('post', postText.value);
    postText.value = '';
    statusMessage.value = 'Пост опубликован.';
    showStatusVisually.value = true;
    clearStatusMessage();
  } else {
    alert('Пост не должен быть пустым.');
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
