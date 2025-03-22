<script setup lang="ts">
const attrs = useAttrs()
</script>

<template>
  <div animate-pulse bg-gray:20 v-bind="attrs" />
</template>
