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
    <SwiperSlide v-for="slide in 5" :key="slide">
      <div class="h-[75vh] relative">
        <img
          src="https://wallpapercave.com/wp/wp2944455.jpg"
          class="object-cover w-full h-full absolute top-0 left-0 -z-10"
        />
        <!-- image overlay -->
        <div class="absolute inset-0 bg-black opacity-60"></div>
        <!-- Center -->
        <div
          class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h1 class="text-4xl font-bold mb-4">
            Find the Perfect Freelance Talent for Your Projects
          </h1>
          <div class="text-xl text-gray-200 mb-12">
            Welcome to our freelancing platform, where you can find top-quality
            freelance talent for all your project needs. Whether you need a
            designer, developer, writer, marketer, or any other skilled
            professional, we have the expertise and experience to help you find
            the perfect match.
          </div>
          <button
            class="bg-purple-500 text-white font-bold py-2 px-4 rounded border border-transparent hover:border-purple-500 focus:border-purple-500 active:border-purple-700 transition duration-300 ease-in-out"
          >
            Get Started {{ slide }}
          </button>
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
