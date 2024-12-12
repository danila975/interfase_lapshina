это код userprofile.vue. исправь его, чтобы ошибки не возникала: <template>
  <div>
    <h1>Профиль пользователя</h1>
    <FileUpload @uploaded="handleUploadedFile" />
    <RegistrationForm />
    <PostForm />
    <MessageForm />
  </div>
</template>

<script setup>
import FileUpload from './FileUpload.vue';
import RegistrationForm from './RegistrationForm.vue'; // Импортируйте ваши компоненты форм
import PostForm from './PostForm.vue';
import MessageForm from './MessageForm.vue';

const handleUploadedFile = (fileData) => {
  console.log('Uploaded file data:', fileData);
  // Здесь вы можете выполнить действия с загруженным файлом, например, отправить его на сервер
};
</script>
