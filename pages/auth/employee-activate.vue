<template>
  <div class="py-10 xl:pl-28 lg:pl-20 bg-[#FFF] px-6 lg:px-0">
    <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
    <div class="mt-28">
      <h1 class="text-2xl text-[#182233] font-semibold">Activate account</h1>
      <p class="text-[#585E6C]">
        Welcome, enter the 6 digit code sent to your email.
      </p>
    </div>
    <form action="" class="my-3 mt-16 text-[#39404F]">
      <div class="flex justify-between md:mr-40">
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
      <div class="mt-16">
        <nuxt-link to="/auth/employee-signup">
          <button
            type="submit"
            class="py-4 rounded-lg font-medium px-16 bg-[#DFE1E4] text-white"
          >
            Activate
          </button>
        </nuxt-link>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
  layout: "authsignup",
});
</script>
