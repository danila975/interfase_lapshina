import React, { useRef } from 'react';

const FileUpload = ({ onUploaded, onFailed }) => {
  const fileInputRef = useRef(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const statusMessageElement = document.getElementById('file-upload-status');
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onUploaded(reader.result);
        statusMessageElement.textContent = 'Файл успешно загружен.';
      };
      reader.onerror = (error) => {
        onFailed(error);
        console.error('Ошибка при чтении файла:', error);
        statusMessageElement.textContent = 'Ошибка при загрузке файла.';
      };
      reader.readAsDataURL(file);
    } else {
      statusMessageElement.textContent = 'Файл не выбран.';
    }
    setTimeout(() => {
      statusMessageElement.textContent = '';
    }, 5000);
  };

  const triggerClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <label htmlFor="file-upload">Загрузите файл:</label>
      <input
        id="file-upload"
        type="file"
        onChange={onFileChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            triggerClick();
          }
        }}
        ref={fileInputRef}
      />
      <div
        id="file-upload-status"
        className="visually-hidden"
        aria-live="polite"
      ></div>
    </div>
  );
};

export default FileUpload;
