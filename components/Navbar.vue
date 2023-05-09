<script setup lang="ts">
const menuLinks = [
  {
    name: "Features",
    url: "#",
  },
  {
    name: "Downloads",
    url: "#",
  },
  {
    name: "Docs",
    url: "#",
  },
  {
    name: "Support",
    url: "#",
  },
  {
    name: "Blog",
    url: "#",
  },
];
</script>

<template>
  <nav class="w-100 px-16 py-2 flex justify-between items-center border-b">
    <!-- Logo -->
    <img src="~/assets/images/logo.png" alt="joytekmotion-logo" width="68" />
    <!-- Menu -->
    <ul class="flex gap-4">
      <li v-for="menuLink in menuLinks" :key="menuLink.name">
        <a
          href="#"
          class="inline-block border-b-2 border-transparent hover:border-violet-800 hover:text-violet-800 transition duration-300 ease-in-out"
        >
          {{ menuLink.name }}
        </a>
      </li>
    </ul>

    <!-- Social icons -->
    <ul class="flex gap-3">
      <li>
        <a
          href="#"
          class="text-gray-500 transition-colors ease-in-out duration-500 hover:text-black"
          ><Icon name="uil:github"
        /></a>
      </li>
      <li>
        <a
          href="#"
          class="text-gray-500 transition-colors ease-in-out duration-500 hover:text-blue-600"
          ><Icon name="uil:facebook-f"
        /></a>
      </li>
      <li>
        <a
          href="#"
          class="text-gray-500 hover:text-sky-700 transition-colors ease-in-out duration-500"
          ><Icon name="uil:linkedin"
        /></a>
      </li>
      <li>
        <a
          href="#"
          class="text-gray-500 hover:text-sky-400 transition-colors ease-in-out duration-600"
          ><Icon name="uil:twitter"
        /></a>
      </li>
      <li>
        <a
          href="#"
          class="text-gray-500 hover:text-green-500 transition-colors ease-in-out duration-500"
          ><Icon name="cib:upwork"
        /></a>
      </li>
      <li>
        <a
          href="#"
          class="text-gray-500 hover:text-green-600 transition-colors ease-in-out duration-500"
          ><Icon name="jam:fiverr"
        /></a>
      </li>
    </ul>
  </nav>
</template>
