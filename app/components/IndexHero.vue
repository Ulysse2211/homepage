<script setup lang="ts">
import HeroBackground from "~/components/IndexHero/HeroBackground.vue";
import { IconChevronDown } from '@tabler/icons-vue';

const scroll = () => {
  document.getElementById('content-start')?.scrollIntoView({
    behavior: 'smooth'
  });
};
</script>

<template>
<div class="flex overflow-hidden justify-center items-center">
  <HeroBackground />
  <div class="absolute z-3">
    <div class="bg-radial from-background bg-transparent to-70% p-20 md:p-30 lg:p-40 ">
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-black">Ulysse.GL</h1>
    </div>
  </div>
  <div class="absolute z-4 bottom-5 w-full flex justify-center items-center">
    <Button @click="scroll()" variant="outline" size="icon">
      <IconChevronDown />
    </Button>
  </div>
</div>
</template>

<style scoped>

</style>