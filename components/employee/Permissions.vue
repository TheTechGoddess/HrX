<template>
  <div>
    <div class="flex">
      <div class="w-full">
        <div class="w-full">
          <div class="flex justify-between items-center">
            <h1 class="text-lg text-[#39404F] font-medium mb-4">
              User permission
            </h1>
            <div class="flex space-x-3 -mt-5.5">
              <button
                class="border border-[#FF4B41] text-[#FF4B41] px-3 py-1.5 rounded-lg font-medium"
                @click="deactivateInit(employeeId)"
              >
                Deactivate user
              </button>
              <button
                class="font-medium bg-[#E4669E] text-white px-3 py-2 rounded-lg"
              >
                Change role
              </button>
            </div>
          </div>
        </div>
        <div class="w-full my-8 bg-white shadow-2xl rounded-lg">
          <div
            v-for="(item, index) in filteredMenuItems"
            :key="index"
            class="w-full border-b border-deactivated"
          >
            <p class="text-header py-6 px-6">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="deactivateModal">
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
                Deactivate User
              </h1>
            </div>

            <form @submit.prevent="handleSubmit" class="mt-6">
              <p class="text-sm text-bodytext">
                Deactivating
                <span class="text-header font-medium">{{
                  employeeData.email
                }}</span>
                will revoke their access to the platform, are you sure?
              </p>
              <div v-if="errorMessage" class="">
                <p class="text-red-500">{{ errorMessage }}</p>
              </div>
              <div class="flex justify-end mt-10">
                <button
                  type="submit"
                  class="py-4 rounded-lg font-medium px-10 bg-error text-white"
                >
                  Deactivate User
                </button>
              </div>
            </form>
          </div>
          <InviteSuccess
            :title="'Success'"
            :message="'You’ve successfully deactivated this employee'"
            :buttonLink="'/dashboard/employee-management'"
            :buttonText="'Done'"
            v-if="showSuccess"
          />
        </div>
      </Modal>
    </div>
  </div>
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
import { ref, computed } from "vue";
import { getEmployeeHr, deactivateEmployeeHR } from "~/services/employee";
const loginUser = useLoginUser();
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const employeeId = route.params.id;
const menuItems = [
  "Dashboard",
  "Reward and Recognition",
  "Wellness Program",
  "Leave Management",
  "Profile",
  "Organization Details",
];
const employeeData = ref(null);
const deactivateModal = ref(false);
const showSuccess = ref(false);
let idToDeactivate = null;
const errorMessage = ref(null);

const deactivateInit = (employeesId) => {
  idToDeactivate = employeesId;
  deactivateModal.value = true;
};

const handleSubmit = async () => {
  if (idToDeactivate) {
    try {
      const result = await deactivateEmployeeHR(idToDeactivate); // Call deactivate function

      if (result.error) {
        errorMessage.value = result.error; // Set the error message
        console.error("Error deactivating employee HR:", result.error);
        // Handle error state or display a message to the user
      } else if (result.success) {
        console.log("Employee HR status deactivated successfully!");
        // Handle success state or notify the user
        showSuccess.value = true;
        deactivateModal.value = false;
      }
    } catch (error) {
      errorMessage.value = "An unexpected error occurred.";
      console.error("Error deactivating employee HR:", error);
      // Handle any unexpected errors during the deactivation process
    }
  }
};

const filteredMenuItems = computed(() => {
  if (loginUser.loginType === "Employee") {
    return menuItems.filter((item) => item !== "Organization Details");
  }
  return menuItems;
});

async function fetchEmployeeHRData() {
  try {
    const result = await getEmployeeHr(employeeId);

    if (result.error) {
      console.error("Error fetching employee HR:", result.error);
      // Handle error state or display a message to the user
    } else {
      employeeData.value = result.data; // Update the employee data
    }
  } catch (error) {
    console.error("Error fetching employee HR:", error);
    // Handle any unexpected errors during the fetch
  }
}

onMounted(() => {
  fetchEmployeeHRData();
});
</script>
