import React from 'react';
import FileUpload from './FileUpload';
import RegistrationForm from './RegistrationForm';
import PostForm from './PostForm';
import MessageForm from './MessageForm';

const UserProfile = () => {
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

  return (
    <div>
      <h1>Профиль пользователя</h1>

      <section aria-labelledby="upload-heading">
        <h2 id="upload-heading">Загрузка файла</h2>
        <FileUpload onUploaded={handleUploadedFile} onFailed={handleUploadError} />
      </section>

      <section aria-labelledby="registration-heading">
        <h2 id="registration-heading">Регистрация</h2>
        <RegistrationForm onRegister={handleRegistration} />
      </section>

      <section aria-labelledby="post-heading">
        <h2 id="post-heading">Создание поста</h2>
        <PostForm onPost={handlePost} />
      </section>

      <section aria-labelledby="message-heading">
        <h2 id="message-heading">Отправить сообщение</h2>
        <MessageForm onSend={handleMessage} />
      </section>
    </div>
  );
};

export default UserProfile;
