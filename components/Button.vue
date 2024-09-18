<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value: string) =>
      ["primary", "secondary", "success", "warning", "danger"].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value: string) => ["sm", "md", "lg", "xl"].includes(value),
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const buttonClasses = computed(() => {
  return [
    "px-4 py-2 rounded-md font-bold transition duration-300 ease-in-out",
    {
      "bg-purple-500 text-white hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-700":
        props.variant === "primary",
      "bg-gray-500 text-white hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-700":
        props.variant === "default",
      "bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700":
        props.variant === "secondary",
      "bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 active:bg-green-700":
        props.variant === "success",
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-600 active:bg-yellow-700":
        props.variant === "warning",
      "bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 active:bg-red-700":
        props.variant === "danger",
      "text-sm": props.size === "sm",
      "text-lg": props.size === "lg",
      "text-xl": props.size === "xl",
    },
  ];
});
</script>
<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>
