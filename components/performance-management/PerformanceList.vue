<template>
  <div class="w-full rounded-lg my-4">
    <div class="flex justify-between bg-white p-4 rounded-t-lg">
      <h1 class="text-[#39404F] text-lg font-semibold">Employees</h1>

      <button
        @click="setAssessmentModal"
        class="px-5 py-3 font-medium text-white bg-[#E4669E] rounded-xl"
      >
        Create Assessment
      </button>
    </div>
    <div class="rounded-b-2xl overflow-x-auto">
      <table v-if="employees.length > 0" class="w-full border-collapse">
        <thead class="text-left text-[#757C86] font-medium text-sm">
          <tr class="">
            <th class="py-2 px-8 text-left"></th>
            <th class="pl-4 py-4 px-8">Name</th>
            <th class="px-8">Job Role</th>
            <th class="px-8">Department</th>
            <th class="px-8">Status</th>
            <th class="px-8">Average Rating</th>
          </tr>
        </thead>
        <tbody class="text-[#39404F] text-sm rounded-b-2xl bg-white">
          <tr
            v-for="employee in employees"
            :key="employee.employee"
            class="border border-[#F9FAFB] cursor-pointer"
          >
            <td class="py-2 px-8 overflow-hidden whitespace-nowrap text-left">
              <div
                @click="toggleEmployeeSelection(employee._id)"
                class="relative rounded-sm border border-gray-300 w-4 h-4 cursor-pointer flex items-center justify-center"
                :class="{
                  'bg-primary': selectedEmployees.includes(employee._id),
                }"
              >
                <img
                  v-if="selectedEmployees.includes(employee._id)"
                  src="~/assets/images/checked.svg"
                  alt=""
                  class="absolute text-primary"
                />
              </div>
            </td>
            <td
              @click="navigateToEmployee(employee._id)"
              class="py-2 px-8 pl-4 flex space-x-1 mt-2 overflow-hidden whitespace-nowrap text-left"
            >
              <div v-if="employee.displayPicture" class="px-2">
                <img
                  :src="employee.displayPicture"
                  alt=""
                  class="rounded-full h-6 w-6"
                />
              </div>

              <img
                v-else
                src="~/assets/images/img.svg"
                alt=""
                class="px-2 rounded-full"
              />
              <div>
                <p class="text-sm">{{ employee.fullName }}</p>
                <p class="text-[10px] text-[#757C86]">
                  {{ employee.email }}
                </p>
              </div>
            </td>

            <td class="py-2 px-8 overflow-hidden whitespace-nowrap text-left">
              {{ employee.jobRole }}
            </td>
            <td class="py-2 px-8 overflow-hidden whitespace-nowrap text-left">
              {{ employee.department }}
            </td>
            <td class="py-2 px-8 overflow-hidden whitespace-nowrap text-left">
              <div
                class="w-[110px] py-1 flex justify-center rounded-2xl space-x-2"
                :class="{
                  'text-[#769BAE] bg-[#769BAE] bg-opacity-10':
                    employee.status === 'Invited',
                  'text-[#058836] bg-[#058836] bg-opacity-10':
                    employee.status === 'Active',
                  'text-[#CFD0D0] bg-[#CFD0D0] bg-opacity-10':
                    employee.status === 'Deactivated',
                  'text-[#F6AF45] bg-[#F6AF45] bg-opacity-10':
                    employee.status === 'Leave',
                }"
              >
                <div
                  class="w-2 h-2 rounded-full mt-1.5"
                  :class="{
                    'bg-[#769BAE]': employee.status === 'Invited',
                    'bg-[#058836]': employee.status === 'Active',
                    'bg-[#CFD0D0]': employee.status === 'Deactivated',
                    'bg-[#F6AF45]': employee.status === 'Leave',
                  }"
                ></div>
                <p>
                  {{
                    employee.status === "Invited"
                      ? "Onboarding"
                      : employee.status === "Deactivated"
                      ? "Exited"
                      : employee.status === "Leave"
                      ? "On Leave"
                      : employee.status
                  }}
                </p>
              </div>
            </td>
            <td
              v-if="employee.averageRating"
              class="py-2 px-8 overflow-hidden whitespace-nowrap text-left"
            >
              <div v-html="renderStars(employee.averageRating)"></div>
            </td>
            <td
              v-if="!employee.averageRating"
              class="py-2 px-8 overflow-hidden whitespace-nowrap text-left"
            >
              N/A
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="w-full">
        <EmptyState
          class="py-16 w-full"
          :image="currentaward"
          title="No Employees found"
          description="Try inviting employees to the platform by clicking the invite employees button"
        />
      </div>
    </div>
    <set-assessment
      v-if="isModalVisible"
      :selectedEmployees="selectedEmployees"
      @close="closeModal"
    />
  </div>
</template>
<script setup>
import { getEmployeesHr } from "~/services/employee";
import { ref, onMounted } from "vue";
import EmptyState from "../global/EmptyState.vue";
import SetAssessment from "./SetAssessment.vue";
const router = useRouter();
const employees = ref([]);
const selectedEmployees = ref([]);
const isModalVisible = ref(false);

const toggleEmployeeSelection = (employeeId) => {
  const index = selectedEmployees.value.indexOf(employeeId);
  if (index === -1) {
    // If not selected, add to the list
    selectedEmployees.value.push(employeeId);
  } else {
    // If already selected, remove from the list
    selectedEmployees.value.splice(index, 1);
  }
};

const setAssessmentModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const renderStars = (rating) => {
  const roundedRating = Math.round(rating); // Round the rating to the nearest integer
  const fullStars = '<span class="text-yellow-500 w-6 h-6">★</span>'.repeat(
    roundedRating
  ); // Full stars
  const emptyStars = '<span class="text-gray-300 w-6 h-6">★</span>'.repeat(
    5 - roundedRating
  ); // Empty stars

  return fullStars + emptyStars; // Concatenate full and empty stars
};

const fetchEmployee = async () => {
  try {
    // Assuming you have a function to get the bearer token

    // Call the service to get leave types
    const employeeResponse = await getEmployeesHr();

    // Update statistics based on the response
    if (!employeeResponse.error) {
      employees.value = employeeResponse.data.docs;
      console.log(employeeResponse);
    } else {
      console.error("Error fetching leave types:", employeeResponse.error);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

onMounted(fetchEmployee);

const navigateToEmployee = (employeeId) => {
  router.push(
    `/dashboard/performance-management/employee-performance/${employeeId}`
  );
};
</script>
