<template>
  <div class="">
    <div class="w-full rounded-lg">
      <div
        class="flex justify-between w-full items-center bg-white p-4 rounded-t-lg"
      >
        <h1 class="text-[#39404F] font-medium text-2xl">
          Performance Assessment
        </h1>
        <!-- <button
          class="border border-[#CFD0D0] space-x-1 py-1 px-2 flex rounded-xl items-center"
        >
          <p class="text-xs text-[#39404F]">Q1</p>
          <img src="~/assets/images/down_arrow.svg" alt="" />
        </button> -->
      </div>
    </div>
    <div class="w-full rounded-2xl">
      <ButtonSwitch :buttons="tabButtons"></ButtonSwitch>
    </div>
  </div>
</template>
<script setup>
import ButtonSwitch from "../global/ButtonSwitch.vue";
import PeerAssessment from "./PeerAssessment.vue";
import PersonalAssessment from "./PersonalAssessment.vue";
const tabButtons = [
  {
    label: "My Assessment",
    component: PersonalAssessment,
  },
  {
    label: "Peer-to-peer Review",
    component: PeerAssessment,
  },
];
</script>
