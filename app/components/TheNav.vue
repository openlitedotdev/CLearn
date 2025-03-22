<script setup lang="ts">
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
      <PanelSelectLang />
    </div>
  </nav>
</template>
