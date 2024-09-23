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
      <SwiperSlide>
        <img
          src="/images/slider/stack/github.png"
          alt="github logo"
          class="h-28 m-auto"
          height="90"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/java.png"
          alt="java logo"
          class="h-32 m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/php.png"
          alt="php logo"
          class="h-32 m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/mysql.png"
          alt="mysql logo"
          class="h-24 m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/html-css-js.png"
          alt="html-css-js logo"
          class="h-24 m-auto"
          height="90"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/cpanel.png"
          alt="cpanel logo"
          class="mt-5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/python.png"
          alt="python logo"
          class="h-24 m-auto"
          height="90"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/laravel.png"
          alt="laravel logo"
          class="h-24 m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/aws.png"
          alt="aws logo"
          class="h-24 m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/nginx.webp"
          alt="nginx logo"
          class="mt-5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/kotlin.png"
          alt=" logo"
          class="h-24 m-auto"
          height="90"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/vuejs.webp"
          alt="vuejs logo"
          class="h-24 m-auto"
          height="90"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/nodejs.png"
          alt="nodejs logo"
          class="h-32 m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/nuxtjs.png"
          alt="nuxtjs logo"
          class="mt-5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/digitalocean.png"
          alt="digitalocean logo"
          class="h-32 m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/flutter.png"
          alt="flutter logo"
          class="mt-5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/react.png"
          alt="react logo"
          class="h-24 m-auto"
          height="90"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/mongodb.png"
          alt="mongodb logo"
          class="h-32 m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/nextjs.png"
          alt="nextjs logo"
          class="h-28 m-auto"
          height="90"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/spring-boot.png"
          alt="spring boot logo"
          class="h-32 m-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/slider/stack/vercel.png"
          alt="vercel logo"
          class="mt-5"
        />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
