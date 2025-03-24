<template>
  <section class="h-[266px]" w-full flex-justify-between>
    <article space-y-5>
      <h2 text-4xl font-semibold>
        {{ $t('welcome') }}
      </h2>
      <p>
        {{ $t('about_project') }}
      </p>
      <div flex-items-center gap-3>
        <NuxtLink to="/" dark="bg-white text-black" bg-black text-white btn>
          {{ $t('getting_started') }}
          <Icon name="solar:arrow-right-linear" />
        </NuxtLink>
        <NuxtLink to="/" dark="bg-white text-black" bg-black text-white btn>
          <GithubLogo />
          {{ $t('open_source') }}
        </NuxtLink>
      </div>
    </article>
    <div hidden flex-justify-center md:block>
      <CLogo width="256" heigth="256" />
    </div>
  </section>
</template>
