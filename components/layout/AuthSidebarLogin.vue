<template>
  <div
    class="bg-[url('~/assets/images/auth-bg.svg')] flex items-center text-center lg:h-screen 2xl:h-full py-6 lg:py-0"
  >
    <div
      class="bg-[url('~/assets/images/auth-bg.svg')] lg:fixed border-2 custom-border rounded-lg xl:ml-8 ml-10 px-10 mr-10 lg:mr-20 lg:w-[40%] py-10 flex flex-col items-center xl:justify-start"
    >
      <!-- <h1>{{ sidebarTitle }}</h1>
        <p>{{ sidebarDescription }}</p> -->
      <h1 class="text-3xl text-[#182233] font-semibold">Welcome!!!</h1>
      <p class="text-[#585E6C] font-medium my-4">
        If you don't have an account with us already,
        <nuxt-link to="/auth/company-signup">
          <span class="text-[#E4669E]">Sign Up</span></nuxt-link
        >
      </p>
      <img src="~/assets/images/hero_image.svg" alt="" class="w-96" />
      <!-- <p class="text-center">{{ sidebarText }}</p> -->
      <p class="text-center text-lg text-[#585E6C] mt-4">
        Empower Your Team, Elevate Success: Building Stronger Bonds, One HR
        Platform at a Time
      </p>
    </div>
  </div>
</template>

<style scoped>
.custom-border {
  border: 2px solid rgba(228, 102, 158, 0.1); /* Replace with your own color and opacity values */
}
</style>
