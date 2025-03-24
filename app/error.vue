<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <NuxtLink to="/">
      Go back home
    </NuxtLink>
  </div>
</template>
