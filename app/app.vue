<script setup lang="ts">
useSeoMeta({
  title: "Page de Ulysse.gl",
  ogTitle: "Page de Ulysse.gl",
  twitterTitle: "Page de Ulysse.gl",
  description: "Site de Ulysse2211",
  ogDescription: "Site de Ulysse2211",
  twitterDescription: "Site de Ulysse2211",
  ogImage: "/ogImage.png",
  twitterImage: "/ogImage.png",
  twitterCard: 'summary_large_image',
  ogType: "website",
  ogLocale: 'fr-FR',
  themeColor: "#0f172b",
  ogSiteName: "Page d'accueil de Ulysse.gl",
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
