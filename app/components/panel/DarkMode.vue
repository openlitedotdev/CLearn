<template>
  <ClientOnly>
    <button
      h-10 w-10 rounded-full hover:bg-active
      hover="bg-active"
      flex="~ items-center justify-center"
      @click="toggleDark()"
    >
      <Icon v-if="!isDark" name="solar:moon-bold" />
      <Icon v-else name="solar:sun-bold" />
    </button>
  </ClientOnly>
</template>
