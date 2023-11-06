<template>
  <!-- leave progess -->
  <div
    class="bg-white w-full px-20 py-4 rounded-2xl capitalize flex my-5 justify-between items-center"
  >
    <div
      v-for="(statistic, index) in statistics"
      :key="index"
      class="flex space-x-20 items-center justify-center"
    >
      <div class="flex space-x-3">
        <div
          class="w-12 h-12 bg-[#FFFAFF] border border-[#FCF0F5] rounded flex justify-center content-center items-center"
        >
          {{ statistic.value < 10 ? "0" + statistic.value : statistic.value }}
        </div>
        <div class="flex flex-col">
          <p class="text-[#39404F]">{{ statistic.label }}</p>
          <p class="text-[#757C86] text-sm">{{ statistic.unit }}</p>
        </div>
      </div>

      <hr
        v-if="index < statistics.length - 1"
        class="h-[59px] w-[1px] border-0 bg-[#DFE1E4]"
      />
    </div>
  </div>
</template>

<script setup>
const statistics = [
  { label: "Total", value: 0, unit: "days" },
  { label: "Applied", value: 0, unit: "days" },
  { label: "Days", value: 0, unit: "Left" },
  { label: "Rejected", value: 0, unit: "Requests" },
];
</script>
