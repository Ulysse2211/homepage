<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  IconUser,
  IconDeviceLaptop,
  IconBriefcase,
  IconArticle,
  IconFolder,
  IconCode,
  IconMenu2,
  IconX
} from '@tabler/icons-vue'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const projects: Array<{ title: string; description: string; href: string }> = []

const isVisible = ref(true)
const isMobileOpen = ref(false)
let lastScrollY = 0

const scrollToId = (id: string) => {
  isMobileOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    isVisible.value = false
    isMobileOpen.value = false
  } else {
    isVisible.value = true
  }
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
      class="fixed inset-x-0 top-0 z-50 w-dvw backdrop-blur-2xl transition-transform duration-300 outline-1"
      :class="isVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    <div class="flex items-center justify-between p-2 md:hidden">
      <NuxtLink to="/">
        <img class="w-10" alt="logo" src="/logo.png" />
      </NuxtLink>
      <button
          @click="isMobileOpen = !isMobileOpen"
          class="p-2 rounded-md hover:bg-muted"
          aria-label="Toggle Menu"
      >
        <IconMenu2 v-if="!isMobileOpen" class="size-6" />
        <IconX v-else class="size-6" />
      </button>
    </div>

    <NavigationMenu
        :viewport="false"
        class="max-w-full"
        :class="[
        isMobileOpen ? 'block' : 'hidden',
        'md:block'
      ]"
    >

      <NavigationMenuList class="flex flex-col md:flex-row md:flex-wrap gap-1 p-2">
        <NuxtLink to="/">
          <img class="w-10" alt="logo" src="/logo.png" />
        </NuxtLink>
        <NavigationMenuItem>
          <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
            <NuxtLink to="/#about" class="flex items-center gap-2" @click="scrollToId('about')">
              <IconUser class="size-4" />
              À propos de moi
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
            <NuxtLink to="/#history" class="flex items-center gap-2" @click="scrollToId('history')">
              <IconBriefcase class="size-4" />
              Parcours
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
            <NuxtLink to="/#hardware" class="flex items-center gap-2" @click="scrollToId('hardware')">
              <IconDeviceLaptop class="size-4" />
              Matériel
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
            <NuxtLink to="/#skills" class="flex items-center gap-2" @click="scrollToId('skills')">
              <IconCode class="size-4" />
              Compétences
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
            <NuxtLink to="/posts" class="flex items-center gap-2" @click="isMobileOpen = false">
              <IconArticle class="size-4" />
              Articles
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem v-if="projects.length > 0">
          <NavigationMenuTrigger class="flex items-center gap-2 w-full justify-between md:w-auto">
            <span class="flex items-center gap-2">
              <IconFolder class="size-4" />
              Projets
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[300px] gap-2 p-4">
              <li v-for="project in projects" :key="project.title">
                <NavigationMenuLink as-child>
                  <NuxtLink :to="project.href" class="block rounded-md p-2 hover:bg-muted" @click="isMobileOpen = false">
                    <div class="font-medium">{{ project.title }}</div>
                    <div class="text-sm text-muted-foreground">{{ project.description }}</div>
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  </nav>
</template>