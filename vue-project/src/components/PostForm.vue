<template>
  <form @submit.prevent="createPost">
    <textarea v-model="postText" placeholder="Текст поста"></textarea>
    <button type="submit">Опубликовать</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['post']);
const postText = ref('');

const createPost = () => {
  emit('post', postText.value);
  postText.value = '';
};
</script>
