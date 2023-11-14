<template>
  <div>
    <div class="flex justify-between">
      <Title title="Performance Management" />
      <button
        class="border border-[#CFD0D0] space-x-1 py-2 px-3 flex rounded-xl items-center"
      >
        <img src="~/assets/images/calender.svg" alt="" />
        <p class="text-xs text-[#39404F]">2023</p>
        <img src="~/assets/images/down_arrow.svg" alt="" />
      </button>
    </div>

    <div class="md:flex md:justify-between md:space-x-4 py-6">
      <PerformanceRate />
      <PerformanceMetrics />
    </div>
    <PerformanceAssessment />
  </div>
</template>

<script setup>
import Title from "@/components/layout/Title.vue";
import PerformanceRate from "../../../components/performance-management/PerformanceRate.vue";
import PerformanceMetrics from "../../../components/performance-management/PerformanceMetrics.vue";
import PerformanceAssessment from "../../../components/performance-management/PerformanceAssessment.vue";
</script>
