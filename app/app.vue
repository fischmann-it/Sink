<script setup lang="ts">
import 'vue-sonner/style.css'

const { title, description, image } = useAppConfig()
const route = useRoute()

useSeoMeta({
  title: 'bytely - Link Shortener from Fischmann.IT',
  description,
  ogType: 'website',
  ogTitle: 'bytely',
  ogSiteName: 'bytely',
  ogDescription: description,
  ogImage: image,
  twitterTitle: 'bytely',
  twitterDescription: description,
  twitterImage: image,
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://jobs.fischmann.it/images/logo.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#000" />
    <NuxtPage />
    <Toaster position="top-center" rich-colors />
  </NuxtLayout>
</template>
