<script setup lang="ts">
import {
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandDiscord,
  IconBrandReddit,
  IconBrandX,
  IconBrandInstagram,
  IconMail,
  IconBrandLinkedin,
  IconBrandStrava,
} from "@tabler/icons-vue"
</script>

<template>
  <footer class="flex flex-col md:flex-row items-center justify-evenly gap-4 bottom-0 z-50 w-dvw backdrop-blur-2xl outline-1 p-5 text-center">
    <p>Développé avec ❤️ par Ulysse2211</p>
    <p>&copy; Ulysse Gressé--Lugué {{ new Date().getFullYear() }}</p>
    <div class="flex flex-wrap justify-center gap-2">
      <Button variant="outline" size="icon" class="rounded-full">
        <a target="_blank" href="https://github.com/Ulysse2211">
          <IconBrandGithub />
        </a>
      </Button>
      <Button variant="outline" size="icon" class="rounded-full">
        <a target="_blank" href="https://discord.com/users/1096122001124511806">
          <IconBrandDiscord />
        </a>
      </Button>
      <Button variant="outline" size="icon" class="rounded-full">
        <a target="_blank" href="https://t.me/ulysse2211">
          <IconBrandTelegram />
        </a>
      </Button>
      <Button variant="outline" size="icon" class="rounded-full">
        <a target="_blank" href="https://x.com/ulysse_2211">
          <IconBrandX />
        </a>
      </Button>
      <Button variant="outline" size="icon" class="rounded-full">
        <a target="_blank" href="https://instagram.com/ulysse2211">
          <IconBrandInstagram />
        </a>
      </Button>
      <Button variant="outline" size="icon" class="rounded-full">
        <a target="_blank" href="mailto:ulysse@ulysse.gl">
          <IconMail />
        </a>
      </Button>
      <Button variant="outline" size="icon" class="rounded-full">
        <a target="_blank" href="https://www.linkedin.com/in/ulysse-gresse-lugu%C3%A9-263874309/">
          <IconBrandLinkedin />
        </a>
      </Button>
      <Button variant="outline" size="icon" class="rounded-full">
        <a target="_blank" href="https://www.strava.com/athletes/133030282">
          <IconBrandStrava />
        </a>
      </Button>
      <Button variant="outline" size="icon" class="rounded-full">
        <a target="_blank" href="https://www.reddit.com/user/One_Lingonberry_8162/">
          <IconBrandReddit />
        </a>
      </Button>
    </div>
  </footer>
</template>

<style scoped>

</style>