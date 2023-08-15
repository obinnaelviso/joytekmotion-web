<script lang="ts" setup>
const { type, name } = defineProps({
  name: String,
  type: {
    type: String,
    default: "h2",
    validator: (value: string) => ["h1", "h2", "h3", "h4"].includes(value),
  },
});

const headingClasses = computed(() => {
  return [
    "font-bold",
    {
      "text-4xl": type === "h1",
      "text-2xl": type === "h2",
      "text-xl": type === "h3",
      "text-lg": type === "h4",
    },
  ];
});
</script>

<template>
  <component :is="type" :class="headingClasses" v-html="name" />
</template>
