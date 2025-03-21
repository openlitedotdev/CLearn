<script setup lang="ts">
const { locales, setLocale, locale } = useI18n()

interface Nav {
  name: string
  link: string
}

const nav: Nav[] = [
  {
    name: 'Manual',
    link: '#',
  },
  {
    name: 'API Reference',
    link: '#',
  },
  {
    name: 'Examples',
    link: '#',
  },
  {
    name: 'Tutorial',
    link: '#',
  },
]

const getCurrentLocale = computed(() => {
  return locales.value.find(i => i.code === locale.value) || locales.value[0]
})
</script>

<template>
  <nav flex="~ items-center" px-4 py-3>
    <div flex="~ items-center" gap-5>
      <figure flex="~ items-center" gap-2>
        <img src="/logo.svg" size-10 alt="Logo">
        <h2 text-4xl font-black>
          Learn
        </h2>
      </figure>
      <ul flex="md:~ items-center gap-4" hidden>
        <li v-for="item in nav" :key="item.name">
          <NuxtLink
            p="x4 y2" class="border border-transparent bg-transparent transition-all duration-300"
            hover="~ bg-blue:50 border-[#233DFF] rounded-md" :to="item.link"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div flex-auto />
    <div flex="~ items-center gap-3">
      <FormInput />
      <PanelDarkMode />

      <div dropdown shrink-0>
        <ClientOnly>
          <Popper placement="bottom-end" offset-distance="8">
            <button
              type="button"
              h-10 w-10 rounded-full
              hover="bg-active "
            >
              <Icon :name="getCurrentLocale?.icon" />
            </button>

            <template #content="{ close }">
              <ul
                class="w-[280px]"
                dropdown-content grid grid-cols-2 gap-2
                @click="close()"
              >
                <li
                  v-for="_locale of locales"
                  :key="_locale.code"
                >
                  <button
                    type="button"
                    hover="bg-faded"
                    dropdown-item
                    @click="setLocale(_locale.code)"
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
        </ClientOnly>
      </div>
    </div>
  </nav>
</template>
