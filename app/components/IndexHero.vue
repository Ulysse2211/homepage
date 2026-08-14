<script setup lang="ts">
import HeroBackground from "~/components/IndexHero/HeroBackground.vue";
import { IconChevronDown } from '@tabler/icons-vue';

const scroll = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};
</script>

<template>
<div class="flex overflow-hidden justify-center items-center">
  <HeroBackground />
  <div class="absolute z-3">
    <div class="bg-radial from-background bg-transparent to-75% p-40 ">
      <h1 class="text-7xl shadow-8xl font-black">Ulysse.GL</h1>
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