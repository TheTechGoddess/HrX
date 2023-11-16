<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
  >
    <div v-for="(request, index) in pendingRequests" :key="index">
      <h1
        class="py-2 rounded-t-lg border-t border-x border-x-[#FFC9C6] border-t-[#FFC9C6] bg-[#FFEDEC] text-[#FF4B41] text-center"
      >
        REJECTED
      </h1>
      <div class="bg-white px-4 py-4 border-x border-x-[#ECEDEF]">
        <p class="text-[#39404F] font-medium mb-5">{{ request.leaveType }}</p>
        <div class="flex -mt-1">
          <img
            :src="request.displayPicture"
            alt=""
            class="h-6 w-6 rounded-full"
          />
          <p class="text-sm text-[#585E6C] ml-1.5">
            {{ request.fullName }}
          </p>
          <div class="w-2 h-2 bg-[#757C86] rounded-full mx-3 mt-1.5"></div>
          <p class="text-xs text-[#B2B8BD] mt-0.5">
            sent {{ calculateDaysDifference(request.createdAt) }} days ago
          </p>
        </div>
      </div>
      <div
        class="flex flex-col justify-center px-4 space-y-2 border-t py-4 pb-4 items-center bg-[#FFFAFF] border border-[#FCF0F5]"
      >
        <p class="text-sm text-[#E4669E]">
          {{ calculateDaysLeft(request.startDate, request.endDate) }} days
        </p>
        <p class="text-xs text-[#B2B8BD]">
          {{ calculateLeavePeriod(request.startDate, request.endDate) }}
        </p>
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
import { getHrRejectedLeave } from "~/services/leave";

const pendingRequests = ref([]);

const fetchRejectedRequests = async () => {
  try {
    // Assuming you have a function to get the bearer token

    // Call the service to get leave types
    const pendingResponse = await getHrRejectedLeave();

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

onMounted(fetchRejectedRequests);

const calculateLeavePeriod = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Assuming you want to format the result as "Month Day, Year - Month Day, Year"
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedStartDate = start.toLocaleDateString("en-US", options);
  const formattedEndDate = end.toLocaleDateString("en-US", options);

  return `${formattedStartDate} - ${formattedEndDate}`;
};

const calculateDaysLeft = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds
  const timeDifference = end - start;

  // Convert milliseconds to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};

const calculateDaysDifference = (createdAt) => {
  const requestDate = new Date(createdAt);
  const today = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = today - requestDate;

  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};
</script>
