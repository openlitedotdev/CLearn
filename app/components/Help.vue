<template>
  <section mt-12>
    <h3 columns-title>
      {{ $t('title_help') }}
    </h3>
    <div flex-items-center gap-12>
      <div>
        <h4 class="mb-1 text-lg font-semibold">
          {{ $t('help.title_connect_community') }}
        </h4>
        <p class="mb-3">
          {{ $t('help.description_connect_community') }}
        </p>
        <NuxtLink block flex-items-center font-normal underline underline-primary underline-offset-8 to="#">
          {{ $t('learn_more') }}
        </NuxtLink>
      </div>

      <div>
        <h4 class="mb-1 text-lg font-semibold">
          {{ $t('help.title_help_documentaton') }}
        </h4>
        <p class="mb-3" text-balance>
          {{ $t('help.description_help_documentaton') }}
        </p>
        <NuxtLink block flex-items-center font-normal underline underline-primary underline-offset-8 to="#">
          {{ $t('learn_more') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
