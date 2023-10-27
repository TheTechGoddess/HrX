<template>
  <div class="py-10 pl-20 bg-[#fff]">
    <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
    <LayoutProgressBar />
    <div>
      <h1 class="text-2xl text-[#182233] font-semibold">Select a plan</h1>
      <p class="text-[#585E6C]">
        Select the right plan for your company and start
      </p>
    </div>
    <!-- plans -->
    <div class="my-10 mr-36">
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="flex justify-between w-full border-2 custom-border cursor-pointer px-6 py-3 my-8 shadow-2xl rounded-lg"
        @click="selectPlan(plan)"
      >
        <div>
          <h1 class="text-[#182233] font-semibold text-lg">{{ plan.name }}</h1>
          <p class="text-[#757C86] tiny mt-2">includes</p>
          <p class="text-xs text-[#585E6C] my-1.5">
            Onboard
            <span class="text-[#182233]"
              >{{ plan.minEmployees }}-{{ plan.maxEmployees }}</span
            >
            employees
          </p>
          <p class="text-xs text-[#585E6C] my-1.5">
            <span class="text-[#182233]">{{ plan.analyticsCount }}</span>
            analytics monthly
          </p>
        </div>
        <div>
          <img :src="plan.image" :alt="plan.name" class="free" />
          <p
            class="text-lg font-medium"
            :class="plan.price === 0 ? 'free-text' : 'pay-text'"
          >
            {{ plan.price === 0 ? "Free" : "$" + plan.price + "/m" }}
          </p>
          <p class="text-[#E4669E] font-medium mt-40">Select plan</p>
        </div>
      </div>
    </div>
    <invite-employees v-if="showInviteModal" @close="closeInviteModal" />
    <InviteSuccess v-if="showInviteSuccess" />
  </div>
</template>
<script setup>
import InviteEmployees from "@/components/auth/InviteEmployees.vue";
import InviteSuccess from "@/components/auth/InviteSuccess.vue";
import free from "~/assets/images/free.svg";
import purple from "~/assets/images/purple.svg";
import blue from "~/assets/images/blue.svg";
import { ref } from "vue";
definePageMeta({
  layout: "authsignup",
});
const showInviteModal = ref(false);
const showInviteSuccess = ref(true);

const plans = ref([
  {
    id: 1,
    name: "Early stage",
    minEmployees: 1,
    maxEmployees: 20,
    analyticsCount: 20,
    image: free,
    price: 0,
  },
  {
    id: 2,
    name: "Startup",
    minEmployees: 21,
    maxEmployees: 50,
    analyticsCount: 50,
    image: purple,
    price: 100,
  },
  {
    id: 3,
    name: "Growth",
    minEmployees: 51,
    maxEmployees: Infinity,
    analyticsCount: "all",
    image: blue,
    price: 300,
  },
]);
const selectPlan = (plan) => {
  localStorage.setItem("selectedPlanName", plan.name);
  localStorage.setItem("selectedPlanMaxEmployees", plan.maxEmployees);
  showInviteModal.value = true;
};
const closeInviteModal = () => {
  showInviteModal.value = false;
  showInviteSuccess.value = true;
};
</script>
<style scoped>
.custom-border {
  border: 2px solid rgba(228, 102, 158, 0.1); /* Replace with your own color and opacity values */
}
.tiny {
  font-size: 10px;
}
.free {
  margin-top: -24px;
}
.free-text {
  margin-top: -55px;
  margin-left: 22px;
}
.pay-text {
  margin-top: -55px;
  margin-left: 8px;
}
.mt-40 {
  margin-top: 54px;
}
</style>
