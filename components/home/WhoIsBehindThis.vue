<template>
  <section>
    <SectionTitle>Who Is Behind This</SectionTitle>
    <div class="bg-purple-50 flex flex-col justify-center">
      <!-- Round avatar -->
      <div class="flex tablet:flex-row flex-col justify-center p-10">
        <div class="rounded-full overflow-hidden border-4 border-purple-700 w-28 h-28 m-auto tablet:m-0">
          <NuxtImg
            class="w-full"
            src="https://avatars.githubusercontent.com/u/10047082?v=4"
            alt="Obinna Elvis Avatar"
          />
        </div>
        <!-- Social Media -->
        <div class="flex flex-col justify-center ml-10">
          <h3 class="font-bold text-3xl text-center tablet:text-left">Hi, I'm Obinna</h3>
          <p class="text-xl text-center tablet:text-left">I'm a Full Stack Developer</p>
          <div class="flex tablet:justify-normal justify-center mt-5 gap-3">
            <a
              href="https://github.com/obinnaelviso"
              target="_blank"
              class="text-black"
              ><Icon name="uil:github"
            /></a>
            <a
              href="https://facebook.com/obinnaelviso"
              target="_blank"
              class="text-blue-500"
              ><Icon name="uil:facebook"
            /></a>
            <a
              href="https://twitter.com/obinnaelviso"
              target="_blank"
              class="text-sky-400"
              ><Icon name="uil:twitter"
            /></a>
            <a
              href="https://instagram.com/obinnaelviso"
              target="_blank"
              class="text-red-600"
              ><Icon name="uil:instagram"
            /></a>
            <a
              href="https://linkedin.com/in/obinnaelviso"
              target="_blank"
              class="text-sky-700"
              ><Icon name="uil:linkedin"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
