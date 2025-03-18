<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(() => queryCollection('runtime').path(`/runtime/${route.params.slug}`).first())
</script>

<template>
  <section>
    <ContentRenderer v-if="data" :value="data" />
    <div v-else>
      Home not found
    </div>
  </section>
</template>
