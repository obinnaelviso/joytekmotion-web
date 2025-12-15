<script lang="ts" setup>
defineProps<{
  imageUrl: string;
  title: string;
  description: string;
  projectStatus: string;
  url: string;
  githubUrl: string;
  stackIcons: string[];
}>();
</script>
<template>
  <div
    class="flex flex-col m-2 border gap-2 border-purple-500 rounded-lg overflow-x-hidden"
  >
    <a
      class="h-48 block relative overflow-hidden group"
      :href="url"
      target="_blank"
    >
      <NuxtImg
        :src="imageUrl"
        :alt="title"
        class="w-full h-full object-cover object-center"
      />
    </a>
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
          projectStatus === 'In Development' ? 'text-yellow-500 font-bold' : 'text-green-500 font-bold'
        ]">{{ projectStatus }}</div>
        <div class="flex gap-2">
          <Icon
            v-for="icon in stackIcons"
            :key="icon"
            :name="icon"
          />
        </div>
      </div>
      <div v-if="githubUrl">
          <a :href="githubUrl" target="_blank" aria-label="View Project Source Code on GitHub">
            <Icon name="uil:github" size="2.0em" />
          </a>
      </div>
    </div>
  </div>
</template>
