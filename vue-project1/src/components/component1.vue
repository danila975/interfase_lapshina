<template>
  <div aria-live="polite" ref="container"></div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        "Скидки до 20% только сегодня!",
        "Производится оплата...",
        "Оплата успешно завершена!"
      ],
    };
  },
  mounted() {
    let counter = 0;
    const addMessage = () => {
      if (counter < this.messages.length) {
        const h2 = document.createElement('h2');
        h2.textContent = this.messages[counter];
        this.$refs.container.appendChild(h2);
        counter++;

        // Фокусировка для screen readers (может потребоваться небольшой timeout)
        setTimeout(() => h2.focus(), 100); 
      }
    };

    setTimeout(addMessage, 10000);
    setTimeout(addMessage, 20000);
    setTimeout(addMessage, 30000);
  },
};
</script>
