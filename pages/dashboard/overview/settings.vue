<template>
  <div class="w-full h-full">
    <nuxt-link to="/dashboard/overview"
      ><div class="flex space-x-1 mb-3 items-center">
        <img
          src="~/assets/images/arrow-bck.svg"
          alt=""
          class="px-2 cursor-pointer"
        />
        <p class="text-primary font-medium text-lg">Back</p>
      </div></nuxt-link
    >

    <Title v-if="loginUser.loginType === 'Employee'" title="Information" />
    <Title v-else title="Company" />
    <div class="md:flex w-full p-6 bg-white my-4 rounded-lg h-full">
      <div class="flex">
        <div
          v-if="loginUser.loginType === 'Employee'"
          class="flex flex-col w-full self-center md:self-start space-y-5 text-center"
        >
          <div v-if="employeeData" class="relative self-center">
            <img
              :src="employeeData.displayPicture"
              alt=""
              class="px-2 cursor-pointer rounded-2xl w-52 h-40"
            />
            <img
              src="~/assets/images/camera.svg"
              alt=""
              class="px-2 cursor-pointer absolute bottom-2 left-16"
            />
          </div>

          <img
            v-else
            src="~/assets/images/profile_img.svg"
            alt=""
            class="px-2 cursor-pointer"
          />

          <p
            v-if="employeeData && employeeData.role"
            class="text-xl font-medium text-header"
          >
            {{ employeeData.role }}
          </p>
          <div
            v-if="employeeData && employeeData.status"
            class="w-[110px] py-1 flex self-center text-xs justify-center rounded-2xl space-x-2"
            :class="{
              'text-[#769BAE] bg-[#769BAE] bg-opacity-10':
                employeeData.status === 'Invited',
              'text-[#058836] bg-[#058836] bg-opacity-10':
                employeeData.status === 'Active',
              'text-[#CFD0D0] bg-[#CFD0D0] bg-opacity-10':
                employeeData.status === 'Deactivated',
              'text-[#F6AF45] bg-[#F6AF45] bg-opacity-10':
                employeeData.status === 'Leave',
            }"
          >
            <div
              class="w-2 h-2 rounded-full mt-1"
              :class="{
                'bg-[#769BAE]': employeeData.status === 'Invited',
                'bg-[#058836]': employeeData.status === 'Active',
                'bg-[#CFD0D0]': employeeData.status === 'Deactivated',
                'bg-[#F6AF45]': employeeData.status === 'Leave',
              }"
            ></div>
            <p>
              {{
                employeeData.status === "Invited"
                  ? "Onboarding"
                  : employeeData.status === "Deactivated"
                  ? "Exited"
                  : employeeData.status === "Leave"
                  ? "On Leave"
                  : employeeData.status
              }}
            </p>
          </div>
          <p class="text-bodytext">
            date joined:
            <span
              v-if="employeeData && employeeData.createdAt"
              class="text-header"
              >{{ formatDate(employeeData.createdAt) }}</span
            >
          </p>
        </div>
        <div
          v-else
          class="flex flex-col w-full self-center md:self-start space-y-5 text-center"
        >
          <div
            v-if="employeeDataHr && employeeDataHr.logo"
            class="relative self-center"
          >
            <img
              :src="employeeDataHr.logo"
              alt=""
              class="px-2 cursor-pointer rounded-full w-52 h-40"
            />
            <img
              src="~/assets/images/camera.svg"
              alt=""
              class="px-2 cursor-pointer absolute bottom-2 left-16"
            />
          </div>

          <img
            v-else
            src="~/assets/images/profile_img.svg"
            alt=""
            class="px-2 cursor-pointer"
          />

          <p
            v-if="employeeDataHr && employeeDataHr.companyName"
            class="text-xl font-medium text-header"
          >
            {{ employeeDataHr.companyName }}
          </p>
          <div
            class="w-[90px] py-1 flex justify-center self-center rounded-2xl space-x-2 text-xs text-[#058836] bg-[#058836] bg-opacity-10"
          >
            <div class="w-2 h-2 rounded-full mt-1 bg-[#058836]"></div>
            <p>Active</p>
          </div>
          <p class="text-bodytext">
            date joined:
            <span
              v-if="employeeDataHr && employeeDataHr.createdAt"
              class="text-header"
              >{{ formatDate(employeeDataHr.createdAt) }}</span
            >
          </p>
        </div>
      </div>
      <div class="w-[1px] bg-[#ECEDEF] mt-8 mx-4"></div>
      <div class="w-full">
        <PersonalSettings v-if="loginUser.loginType === 'Employee'" />
        <CompanySettings v-else />
      </div>
    </div>
  </div>
</template>
<script setup>
import CompanySettings from "../../../components/overview/CompanySettings.vue";
import PersonalSettings from "../../../components/overview/PersonalSettings.vue";
import { getMe, getCompany } from "~/services/employee";
import Title from "@/components/layout/Title.vue";
import { useLoginUser } from "~/store/auth";
const loginUser = useLoginUser();
const employeeData = ref(null);
const employeeDataHr = ref(null);

async function fetchEmployeeHRData() {
  try {
    const result = await getMe();

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
async function fetchHRHRData() {
  try {
    const result = await getCompany();

    if (result.error) {
      console.error("Error fetching employee HR:", result.error);
      // Handle error state or display a message to the user
    } else {
      employeeDataHr.value = result.data; // Update the employee data
    }
  } catch (error) {
    console.error("Error fetching employee HR:", error);
    // Handle any unexpected errors during the fetch
  }
}

const formatDate = (inputDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", options);
};

onMounted(() => {
  fetchEmployeeHRData();
  fetchHRHRData();
});
</script>
