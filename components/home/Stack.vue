<script setup lang="ts">
import { stackItems } from "~/data/siteData";
</script>
<template>
  <section class="px-10 pt-5">
    <h3 class="text-2xl font-bold text-center mb-2">Our Stack</h3>
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="1"
      :centered-slides="true"
      :loop="true"
      :space-between="50"
      :speed="250"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }"
      :breakpoints="{
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }"
    >
      <SwiperSlide v-for="(item, index) in stackItems" :key="index">
        <NuxtImg
          :src="item.image"
          :alt="item.alt"
          :class="item.class"
        />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
