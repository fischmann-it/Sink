<script setup>
definePageMeta({
  layout: false,
})

useHead({
  title: 'bytely - Link Shortener from Fischmann.IT',
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-black dark">
    <div class="text-center space-y-8">
      <img
        src="https://jobs.fischmann.it/images/logo.png"
        alt="FISCHMANN.IT"
        class="mx-auto max-w-xs sm:max-w-sm"
      />
      <div>
        <NuxtLink
          to="/dashboard"
          class="inline-flex items-center rounded-md bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200"
        >
          Dashboard
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
