<template>
  <div v-if="loginUser.loginType === 'Company'">
    <nuxt-link to="/dashboard/performance-management"
      ><div class="flex space-x-1 mb-3 items-center">
        <img
          src="~/assets/images/arrow-bck.svg"
          alt=""
          class="px-2 cursor-pointer"
        />
        <p class="text-primary font-medium text-lg">Back</p>
      </div></nuxt-link
    >
    <div class="flex justify-between">
      <Title title="Performance Management" />
    </div>

    <div class="md:flex md:justify-between md:space-x-4 py-6">
      <EmployeeMetrics />
      <PerformanceMetrics />
    </div>
    <SinglePerformance />
  </div>
</template>

<script setup>
import Title from "@/components/layout/Title.vue";
import PerformanceMetrics from "../../../components/performance-management/PerformanceMetrics.vue";
import { useLoginUser } from "~/store/auth";
import EmployeeMetrics from "../../../components/performance-management/EmployeeMetrics.vue";
import SinglePerformance from "../../../../components/performance-management/SinglePerformance.vue";

const loginUser = useLoginUser();
</script>
