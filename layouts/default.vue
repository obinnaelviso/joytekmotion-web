<script lang="ts" setup>
import logo from "/images/logo.png"
const { appName } = useRuntimeConfig().public;
import { SpeedInsights } from "@vercel/speed-insights/vue";
const environment = process.env.NODE_ENV;
useHead({
  titleTemplate: (title?: string) =>
    !title ? `Welcome to ${appName}` : `${title} - ${appName}`,
  meta: [
    { name: "author", content: "Okechukwu Obinna Elvis" },
    {
      name: "description",
      content: `We are a community of freelancers who build and manage websites, mobile and desktop applications at an affordable rate.`,
    },
    {
      name: "keywords",
      content: "Affordable freelancing, mobile app developers, freelance web designers, freelance software developers, affordable website development"
    }, 
    {property: "og:image", content: logo}
  ],
});
</script>
<template>
  <div>
    <SpeedInsights v-if="environment === 'production'" />
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
  </div>
</template>
