<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
  >
    <div v-for="(request, index) in pendingRequests" :key="index">
      <h1
        class="py-2 rounded-t-lg border-t border-x border-x-[#FCF6BD] border-t-[#FCF6BD] bg-[#FEFDF2] text-[#F6AF45] text-center"
      >
        PENDING APPROVAL
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
        class="flex flex-col justify-center px-4 space-y-2 border-t py-4 items-center bg-[#FFFAFFB2] border border-[#FCF0F5]"
      >
        <p class="text-sm text-[#E4669E]">
          {{ calculateDaysLeft(request.startDate, request.endDate) }} days
        </p>
        <p class="text-xs text-[#B2B8BD]">
          {{ calculateLeavePeriod(request.startDate, request.endDate) }}
        </p>
        <div class="h-2 w-full bg-[#ECEDEF] rounded relative">
          <div
            :style="
              'width:' +
              Math.min((request.totalDaysTaken / request.max) * 100, 100) +
              '%'
            "
            class="h-2 bg-[#E4669E] absolute rounded"
          ></div>
        </div>
        <p class="text-[#757C86] text-[10px]">
          {{
            request.daysleft !== null
              ? request.daysleft + " days left"
              : "No days left"
          }}
        </p>
      </div>
      <div class="p-4 border border-[#ECEDEF] rounded-b-lg">
        <p class="text-xs text-[#B2B8BD]">Reason</p>
        <p class="text-sm my-3 text-[#585E6C]">{{ request.reason }}</p>
        <div class="mt-12 space-x-4 justify-center text-center">
          <button
            class="border border-[#FF4B41] text-[#FF4B41] px-3 py-1.5 rounded-lg font-medium"
            @click="rejectRequestInit(request._id)"
          >
            Reject
          </button>
          <button
            class="bg-[#4EA45A] text-white px-3 py-2 rounded-lg font-medium"
            @click="approveRequest(request._id)"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
    <div v-if="rejectModal">
      <Modal :visible="showModal">
        <div
          class="bg-white flex flex-col py-6 px-8 rounded-lg w-[400px] md:w-[500px] lg:w-[650px]"
        >
          <img
            src="~/assets/images/close.svg"
            alt=""
            class="self-end cursor-pointer"
            @click="$emit('close')"
          />
          <div class="mt-2">
            <div class="mr-5">
              <h1 class="text-xl text-[#182233] font-medium mb-2">
                Give a rejection reason
              </h1>
            </div>

            <form @submit.prevent="handleSubmit" class="mt-10">
              <p>Reason *</p>
              <textarea
                v-model="rejectionMessage"
                name="rejectionMessage"
                cols="30"
                rows="5"
                class="border mt-3 w-full border-[#CFD0D0] rounded-lg placeholder:text-[#CFD0D0] px-4 py-3 focus:outline-none"
                :class="{ 'border border-[#FF4B41]': errorMessage }"
                placeholder="Type message here"
              ></textarea>
              <p v-if="errorMessage" class="text-[#FF4B41]">
                {{ errorMessage }}
              </p>
              <div class="flex justify-center mt-6">
                <button
                  type="submit"
                  class="py-4 rounded-lg font-medium px-10 bg-[#E4669E] text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  getHrPendingLeave,
  updateLeaveStatus,
  getLeaveSummary,
} from "~/services/leave";
import Modal from "@/components/global/Modal.vue";

const pendingRequests = ref([]);
let leaveIdToReject = null;
let rejectionMessage = "";
let errorMessage = "";
const rejectModal = ref(false);

const rejectRequestInit = (leaveId) => {
  rejectionMessage = "";
  errorMessage = "";
  // Store leaveId for later use in handleSubmit
  // This will update the local variable leaveId which can be used in the handleSubmit method
  leaveIdToReject = leaveId;
  rejectModal.value = true;
};

const approveRequest = async (leaveId) => {
  try {
    const statusData = {
      status: "Approved",
      comment: "Approved",
    };

    const response = await updateLeaveStatus(leaveId, statusData);

    if (!response.error) {
      // Handle successful approval, e.g., update UI, fetch updated pending requests, etc.
      console.log("Leave request approved successfully:", response);
      fetchPendingRequests(); // Assuming this function fetches updated pending requests
    } else {
      console.error("Error approving leave request:", response.error);
      // Handle error scenario: display an error message, etc.
    }
  } catch (error) {
    console.error("Unexpected error while approving leave request:", error);
    // Handle unexpected errors, if any
  }
};

const handleSubmit = async () => {
  if (!rejectionMessage) {
    errorMessage = "Please provide a rejection reason.";
    return;
  }

  try {
    const statusData = {
      status: "Rejected",
      comment: rejectionMessage,
    };

    const response = await updateLeaveStatus(leaveIdToReject, statusData);

    if (!response.error) {
      console.log("Leave request rejected successfully:", response);
      fetchPendingRequests();
      rejectModal.value = false;
    } else {
      console.error("Error rejecting leave request:", response.error);
    }
  } catch (error) {
    console.error("Unexpected error while rejecting leave request:", error);
  }
};

const fetchPendingRequests = async () => {
  try {
    const pendingResponse = await getHrPendingLeave();

    if (!pendingResponse.error) {
      pendingRequests.value = pendingResponse.data;
    } else {
      console.error("Error fetching leave types:", pendingResponse.error);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

onMounted(fetchPendingRequests);

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
