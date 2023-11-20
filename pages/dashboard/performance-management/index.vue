<template>
  <div>
    <div class="flex justify-between">
      <Title title="Performance Management" />
      <button
        v-if="loginUser.loginType === 'Employee'"
        class="border border-[#CFD0D0] space-x-1 py-2 px-3 flex rounded-xl items-center"
      >
        <img src="~/assets/images/calender.svg" alt="" />
        <p class="text-xs text-[#39404F]">2023</p>
        <img src="~/assets/images/down_arrow.svg" alt="" />
      </button>
      <button
        v-if="loginUser.loginType === 'Company'"
        class="px-3 py-2 font-medium text-white bg-[#E4669E] rounded-xl"
      >
        Create Assessment
      </button>
    </div>

    <div class="md:flex md:justify-between md:space-x-4 py-6">
      <PerformanceRate v-if="loginUser.loginType === 'Employee'" />
      <EmployeeMetrics v-else />
      <PerformanceMetrics />
    </div>
    <PerformanceAssessment v-if="loginUser.loginType === 'Employee'" />
    <PerformanceList v-else />
  </div>
</template>

<script setup>
import Title from "@/components/layout/Title.vue";
import PerformanceRate from "../../../components/performance-management/PerformanceRate.vue";
import PerformanceMetrics from "../../../components/performance-management/PerformanceMetrics.vue";
import PerformanceAssessment from "../../../components/performance-management/PerformanceAssessment.vue";
import { useLoginUser } from "~/store/auth";
import EmployeeMetrics from "../../../components/performance-management/EmployeeMetrics.vue";
import PerformanceList from "../../../components/performance-management/PerformanceList.vue";

const loginUser = useLoginUser();
</script>
