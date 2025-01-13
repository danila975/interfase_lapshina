import React, { useState } from 'react';

const MessageForm = ({ onSend }) => {
  const [messageText, setMessageText] = useState('');

  const sendMessage = () => {
    if (messageText.trim() !== '') {
      onSend(messageText);
      setMessageText('');
      const statusMessageElement = document.getElementById('message-form-status');
      statusMessageElement.textContent = 'Сообщение отправлено.';
      setTimeout(() => {
        statusMessageElement.textContent = '';
      }, 5000);
    } else {
      alert('Сообщение не должно быть пустым.');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}
    >
      <label htmlFor="message-text">Текст сообщения:</label>
      <textarea
        id="message-text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        aria-describedby="message-help"
        required
      ></textarea>
      <span id="message-help" className="visually-hidden">
        Введите ваше сообщение. Обязательное поле.
      </span>
      <button type="submit">Отправить</button>
      <div
        id="message-form-status"
        className="visually-hidden"
        aria-live="polite"
      ></div>
    </form>
  );
};

export default MessageForm;
