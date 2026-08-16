<script setup lang="ts">
import SectionTitle from "~/components/IndexContent/Common/SectionTitle.vue";
import { Card, CardContent } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Mariadb, Mysql, Postgresql, Sqlite } from "@dev.icons/vue";
import { Express, Nodejs, Nuxt, Axios, Swagger, Vite, Webpack } from "@dev.icons/vue";
import { Npm, Pnpm } from "@dev.icons/vue";
import { Typescript, Javascript, _Vue, Html5, Css, TailwindIcon, FontAwesome, Markdown } from "@dev.icons/vue"
import { Dotnet, Electron, Selenium } from "@dev.icons/vue"
import { CPlusplus, CSharp, Python, Lua } from "@dev.icons/vue"
import { Arduino, Platformio } from "@dev.icons/vue"
import { Nginx, DockerIcon, CloudflareIcon, VercelIcon, Certbot, Metabase, Nvm, SentryIcon, Webhooks } from "@dev.icons/vue"
import { GithubActions } from "@dev.icons/vue"
import { Gitlab, GithubIcon, GitIcon } from "@dev.icons/vue"
import { ClaudeIcon, GithubCopilot } from "@dev.icons/vue"
import { Android } from "@dev.icons/vue"
import { Webstorm, VisualStudio, VisualStudioCode, SublimetextIcon, JetbrainsIcon, PostmanIcon } from "@dev.icons/vue"
import { LinuxTux, Fedora, Debian, Ubuntu, Kde, MicrosoftWindowsIcon, Arm, Intel, Amd, RaspberryPi } from "@dev.icons/vue"
import { Blender } from "@dev.icons/vue"
import { AwsS3 } from "@dev.icons/vue"
import { Curl, Terminal } from "@dev.icons/vue"
import { Toml, Json, Yaml } from "@dev.icons/vue"
import { Oauth } from "@dev.icons/vue"

interface SkillIcon {
  icon: unknown | string
  name: string
  href?: string
}

