<script lang="ts" setup>
const { imageUrl, title, description, status, url, githubUrl, stackIcons } = defineProps({
  imageUrl: String,
  title: String,
  description: String,
  status: String,
  url: String,
  githubUrl: String,
  stackIcons: Array<string>,
});
</script>
<template>
  <div
    class="flex flex-col m-2 border gap-2 border-purple-500 rounded-lg overflow-x-hidden"
  >
    <a
      class="h-48 bg-cover bg-center bg-no-repeat"
      :href="url"
      target="_blank"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></a>
    <div class="p-4">
      <a
        class="text-lg font-bold text-purple-700 hover:text-purple-900 visited:text-red-500"
        :href="url"
        target="_blank"
      >
        {{ title }}</a
      >
      <p>
        {{ description }}
      </p>
      <div class="flex justify-between">
        <div :class="[
          'text-md',
          status === 'In Development' ? 'text-yellow-500 font-bold' : 'text-green-500 font-bold'
        ]">{{ status }}</div>
        <div class="flex gap-2">
          <Icon
            v-for="icon in stackIcons"
            :key="icon"
            :name="icon"
          />
        </div>
      </div>
      <div v-if="githubUrl">
          <a :href="githubUrl" target="_blank">
            <Icon name="uil:github" size="2.0em" />
          </a>
      </div>
    </div>
  </div>
</template>
