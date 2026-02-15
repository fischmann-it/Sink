<script setup>
definePageMeta({
  layout: false,
})

useHead({
  title: 'bytely - Link Shortener from Fischmann.IT',
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-black dark">
    <div class="flex flex-1 items-center justify-center">
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

    <footer class="border-t border-gray-800 py-8">
      <div class="mx-auto max-w-6xl px-6">
        <div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div class="flex items-center space-x-4">
            <span class="text-xl font-black text-white">Sink</span>
            <small class="text-sm text-gray-400">
              &copy; {{ new Date().getFullYear() }} Produkte von HTML.ZONE
            </small>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
