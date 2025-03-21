<script setup lang="ts">
import Input from './form/Input.vue'
import Dropwdown from './option/Drowpdown.vue'

const { locales, setLocale } = useI18n()

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
</script>

<template>
  <nav flex="~ items-center" bg-white px-4 py-3>
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
            {{
              item.name
            }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div flex-auto />
    <div flex="~ items-center gap-4">
      <Input />
      <Dropwdown direction="end">
        <template #trigger="{ click }">
          <button border @click="click">
            lan
          </button>
        </template>
        <div min-w-40 p-4 space-y-2>
          <button
            v-for="_l of locales" :key="_l.code" border="~ rounded-md" p="x2 y1" hover="bg-blue:50" w-full
            bg-transparent :title="`${_l.name} (${_l.code})`" @click="setLocale(_l.code)"
          >
            {{ _l.name }}
          </button>
        </div>
      </Dropwdown>
    </div>
  </nav>
</template>
