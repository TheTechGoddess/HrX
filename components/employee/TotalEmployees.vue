<template>
  <div class="bg-white w-full rounded-lg p-4">
    <h1 class="text-[#39404F] text-lg font-semibold">
      Total Employees - {{ totalEmployees }}
    </h1>
    <div class="my-6 relative flex space-x-16">
      <div class="elem" :style="conicGradientStyle"></div>
      <div class="text-[#585E6C] text-sm space-y-3">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#4ea45a] mt-1"></div>
          <p>Active - {{ activeEmployees }} ({{ activePercentage }}%)</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#f6af45] mt-1"></div>
          <p>On leave - {{ leaveEmployees }} ({{ leavePercentage }}%)</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#a9def9] mt-1"></div>
          <p>
            Onboarding - {{ onboardingEmployees }} ({{ onboardingPercentage }}%)
          </p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#f7fafc] mt-1"></div>
          <p>
            Deactivated - {{ deactivatedEmployees }} ({{
              deactivatedPercentage
            }}%)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { getEmployeeStatus } from "~/services/employee";

const statusData = ref(null);

onMounted(async () => {
  const response = await getEmployeeStatus();
  statusData.value = response.success ? response.data.status : null;
});

const calculatePercentage = (value, total) => {
  return total !== 0 ? ((value / total) * 100).toFixed(2) : 0;
};

const totalEmployees = computed(() =>
  statusData.value ? statusData.value.total : 0
);
const activeEmployees = computed(() =>
  statusData.value ? statusData.value.active : 0
);
const leaveEmployees = computed(() =>
  statusData.value ? statusData.value.leave : 0
);
const onboardingEmployees = computed(() =>
  statusData.value ? statusData.value.onboarding : 0
);
const deactivatedEmployees = computed(() =>
  statusData.value ? statusData.value.deactivated : 0
);

const activePercentage = computed(() =>
  calculatePercentage(activeEmployees.value, totalEmployees.value)
);
const leavePercentage = computed(() =>
  calculatePercentage(leaveEmployees.value, totalEmployees.value)
);
const onboardingPercentage = computed(() =>
  calculatePercentage(onboardingEmployees.value, totalEmployees.value)
);
const deactivatedPercentage = computed(() =>
  calculatePercentage(deactivatedEmployees.value, totalEmployees.value)
);

const conicGradientStyle = computed(() => {
  const activePercentageValue = parseFloat(activePercentage.value);
  const onboardingPercentageValue = parseFloat(onboardingPercentage.value);
  const leavePercentageValue = parseFloat(leavePercentage.value);
  const deactivatedPercentageValue = parseFloat(deactivatedPercentage.value);

  return {
    background: `conic-gradient(
      #4ea45a 0% ${activePercentageValue}%,
      #a9def9 ${activePercentageValue}% ${
      activePercentageValue + onboardingPercentageValue
    }%,
      #f6af45 ${activePercentageValue + onboardingPercentageValue}% ${
      activePercentageValue + onboardingPercentageValue + leavePercentageValue
    }%,
      #f7fafc ${
        activePercentageValue + onboardingPercentageValue + leavePercentageValue
      }% ${
      activePercentageValue +
      onboardingPercentageValue +
      leavePercentageValue +
      deactivatedPercentageValue
    }%,
      #4ea45a ${
        activePercentageValue +
        onboardingPercentageValue +
        leavePercentageValue +
        deactivatedPercentageValue
      }% 100%
    )`,
  };
});
</script>

<style scoped>
/* Your existing styles remain unchanged */
.elem {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
