<script setup lang="ts">
useSeoMeta({
  title: "Page de Ulysse.gl",
  ogTitle: "Page de Ulysse.gl",
  twitterTitle: "Page de Ulysse.gl",
  description: "",
  ogDescription: "",
  twitterDescription: "",
  ogImage: "/ogImage.png",
  twitterImage: "/ogImage.png",
  twitterCard: 'summary_large_image',
  ogType: "website",
  ogLocale: 'fr-FR',
  themeColor: "#0f172b"
})
</script>
<template>
  <div>
    <Navbar />
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Footer />
  </div>
</template>
