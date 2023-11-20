<template>
  <div>
    <Modal :visible="showModal">
      <div
        class="bg-white hide-scrollbar flex flex-col py-6 px-8 rounded-lg w-[300px] h-screen overflow-y-auto md:w-[500px] lg:w-[400px]"
      >
        <img
          src="~/assets/images/close.svg"
          alt=""
          class="self-end cursor-pointer"
          @click="$emit('close')"
        />
        <div class="mt-2">
          <div class="mr-5">
            <h1 class="text-xl text-[#182233] font-medium mb-2">Set Award</h1>
          </div>

          <form @submit.prevent="handleSubmit" class="mt-10">
            <div class="py-3 flex flex-col w-full">
              <label for="">Award name <span class="text-error">*</span></label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter award name"
                v-model="awardName"
                :class="{ 'border border-error': errors.awardName }"
                @input="clearError('awardName')"
              />
              <p v-if="errors.awardName" class="text-error text-xs mt-1">
                {{ errors.awardName }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for=""
                >Award point <span class="text-error">*</span></label
              >
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter award point"
                v-model="awardPoint"
                :class="{ 'border border-error': errors.awardPoint }"
                @input="clearError('awardPoint')"
              />
              <p v-if="errors.awardPoint" class="text-error text-xs mt-1">
                {{ errors.awardPoint }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for=""
                >Short description <span class="text-error">*</span></label
              >
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter short description about the award"
                v-model="description"
                :class="{ 'border border-error': errors.description }"
                @input="clearError('leaveName')"
              />
              <p v-if="errors.description" class="text-error text-xs mt-1">
                {{ errors.description }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">Reward <span class="text-error">*</span></label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter"
                v-model="reward"
                :class="{ 'border border-error': errors.reward }"
                @input="clearError('reward')"
              />
              <p v-if="errors.reward" class="text-error text-xs mt-1">
                {{ errors.reward }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for=""
                >Number of employees on voting poll
                <span class="text-error">*</span></label
              >
              <OptionsDropdown
                type="text"
                class=""
                :placeholder="'Select number (max. 5)'"
                v-model="numberOfEmployees"
                :options="employeeList"
                :class="{
                  'border border-error rounded-lg': errors.numberOfEmployees,
                }"
                @input="clearError('numberOfEmployees')"
              ></OptionsDropdown>
              <p
                v-if="errors.numberOfEmployees"
                class="text-error text-xs mt-1"
              >
                {{ errors.numberOfEmployees }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">Set Timer <span class="text-error">*</span></label>
              <div class="flex justify-between space-x-5">
                <OptionsDropdown
                  type="text"
                  class=""
                  :placeholder="'Nominatation'"
                  v-model="nomination"
                  :options="hoursList"
                  :class="{
                    'border border-error rounded-lg': errors.nomination,
                  }"
                  @input="clearError('nomination')"
                >
                </OptionsDropdown>

                <OptionsDropdown
                  type="text"
                  class=""
                  :placeholder="'Voting '"
                  v-model="voting"
                  :options="hoursList"
                  :class="{
                    'border border-error rounded-lg': errors.voting,
                  }"
                  @input="clearError('voting')"
                >
                </OptionsDropdown>
              </div>
            </div>
            <div v-if="errors.backendError" class="text-error text-xs mt-1">
              {{ errors.backendError }}
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
      :message="'You’ve successfully set an award, you will be notified as soon as employees start nominating and voting '"
      :buttonLink="'/auth/login'"
      :buttonText="'Close'"
      v-if="showSuccess"
    />
  </div>
</template>

<script setup>
import Modal from "@/components/global/Modal.vue";
import OptionsDropdown from "../global/OptionsDropdown.vue";
import InviteSuccess from "../auth/InviteSuccess.vue";
import { createAward } from "~/services/reward";
import { ref, onMounted, nextTick, computed } from "vue";

// Data properties
const showModal = ref(false);
const errors = ref({});
const loading = ref(false);
const awardName = ref("");
const awardPoint = ref("");
const numberOfEmployees = ref("");
const reward = ref("");
const description = ref("");
const nomination = ref("");
const voting = ref("");
const showSuccess = ref(false); // Initialize showSuccess as a reactive variable

const validateForm = () => {
  errors.value = {};
  if (!awardName.value) {
    errors.value.awardName = "required.";
  }
  if (!awardPoint.value.trim()) {
    errors.value.awardPoint = "required.";
  }
  if (!reward.value.trim()) {
    errors.value.reward = "required.";
  }
  if (!description.value.trim()) {
    errors.value.description = "required.";
  }
  if (!numberOfEmployees.value && numberOfEmployees.value !== 0) {
    errors.value.numberOfEmployees = "required.";
  } else if (
    isNaN(parseInt(numberOfEmployees.value)) ||
    parseInt(numberOfEmployees.value) <= 0
  ) {
    errors.value.numberOfEmployees =
      "Please enter a valid number of employees.";
  }
  if (!nomination.value && nomination.value !== "") {
    errors.value.nomination = "required.";
  }
  if (!voting.value && voting.value !== "") {
    errors.value.nomination = "required.";
  }

  return Object.keys(errors.value).length === 0;
};

const isFormValid = computed(() => {
  return Object.keys(errors.value).length === 0;
});

const clearError = (fieldName) => {
  errors.value[fieldName] = "";
};

const employeeList = Array.from({ length: 5 }, (_, index) => index + 1);
const hoursList = Array.from({ length: 24 }, (_, index) => {
  const hour = (index < 10 ? "0" : "") + index;
  return `${hour}:00`;
});

const handleSubmit = () => {
  console.log(nomination, voting, 8, description, awardName);
  if (validateForm()) {
    submitawardName();
  }
};

const submitawardName = async () => {
  console.log(nomination, voting, 8, description, awardName);
  loading.value = true;
  try {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    // Construct the endNomination and endVoting values
    const endNomination = `${year}-${month}-${day} ${nomination.value}`;
    const endVoting = `${year}-${month}-${day} ${voting.value}`;

    const awardData = {
      // populate this object with the necessary data for creating the award
      name: awardName.value,
      point: awardPoint.value,
      description: description.value,
      NumberOfEmployee: numberOfEmployees.value,
      reward: reward.value,
      endNomination,
      endVoting,
    };

    const response = await createAward(awardData);

    if (response.error) {
      errors.value.backendError = response.error;
      console.error("Error creating award:", response.error);
    } else {
      // Handle success if the request is successful
      console.log("Award created successfully:", response);
      showSuccess.value = true; // Show the success message
      // $emit("close");
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    // Handle unexpected errors if the request encounters an exception
  } finally {
    loading.value = false; // Reset loading status regardless of success or failure
  }
};
</script>
<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
