<template>
  <header
    position-sticky top-0 z-20
    class="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    dark="bg-background/95 supports-[backdrop-filter]:bg-background/60"
  >
    <nav flex-items-center px-4 py-3>
      <div flex-items-center gap-12>
        <NuxtLink to="/">
          <figure flex-items-center gap-2>
            <CLogo width="48" heigth="48" />
            <h2 m="-1" text-4xl font-bold font-fira-code>
              Learn
            </h2>
          </figure>
        </NuxtLink>
        <ul flex="md:~ items-center gap-4">
          <li v-for="item in MENU_ITEMS" :key="item.name">
            <NuxtLink
              p="x4 y2"
              class="transition-all duration-300"
              hover="~ bg-faded"
              :to="item.link"
            >
              {{ $t(`nav.${item.name}`) }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div flex-auto />
      <div flex-items-center>
        <PanelDarkMode />
        <NuxtLink
          to="https://github.com/openlitedotdev/CLearn"
          size-10 rounded-full p-2
          hover="bg-faded"
        >
          <GithubLogo />
        </NuxtLink>
        <PanelSelectLang />
      </div>
    </nav>
  </header>
</template>
