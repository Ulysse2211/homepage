<script setup lang="ts">
import HeroBackground from "~/components/PostHero/HeroBackground.vue";
import {IconCalendar} from "@tabler/icons-vue"

const props = defineProps<{ title?: string, description?: string, date?: string }>()
const title = props.title ?? "Articles"
const description = props.description
const date = props.date
</script>

<template>
  <div class="flex flex-col items-start justify-center">
    <div class="flex overflow-hidden justify-center items-center">
      <HeroBackground />
    </div>
    <div class="absolute z-3 p-10 pt-25">
      <div class="flex flex-col items-start justify-center items-center">
        <h1 class="text-5xl font-black">{{ title }}</h1>
        <h2 v-if="description" class="text-2xl font-semibold overflow-scroll max-h-25">{{ description }}</h2>
        <span v-if="date" class="mt-3 flex gap-2"><IconCalendar />{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>