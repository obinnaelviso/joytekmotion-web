<template>
  <section class="px-10 py-5">
    <h3 class="text-2xl font-bold text-center mb-2">Our Stack</h3>
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="5"
      :loop="true"
      :space-between="50"
      :speed="250"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/github.png" alt="github logo" height="90" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/java.png" alt="java logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/php.png" alt="php logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/mysql.png" alt="mysql logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/html-css-js.png" alt="html-css-js logo" height="90" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/cpanel.png" alt="cpanel logo" height="100" class="mt-5" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/python.png" alt="python logo" height="90" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/laravel.png" alt="laravel logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/aws.png" alt="aws logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/nginx.webp" alt="nginx logo" height="100" class="mt-5" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/kotlin.png" alt=" logo" height="90" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/vuejs.webp" alt="vuejs logo" height="90" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/nodejs.png" alt="nodejs logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/nuxtjs.png" alt="nuxtjs logo" height="100" class="mt-5" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/digitalocean.png" alt="digitalocean logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/flutter.png" alt="flutter logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/react.png" alt="react logo" height="90" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/mongodb.png" alt="mongodb logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/nextjs.png" alt="nextjs logo" height="90" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/spring-boot.png" alt="spring boot logo" height="100" />
      </SwiperSlide>
      <SwiperSlide>
        <nuxt-img src="/images/slider/stack/vercel.png" alt="vercel logo" class="mt-5" height="100" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>