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
      <h2 class="font-extrabold text-7xl mb-5">SEND US A MESSAGE TODAY</h2>
      <h3 class="font-bold text-3xl">We would love to hear from you!</h3>
    </div>
    <div class="p-10">
      <el-form label-position="top">
        <el-form-item label="Name" class="font-bold" required>
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Email Address" class="font-bold" required>
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="Subject" class="font-bold" required>
          <el-input v-model="form.subject" />
        </el-form-item>
        <el-form-item label="Message" class="font-bold" required>
          <el-input v-model="form.message" />
        </el-form-item>
        <Button>Send Message</Button>
      </el-form>
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
