<script setup lang="ts">
import {IconTerminal2} from "@tabler/icons-vue"

const props = defineProps<{ name: string, os?: string, root?: boolean, codename?: string, daily?: boolean }>()

const name = props.name
const os = props.os
const codename = props.codename
const daily = props.daily
</script>

<template>
  <li>
    <div class="flex flex-row gap-2">
      <span>{{ name }}</span>
      <Badge v-if="codename" variant="outline" >
        {{ codename }}
      </Badge>
      <Badge v-if="root" variant="destructive" >
        <IconTerminal2 />
        Rooté
      </Badge>
      <Badge v-if="os" variant="secondary">
        {{ os }}
      </Badge>
      <Badge v-if="daily" variant="default">
        Principal
      </Badge>
    </div>
  </li>
</template>

<style scoped>
</style>