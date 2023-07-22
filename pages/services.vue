<script lang="ts" setup>
import freelanceBgImg from "@/assets/images/slider/hero/freelance-community-bg.jpg";
const title = "Services";
useHead({
  title,
  meta: [
    {
      name: "description",
      content:
        "We setup servers, build mobile and desktop applications and we design websites. We also fix bugs and maintain code.",
    },
  ],
});
const services: { title: string; servicesList: string[]; action: string }[] = [
  {
    title: "Web Development",
    servicesList: [
      "We design websites",
      "We build websites",
      "We fix bugs",
      "We maintain code",
    ],
    action: "#",
  },
  {
    title: "Mobile Development",
    servicesList: [
      "We design mobile applications",
      "We build mobile applications",
      "We fix bugs",
      "We maintain code",
    ],
    action: "#",
  },
  {
    title: "Desktop Development",
    servicesList: [
      "We design desktop applications",
      "We build desktop applications",
      "We fix bugs",
      "We maintain code",
    ],
    action: "#",
  },
  {
    title: "Server Setup",
    servicesList: [
      "We setup servers",
      "We fix bugs",
      "We maintain code",
      "We ensure you spend less in server maintenance while you make your profit",
    ],
    action: "#",
  },
];
</script>
<template>
  <PageTitle :backgroundImage="freelanceBgImg" :title="title" />
  <Container>
    <div class="my-20 text-center">
      <Heading
        type="h2"
        name="We've got what you're looking for"
        class="mb-5"
      />
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
</template>
