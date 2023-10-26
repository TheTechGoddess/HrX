<template>
  <div class="relative bg-[url('~/assets/images/auth-bg.svg')] h-full py-5">
    <div
      class="bg-[url('~/assets/images/auth-bg.svg')] fixed border-2 custom-border rounded-lg shadow-2xl mx-16 px-10 mr-20 py-10 flex flex-col justify-center items-center"
    >
      <!-- <h1>{{ sidebarTitle }}</h1>
      <p>{{ sidebarDescription }}</p> -->
      <h1 class="text-3xl text-[#182233] font-semibold">
        Let’s get Started!!!
      </h1>
      <p class="text-[#585E6C] font-medium my-4">
        If you have an account with us already,
        <span class="text-[#E4669E]">Log in</span>
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

<script setup>
// Props for the AuthSidebar
const { sidebarTitle, sidebarDescription, sidebarText } = defineProps({
  sidebarTitle: String,
  sidebarDescription: String,
  sidebarText: String,
});
console.log("sidebarTitle:", sidebarTitle);
console.log("sidebarDescription:", sidebarDescription);
console.log("sidebarText:", sidebarText);
</script>
<style scoped>
.custom-border {
  border: 2px solid rgba(228, 102, 158, 0.1); /* Replace with your own color and opacity values */
}
</style>
