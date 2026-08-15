<script setup lang="ts">
const { data: posts } = await useAsyncData('content', () => queryCollection('content').all())
useSeoMeta({
  title: "Articles de https://ulysse.gl/",
  ogTitle: "Articles de https://ulysse.gl/",
  twitterTitle: "Articles de https://ulysse.gl/",
  description: "Liste des articles publiés sur https://ulysse.gl/",
  ogDescription: "Liste des articles publiés sur https://ulysse.gl/",
  twitterDescription: "Liste des articles publiés sur https://ulysse.gl/",
  ogImage: "/ogImage.png",
  twitterImage: "/ogImage.png",
  twitterCard: 'summary_large_image',
  ogType: "article",
  ogLocale: 'fr-FR',
  themeColor: "#0f172b",
  ogSiteName: "Page d'accueil de Ulysse.gl",
})
</script>

<template>
  <div>
    <PostHero />
    <main>
      <div class="grid min-h-dvh w-full gap-10 p-10 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
        <NuxtLink class="h-max w-full" v-for="post in posts" :key="post.id" :to="post.path">
          <Card class="h-full">
            <CardHeader>
              <CardTitle class="flex justify-between overflow-auto h-15">{{ post.title }}</CardTitle>
              <CardDescription class="h-20 overflow-auto w-full">{{ post.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <img class="rounded-lg w-full" alt="cover image" :src="post.image ?? '/content/default_cover.png'" />
              <!-- https://www.articleideagenerator.com/tools/cover-image-generator -->
            </CardContent>
          </Card>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
