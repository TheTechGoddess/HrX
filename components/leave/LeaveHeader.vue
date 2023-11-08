<template>
  <div class="flex justify-between items-center">
    <Title title="Leave Management" />
    <button
      v-if="loginUser.loginType === 'Company'"
      class="px-3 py-2 font-medium text-white bg-[#E4669E] rounded-xl"
    >
      Add leave type
    </button>
    <button
      v-else
      class="border border-[#CFD0D0] space-x-2 py-2 px-3 flex rounded-xl items-center"
    >
      <img src="~/assets/images/annual.svg" alt="" />
      <p class="text-xs text-[#39404F]">Annual</p>
      <img src="~/assets/images/down_arrow.svg" alt="" />
    </button>
  </div>
</template>

<script setup>
import Title from "@/components/layout/Title.vue";
import { useLoginUser } from "~/store/auth";
const loginUser = useLoginUser();
</script>
