<script setup>
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-background">
    <div class="text-center space-y-8">
      <img
        src="https://www.fischmann.it/wp-content/uploads/2025/06/FISCHMANN_SLOGAN_gross30-scaled.png"
        alt="FISCHMANN.IT"
        class="mx-auto max-w-xs sm:max-w-sm"
      />
      <div>
        <NuxtLink
          to="/dashboard"
          class="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Dashboard
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
