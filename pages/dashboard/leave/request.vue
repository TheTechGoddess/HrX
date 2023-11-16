<template>
  <div>
    <LeaveHeader />
    <div>
      <!-- leave application -->
      <div class="bg-white w-full p-4 rounded-2xl mb-8">
        <p class="text-2xl txt-[#39404F]">Leave Application</p>
        <div class="flex flex-col justify-center content-center px-10 lg:px-48">
          <form
            action=""
            @submit.prevent="handleSubmit"
            class="my-3 text-[#39404F] lg:mr-40 flex flex-col w-full justify-center items-center placeholder:text-[#CFD0D0]"
          >
            <div class="py-3 flex flex-col w-full">
              <label for="">Leave Type <span class="text-error">*</span></label>
              <OptionsDropdown
                type="text"
                class=""
                placeholder="Days"
                v-model="leaveType"
                :options="myItemList"
                :class="{ 'border border-error rounded-lg': errors.leaveType }"
                @input="clearError('leaveType')"
              >
              </OptionsDropdown>
              <p v-if="errors.leaveType" class="text-error text-xs mt-1">
                {{ errors.leaveType }}
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
            <div class="py-3 flex flex-col w-full">
              <label for="">Reliever <span class="text-error">*</span></label>
              <OptionsDropdown
                type="text"
                class=""
                placeholder="Reliever"
                v-model="reliever"
                :options="employeeList"
                :class="{ 'border border-error rounded-lg': errors.reliever }"
                @input="clearError('reliever')"
              ></OptionsDropdown>
              <p v-if="errors.reliever" class="text-error text-xs mt-1">
                {{ errors.reliever }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for=""> Reason <span class="text-error">*</span></label>
              <textarea
                placeholder="Tell us why"
                cols="30"
                rows="5"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                v-model="reason"
                :class="{ 'border border-error': errors.reason }"
                @input="clearError('reason')"
              ></textarea>
              <p v-if="errors.reason" class="text-error text-xs mt-1">
                {{ errors.reason }}
              </p>
              <p v-if="errors.backendError" class="text-error text-xs mt-1">
                {{ errors.backendError }}
              </p>
            </div>

            <div class="mt-20 flex space-x-4">
              <nuxt-link to="/dashboard/leave">
                <button
                  class="border border-[#585E6C] px-4 py-2.5 font-medium text-[#585E6C] rounded-xl"
                >
                  Cancel
                </button></nuxt-link
              >

              <button
                type="submit"
                class="py-3 rounded-lg flex font-medium px-4 text-white self-end"
                :class="isFormValid ? 'bg-[#E4669E]' : 'bg-[#DFE1E4]'"
              >
                <p>Request Leave</p>
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
    </div>
    <InviteSuccess
      :title="'Successful!'"
      :message="'You’ve successfully applied for an annual leave. Your HR will contact you for next steps'"
      :buttonLink="'/dashboard/leave'"
      :buttonText="'Go Back'"
      v-if="showInviteSuccess"
    />
  </div>
</template>

<script setup>
import InviteSuccess from "@/components/auth/InviteSuccess.vue";
import LeaveHeader from "../../../components/leave/LeaveHeader.vue";
import OptionsDropdown from "../../../components/global/OptionsDropdown.vue";
import { getLeaveTypes, createLeave } from "~/services/leave";
import { getEmployeesEmployee } from "~/services/employee";

const showInviteSuccess = ref(false);
const errors = ref({
  backendError: "",
});
const loading = ref(false);
const leaveType = ref("");
const reliever = ref("");
const reason = ref("");
const fromDay = ref("");
const fromMonth = ref("");
const fromYear = ref("");
const toDay = ref("");
const toMonth = ref("");
const toYear = ref("");
const myItemList = ref([]);
const employeeList = ref([]);

const fetchLeaveTypes = async () => {
  try {
    const leaveTypesResponse = await getLeaveTypes();

    if (leaveTypesResponse.success) {
      myItemList.value = leaveTypesResponse.data.map((item) => item.leaveType);
    } else {
      console.error("Error fetching leave types:", leaveTypesResponse.msg);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

const fetchEmployees = async () => {
  try {
    const employeeResponse = await getEmployeesEmployee();

    if (employeeResponse.success) {
      const emails = employeeResponse.data.map((employee) => employee.fullName);
      employeeList.value = emails;
    } else {
      console.error("Error fetching employees:", employeeResponse.msg);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

const submit = async () => {
  try {
    loading.value = true;

    // Convert month names to numbers
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

    const leaveData = {
      leaveType: leaveType.value,
      relieverName: reliever.value,
      reason: reason.value,
      startDate: startDate,
      endDate: endDate,
    };

    // Call the createEvent service
    const response = await createLeave(leaveData);

    // Check the response and handle accordingly
    if (!response.error) {
      // Optionally handle success (e.g., show a success message)
      console.log("success");
      showInviteSuccess.value = true;
    } else {
      console.error(response.error);
      if (response.error) {
        // Update errors object with backend error
        errors.value.backendError = response.error;
      }
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("An unexpected error occurred:", error);
  } finally {
    loading.value = false;
  }
};

const validateForm = () => {
  errors.value = {};
  if (!leaveType.value.trim()) {
    errors.value.leaveType = "required.";
  }
  if (!reliever.value.trim()) {
    errors.value.reliever = "required.";
  }
  if (!reason.value.trim()) {
    errors.value.reason = "required.";
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

// const dayOptions = ['Male', 'Female']

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

const handleSubmit = () => {
  if (validateForm()) {
    submit();
  }
};

onMounted(() => {
  fetchLeaveTypes();
  fetchEmployees();
});
</script>
