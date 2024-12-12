<template lang="pug">
  header
    div(class="wrapper")
      nav
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/profile">Profile</RouterLink>
  RouterView
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
