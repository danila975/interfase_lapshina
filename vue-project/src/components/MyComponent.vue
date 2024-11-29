<template>
  <div class="my-component">
    <h2>{{ message }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello from MyComponent!',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
      this.message = `Count: ${this.count}`;
    }
  }
};
</script>

<style scoped>
.my-component {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
