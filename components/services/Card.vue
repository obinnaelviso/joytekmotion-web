<script lang="ts" setup>
const { title, servicesList, action } = defineProps({
  title: String,
  servicesList: Array,
  action: String,
});
</script>
<template>
  <div
    class="rounded bg-white relative h-96 shadow-lg mb-5 border border-purple-700 p-10"
  >
    <Heading
      type="h2"
      :name="title"
      class="border-b border-gray-400 text-gray-700 pb-5 mb-5"
    />
    <div>
      <ul class="list-disc text-purple-700 flex flex-col gap-3">
        <li v-for="(serviceList, index) in servicesList" :key="index">
          <span class="text-gray-700">{{ serviceList }}</span>
        </li>
      </ul>
    </div>
    <TextLink v-if="action" to="#" class="absolute bottom-5 right-5" name="Learn More" />
  </div>
</template>
