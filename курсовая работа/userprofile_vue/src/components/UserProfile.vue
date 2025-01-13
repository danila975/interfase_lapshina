<!-- UserProfile.vue -->
<template>
  <div>
    <h1>Профиль пользователя</h1>

    <section aria-labelledby="upload-heading">
      <h2 id="upload-heading">Загрузка файла</h2>
      <FileUpload @uploaded="handleUploadedFile" @failed="handleUploadError" />
    </section>

    <section aria-labelledby="registration-heading">
      <h2 id="registration-heading">Регистрация</h2>
      <RegistrationForm @register="handleRegistration" />
    </section>

    <section aria-labelledby="post-heading">
      <h2 id="post-heading">Создание поста</h2>
      <PostForm @post="handlePost" />
    </section>

    <section aria-labelledby="message-heading">
      <h2 id="message-heading">Отправить сообщение</h2>
      <MessageForm @send="handleMessage" />
    </section>
  </div>
</template>

<script setup>
import FileUpload from './FileUpload.vue';
import RegistrationForm from './RegistrationForm.vue';
import PostForm from './PostForm.vue';
import MessageForm from './MessageForm.vue';

const handleUploadedFile = (fileData) => {
  console.log('Uploaded file data:', fileData);
};

const handleUploadError = (error) => {
  console.error('Upload error:', error);
};

const handleRegistration = (data) => {
  console.log('User registered:', data);
};

const handlePost = (postText) => {
  console.log('Post created:', postText);
};

const handleMessage = (messageText) => {
  console.log('Message sent:', messageText);
};
</script>

<style>
/* Дополнительные стили при необходимости */
</style>