const categories: { title: string; icons: SkillIcon[] }[] = [
  {
    title: "Langages",
    icons: [
      { icon: Typescript, name: "TypeScript", href: "https://www.typescriptlang.org/" },
      { icon: Javascript, name: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
      { icon: _Vue, name: "Vue.js", href: "https://vuejs.org/" },
      { icon: Html5, name: "HTML5", href: "https://developer.mozilla.org/docs/Web/HTML" },
      { icon: Css, name: "CSS", href: "https://developer.mozilla.org/docs/Web/CSS" },
      { icon: CPlusplus, name: "C++", href: "https://isocpp.org/" },
      { icon: CSharp, name: "C#", href: "https://learn.microsoft.com/dotnet/csharp/" },
      { icon: Python, name: "Python", href: "https://www.python.org/" },
      { icon: Lua, name: "Lua", href: "https://www.lua.org/" },
    ],
  },
  {
    title: "Frameworks & Runtime",
    icons: [
      { icon: Nodejs, name: "Node.js", href: "https://nodejs.org/" },
      { icon: Nuxt, name: "Nuxt", href: "https://nuxt.com/" },
      { icon: Express, name: "Express", href: "https://expressjs.com/" },
      { icon: Dotnet, name: ".NET", href: "https://dotnet.microsoft.com/" },
      { icon: Electron, name: "Electron", href: "https://www.electronjs.org/" },
      { icon: TailwindIcon, name: "Tailwind CSS", href: "https://tailwindcss.com/" },
      { icon: Vite, name: "Vite", href: "https://vitejs.dev/" },
      { icon: Webpack, name: "Webpack", href: "https://webpack.js.org/" },
      { icon: Axios, name: "Axios", href: "https://axios-http.com/" },
      { icon: Swagger, name: "Swagger", href: "https://swagger.io/" },
    ],
  },
  {
    title: "Bases de données",
    icons: [
      { icon: Mysql, name: "MySQL", href: "https://www.mysql.com/" },
      { icon: Postgresql, name: "PostgreSQL", href: "https://www.postgresql.org/" },
      { icon: Mariadb, name: "MariaDB", href: "https://mariadb.org/" },
      { icon: Sqlite, name: "SQLite", href: "https://www.sqlite.org/" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icons: [
      { icon: DockerIcon, name: "Docker", href: "https://www.docker.com/" },
      { icon: Nginx, name: "Nginx", href: "https://nginx.org/" },
      { icon: CloudflareIcon, name: "Cloudflare", href: "https://www.cloudflare.com/" },
      { icon: VercelIcon, name: "Vercel", href: "https://vercel.com/" },
      { icon: Certbot, name: "Certbot", href: "https://certbot.eff.org/" },
      { icon: AwsS3, name: "AWS S3", href: "https://aws.amazon.com/s3/" },
      { icon: Metabase, name: "Metabase", href: "https://www.metabase.com/" },
      { icon: SentryIcon, name: "Sentry", href: "https://sentry.io/" },
      { icon: Nvm, name: "NVM", href: "https://github.com/nvm-sh/nvm" },
      { icon: Webhooks, name: "Webhooks", href: "https://en.wikipedia.org/wiki/Webhook" },
    ],
  },
  {
    title: "Versionning & CI/CD",
    icons: [
      { icon: GitIcon, name: "Git", href: "https://git-scm.com/" },
      { icon: GithubIcon, name: "GitHub", href: "https://github.com/" },
      { icon: Gitlab, name: "GitLab", href: "https://about.gitlab.com/" },
      { icon: GithubActions, name: "GitHub Actions", href: "https://github.com/features/actions" },
    ],
  },
  {
    title: "Outils & IDE",
    icons: [
      { icon: VisualStudioCode, name: "Visual Studio Code", href: "https://code.visualstudio.com/" },
      { icon: VisualStudio, name: "Visual Studio", href: "https://visualstudio.microsoft.com/" },
      { icon: Webstorm, name: "WebStorm", href: "https://www.jetbrains.com/webstorm/" },
      { icon: JetbrainsIcon, name: "JetBrains", href: "https://www.jetbrains.com/" },
      { icon: SublimetextIcon, name: "Sublime Text", href: "https://www.sublimetext.com/" },
      { icon: PostmanIcon, name: "Postman", href: "https://www.postman.com/" },
      { icon: Npm, name: "npm", href: "https://www.npmjs.com/" },
      { icon: Pnpm, name: "pnpm", href: "https://pnpm.io/" },
      { icon: Curl, name: "cURL", href: "https://curl.se/" },
      { icon: Terminal, name: "Terminal" },
    ],
  },
  {
    title: "Systèmes & Matériel",
    icons: [
      { icon: LinuxTux, name: "Linux", href: "https://www.linux.org/" },
      { icon: Ubuntu, name: "Ubuntu", href: "https://ubuntu.com/" },
      { icon: Debian, name: "Debian", href: "https://www.debian.org/" },
      { icon: Fedora, name: "Fedora", href: "https://getfedora.org/" },
      { icon: Kde, name: "KDE Plasma", href: "https://kde.org/" },
      { icon: MicrosoftWindowsIcon, name: "Windows", href: "https://www.microsoft.com/windows" },
      { icon: Arm, name: "ARM", href: "https://www.arm.com/" },
      { icon: Intel, name: "Intel", href: "https://www.intel.com/" },
      { icon: Amd, name: "AMD", href: "https://www.amd.com/" },
      { icon: Android, name: "Android", href: "https://www.android.com/" },
    ],
  },
  {
    title: "Embarqué",
    icons: [
      { icon: Arduino, name: "Arduino", href: "https://www.arduino.cc/" },
      { icon: Platformio, name: "PlatformIO", href: "https://platformio.org/" },
      { icon: RaspberryPi, name: "Raspberry Pi", href: "https://www.raspberrypi.com/" },
      { icon: "Espressif.svg", name: "Espressif (ESP32)", href: "https://www.espressif.com/en/products/socs/esp32" },
    ],
  },
  {
    title: "IA & Autres",
    icons: [
      { icon: ClaudeIcon, name: "Claude", href: "https://claude.ai/" },
      { icon: GithubCopilot, name: "GitHub Copilot", href: "https://github.com/features/copilot" },
      { icon: Selenium, name: "Selenium", href: "https://www.selenium.dev/" },
      { icon: Blender, name: "Blender", href: "https://www.blender.org/" },
      { icon: FontAwesome, name: "Font Awesome", href: "https://fontawesome.com/" },
      { icon: Markdown, name: "Markdown", href: "https://daringfireball.net/projects/markdown/" },
      { icon: Toml, name: "TOML", href: "https://toml.io/" },
      { icon: Json, name: "JSON", href: "https://www.json.org/" },
      { icon: Yaml, name: "YAML", href: "https://yaml.org/" },
      { icon: Oauth, name: "OAuth", href: "https://oauth.net/" },
    ],
  },
  {
    title: "Sécurité",
    icons: [
      { icon: "BinaryNinjaIcon.png", name: "Binary Ninja", href: "https://binary.ninja/" },
      { icon: "BinwalkIcon.png", name: "Binwalk", href: "https://github.com/ReFirmLabs/binwalk" },
      { icon: "dnSpyIcon.png", name: "dnSpy", href: "https://github.com/dnSpyEx/dnSpy" },
      { icon: "FlashromIcon.png", name: "Flashrom", href: "https://www.flashrom.org/" },
      { icon: "WiresharkIcon.png", name: "Wireshark", href: "https://www.wireshark.org/" },
      { icon: "Zap.svg", name: "OWASP ZAP", href: "https://www.zaproxy.org/" },
      { icon: "JDGuiIcon.png", name: "JD-GUI", href: "https://java-decompiler.github.io/" },
    ],
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
            <TooltipProvider v-for="(item, index) in category.icons" :key="index" :delay-duration="150">
              <Tooltip>
                <TooltipTrigger as-child>
                  <component
                      :is="item.href ? 'a' : 'div'"
                      :href="item.href"
                      :target="item.href ? '_blank' : undefined"
                      :rel="item.href ? 'noopener noreferrer' : undefined"
                      class="flex items-center justify-center p-2 bg-transparent dark:bg-zinc-600 ring-black/5 dark:ring-white/10 transition-transform hover:scale-110"
                      style="border-radius: 10px;"
                  >
                    <component v-if="typeof(item.icon) != 'string'" :is="item.icon" size="32" />
                    <img v-else :alt="item.name" :src="'/skill-icons/' + item.icon" draggable="false" width="32" height="32" />
                  </component>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{{ item.name }}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
</style>