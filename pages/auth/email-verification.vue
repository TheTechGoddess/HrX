<template>
  <div class="py-10 pl-20 bg-[#fff]">
    <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
    <LayoutProgressBar />
    <div>
      <h1 class="text-2xl text-[#182233] font-semibold">Email verification</h1>
      <p class="text-[#585E6C]">
        Ennter the 6 digit sent to
        <span class="text-[#182233]">hrx@hrx.co</span>
      </p>
    </div>
    <form action="" class="my-3 text-[#39404F] mr-48">
      <div class="flex justify-between py-16">
        <input
          type="text"
          class="bg-[#F7F8FA] px-4 py-4 mt-2 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] px-4 py-4 mt-2 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] px-4 py-4 mt-2 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] px-4 py-4 mt-2 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] px-4 py-4 mt-2 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
        />
        <input
          type="text"
          class="bg-[#F7F8FA] px-4 py-4 mt-2 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
        />
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
