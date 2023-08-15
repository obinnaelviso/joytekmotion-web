<script lang="ts" setup>
import freelanceBgImg from "@/assets/images/slider/hero/freelance-community-bg.jpg";
import logo from "@/assets/images/logo.png";

const pageTitle = "About Us";
const pageDescription =
  "A community of freelancers who's main and only aim is to get the job done 'rightly'.";
useHead({
  title: pageTitle,
  meta: [
    {
      name: "description",
      content: pageDescription,
    },
  ],
});
</script>
<template>
  <div>
    <PageTitle
      :backgroundImage="freelanceBgImg"
      :title="pageTitle"
      :description="pageDescription"
    />
    <Container>
      <!-- Section Who We Are -->
      <div class="my-20 text-center">
        <SectionTitle class="mb-5">Who We Are</SectionTitle>
        <p class="text-gray-500 laptop:px-56 text-lg">
          We are a community and we love the job we do. <br />From designing
          websites to building mobile and desktop applications, we make sure we
          employ the right tools and design patterns to deliver products and
          services of excellence to you.
        </p>
      </div>
  
      <!-- Section Let's Dive Deeper -->
      <div class="my-20">
        <SectionTitle class="mb-5">Let's Dive Deeper</SectionTitle>
        <div class="grid grid-cols-1 laptop:grid-cols-3 gap-3">
          <img :src="logo" alt="joytek motion logo" class="mx-auto" />
          <div class="col-span-2 flex flex-col gap-3 text-gray-500">
            <p>
              Joytek Motion was founded in 2017 with a vision to develop software
              solutions for business and also solve problems in the society. Since
              then we've engaged in building websites, mobile applications and
              deploying on freelancing platforms such as Upwork and Fiverr. We had
              our first website in wordpress and blog in 2020 which was later
              shutdown for upgrade in 2021.
            </p>
            <p>
              We had our first project in 2020 where we helped a client figure out
              a solution to a problem he had on his website. He has contracted
              same job to other freelancers before us but all to no avail. But
              with our skill and extraordinary insight, we delivered the job and
              he was happy.
            </p>
            <p>
              We were registered on February 1, 2022 and we began operations
              officially in April 14th, 2023. We aim at giving you extraordinary
              services and we believe in one thing: <br />
              <q class="font-bold"
                >A JOB IS NOT YET DONE UNTIL IT IS DONE RIGHTLY</q
              >
            </p>
          </div>
        </div>
      </div>
  
      <!-- Section Follow Us On Our Social Media -->
      <div class="my-20 text-center">
        <SectionTitle>Follow Us On Social Media</SectionTitle>
        <Heading
          type="h4"
          class="mb-5"
          name="To find out more on what we're up to, tap any of the icons below <br> to follow us on any of our social media handle today <br> @joytekmotion"
        />
        <!-- Social icons -->
        <ul class="flex gap-3 justify-center">
          <li>
            <a
              href="https://facebook.com/joytekmotion"
              target="_blank"
              class="text-blue-500"
              ><Icon name="uil:facebook-f" size="32"
            /></a>
          </li>
          <li>
            <a
              href="https://linkedin.com/company/joytekmotion"
              target="_blank"
              class="text-sky-700"
              ><Icon name="uil:linkedin" size="32"
            /></a>
          </li>
          <li>
            <a
              href="https://twitter.com/joytekmotion"
              target="_blank"
              class="text-sky-400"
              ><Icon name="uil:twitter" size="32"
            /></a>
          </li>
          <li>
            <a
              href="https://instagram.com/joytekmotion"
              target="_blank"
              class="text-pink-600"
              ><Icon name="uil:instagram" size="32"
            /></a>
          </li>
        </ul>
      </div>
    </Container>
  </div>
</template>
