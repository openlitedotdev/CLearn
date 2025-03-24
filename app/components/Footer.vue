<template>
  <footer
    border-t border-base
    p="y2rem x5vw"
  >
    <nav
      class="cs-column-gap"
      flex="~ justify-center gap-16 items-start"
      mx-auto max-w-5xl
    >
      <section class="min-w-[170px]">
        <h3 mb-4 text-lg font-bold font-fira-code>
          {{ $t('documentation') }}
        </h3>
        <ul flex flex-col gap-3>
          <li v-for="item in MENU_ITEMS" :key="item.name">
            <NuxtLink :to="item.link">
              {{ $t(`nav.${item.name}`) }}
              <sup ml="-0.5">
                <Icon name="solar:arrow-right-up-linear" size="10" />
              </sup>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="min-w-[170px]">
        <h3 mb-4 text-lg font-bold font-fira-code>
          {{ $t('community') }}
        </h3>
        <ul flex flex-col gap-3>
          <li v-for="item in COMMUNNITY" :key="item.name">
            <NuxtLink :to="item.link">
              {{ item.name }}
              <sup ml="-0.5">
                <Icon name="solar:arrow-right-up-linear" size="10" />
              </sup>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="min-w-[170px]">
        <h3 mb-4 text-lg font-bold font-fira-code>
          {{ $t('resources') }}
        </h3>
        <ul flex flex-col gap-3>
          <li v-for="item in RESOURCES" :key="item.name">
            <NuxtLink :to="item.link">
              {{ item.name }}
              <sup ml="-0.5">
                <Icon name="solar:arrow-right-up-linear" size="10" />
              </sup>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <form action="#" class="min-w-[170px]" self-center space-y-3>
        <div text-sm>
          <h4 mb-3 font-bold font-fira-code>
            Subscribe to our newsletter
          </h4>
          <p>Stay updated on new releases and features, guides, and community updates.</p>
        </div>
        <div flex-items-center gap-3>
          <input type="text" placeholder="you@gmail.com">
          <button>Subcribe</button>
        </div>
      </form>
    </nav>
    <p m="y4rem xauto b0" text-center text-sm>
      Copyright © 2025 Open Lite Authors.
    </p>
  </footer>
</template>
