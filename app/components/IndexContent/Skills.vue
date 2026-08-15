<script setup lang="ts">
import SectionTitle from "~/components/IndexContent/Common/SectionTitle.vue";
import { Card, CardContent } from '@/components/ui/card'
import { Mariadb, Mysql, Postgresql, Sqlite } from "@dev.icons/vue";
import { Express, Nodejs, Nuxt, Axios, Swagger, Vite, Webpack } from "@dev.icons/vue";
import { Npm, Pnpm } from "@dev.icons/vue";
import { Typescript, Javascript, _Vue, Html5, Css, Tailwind, FontAwesome, Markdown } from "@dev.icons/vue"
import { Dotnet, Electron, Selenium } from "@dev.icons/vue"
import { CPlusplus, CSharp, Python, Lua } from "@dev.icons/vue"
import { Arduino, Platformio } from "@dev.icons/vue"
import { Nginx, Docker, Cloudflare, Vercel, Certbot, Metabase, Nvm, Sentry, Webhooks } from "@dev.icons/vue"
import { GithubActions } from "@dev.icons/vue"
import { Gitlab, Github, GitIcon } from "@dev.icons/vue"
import { Claude, GithubCopilot } from "@dev.icons/vue"
import { Android } from "@dev.icons/vue"
import { Webstorm, VisualStudio, VisualStudioCode, Sublimetext, Jetbrains, Postman } from "@dev.icons/vue"
import { LinuxTux, Fedora, Debian, Ubuntu, Kde, MicrosoftWindows, Arm, Intel, Amd, RaspberryPi } from "@dev.icons/vue"
import { Blender } from "@dev.icons/vue"
import { AwsS3 } from "@dev.icons/vue"
import { Curl, Terminal } from "@dev.icons/vue"
import { Toml, Json, Yaml } from "@dev.icons/vue"
import { Oauth } from "@dev.icons/vue"

const categories = [
  {
    title: "Langages",
    icons: [Typescript, Javascript, _Vue, Html5, Css, CPlusplus, CSharp, Python, Lua],
  },
  {
    title: "Frameworks & Runtime",
    icons: [Nodejs, Nuxt, Express, Dotnet, Electron, Tailwind, Vite, Webpack, Axios, Swagger],
  },
  {
    title: "Bases de données",
    icons: [Mysql, Postgresql, Mariadb, Sqlite],
  },
  {
    title: "DevOps & Cloud",
    icons: [Docker, Nginx, Cloudflare, Vercel, Certbot, AwsS3, Metabase, Sentry, Nvm, Webhooks],
  },
  {
    title: "Versionning & CI/CD",
    icons: [GitIcon, Github, Gitlab, GithubActions],
  },
  {
    title: "Outils & IDE",
    icons: [VisualStudioCode, VisualStudio, Webstorm, Jetbrains, Sublimetext, Postman, Npm, Pnpm, Curl, Terminal],
  },
  {
    title: "Systèmes & Matériel",
    icons: [LinuxTux, Ubuntu, Debian, Fedora, Kde, MicrosoftWindows, Arm, Intel, Amd, RaspberryPi, Android],
  },
  {
    title: "Embarqué",
    icons: [Arduino, Platformio],
  },
  {
    title: "IA & Autres",
    icons: [Claude, GithubCopilot, Selenium, Blender, FontAwesome, Markdown, Toml, Json, Yaml, Oauth],
  },
];
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full pt-5 pb-5">
    <SectionTitle id="skills" title="Compétences (Informatique)" />
    <Card>
      <CardContent class="p-6 flex flex-col gap-8">
        <div
            v-for="category in categories"
            :key="category.title"
            class="flex flex-col gap-4"
        >
          <h3 class="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {{ category.title }}
          </h3>
          <div class="flex flex-row flex-wrap gap-6 justify-center items-center">
            <component
                :is="icon"
                v-for="(icon, index) in category.icons"
                :key="index"
                size="48"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
</style>