<script setup lang="ts">
import SectionTitle from "~/components/IndexContent/Common/SectionTitle.vue";
import { Card, CardContent } from '@/components/ui/card'
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full pt-5 pb-5">
    <SectionTitle id="about" title="À propos de moi" />
    <Card>
      <CardContent class="p-6 gap-6 flex flex-row justify-center items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <Avatar class="w-20 h-20">
                <AvatarImage src="/logo.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Lady, ma chienne décédée le jour de Noël en 2025</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p>
          <b>Ulysse.</b><br />
          Terminale (2026-2027) en Île-de-France.<br />
          Informatique, sécurité, électronique, datacenters.<br />
          Un peu de photo animalière aussi.<br />
        </p>
      </CardContent>
    </Card>
  </div>
</template>
<style scoped>
</style>