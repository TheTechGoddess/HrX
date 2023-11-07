<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="(request, index) in pendingRequests" :key="index">
      <h1
        class="py-2 rounded-t-lg border-t border-x border-x-[#FFC9C6] border-t-[#FFC9C6] bg-[#FFEDEC] text-[#FF4B41] text-center"
      >
        REJECTED
      </h1>
      <div class="bg-white px-4 py-4 border-x border-x-[#ECEDEF]">
        <p class="text-[#39404F] font-medium mb-5">{{ request.leaveType }}</p>
        <div class="flex -mt-1">
          <img :src="request.employeeImage" alt="" />
          <p class="text-sm text-[#585E6C] ml-1.5">
            {{ request.employeeName }}
          </p>
          <div class="w-2 h-2 bg-[#757C86] rounded-full mx-3 mt-1.5"></div>
          <p class="text-xs text-[#B2B8BD] mt-0.5">{{ request.sentDate }}</p>
        </div>
      </div>
      <div
        class="flex flex-col justify-center px-4 space-y-2 border-t py-4 pb-4 items-center bg-[#FCF0F5] border border-[#ECEDEF]"
      >
        <p class="text-sm text-[#E4669E]">{{ request.daysLeft }} days</p>
        <p class="text-xs text-[#B2B8BD]">{{ request.leavePeriod }}</p>
        <div class="h-2 w-full bg-[#ECEDEF] rounded relative">
          <div
            :style="'width:' + request.progress + '%'"
            class="h-2 bg-[#E4669E] absolute rounded"
          ></div>
        </div>
        <p class="text-[#757C86] text-[10px]">
          {{ request.daysLeft }} days left
        </p>
      </div>
      <div class="p-4 border border-[#ECEDEF] rounded-b-lg">
        <p class="text-xs text-[#B2B8BD]">Reason</p>
        <p class="text-sm my-3 text-[#585E6C]">{{ request.reason }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const pendingRequests = ref([
  {
    leaveType: "Annual leave",
    employeeImage: "~/assets/images/img1.svg",
    employeeName: "Zainab Momo",
    sentDate: "sent 3 days ago",
    daysLeft: 21,
    leavePeriod: "January 15 - January 20, 2023",
    progress: 30,
    reason:
      "My sister’s getting married and I’ve gotta turn up. Prrrrr! YKTVZZ!",
  },
  {
    leaveType: "Annual leave",
    employeeImage: "~/assets/images/img1.svg",
    employeeName: "Zainab Momo",
    sentDate: "sent 3 days ago",
    daysLeft: 21,
    leavePeriod: "January 15 - January 20, 2023",
    progress: 30,
    reason:
      "My sister’s getting married and I’ve gotta turn up. Prrrrr! YKTVZZ!",
  },
  {
    leaveType: "Annual leave",
    employeeImage: "~/assets/images/img1.svg",
    employeeName: "Zainab Momo",
    sentDate: "sent 3 days ago",
    daysLeft: 21,
    leavePeriod: "January 15 - January 20, 2023",
    progress: 30,
    reason:
      "My sister’s getting married and I’ve gotta turn up. Prrrrr! YKTVZZ!",
  },
  {
    leaveType: "Annual leave",
    employeeImage: "~/assets/images/img1.svg",
    employeeName: "Zainab Momo",
    sentDate: "sent 3 days ago",
    daysLeft: 21,
    leavePeriod: "January 15 - January 20, 2023",
    progress: 30,
    reason:
      "My sister’s getting married and I’ve gotta turn up. Prrrrr! YKTVZZ!",
  },
  {
    leaveType: "Annual leave",
    employeeImage: "~/assets/images/img1.svg",
    employeeName: "Zainab Momo",
    sentDate: "sent 3 days ago",
    daysLeft: 21,
    leavePeriod: "January 15 - January 20, 2023",
    progress: 30,
    reason:
      "My sister’s getting married and I’ve gotta turn up. Prrrrr! YKTVZZ!",
  },
]);

const rejectRequest = (index) => {
  // Handle reject action for the request at the given index
  console.log("Request rejected:", pendingRequests.value[index]);
};

const approveRequest = (index) => {
  // Handle approve action for the request at the given index
  console.log("Request approved:", pendingRequests.value[index]);
};
</script>
