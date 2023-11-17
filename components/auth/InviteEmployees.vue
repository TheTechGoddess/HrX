<template>
  <div>
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
              Invite Employees
            </h1>
            <p class="text-[#585E6C] lg:w-[550px]">
              Based on the plan you chose ({{ selectedPlanName }}) you can
              {{ inviteMessage }}
              {{ selectedPlanMaxEmployees }}
              employees
            </p>
          </div>

          <form @submit.prevent="inviteEmployeesSubmit" class="mt-10">
            <p>Employee(s)’s work emails</p>
            <textarea
              v-model="emailAddresses"
              name="emailAddresses"
              cols="30"
              rows="5"
              class="border mt-3 w-full border-[#CFD0D0] rounded-lg placeholder:text-[#CFD0D0] px-4 py-3 focus:outline-none"
              :class="{ 'border border-[#FF4B41]': errorMessage }"
              placeholder="Enter employees' active email addresses"
            ></textarea>
            <p v-if="errorMessage" class="text-[#FF4B41]">{{ errorMessage }}</p>
            <div class="flex justify-end mt-6">
              <nuxt-link to="/auth/login">
                <button
                  class="py-4 rounded-lg font-medium px-16 text-[#E4669E]"
                >
                  Skip
                </button></nuxt-link
              >

              <button
                type="submit"
                class="py-4 rounded-lg font-medium px-16 bg-[#E4669E] text-white"
              >
                Invite
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
    <InviteSuccess
      :title="'Success'"
      :message="'All processes have been completed successfully'"
      :buttonLink="'/auth/login'"
      :buttonText="'Go To Login'"
      v-if="showInviteSuccess"
    />
  </div>
</template>

<script setup>
import Modal from "@/components/global/Modal.vue";
import { ref, onMounted, nextTick, computed } from "vue";
import { inviteEmployees } from "~/services/auth";
import InviteSuccess from "@/components/auth/InviteSuccess.vue";

// Data properties
const showModal = ref(false);
const showInviteSuccess = ref(false);
let emailAddresses = "";
let errorMessage = "";

// Computed property
const selectedPlanName =
  localStorage.getItem("selectedPlanName") || "Default Plan";
const selectedPlanMaxEmployees =
  localStorage.getItem("selectedPlanMaxEmployees") || 0;

const inviteMessage = computed(() => {
  if (selectedPlanMaxEmployees === "Infinity") {
    return "";
  } else {
    return "only invite up to";
  }
});

// Methods
const inviteEmployeesSubmit = async () => {
  const emails = emailAddresses
    .split(",")
    .map((email) => email.trim())
    .filter((email) => email !== "");
  console.log(emails);
  if (emails.length === 0) {
    errorMessage = "Please enter at least one email address.";
    console.log(errorMessage);
    return;
  }

  try {
    const response = await inviteEmployees(emails);

    if (response.error) {
      errorMessage = response.error;
    } else {
      showModal.value = false;
      showInviteSuccess.value = true;
    }
  } catch (error) {
    errorMessage = "An unexpected error occurred: " + error;
  }
};
</script>
