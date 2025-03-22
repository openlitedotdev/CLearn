<script setup lang="ts">
defineProps({
  className: {
    type: String,
  },
})
</script>

<template>
  <div animate-pulse bg-gray:20 :class="className" />
</template>
