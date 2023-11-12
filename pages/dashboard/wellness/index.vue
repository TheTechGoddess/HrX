<template>
  <div>
    <Title title="Wellness Program" />
    <div v-if="loginUser.loginType === 'Employee'"></div>
    <div v-else class="bg-white w-full px-4 py-8 rounded-2xl my-6">
      <ButtonSwitch :buttons="tabButtons"></ButtonSwitch>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/layout/Title.vue";
import { useLoginUser } from "~/store/auth";
const loginUser = useLoginUser();
import ButtonSwitch from "../../../components/global/ButtonSwitch.vue";
import Events from "../../../components/wellness/Events.vue";
import Training from "../../../components/wellness/Training.vue";

const tabButtons = [
  {
    label: "Events",
    component: Events,
  },
  {
    label: "Training",
    component: Training,
  },
];
</script>
