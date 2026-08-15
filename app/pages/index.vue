<script setup lang="ts">
import About from "~/components/IndexContent/About.vue";
import Hardware from "~/components/IndexContent/Hardware.vue";
import History from "~/components/IndexContent/History.vue";
import Skills from "~/components/IndexContent/Skills.vue";
</script>

<template>
  <main class="flex flex-col items-center">
    <IndexHero />
    <div class="min-h-dvh flex flex-col items-start w-full p-5 gap-5">
      <span id="content-start" />
      <About />
      <Skills />
      <History />
      <Hardware />
    </div>
  </main>
</template>

<style scoped>

</style>