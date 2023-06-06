<script lang="ts" setup>
const { appName } = useRuntimeConfig().public;
useHead({
  titleTemplate: (title?: string) =>
    !title ? `Welcome to ${appName}` : `${title} - ${appName}`,
});
</script>
<template>
  <header>
    <!-- Navbar -->
    <Navbar />
  </header>
  <!-- container mx-auto px-4 sm:px-6 lg:px-8 -->
  <main>
    <!-- Hero -->
    <slot />
    <HomeFooter />
  </main>
</template>
