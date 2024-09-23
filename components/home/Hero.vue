<script lang="ts" setup>
import freelanceBgImg from "/images/slider/hero/freelance-community-bg.jpg"
import javaBgImg from "/images/slider/hero/java-bg.jpg"
import ubuntuBgImg from "/images/slider/hero/ubuntu-bg.jpg"
const slides = [
  {
    image: freelanceBgImg,
    image_alt: "laptop with monitor",
    title: "We are a <span class='text-orange-300'>community of freelancers</span> who work together to get the job done.",
    id: 0,
  },
  {
    image: javaBgImg,
    image_alt: "dark background with java logo at the bottom right corner",
    title: "We <span class='text-orange-300'>build, fix and maintain</span> your websites, mobile and desktop applications for you.",
    id: 1,
  },
  {
    image: ubuntuBgImg,
    image_alt: "dark background with ubuntu logo at the center",
    title: "We ensure you spend less in <span class='text-orange-300'>server maintenance</span> while you make your profit.",
    id: 2,
  },
];
</script>
<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :navigation="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <div class="h-[35vh] laptop:h-[100vh] relative">
        <img
          :src="slide.image"
          :alt="slide.image_alt"
          class="object-cover w-full h-full absolute top-0 left-0 -z-10"
        />
        <!-- image overlay -->
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <!-- Center -->
        <div
          class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h1 class="text-xl laptop:text-4xl tablet:text-3xl font-bold mb-5" v-html="slide.title">
          </h1>
          <!-- <Button> Get Started {{ slide }} </Button> -->
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white;
}
.swiper-button-next {
  right: 50px;
}
.swiper-button-prev {
  left: 50px;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px;
  font-weight: 900;
}
</style>
