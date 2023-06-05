<script lang="ts" setup>
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
</script>
<template>
  <section class="grid grid-cols-2 my-12">
    <div
      class="contact-title flex flex-col justify-center px-10 rounded-tl-xl rounded-bl-xl text-white"
    >
      <h2 class="font-extrabold text-7xl mb-16">SEND US A MESSAGE TODAY</h2>
      <h3 class="font-bold text-3xl">We would love to hear from you!</h3>
    </div>
    <div
      class="p-10 border-y border-r border-purple-700 rounded-tr-xl rounded-br-xl"
    >
      <form class="flex flex-col gap-5">
        <FormInputGroup>
          <FormLabel id="name" title="Name" />
          <FormInput for="name" />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel id="email" title="Email Address" />
          <FormInput type="email" for="email" />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel id="subject" title="Subject" />
          <FormInput for="subject" />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel id="message" title="Message" />
          <FormTextarea id="message" rows="5" />
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
