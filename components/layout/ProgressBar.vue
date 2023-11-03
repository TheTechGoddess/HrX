<template>
  <div class="my-8">
    <div class="flex items-center space-x-5">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-center"
      >
        <p class="text-2xl font-semibold text-[#585E6C]">{{ index + 1 }}</p>
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
            'bg-transparent':
              currentRoute !== 'auth/company-signup' && index > 0,
            'bg-[#E4669E]':
              (currentRoute === 'auth/email-verification' && index === 0) ||
              (currentRoute === 'auth/select-plan' && index < 2),
            'border-2': true,
            'border-[#DFE1E4]':
              currentRoute !== 'auth/company-signup' && index > 0,
            'border-[#E4669E]':
              (currentRoute === 'auth/email-verification' && index === 0) ||
              (currentRoute === 'auth/select-plan' && index < 2),
            'rounded-full': true,
          }"
        ></div>
        <!-- Conditionally remove the last <hr> element -->
        <hr
          v-if="index < steps.length - 1"
          :class="{
            'w-32 bg-[#DFE1E4] border': currentRoute !== 'auth/company-signup',
            'w-32 bg-transparent border-[#DFE1E4]':
              currentRoute === 'auth/company-signup',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentRoute = ref(route.name);
const steps = [
  { label: "Company Signup" },
  { label: "Email Verification" },
  { label: "Select Plan" },
];

// Define a mapping of modified route names to active steps
const routeToStepMap = {
  "auth/company-signup": 0,
  "auth/email-verification": 1,
  "auth/select-plan": 2,
};

// Watch for route changes and update the active step accordingly
routeToStepMap.hasOwnProperty(currentRoute.value) &&
  (currentStep.value = routeToStepMap[currentRoute.value]);
</script>
