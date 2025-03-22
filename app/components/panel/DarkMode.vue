<template>
  <ClientOnly>
    <Popper placement="bottom-end" offset-distance="8">
      <button type="button" size-10 rounded-full p-2 hover="bg-active ">
        <Icon
          :name="isColorMode === 'light' ? 'solar:sun-bold' : isColorMode === 'dark' ? 'solar:moon-bold' : 'solar:laptop-outline'"
        />
      </button>

      <template #content="{ close }">
        <div px-2 dropdown-content space-y-1 @click="close()">
          <button
            type="button" hover="bg-faded" w-full rounded-md dropdown-item flex="~ items-center gap-2"
            :class="{ 'bg-active': isColorMode === 'auto' }" @click="toggleSystem()"
          >
            <Icon name="solar:laptop-outline" /> <span>System</span>
          </button>
          <button
            type="button" hover="bg-faded" w-full rounded-md dropdown-item flex="~ items-center gap-2"
            :class="{ 'bg-active': isColorMode === 'light' }" @click="toggleLight()"
          >
            <Icon name="solar:sun-bold" /> <span>Light</span>
          </button>
          <button
            type="button" hover="bg-faded" w-full rounded-md dropdown-item flex="~ items-center gap-2"
            :class="{ 'bg-active': isColorMode === 'dark' }" @click="toggleDark()"
          >
            <Icon name="solar:moon-bold" /> <span>Dark</span>
          </button>
        </div>
      </template>
    </Popper>
    <template #fallback>
      <DisplaySkeleton class-name="size-10 rounded-full" />
    </template>
  </ClientOnly>
</template>
