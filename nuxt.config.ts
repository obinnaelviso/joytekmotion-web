// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-swiper", "@vee-validate/nuxt", "@nuxt/ui", "@nuxt/image"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || "JoyTek Motion",
      companyName: process.env.NUXT_PUBLIC_COMPANY_NAME || "JoyTek Motion",
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      contact: {
        whatsapp: process.env.NUXT_PUBLIC_CONTACT_WHATSAPP,
        phone: process.env.NUXT_PUBLIC_CONTACT_PHONE,
        email: process.env.NUXT_PUBLIC_CONTACT_EMAIL
      }
    },
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  colorMode: {
    preference: 'light'
  }
});
