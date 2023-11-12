<template>
  <div class="w-full h-full">
    <Title title="Employee Details" />
    <div class="flex w-full p-6 bg-white my-4 rounded-lg h-full">
      <div class="flex justify-between">
        <div class="flex self-start">
          <img
            src="~/assets/images/profile_img.svg"
            alt=""
            class="px-2 cursor-pointer"
          />
        </div>
      </div>
      <div class="w-[1px] bg-[#ECEDEF] mt-8 mx-4"></div>
      <div class="w-full">
        <ButtonSwitch :buttons="tabButtons"></ButtonSwitch>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/layout/Title.vue";
import ButtonSwitch from "../../../components/global/ButtonSwitch.vue";
import GeneralDetails from "../../../../components/employee/GeneralDetails.vue";
import Permissions from "../../../../components/employee/Permissions.vue";
import ActivityLog from "../../../../components/employee/ActivityLog.vue";

const tabButtons = [
  {
    label: "General Details",
    component: GeneralDetails,
  },
  {
    label: "Permissions",
    component: Permissions,
  },
  {
    label: "Activity Log",
    component: ActivityLog,
  },
];
</script>
