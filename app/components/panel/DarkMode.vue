<script setup lang="ts">
interface DarkModeOption {
  code: 'auto' | 'light' | 'dark'
  icon: string
  name: string
}

const SelectDarkMode: DarkModeOption[] = [
  { code: 'auto', icon: 'solar:laptop-bold', name: 'System' },
  { code: 'light', icon: 'solar:sun-bold', name: 'Light' },
  { code: 'dark', icon: 'solar:moon-bold', name: 'Dark' },
]
</script>

<template>
  <ClientOnly>
    <Popper placement="bottom-end" offset-distance="8">
      <button type="button" size-10 rounded-full p-2 hover="bg-active ">
        <Icon
          :name="isColorMode === 'light' ? 'solar:sun-bold' : isColorMode === 'dark' ? 'solar:moon-bold' : 'solar:laptop-bold'"
        />
      </button>

      <template #content="{ close }">
        <div px-2 dropdown-content space-y-1 @click="close()">
          <button
            v-for="item of SelectDarkMode" :key="item.name" type="button" hover="bg-faded" w-full rounded-md
            dropdown-item flex="~ items-center gap-2" :class="{ 'bg-active': isColorMode === item.code }"
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
