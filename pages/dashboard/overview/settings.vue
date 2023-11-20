<template>
  <div class="w-full h-full">
    <nuxt-link to="/dashboard/overview"
      ><div class="flex space-x-1 mb-3 items-center">
        <img
          src="~/assets/images/arrow-bck.svg"
          alt=""
          class="px-2 cursor-pointer"
        />
        <p class="text-primary font-medium text-lg">Back</p>
      </div></nuxt-link
    >

    <Title v-if="loginUser.loginType === 'Employee'" title="Information" />
    <Title v-else title="Company" />
    <div class="flex w-full p-6 bg-white my-4 rounded-lg h-full">
      <div class="flex justify-between">
        <div class="flex self-start">
          <img
            src="~/assets/images/profile_img.svg"
            alt=""
            class="px-2 cursor-pointer"
          />
        </div>
      </div>
      <div class="w-[1px] bg-[#ECEDEF] mt-8 mx-4"></div>
      <div class="w-full">
        <PersonalSettings v-if="loginUser.loginType === 'Employee'" />
        <CompanySettings v-else />
      </div>
    </div>
  </div>
</template>
<script setup>
import CompanySettings from "../../../components/overview/CompanySettings.vue";
import PersonalSettings from "../../../components/overview/PersonalSettings.vue";
import Title from "@/components/layout/Title.vue";
import { useLoginUser } from "~/store/auth";
const loginUser = useLoginUser();
</script>
