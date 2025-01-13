<template>
  <form @submit.prevent="register" novalidate>
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      v-model="email"
      @input="validateEmail"
      :aria-invalid="emailInvalid.toString()"
      aria-describedby="email-help"
      required
    />
    <span id="email-help" class="visually-hidden">
      Введите действующий адрес электронной почты.
    </span>

    <label for="phone">Телефон:</label>
    <input
      type="tel"
      id="phone"
      v-model="phone"
      @input="validatePhone"
      :aria-invalid="phoneInvalid.toString()"
      aria-describedby="phone-help"
      required
    />
    <span id="phone-help" class="visually-hidden">
      Введите номер телефона в формате +7XXXXXXXXXX.
    </span>

    <!-- Выбор пола -->
    <fieldset>
      <legend>Пол:</legend>
      <div>
        <input
          type="radio"
          id="gender-male"
          name="gender"
          value="male"
          v-model="gender"
          required
        />
        <label for="gender-male">Мужской</label>
      </div>
      <div>
        <input
          type="radio"
          id="gender-female"
          name="gender"
          value="female"
          v-model="gender"
          required
        />
        <label for="gender-female">Женский</label>
      </div>
    </fieldset>

    <!-- Выбор возраста -->
    <fieldset>
      <legend>Возрастные группы (можно выбрать несколько):</legend>
      <div>
        <input
          type="checkbox"
          id="age-under-18"
          value="<18"
          v-model="ageGroups"
        />
        <label for="age-under-18">Младше 18</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="age-18-25"
          value="18-25"
          v-model="ageGroups"
        />
        <label for="age-18-25">18–25</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="age-26-40"
          value="26-40"
          v-model="ageGroups"
        />
        <label for="age-26-40">26–40</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="age-41-65"
          value="41-65"
          v-model="ageGroups"
        />
        <label for="age-41-65">41–65</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="age-over-65"
          value=">65"
          v-model="ageGroups"
        />
        <label for="age-over-65">Старше 65</label>
      </div>
      <!-- Сообщение об ошибке при отсутствии выбора возраста -->
      <div v-if="ageGroupsError" class="error" aria-live="polite">
        Пожалуйста, выберите хотя бы одну возрастную группу.
      </div>
    </fieldset>

    <button type="submit">Зарегистрироваться</button>

    <div
      id="registration-form-status"
      class="visually-hidden"
      aria-live="polite"
    ></div>
  </form>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {
      email: '',
      phone: '',
      emailInvalid: false,
      phoneInvalid: false,
      gender: '',
      ageGroups: [],
      ageGroupsError: false,
    };
  },
  methods: {
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailInvalid = !regex.test(this.email);
    },
    validatePhone() {
      const regex = /^\+7\d{10}$/;
      this.phoneInvalid = !regex.test(this.phone);
    },
    register() {
      this.validateEmail();
      this.validatePhone();

      // Проверка заполнения полей пола и возраста
      const genderValid = this.gender !== '';
      const ageGroupsValid = this.ageGroups.length > 0;
      this.ageGroupsError = !ageGroupsValid;

      if (
        !this.emailInvalid &&
        !this.phoneInvalid &&
        genderValid &&
        ageGroupsValid
      ) {
        const data = {
          email: this.email,
          phone: this.phone,
          gender: this.gender,
          ageGroups: this.ageGroups,
        };
        this.$emit('register', data);
        this.email = '';
        this.phone = '';
        this.gender = '';
        this.ageGroups = [];
        const statusMessageElement = document.getElementById(
          'registration-form-status'
        );
        statusMessageElement.textContent = 'Регистрация прошла успешно.';
        setTimeout(() => {
          statusMessageElement.textContent = '';
        }, 5000);
      } else {
        alert('Пожалуйста, заполните все поля корректно.');
      }
    },
  },
};
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  overflow: hidden;
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  white-space: nowrap;
}

.error {
  color: red;
  margin-top: 5px;
}
</style>
