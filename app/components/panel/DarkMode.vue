<script setup lang="ts">
const selectDarkMode: DarkModeOption[] = [
  { code: 'auto', icon: 'solar:laptop-linear', name: 'System' },
  { code: 'light', icon: 'solar:sun-linear', name: 'Light' },
  { code: 'dark', icon: 'solar:moon-linear', name: 'Dark' },
]
</script>

<template>
  <ClientOnly>
    <Popper placement="bottom-end" offset-distance="8">
      <button type="button" size-10 rounded-full p-2 hover="bg-faded">
        <Icon
          :name="isColorMode === 'light' ? 'solar:sun-linear' : isColorMode === 'dark' ? 'solar:moon-linear' : 'solar:laptop-linear'"
        />
      </button>

      <template #content="{ close }">
        <div px-2 dropdown-content space-y-1 @click="close()">
          <button
            v-for="item of selectDarkMode" :key="item.name" type="button" hover="bg-faded"
            w-full flex-items-center gap-2 rounded-md dropdown-item :class="{ 'bg-active': isColorMode === item.code }"
            @click="toggleDark(item.code)"
          >
            <Icon :name="item.icon" /> <span>{{ item.name }}</span>
          </button>
        </div>
      </template>
    </Popper>
    <template #fallback>
      <DisplaySkeleton size-10 rounded-full />
    </template>
  </ClientOnly>
</template>
