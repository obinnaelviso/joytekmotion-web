<script setup lang="ts">
const route = useRoute();
import { menuLinks, socialIcons } from "~/data/siteData";

const isOpen = ref(false);

const openMenu = () => {
  isOpen.value = !isOpen.value;
};
const menuClasses = computed(() => {
  return {
    "opacity-0": !isOpen.value,
    "opacity-100": isOpen.value,
    "-translate-y-12": !isOpen.value,
    "translate-y": isOpen.value,
    "h-0": !isOpen.value,
  };
});
</script>

<template>
  <nav>
    <Container
      class="w-100 px-16 py-2 flex justify-between items-center border-b bg-white relative z-10"
    >
      <!-- Logo -->
      <NuxtLink to="/">
        <NuxtImg
          src="/images/logo.png"
          alt="joytekmotion-logo"
          class="w-16"
      /></NuxtLink>
      <!-- Menu -->
      <ul class="hidden tablet:flex gap-4">
        <li v-for="menuLink in menuLinks" :key="menuLink.name">
          <NuxtLink
            :to="menuLink.url"
            class="inline-block"
            :class="
              menuLink.url === route.path
                ? 'border-purple-700 text-purple-700 border-b-2'
                : ' border-b-2 border-transparent hover:border-purple-700 hover:text-purple-700 transition duration-300 ease-in-out'
            "
          >
            {{ menuLink.name }}
          </NuxtLink>
        </li>
      </ul>
      <!-- Social icons -->
      <ul class="hidden tablet:flex gap-3">
        <li v-for="socialIcon in socialIcons" :key="socialIcon.icon">
          <a
            :href="socialIcon.url"
            target="_blank"
            class="text-gray-500 transition-colors ease-in-out duration-500"
            :class="socialIcon.class"
            :aria-label="`Visit our ${socialIcon.url} page`"
            ><Icon :name="socialIcon.icon"
          /></a>
        </li>
      </ul>
      <Button class="tablet:hidden" size="sm" @click="openMenu()">MENU</Button>
    </Container>
    <!-- Mobile Menu -->
    <div
      class="tablet:hidden relative transition duration-500 ease-in"
      :class="menuClasses"
    >
      <ul class="flex flex-col text-center">
        <li
          v-for="menuLink in menuLinks"
          :key="menuLink.name"
          class="border-b flex flex-col"
        >
          <NuxtLink
            :to="menuLink.url"
            class="py-3 inline-block font-bold border-b-2 border-transparent hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out w-100"
          >
            {{ menuLink.name }}
          </NuxtLink>
        </li>
      </ul>
      <!-- Social icons -->
      <ul class="flex justify-center gap-3 py-3">
        <li v-for="socialIcon in socialIcons" :key="socialIcon.icon">
          <a
            :href="socialIcon.url"
            target="_blank"
            class="text-gray-500 transition-colors ease-in-out duration-500"
            :class="socialIcon.class"
            :aria-label="`Visit our ${socialIcon.url} page`"
            ><Icon :name="socialIcon.icon"
          /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>
