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
    <SwiperSlide v-for="slide in 2" :key="slide">
      <div class="h-[35vh] laptop:h-[75vh] relative">
        <img
          src="https://wallpapercave.com/wp/wp2944455.jpg"
          class="object-cover w-full h-full absolute top-0 left-0 -z-10"
        />
        <!-- image overlay -->
        <div class="absolute inset-0 bg-black opacity-70"></div>
        <!-- Center -->
        <div
          class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h1 class="text-2xl laptop:text-4xl tablet:text-3xl font-bold mb-5">
            Find the Perfect Freelance Talent for Your Projects
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
