<script setup lang="ts">
const { locales, setLocale, locale } = useI18n()

const getCurrentLocale = computed(() => {
  return locales.value.find(i => i.code === locale.value) || locales.value[0]
})
</script>

<template>
  <div dropdown shrink-0>
    <ClientOnly>
      <Popper placement="bottom-end" offset-distance="8">
        <button type="button" size-10 rounded-full p-2 hover="bg-faded">
          <Icon :name="getCurrentLocale?.icon" />
        </button>

        <template #content="{ close }">
          <ul class="w-[280px]" grid grid-cols-2 gap-2 px-2 dropdown-content @click="close()">
            <li v-for="_locale of locales" :key="_locale.code">
              <button
                type="button" w-full rounded-md dropdown-item
                :class="{ 'bg-active': getCurrentLocale?.code === _locale.code }" @click="setLocale(_locale.code)"
              >
                <Icon :name="_locale.icon" />
                <span ml-3>
                  {{ _locale.name }}
                </span>
              </button>
            </li>
          </ul>
        </template>
      </Popper>
      <template #fallback>
        <DisplaySkeleton size-10 rounded-full />
      </template>
    </ClientOnly>
  </div>
</template>
