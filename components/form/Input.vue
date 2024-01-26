<script lang="ts" setup>
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

const labelClass = computed(() => {
  return ["block", "text-gray-700", "text-sm", "mb-2"];
});
const props = defineProps<{
  name: string;
  apiErrorMessage?: string;
  label?: string;
}>();
const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <FormInputGroup class="tablet:text-left text-center">
    <label :class="labelClass" v-if="label" :for="name">{{ label }}</label>
    <input :class="inputClass" v-model="value" :name="name" :id="name" />
    <small class="text-red-600" v-if="errorMessage">{{ errorMessage }}</small>
    <small class="text-red-600" v-else-if="apiErrorMessage">{{
      apiErrorMessage
    }}</small>
  </FormInputGroup>
</template>
