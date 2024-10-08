import TawkMessengerVue from "@tawk.to/tawk-messenger-vue-3";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV === "production")
    nuxtApp.vueApp.use(TawkMessengerVue, {
      propertyId: "5ead3b4110362a7578be4a46",
      widgetId: "default",
    });
});
