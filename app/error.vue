<script setup lang="ts">
import {IconHome} from "@tabler/icons-vue";
import HeroBackground from "~/components/IndexHero/HeroBackground.vue";
import type { NuxtError } from '#app'

const MESSAGES: Record<number, string> = {
  100: 'Keep going, I’m listening...',
  102: 'Thinking... don’t rush me.',

  200: 'Mission accomplished.',
  201: 'It’s alive!',
  204: 'Nothing to see here.',

  301: 'I live somewhere else now.',
  302: 'BRB, gone for a moment.',
  307: 'Temporary detour, hold tight.',

  400: "These aren't the pages you are looking for.",
  401: 'Who goes there?',
  402: 'Shut up and take my money!',
  403: 'You shall not pass!',
  404: 'How did we get here...',
  405: 'You can’t do that here.',
  408: 'Too slow, lost interest.',
  409: 'We have a situation here.',
  410: "He's dead, Jim.",
  413: 'Woah, that’s way too big for me.',
  418: "I'm a teapot. I don't brew coffee.",
  429: 'Whoa, slow down cowboy!',
  451: 'Fahrenheit 451: Censored by law.',

  500: 'Thanks, you broke something ! Not cool.',
  501: 'I haven’t learned how to do that yet.',
  502: 'The middleman dropped the ball.',
  503: 'BRB, taking a nap.',
  504: 'The server took too long to answer...',
};

const props = defineProps<{ error: NuxtError }>()
const status = props.error.status ?? 500
</script>

<template>
  <div class="flex overflow-hidden justify-center items-center">
    <HeroBackground />
    <div class="absolute z-10">
      <div class="bg-radial from-background bg-transparent to-75% p-40 ">
        <h1 class="text-8xl font-black">{{ status }}{{MESSAGES[status] ? ": " : ""}}{{ MESSAGES[status] }}</h1>
      </div>
    </div>
    <div class="absolute z-20 bottom-5 w-full flex justify-center items-center">
      <Button @click="navigateTo('/')" variant="outline" size="lg">
        <IconHome />
        Retourner à l'accueil
      </Button>
    </div>
  </div>
</template>

<style scoped>

</style>