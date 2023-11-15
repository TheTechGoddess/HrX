<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
  >
    <div v-for="(request, index) in pendingRequests" :key="index">
      <h1
        class="py-2 rounded-t-lg border-t border-x border-x-[#CAE4CE] border-t-[#CAE4CE] bg-[#EDF6EF] text-[#4EA45A] text-center"
      >
        APPROVED
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
        class="flex flex-col justify-center px-4 space-y-2 border-t py-4 pb-4 items-center bg-[#FFFAFF] border border-[#FCF0F5]"
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
import { ref, onMounted } from "vue";
import { getHrApprovedLeave } from "~/services/leave";

const pendingRequests = ref([]);

const fetchApprovedRequests = async () => {
  try {
    // Assuming you have a function to get the bearer token

    // Call the service to get leave types
    const pendingResponse = await getHrApprovedLeave();

    // Update statistics based on the response
    if (!pendingResponse.error) {
      pendingRequests.value = pendingResponse.data.docs;
      console.log(pendingResponse);
    } else {
      console.error("Error fetching leave types:", pendingResponse.error);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

onMounted(fetchApprovedRequests);
</script>
