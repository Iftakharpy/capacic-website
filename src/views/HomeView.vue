<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <main class="">
    <h1>Home</h1>
    <Button @click="console.log">test</Button>
    <div>
      <v-icon name="fa-flag" />
      <v-icon name="gi-coffee-pot" />
    </div>
  </main>
</template>
