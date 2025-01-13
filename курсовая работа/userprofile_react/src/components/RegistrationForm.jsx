import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);

  const [gender, setGender] = useState('');
  const [ageGroups, setAgeGroups] = useState([]);

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailInvalid(!regex.test(email));
  };

  const validatePhone = () => {
    const regex = /^\+7\d{10}$/;
    setPhoneInvalid(!regex.test(phone));
  };

  const register = () => {
    validateEmail();
    validatePhone();

    if (!emailInvalid && !phoneInvalid && gender !== '' && ageGroups.length > 0) {
      onRegister({ email, phone, gender, ageGroups });
      setEmail('');
      setPhone('');
      setGender('');
      setAgeGroups([]);
      const statusMessageElement = document.getElementById('registration-form-status');
      statusMessageElement.textContent = 'Регистрация прошла успешно.';
      setTimeout(() => {
        statusMessageElement.textContent = '';
      }, 5000);
    } else {
      alert('Пожалуйста, заполните все поля корректно.');
    }
  };

  const handleAgeGroupChange = (event) => {
    const value = event.target.value;
    setAgeGroups((prev) => {
      if (prev.includes(value)) {
        return prev.filter((age) => age !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        register();
      }}
      noValidate
    >
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail();
        }}
        required
        aria-describedby="email-help"
        aria-invalid={emailInvalid}
      />
      <span id="email-help" className="visually-hidden">
        Введите действующий адрес электронной почты.
      </span>

      <label htmlFor="phone">Телефон:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          validatePhone();
        }}
        required
        aria-describedby="phone-help"
        aria-invalid={phoneInvalid}
      />
      <span id="phone-help" className="visually-hidden">
        Введите номер телефона в формате +7XXXXXXXXXX.
      </span>

      {/* Выбор пола */}
      <fieldset>
        <legend>Пол:</legend>
        <div>
          <input
            type="radio"
            id="gender-male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <label htmlFor="gender-male">Мужской</label>
        </div>
        <div>
          <input
            type="radio"
            id="gender-female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <label htmlFor="gender-female">Женский</label>
        </div>
      </fieldset>

      {/* Выбор возраста */}
      <fieldset>
        <legend>Возрастные группы (можно выбрать несколько):</legend>
        <div>
          <input
            type="checkbox"
            id="age-under-18"
            value="<18"
            checked={ageGroups.includes('<18')}
            onChange={handleAgeGroupChange}
          />
          <label htmlFor="age-under-18">Младше 18</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="age-18-25"
            value="18-25"
            checked={ageGroups.includes('18-25')}
            onChange={handleAgeGroupChange}
          />
          <label htmlFor="age-18-25">18–25</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="age-26-40"
            value="26-40"
            checked={ageGroups.includes('26-40')}
            onChange={handleAgeGroupChange}
          />
          <label htmlFor="age-26-40">26–40</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="age-41-65"
            value="41-65"
            checked={ageGroups.includes('41-65')}
            onChange={handleAgeGroupChange}
          />
          <label htmlFor="age-41-65">41–65</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="age-over-65"
            value=">65"
            checked={ageGroups.includes('>65')}
            onChange={handleAgeGroupChange}
          />
          <label htmlFor="age-over-65">Старше 65</label>
        </div>
        {/* Сообщение об ошибке при отсутствии выбора возраста */}
        {ageGroups.length === 0 && (
          <div className="error" aria-live="polite">
            Пожалуйста, выберите хотя бы одну возрастную группу.
          </div>
        )}
      </fieldset>

      <button type="submit">Зарегистрироваться</button>
      <div
        id="registration-form-status"
        className="visually-hidden"
        aria-live="polite"
      ></div>
    </form>
  );
};

export default RegistrationForm;
