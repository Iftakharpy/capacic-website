<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <nav class="flex gap-2">
        <RouterLink active-class="text-green-700" to="/">Home</RouterLink>
        <RouterLink active-class="text-green-700" to="/pricing">Pricing</RouterLink>
        <RouterLink active-class="text-green-700" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
