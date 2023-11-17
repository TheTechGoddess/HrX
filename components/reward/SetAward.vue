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

          <form @submit.prawardName="handleSubmit" class="mt-10">
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
                v-model="shortDescription"
                :class="{ 'border border-error': errors.shortDescription }"
                @input="clearError('leaveName')"
              />
              <p v-if="errors.shortDescription" class="text-error text-xs mt-1">
                {{ errors.shortDescription }}
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
                  v-model="Nomination"
                  :options="dayOptions"
                  :class="{
                    'border border-error rounded-lg': errors.Nomination,
                  }"
                  @input="clearError('Nomination')"
                >
                </OptionsDropdown>

                <OptionsDropdown
                  type="text"
                  class=""
                  :placeholder="'Voting '"
                  v-model="voting"
                  :options="monthOptions"
                  :class="{
                    'border border-error rounded-lg': errors.voting,
                  }"
                  @input="clearError('voting')"
                >
                </OptionsDropdown>
              </div>
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
  </div>
</template>

<script setup>
import Modal from "@/components/global/Modal.vue";
import OptionsDropdown from "../global/OptionsDropdown.vue";
// import { createawardName } from "~/services/wellness";
import { ref, onMounted, nextTick, computed } from "vue";

// Data properties
const showModal = ref(false);
const showLeaveSuccess = ref(false);
const errors = ref({});
const loading = ref(false);
const awardName = ref("");
const awardPoint = ref("");
const shortDescription = ref("");
const reward = ref("");
const description = ref("");
const Nomination = ref("");
const voting = ref("");
const fromYear = ref("");
const toDay = ref("");
const toMonth = ref("");
const toYear = ref("");
const logoFile = ref(null);
const logoPreview = ref(null);
const companyLogo = ref(null);

const validateForm = () => {
  errors.value = {};
  if (!awardName.value) {
    errors.value.awardName = "required.";
  }
  if (!awardPoint.value.trim()) {
    errors.value.awardPoint = "required.";
  }
  if (!shortDescription.value.trim()) {
    errors.value.shortDescription = "required.";
  }
  if (!reward.value.trim()) {
    errors.value.reward = "required.";
  }
  if (!description.value.trim()) {
    errors.value.description = "required.";
  }
  if (!companyLogo.value) {
    errors.value.companyLogo = "required.";
  }
  if (!Nomination.value && Nomination.value !== "") {
    errors.value.Nomination = "required.";
  }
  if (!voting.value && voting.value !== "") {
    errors.value.Nomination = "required.";
  }
  if (!fromYear.value && fromYear.value !== "") {
    errors.value.Nomination = "required.";
  }
  if (!toDay.value && toDay.value !== "") {
    errors.value.Nomination = "required.";
  }
  if (!toMonth.value && toMonth.value !== "") {
    errors.value.Nomination = "required.";
  }
  if (!toYear.value && toYear.value !== "") {
    errors.value.Nomination = "required.";
  }

  return Object.keys(errors.value).length === 0;
};

const isFormValid = computed(() => {
  return Object.keys(errors.value).length === 0;
});

const clearError = (fieldName) => {
  errors.value[fieldName] = "";
};

const dayOptions = Array.from({ length: 30 }, (_, index) => index + 1);

const handleSubmit = () => {
  if (validateForm()) {
    submitawardName();
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
