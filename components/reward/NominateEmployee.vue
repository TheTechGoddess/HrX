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
              Nominate Employee
            </h1>
          </div>

          <form @submit.prevent="handleSubmit" class="mt-10">
            <div class="py-3 flex flex-col w-full">
              <label for=""
                >Select Employee <span class="text-error">*</span></label
              >
              <OptionsDropdown
                type="text"
                class="mt-2"
                :placeholder="'Select Employee'"
                v-model="selectedEmployee"
                :options="employeeList.map((employee) => employee.fullName)"
                :class="{
                  'border border-error rounded-lg': errors.selectedEmployee,
                }"
                @input="clearError('selectedEmployee')"
              ></OptionsDropdown>
              <p v-if="errors.selectedEmployee" class="text-error text-xs mt-1">
                {{ errors.selectedEmployee }}
              </p>
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
import { getEmployeesEmployee } from "~/services/employee";
import { nominateForAward } from "@/services/reward"; 
import { ref, onMounted, nextTick, computed, defineProps } from "vue";

// Data properties
const showModal = ref(false);
const showSuccess = ref(false);
const errors = ref({});
const loading = ref(false);
const selectedEmployee = ref("");
const employeeList = ref([]);
const awardsId = ref(null);

const props = defineProps({
  awardsId: String, // Assuming awardsId is a String, adjust the type accordingly
});

console.log("Awards ID1", props.awardsId); // Logging the awardsId

const validateForm = () => {
  errors.value = {};
  if (!selectedEmployee.value && selectedEmployee.value !== "") {
    errors.value.selectedEmployee = "required.";
  }

  return Object.keys(errors.value).length === 0;
};

const isFormValid = computed(() => {
  return Object.keys(errors.value).length === 0;
});

const clearError = (fieldName) => {
  errors.value[fieldName] = "";
};

const handleSubmit = () => {
  console.log("Award ID:", awardsId.value);
  if (validateForm()) {
    submit();
  }
};

const submit = async () => {
  console.log("Award ID2", props.awardsId);
  const nominatedUserId = getNominatedUserId(selectedEmployee.value);
  const nominationData = {
    nominatedUser: nominatedUserId,
    award: props.awardsId,
  };

  loading.value = true;
  const result = await nominateForAward(nominationData);

  loading.value = false;

  if (!result.error) {
    // Handle success, show success message or perform necessary actions
    console.log("Nomination successful:", result);
    // Set showSuccess to true to display the success message/modal
  } else {
    // Handle error case
    console.error("Nomination error:", result.error);
    errors.value.backendError = result.error;
  }
};

const fetchEmployees = async () => {
  try {
    const employeeResponse = await getEmployeesEmployee();

    if (employeeResponse.success) {
      employeeList.value = employeeResponse.data.map((employee) => ({
        fullName: employee.fullName,
        _id: employee._id,
      }));
    } else {
      console.error("Error fetching employees:", employeeResponse.msg);
      errors.value.backendError = employeeResponse.error;
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

const getNominatedUserId = (fullName) => {
  const selectedEmployee = employeeList.value.find(
    (employee) => employee.fullName === fullName
  );

  return selectedEmployee ? selectedEmployee._id : null;
};

onMounted(() => {
  fetchEmployees();
});
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
