<template>
  <div class="py-10 pl-20 bg-[#fff]">
    <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
    <LayoutProgressBar />
    <div>
      <h1 class="text-2xl text-[#182233] font-semibold">Email verification</h1>
      <p class="text-[#585E6C]">
        Enter the 6 digit sent to
        <span class="text-[#182233]">hrx@hrx.co</span>
      </p>
    </div>
    <form action="" class="my-3 mt-16 text-[#39404F]">
      <div class="flex justify-between mr-40">
        <input
          type="text"
          class="bg-[#F7F8FA] flex text-center px-4 py-4 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
          maxlength="1"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] flex text-center px-4 py-4 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
          maxlength="1"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] flex text-center px-4 py-4 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
          maxlength="1"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] flex text-center px-4 py-4 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
          maxlength="1"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] flex text-center px-4 py-4 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
          maxlength="1"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] flex text-center px-4 py-4 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
          maxlength="1"
        />
      </div>
      <p class="text-[#E4669E] font-medium mt-16">Resend code</p>
      <div class="mt-4">
        <button
          type="submit"
          class="py-4 rounded-lg font-medium px-16 bg-[#DFE1E4] text-white"
        >
          Verify
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
  layout: "auth",
});
</script>
