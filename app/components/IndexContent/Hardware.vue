<script setup lang="ts">
import {IconBrandAndroid,IconDeviceNintendo,IconCameraSpark,IconCpu,IconDevicesPc,IconBoxMultiple} from '@tabler/icons-vue'

import SectionTitle from "~/components/IndexContent/Common/SectionTitle.vue";
import HardwareItem from "~/components/IndexContent/Hardware/HardwareItem.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full pt-5 pb-5">
    <SectionTitle id="hardware" title="Matériel" />
    <Accordion type="single" collapsible class="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger><IconBrandAndroid />Appareils mobiles</AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2">
          <HardwareItem name="Samsung Galaxy S22 Ultra" os="OneUI 8" codename="SM-S908U"/>
          <HardwareItem name="Samsung Galaxy Ace" os="Android 2.6" codename="GT-S5839iGGSMH"/>
          <HardwareItem name="Nothing Phone (3a) Pro" os="Nothing OS 4" codename="Asteroids" root daily/>
          <HardwareItem name="Xiaomi Mi 9T" os="Lineage OS 21" codename="Davinci" root/>
          <HardwareItem name="Samsung Galaxy Tab S5e Wifi" os="Lineage OS 22" codename="gts4lvwifi" root/>
          <HardwareItem name="Samsung Galaxy Tab S6 Lite Wifi" os="OneUI" codename="gta4xl" root/>
          <HardwareItem name="Unowhy Y10 (Malata Mobile)" os="Android AOSP 12 Trebble" codename="Y10G001S4M_EEA" root/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger><IconDeviceNintendo />Consoles</AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2">
          <HardwareItem name="New Nintendo 3DS XL (SNES Edition)" os="Luma3DS" codename="InfraRED"/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger><IconCameraSpark />Photographie</AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2">
          <HardwareItem name="Sony Alpha 6000" os="Android 2.4" codename="ILCE-E6000"/>
          <HardwareItem name="Sony E 55-210 mm F 4,5-6,3 OSS (Silver)" codename="SEL55210"/>
          <HardwareItem name="Sony E PZ 16 – 50 mm F3.5 – 5.6 OSS II (Black)" codename="SELP16502"/>
          <HardwareItem name="RISE Filtre CPL Polarisant 49mm"/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger><IconCpu />Electronique</AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2">
          <HardwareItem name="ATTEN ST-8802"/>
          <HardwareItem name="ATTEN SP-65A"/>
          <HardwareItem name="CH341a Programmateur SPI/I2C"/>
          <HardwareItem name="ESP 32 Devboards"/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger><IconDevicesPc />Informatique</AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2">
          <HardwareItem name="Lenovo Ideapad Gaming 3" codename="15IMHO5" os="Fedora Linux"/>
          <HardwareItem name='KOORUI 27" 2k' codename="27E3Q"/>
          <HardwareItem name="HPE DL380p Gen 8" os="Proxmox VE"/>
          <HardwareItem name="Raspberry PI 4b" os="Armbian"/>
          <HardwareItem name="Orange Pi 5 Max" os="Armbian"/>
          <HardwareItem name="2x Chip PC LXD3" os="Librelec/Ubuntu"/>
          <HardwareItem name="iMac mid-2007" os="Arch Linux"/>
          <HardwareItem name="APC Smart-UPS 1500" codename="SUA1500I"/>
          <HardwareItem name="Unowhy Y13 Gen2" os="Windows 11 26h2" codename="Y13G201S4EI"/>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger><IconBoxMultiple />Divers</AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2">
          <HardwareItem name="Samsung TV" codename="UE32EH4003W"/>
          <HardwareItem name="TPLINK RE365 v3" codename="AC1200" os="VxWorks" root/>
          <HardwareItem name="Flipper Zero" os="Momentum"/>
          <HardwareItem name="SCS Sentinel Solar Cam" codename="SVI0074" os="Linux 4.x" root/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<style scoped>

</style>