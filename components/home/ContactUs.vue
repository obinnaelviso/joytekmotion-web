<script lang="ts" setup>
import { object, string } from "yup";
const contactFormSchema = object({
  name: string().required().label("Name"),
  email: string().required().email().label("Email Address"),
  subject: string().required().label("Subject"),
  message: string().required().label("Message"),
});
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(contactFormSchema)
});

type ContactFormErrors = {
  name: string[];
  email: string[];
  subject: string[];
  message: string[];
};

const toast = useToast();
const apiErrors = useState<ContactFormErrors | null>();
const config = useRuntimeConfig();

const onSubmit = handleSubmit(async (values) => {
  apiErrors.value = null;
  const data = await $fetch(`${config.public.apiBase}/contact-us`, {
    method: "POST",
    body: values,
    async onResponse({ response }) {
      if (response.status === 422) {
        apiErrors.value = response._data.errors;
        toast.add({
          title: "Error",
          description: response._data.message,
          color: "red",
          
        });
      }
    },
  });
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
      <form class="flex flex-col gap-5" novalidate @submit="onSubmit">
        <div class="tablet:text-left text-center text-lg">
          <Icon name="uil:whatsapp" class="mb-2 text-green-500" size="48" />
          <div class="font-bold">Say Hi to us on Whatsapp at:</div>
          <TextLink
            :url="config.public.contact.whatsapp"
            :name="config.public.contact.phone"
            target="_blank"
          />
        </div>
        <!-- Name -->
        <FormInput
          for="name"
          name="name"
          label="Full Name"
          :api-error-message="apiErrors?.name ? apiErrors?.name[0] : undefined"
        />
        <!-- Email Address -->
        <FormInput
          type="email"
          for="email"
          name="email"
          label="Email Address"
          :api-error-message="
            apiErrors?.email ? apiErrors?.email[0] : undefined
          "
        />
        <!-- Subject -->
        <FormInput for="subject" name="subject" label="Subject" />
        <!-- Message -->
        <FormTextarea id="message" rows="4" name="message" label="Message" />
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
