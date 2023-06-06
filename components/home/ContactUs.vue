<script lang="ts" setup>
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
</script>
<template>
  <section class="grid tablet:grid-cols-2 grid-cols-1 my-12">
    <div
      class="contact-title flex flex-col justify-center px-10 rounded-tl-xl tablet:rounded-bl-xl rounded-tr-xl tablet:rounded-tr-none text-white"
    >
      <h2
        class="font-extrabold laptop:text-7xl tablet:text-6xl text-4xl text-center tablet:text-left mt-10 tablet:mb-16 mb-5"
      >
        SEND US A MESSAGE TODAY
      </h2>
      <h3
        class="font-bold tablet:text-3xl text-2xl tablet:text-left text-center mb-10 tablet:mb-0"
      >
        We would love to hear from you!
      </h3>
    </div>
    <div
      class="p-10 tablet:border-y border-b border-x tablet:border-l-0 border-r border-purple-700 tablet:rounded-tr-xl rounded-br-xl rounded-bl-xl tablet:rounded-bl-none"
    >
      <form class="flex flex-col gap-5">
        <FormInputGroup class="tablet:text-left text-center">
          <FormLabel id="name" title="Name" />
          <FormInput for="name" />
        </FormInputGroup>
        <FormInputGroup class="tablet:text-left text-center">
          <FormLabel id="email" title="Email Address" />
          <FormInput type="email" for="email" />
        </FormInputGroup>
        <FormInputGroup class="tablet:text-left text-center">
          <FormLabel id="subject" title="Subject" />
          <FormInput for="subject" />
        </FormInputGroup>
        <FormInputGroup class="tablet:text-left text-center">
          <FormLabel id="message" title="Message" />
          <FormTextarea id="message" rows="4" />
        </FormInputGroup>
        <Button>Send Message</Button>
      </form>
    </div>
  </section>
</template>
<style scoped>
.contact-title {
  background-color: #4158d0;
  background-image: linear-gradient(
    152deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
}
</style>
