<script lang="ts" setup>
const {defaultText} = defineProps({
  defaultText: {
    type: String,
    default: "",
  },
});
const inputClass = computed(() => {
  return [
    "border",
    "border-gray-300",
    "rounded",
    "px-3",
    "py-2",
    "focus:outline-none",
    "focus:ring",
    "focus:ring-purple-600",
    "focus:border-transparent",
    "transition",
    "duration-200",
    "ease-in-out",
  ];
});
</script>
<template>
    <textarea
      :class="inputClass"
    >{{ defaultText }}</textarea>
</template>
