<template>
  <div class="my-8">
    <div class="flex items-center space-x-5">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-center"
      >
        <p class="text-2xl font-semibold text-[#585E6C]">
          {{ (index + 1).toString().padStart(2, "0") }}
        </p>
        <p class="w-[89px] mx-2 text-sm text-[#757C86]">{{ step.label }}</p>
      </div>
    </div>
    <div class="mt-3 flex">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-center content-center text-center"
      >
        <div
          class="w-6 h-6"
          :class="{
            pink:
              (currentRoute === 'auth-email-verification-id' && index === 0) ||
              (currentRoute === 'auth-select-plan' && index === 0) ||
              (currentRoute === 'auth-select-plan' && index === 1),
            'bg-transparent':
              currentRoute !== 'auth-company-signup' && index > 0,
            'border-2': true,
            'border-[#DFE1E4]':
              currentRoute !== 'auth-company-signup' && index > 0,
            pink:
              (currentRoute === 'auth-email-verification-id' && index === 0) ||
              (currentRoute === 'auth-select-plan' && index < 2),
            'rounded-full': true,
          }"
        ></div>

        <!-- Conditionally remove the last <hr> element -->
        <hr v-if="index < steps.length - 1" :class="hrClass(index)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentStep = ref(0);

const currentRoute = ref(route.name);
console.log(1, currentRoute);
const steps = [
  { label: "Registration of company" },
  { label: "Email Verification" },
  { label: "Selection of plan" },
];

// Define a mapping of modified route names to active steps
const routeToStepMap = {
  "auth-company-signup": 0,
  "auth-email-verification": 1,
  "auth-select-plan": 2,
};

const hrClass = (index) => {
  if (currentRoute.value === "auth-email-verification-id") {
    if (index === 0) {
      return "w-32 border-[#e4669e] border";
    } else if (index === 1) {
      return "w-32 border-[#DFE1E4] border";
    }
  } else if (currentRoute.value === "auth-select-plan") {
    return "w-32 border-[#e4669e] border";
  } else if (currentRoute.value === "auth-company-signup") {
    return "w-32 border-[#DFE1E4] border";
  }
  // Default class when none of the conditions match
  return "";
};
// Watch for route changes and update the active step accordingly
routeToStepMap.hasOwnProperty(currentRoute.value) &&
  (currentStep.value = routeToStepMap[currentRoute.value]);
</script>
<style scoped>
.pink {
  background-color: #e4669e;
  border: none;
}
.pinkborder {
  border-color: #e4669e;
}
</style>
