<script setup lang="ts">
import About from "~/components/IndexContent/About.vue";
import Hardware from "~/components/IndexContent/Hardware.vue";
import History from "~/components/IndexContent/History.vue";
import Skills from "~/components/IndexContent/Skills.vue";
</script>

<template>
  <main class="flex flex-col items-center">
    <IndexHero />
    <div class="min-h-dvh flex flex-col items-center">
      <About />
      <Separator class="my-4" />
      <Hardware />
      <Separator class="my-4" />
      <History />
      <Separator class="my-4" />
      <Skills />
    </div>
  </main>
</template>

<style scoped>

</style>