<script lang="ts" setup>
const {title} = defineProps({
  title: String,
});
const inputClass = computed(() => {
  return [
    "block",
    "text-gray-700",
    "text-sm",
    "mb-2",
  ];
});
</script>
<template>
    <label
      :class="inputClass"
    >{{ title }}</label>
</template>
