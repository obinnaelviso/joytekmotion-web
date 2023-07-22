<script lang="ts" setup>
const {title, backgroundImage} = defineProps({
  title: String,
  backgroundImage: String
})
</script>
<template>
  <div class="relative h-52">
    <img :src="backgroundImage" :alt="title" class="object-cover w-full h-full absolute top-0 left-0 -z-10" />
    <!-- image overlay -->
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <!-- Center -->
    <div class="absolute bottom-5 left-5">
      <Heading type="h1" :name="title" class="text-white"/>
      <p class="text-gray-300">How to become a centimental person</p>
    </div>
  </div>
</template>