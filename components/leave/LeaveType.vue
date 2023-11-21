<template>
  <div>
    <Modal :visible="showModal">
      <div
        class="bg-white flex flex-col py-6 px-8 rounded-lg w-[300px] md:w-[500px] lg:w-[400px]"
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
              Add Leave Type
            </h1>
          </div>

          <form @submit.prevent="handleSubmit" class="mt-10">
            <div class="py-3 flex flex-col w-full">
              <label for="">Leave Name *</label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Input Leave Name"
                v-model="leaveName"
                :class="{ 'border border-[#FF4B41]': errors.leaveName }"
                @input="clearError('leaveName')"
              />
              <p v-if="errors.leaveName" class="text-[#FF4B41] text-xs mt-1">
                {{ errors.leaveName }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">Number of Days *</label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Input Number of days"
                v-model="numberOfDays"
                :class="{ 'border border-[#FF4B41]': errors.numberOfDays }"
                @input="clearError('numberOfDays')"
              />
              <p v-if="errors.numberOfDays" class="text-[#FF4B41] text-xs mt-1">
                {{ errors.numberOfDays }}
              </p>
            </div>
            <div class="mt-4 flex flex-col">
              <button
                type="submit"
                class="py-3 rounded-lg flex font-medium px-6 text-white self-end"
                :class="isFormValid ? 'bg-[#E4669E]' : 'bg-[#DFE1E4]'"
              >
                <p>Save</p>
                <img
                  v-if="loading"
                  src="~/assets/images/loading.svg"
                  alt=""
                  class="ml-2 rotating"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
    <InviteSuccess
      :title="'Success'"
      :message="'You’ve successfully created a new leave for employees!'"
      :buttonLink="'/auth/login'"
      :buttonText="'Go To Login'"
      v-if="showLeaveSuccess"
    />
  </div>
</template>

<script setup>
import Modal from "@/components/global/Modal.vue";
import InviteSuccess from "../auth/InviteSuccess.vue";
import OptionsDropdown from "../global/OptionsDropdown.vue";
import LeaveSuccess from "./LeaveSuccess.vue";
import { createLeaveType } from "~/services/leave";
import { ref, onMounted, nextTick, computed } from "vue";

// Data properties
const showModal = ref(true);
const showLeaveSuccess = ref(false);
const errors = ref({});
const loading = ref(false);
const leaveName = ref("");
const numberOfDays = ref(null);

const numbers = ref(Array.from({ length: 60 }, (_, index) => index + 1));

const validateForm = () => {
  errors.value = {};
  if (!leaveName.value.trim()) {
    errors.value.leaveName = "This field is required";
  }
  if (numberOfDays.value === null || !numberOfDays.value.toString().trim()) {
    errors.value.numberOfDays = "This field is required";
  }
  return Object.keys(errors.value).length === 0;
};

const isFormValid = computed(() => {
  return Object.keys(errors.value).length === 0;
});

const clearError = (fieldName) => {
  errors.value[fieldName] = "";
};

const selectLeave = async () => {
  // Prepare leave type data
  const leaveTypeData = {
    leaveType: leaveName.value,
    maximumDays: numberOfDays.value,
  };

  try {
    loading.value = true;
    // Call the createLeaveType function
    const response = await createLeaveType(leaveTypeData);

    // Check if the request was successful
    if (!response.error) {
      // Handle success, for example, show a success message or redirect
      console.log("Leave type created successfully:", response);

      // Inside the selectLeave function
      showModal.value = false;
      showLeaveSuccess.value = true;
      // $emit("close");
    } else {
      // Handle error, for example, show an error message
      console.error("Error creating leave type:", response.error);
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Unexpected error:", error);
  } finally {
    loading.value = false;
  }
};

const handleSubmit = () => {
  if (validateForm()) {
    selectLeave();
  }
};
</script>
