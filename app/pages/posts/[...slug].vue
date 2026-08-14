<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.title,
  twitterTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description,
  twitterDescription: page.value?.description,
  ogImage: page.value?.image,
  twitterImage: page.value?.image,
  twitterCard: 'summary_large_image',
  ogType: "article",
  ogLocale: 'fr-FR',
  themeColor: page.value?.color
})
</script>

<template>
  <div>
    <PostHero :title="page?.title" :description="page?.description" :date="page?.date" />
    <div class="min-h-dvh flex flex-col items-center">
      <ContentRenderer v-if="page" :value="page" class="content-body" />
      <span v-else>not found</span>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.content-body {
  @apply w-full max-w-3xl px-4 py-10 mx-auto text-base leading-relaxed text-neutral-800 dark:text-neutral-200;
}
.content-body :deep(h1) {
  @apply text-4xl font-bold mt-10 mb-6 text-neutral-900 dark:text-neutral-50 scroll-mt-24;
}
.content-body :deep(h2) {
  @apply text-3xl font-bold mt-10 mb-4 text-neutral-900 dark:text-neutral-50 scroll-mt-24;
}
.content-body :deep(h3) {
  @apply text-2xl font-semibold mt-8 mb-3 text-neutral-900 dark:text-neutral-50 scroll-mt-24;
}
.content-body :deep(h2 a),
.content-body :deep(h3 a) {
  @apply no-underline text-inherit hover:underline;
}
.content-body :deep(p) {
  @apply my-4;
}
.content-body :deep(a) {
  @apply text-slate-600 dark:text-slate-300 underline underline-offset-2 hover:text-slate-800 dark:hover:text-slate-100;
}
.content-body :deep(strong) {
  @apply font-semibold text-neutral-900 dark:text-neutral-50;
}
.content-body :deep(em) {
  @apply italic;
}
.content-body :deep(ul) {
  @apply list-disc pl-6 my-4 space-y-1;
}
.content-body :deep(ol) {
  @apply list-decimal pl-6 my-4 space-y-1;
}
.content-body :deep(li) {
  @apply pl-1;
}
.content-body :deep(li > ul),
.content-body :deep(li > ol) {
  @apply mt-1 mb-1;
}
.content-body :deep(blockquote) {
  @apply border-l-4 border-slate-300 dark:border-slate-600 pl-4 my-6 italic text-neutral-600 dark:text-neutral-400;
}
.content-body :deep(blockquote blockquote) {
  @apply border-slate-200 dark:border-slate-700;
}
.content-body :deep(hr) {
  @apply my-10 border-neutral-200 dark:border-neutral-700;
}
.content-body :deep(pre) {
  @apply bg-slate-900 text-slate-100 rounded-lg p-4 my-6 overflow-x-auto text-sm dark:bg-neutral-900 dark:text-neutral-100;
}
.content-body :deep(pre code) {
  @apply bg-transparent text-inherit p-0;
}
.content-body :deep(code) {
  @apply bg-neutral-100 text-slate-700 rounded px-1.5 py-0.5 text-sm font-mono dark:bg-neutral-800 dark:text-slate-300;
}
.content-body :deep(img) {
  @apply rounded-lg my-6 max-w-full h-auto;
}
.content-body :deep(table) {
  @apply w-full my-6 border-collapse text-sm;
}
.content-body :deep(th) {
  @apply border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 px-3 py-2 text-left font-semibold;
}
.content-body :deep(td) {
  @apply border border-neutral-200 dark:border-neutral-700 px-3 py-2;
}
</style>