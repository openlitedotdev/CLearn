<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const { locale, locales, setLocale } = useI18n()

const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData(`page-${slug.value}`, async () => {
  const collection = (`runtime_${locale.value}`) as keyof Collections

  const content = await queryCollection(collection).path(slug.value).first()

  return content
}, { watch: [locale] })

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: false,
  })
}

useSeoMeta(page.value.seo)
</script>

<template>
  <section>
    <div p-4>
      <button
        v-for="_l of locales"
        :key="_l.code"
        :title="`${_l.name} (${_l.code})`"
        @click="setLocale(_l.code)"
      >
        {{ _l.name }}
      </button>
    </div>
    <ContentRenderer v-if="page" :value="page" />
  </section>
</template>
