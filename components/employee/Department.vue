<template>
  <div class="bg-white w-full rounded-lg p-4">
    <h1 class="text-[#39404F] text-lg font-semibold">
      Departments - {{ totalDepartments }}
    </h1>
    <div class="my-6 relative flex space-x-16">
      <div class="elem" :style="conicGradientStyle"></div>
      <div class="text-[#585E6C] text-sm space-y-1.5">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#fcf6bd] mt-1"></div>
          <p>Product - {{ productDepartment }} ({{ productPercentage }}%)</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#a9def9] mt-1"></div>
          <p>
            Engineering - {{ engineeringDepartment }} ({{
              engineeringPercentage
            }}%)
          </p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#e4669e] mt-1"></div>
          <p>Sales - {{ salesDepartment }} ({{ salesPercentage }}%)</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#e0abff] mt-1"></div>
          <p>
            Growth/Strategy - {{ growthDepartment }} ({{ growthPercentage }}%)
          </p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#d0f4de] mt-1"></div>
          <p>
            Marketing - {{ marketingDepartment }} ({{ marketingPercentage }}%)
          </p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#f7fafc] mt-1"></div>
          <p>
            Unidentified - {{ unidentifiedDepartment }} ({{
              unidentifiedPercentage
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

const departmentData = ref(null);

onMounted(async () => {
  const response = await getEmployeeStatus();
  departmentData.value = response.success ? response.data.department : null;
});

const calculatePercentage = (value, total) => {
  return total !== 0 ? ((value / total) * 100).toFixed(2) : 0;
};

const totalDepartments = computed(() =>
  departmentData.value ? departmentData.value.totalDepartment : 0
);
const engineeringDepartment = computed(() =>
  departmentData.value ? departmentData.value.engineering : 0
);
const productDepartment = computed(() =>
  departmentData.value ? departmentData.value.product : 0
);
const salesDepartment = computed(() =>
  departmentData.value ? departmentData.value.sales : 0
);
const growthDepartment = computed(() =>
  departmentData.value ? departmentData.value.growth : 0
);
const unidentifiedDepartment = computed(() =>
  departmentData.value ? departmentData.value.notdefined : 0
);
const marketingDepartment = computed(() =>
  departmentData.value ? departmentData.value.marketing : 0
);

const engineeringPercentage = computed(() =>
  calculatePercentage(engineeringDepartment.value, totalDepartments.value)
);
const productPercentage = computed(() =>
  calculatePercentage(productDepartment.value, totalDepartments.value)
);
const salesPercentage = computed(() =>
  calculatePercentage(salesDepartment.value, totalDepartments.value)
);
const growthPercentage = computed(() =>
  calculatePercentage(growthDepartment.value, totalDepartments.value)
);
const unidentifiedPercentage = computed(() =>
  calculatePercentage(unidentifiedDepartment.value, totalDepartments.value)
);
const marketingPercentage = computed(() =>
  calculatePercentage(marketingDepartment.value, totalDepartments.value)
);

const conicGradientStyle = computed(() => {
  const engineeringPercentageValue = parseFloat(engineeringPercentage.value);
  const productPercentageValue = parseFloat(productPercentage.value);
  const salesPercentageValue = parseFloat(salesPercentage.value);
  const growthPercentageValue = parseFloat(growthPercentage.value);
  const unidentifiedPercentageValue = parseFloat(unidentifiedPercentage.value);
  const marketingPercentageValue = parseFloat(marketingPercentage.value);

  return {
    background: `radial-gradient(
        circle closest-side at 50% 50%,
        white 75%,
        transparent 0%
      ),
      conic-gradient(
        #a9def9 0% ${engineeringPercentageValue}%,
        #fcf6bd ${engineeringPercentageValue}% ${
      engineeringPercentageValue + productPercentageValue
    }%,
        #e4669e ${engineeringPercentageValue + productPercentageValue}% ${
      engineeringPercentageValue + productPercentageValue + salesPercentageValue
    }%,
        #e0abff ${
          engineeringPercentageValue +
          productPercentageValue +
          salesPercentageValue
        }% ${
      engineeringPercentageValue +
      productPercentageValue +
      salesPercentageValue +
      growthPercentageValue
    }%,
    #f7fafc  ${
      engineeringPercentageValue +
      productPercentageValue +
      salesPercentageValue +
      growthPercentageValue
    }% ${
      engineeringPercentageValue +
      productPercentageValue +
      salesPercentageValue +
      growthPercentageValue +
      unidentifiedPercentageValue
    }%,
    #d0f4de ${
      engineeringPercentageValue +
      productPercentageValue +
      salesPercentageValue +
      growthPercentageValue +
      unidentifiedPercentageValue
    }% 100%
      )`,
  };
});
</script>
<style scoped>
.elem {
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
}
</style>
