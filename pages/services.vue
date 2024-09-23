<script lang="ts" setup>
import freelanceBgImg from "/images/slider/hero/freelance-community-bg.jpg";
import { services } from "@/data/services";
const title = "Services";
const description = "We setup servers, build mobile and desktop applications and we design websites. We also fix bugs and maintain code."
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
<template>
  <div>
    <PageTitle :backgroundImage="freelanceBgImg" :title="title" :description="description" />
    <Container>
      <div class="my-20 text-center">
        <SectionTitle class="mb-5">We've got what you're looking for</SectionTitle>
        <p class="text-gray-500 laptop:px-56 text-lg">
          From development to testing and even up to deployment and maintenance of
          your website, application, and microservices, we've got you covered.
          <br />Take a look at the different services we offer.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        <ServicesCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :servicesList="service.servicesList"
          :action="service.action"
        />
      </div>
    </Container>
  </div>
</template>
