<template>
  <div class="w-full rounded-lg my-4">
    <div class="flex justify-between bg-white p-4 rounded-t-lg">
      <h1 class="text-[#39404F] text-lg font-semibold">Employees</h1>

      <button
        class="border border-[#CFD0D0] space-x-2 py-2 px-3 flex rounded-xl items-center"
      >
        <img src="~/assets/images/annual.svg" alt="" />
        <p class="text-xs text-[#39404F]">Status</p>
        <img src="~/assets/images/down_arrow.svg" alt="" />
      </button>
    </div>
    <div class="rounded-b-2xl overflow-x-auto">
      <table v-if="employees.length > 0" class="w-full border-collapse">
        <thead class="text-left text-[#757C86] font-medium text-sm">
          <tr class="">
            <th class="pl-4 py-4 px-8">Name</th>
            <th class="px-8">Job Role</th>
            <th class="px-8">Department</th>
            <th class="px-8">Date</th>
            <th class="px-8">Status</th>
          </tr>
        </thead>
        <tbody class="text-[#39404F] text-sm rounded-b-2xl bg-white">
          <tr
            v-for="employee in employees"
            :key="employee.employee"
            class="border border-[#F9FAFB] cursor-pointer"
            @click="navigateToEmployee(employee._id)"
          >
            <td
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
              <p>
                {{ formatDateTime(employee.createdAt).date }} -
                <span class="text-[#757C86] text-xs">
                  {{ formatDateTime(employee.createdAt).time }}</span
                >
              </p>
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
                    employee.status === 'On Leave',
                }"
              >
                <div
                  class="w-2 h-2 rounded-full mt-1.5"
                  :class="{
                    'bg-[#769BAE]': employee.status === 'Invited',
                    'bg-[#058836]': employee.status === 'Active',
                    'bg-[#CFD0D0]': employee.status === 'Deactivated',
                    'bg-[#F6AF45]': employee.status === 'On Leave',
                  }"
                ></div>
                <p>
                  {{
                    employee.status === "Invited"
                      ? "Onboarding"
                      : employee.status === "Deactivated"
                      ? "Exited"
                      : employee.status
                  }}
                </p>
              </div>
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
  </div>
</template>
<script setup>
import { getEmployeesHr } from "~/services/employee";
import { ref, onMounted } from "vue";
import EmptyState from "../global/EmptyState.vue";
const router = useRouter();
const employees = ref([]);

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

const formatDateTime = (timestamp) => {
  const dateObject = new Date(timestamp);

  // Format date
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
    dateObject
  );
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(
    dateObject
  );
  const year = dateObject.getFullYear();

  const formattedDate = `${day}th ${month} ${year}`;

  // Format time
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  const formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;

  return { date: formattedDate, time: formattedTime };
};

const navigateToEmployee = (employeeId) => {
  router.push(`/dashboard/employee-management/manage-employee/${employeeId}`);
};
</script>

<style scoped>
.elem {
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
  background: radial-gradient(
      circle closest-side at 50% 50%,
      white 75%,
      transparent 0%
    ),
    conic-gradient(
      #f7fafc 0% 10%,
      #fcf6bd 10% 25%,
      #a9def9 25% 30%,
      #e4669e 30% 60%,
      #e0abff 60% 85%,
      #d0f4de 85% 100%
    );
}
</style>
