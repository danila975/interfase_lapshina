import React, { useState } from 'react';

const PostForm = ({ onPost }) => {
  const [postText, setPostText] = useState('');

  const createPost = () => {
    if (postText.trim() !== '') {
      onPost(postText);
      setPostText('');
      const statusMessageElement = document.getElementById('post-form-status');
      statusMessageElement.textContent = 'Пост опубликован.';
      setTimeout(() => {
        statusMessageElement.textContent = '';
      }, 5000);
    } else {
      alert('Пост не должен быть пустым.');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost();
      }}
    >
      <label htmlFor="post-text">Текст поста:</label>
      <textarea
        id="post-text"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        aria-describedby="post-help"
        required
      ></textarea>
      <span id="post-help" className="visually-hidden">
        Введите текст вашего поста. Обязательное поле.
      </span>
      <button type="submit">Опубликовать</button>
      <div
        id="post-form-status"
        className="visually-hidden"
        aria-live="polite"
      ></div>
    </form>
  );
};

export default PostForm;
