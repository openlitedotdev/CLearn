<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(() =>
  queryCollection('runtime').path(`/runtime/${route.params.slug}`).first(),
)

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
  <ContentRenderer v-if="page" :value="page" />
</template>
