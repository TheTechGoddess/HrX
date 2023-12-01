<template>
  <div>
    <Modal :visible="showModal">
      <div
        class="bg-white hide-scrollbar flex flex-col py-6 px-8 rounded-lg w-[300px] overflow-y-auto md:w-[500px] lg:w-[400px]"
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
              Performance Assessment
            </h1>
          </div>

          <form @submit.prevent="handleSubmit" class="mt-10">
            <div class="py-3 flex flex-col w-full">
              <label for=""
                >Select Quarter<span class="text-error">*</span></label
              >
              <OptionsDropdown
                type="text"
                class=""
                placeholder="Select"
                v-model="quaterNumber"
                :options="quarter"
                :class="{
                  'border border-error rounded-lg': errors.quaterNumber,
                }"
                @input="clearError('quaterNumber')"
              ></OptionsDropdown>
              <p v-if="errors.quaterNumber" class="text-error text-xs mt-1">
                {{ errors.quaterNumber }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">Reviewer <span class="text-error">*</span></label>
              <OptionsDropdown
                type="text"
                class=""
                placeholder="Select"
                v-model="reliever"
                :options="listOfEmployees.map((employee) => employee.fullName)"
                :class="{ 'border border-error rounded-lg': errors.reliever }"
                @input="clearError('reliever')"
              ></OptionsDropdown>
              <p v-if="errors.reliever" class="text-error text-xs mt-1">
                {{ errors.reliever }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">From <span class="text-error">*</span></label>
              <div class="flex justify-between space-x-5">
                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Days"
                  v-model="fromDay"
                  :options="dayOptions"
                  :class="{ 'border border-error rounded-lg': errors.fromDay }"
                  @input="clearError('fromDay')"
                >
                </OptionsDropdown>

                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Months"
                  v-model="fromMonth"
                  :options="monthOptions"
                  :class="{
                    'border border-error rounded-lg': errors.fromMonth,
                  }"
                  @input="clearError('fromMonth')"
                >
                </OptionsDropdown>
                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Years"
                  v-model="fromYear"
                  :options="yearOptions"
                  :class="{ 'border border-error rounded-lg': errors.fromYear }"
                  @input="clearError('fromYear')"
                >
                </OptionsDropdown>
              </div>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">To <span class="text-error">*</span></label>
              <div class="flex justify-between space-x-5">
                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Days"
                  v-model="toDay"
                  :options="dayOptions"
                  :class="{ 'border border-error rounded-lg': errors.toDay }"
                  @input="clearError('toDay')"
                >
                </OptionsDropdown>

                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Months"
                  v-model="toMonth"
                  :options="monthOptions"
                  :class="{ 'border border-error rounded-lg': errors.toMonth }"
                  @input="clearError('toMonth')"
                >
                </OptionsDropdown>
                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Years"
                  v-model="toYear"
                  :options="yearOptions"
                  :class="{ 'border border-error rounded-lg': errors.toYear }"
                  @input="clearError('toYear')"
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
                <p>Set Review</p>
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
      :message="'You’ve successfully created an assessment '"
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
import { assignAssessment } from "~/services/performance";
import { getEmployeesHr } from "~/services/employee";
import { ref, onMounted, nextTick, computed, defineProps } from "vue";

// Data properties
const showModal = ref(false);
const errors = ref({});
const loading = ref(false);
const quaterNumber = ref("");
const reliever = ref("");
const fromDay = ref("");
const fromMonth = ref("");
const fromYear = ref("");
const toDay = ref("");
const toMonth = ref("");
const toYear = ref("");
const listOfEmployees = ref([]);
const showSuccess = ref(false);

const quarter = ["Q1", "Q2", "Q3", "Q4"];

const props = defineProps({
  selectedEmployees: {
    type: Array,
    default: () => [],
  },
});

const getUserId = (fullName) => {
  const reliever = listOfEmployees.value.find(
    (employee) => employee.fullName === fullName
  );

  return reliever ? reliever._id : null;
};

const validateForm = () => {
  errors.value = {};
  if (!quaterNumber.value) {
    errors.value.quaterNumber = "required.";
  }
  if (!reliever.value.trim()) {
    errors.value.reliever = "required.";
  }
  if (!fromDay.value && fromDay.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!fromMonth.value && fromMonth.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!fromYear.value && fromYear.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!toDay.value && toDay.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!toMonth.value && toMonth.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!toYear.value && toYear.value !== "") {
    errors.value.fromDay = "required.";
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
  if (validateForm()) {
    submit();
  }
};

const fetchEmployees = async () => {
  try {
    const employeeResponse = await getEmployeesHr();

    if (employeeResponse.success) {
      listOfEmployees.value = employeeResponse.data.docs.map((employee) => ({
        fullName: employee.fullName,
        _id: employee._id,
      }));
    } else {
      console.error("Error fetching employees:", employeeResponse.msg);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

const dayOptions = Array.from({ length: 30 }, (_, index) => index + 1);
const monthOptions = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const yearOptions = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

const submit = async () => {
  loading.value = true;
  try {
    const monthNumberMap = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };

    const startDate = `${fromYear.value}-${monthNumberMap[fromMonth.value]}-${
      fromDay.value
    }`;
    const endDate = `${toYear.value}-${monthNumberMap[toMonth.value]}-${
      toDay.value
    }`;

    const reviewerId = getUserId(reliever.value);

    const assessmentData = {
      reviewer: reviewerId,
      quarter: quaterNumber.value,
      startDate,
      endDate,
      employee: props.selectedEmployees,
    };

    const response = await assignAssessment(assessmentData);
    console.log(assessmentData);
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

onMounted(() => {
  console.log("Selected Employees in Modal:", props.selectedEmployees);
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
