<script setup lang="ts">
const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <div p-4>
      <button
        v-for="_l of locales"
        :key="_l.code"
        :title="`${_l.name} (${_l.code})`"
        @click="setLocale(_l.code)"
      >
        {{ _l.name }}
      </button>
    </div>
    <h1 text-center text-xl>
      {{ $t('welcome') }}
    </h1>
  </div>
</template>
