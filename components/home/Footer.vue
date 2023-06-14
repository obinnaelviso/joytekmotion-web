<script lang="ts" setup>
const currentYear = new Date().getFullYear();
const { companyName } = useRuntimeConfig().public;
</script>
<template>
  <section class="border-t border-t-purple-500 py-10">
    <Container>
      <div class="grid grid-cols-12 tablet:gap-3 gap-5">
        <div class="tablet:col-span-3 col-span-12 hidden tablet:block">
          <img src="@/assets/images/logo.png" class="w-24 h-24" />
          <p>
            We turn that big idea of yours into websites, apps, startups,
            scripts, infrastructures, services and more.
          </p>
        </div>
        <div class="tablet:col-span-5 col-span-12">
          <Heading type="h3" name="Quick Links" class="mb-5" />
          <div class="flex">
            <ul class="flex flex-col gap-1 flex-1">
              <li>
                <TextLink name="Services" url="#"/>
              </li>
              <li>
                <TextLink name="About Us" url="#"/>
              </li>
              <li>
                <TextLink name="Support" url="#" />
              </li>
            </ul>
            <ul class="flex flex-col gap-1 flex-1">
              <li>
                <TextLink name="Services" url="#"/>
              </li>
              <li>
                <TextLink name="About Us" url="#"/>
              </li>
              <li>
                <TextLink name="Support" url="#" />
              </li>
            </ul>
          </div>
        </div>
        <div class="tablet:col-span-4 col-span-12">
          <Heading type="h3" name="Subscribe to Our Newsletter" class="mb-5" />
          <p class="mb-5">
            Subscribe, to get the latest news and updates from us.
          </p>
          <form action="#" class="flex laptop:flex-row mb-3 flex-col">
            <FormInput
              type="email"
              placeholder="Enter your email"
              class="laptop:mb-0 mb-3"
            />
            <Button type="submit" class="laptop:ml-2"> Subscribe </Button>
          </form>

          <!-- Social icons -->
          <ul class="flex gap-3">
            <li>
              <a
                href="https://github.com/obinnaelviso"
                target="_blank"
                class="text-black"
                ><Icon name="uil:github"
              /></a>
            </li>
            <li>
              <a
                href="https://facebook.com/joytekmotion"
                target="_blank"
                class="text-blue-500"
                ><Icon name="uil:facebook-f"
              /></a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/joytekmotion"
                target="_blank"
                class="text-sky-700"
                ><Icon name="uil:linkedin"
              /></a>
            </li>
            <li>
              <a
                href="https://twitter.com/joytekmotion"
                target="_blank"
                class="text-sky-400"
                ><Icon name="uil:twitter"
              /></a>
            </li>
            <li>
              <a
                href="https://wa.link/lz09jr"
                target="_blank"
                class="text-green-500"
                ><Icon name="uil:whatsapp"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-5" />
      <div class="text-gray-500 text-center text-sm">
        &copy; 2020 - {{ currentYear }}
        <span class="text-purple-700">{{ companyName }}</span
        >. All rights reserved.
      </div>
    </Container>
  </section>
</template>
