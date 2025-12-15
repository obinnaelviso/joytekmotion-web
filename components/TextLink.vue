<script lang="ts" setup>
defineProps<{
  name: string;
  url: string;
}>();
</script>
<template>
  <NuxtLink :to="url" class="text-purple-700 hover:text-purple-900 visited:text-red-500">{{
    name
  }}</NuxtLink>
</template>
