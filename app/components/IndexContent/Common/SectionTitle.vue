<script setup lang="ts">
const props = defineProps<{ title: string, id: string }>()

const title = props.title
const id = props.id
</script>

<template>
  <NuxtLink :to="'/#' + id" :id="id">
    <h2 class="text-3xl font-bold text-slate-200">{{ title }}</h2>
    <Separator class="my-2" />
  </NuxtLink>
</template>

<style scoped>

</style>