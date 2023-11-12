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
    <div>
      <table class="w-full border-collapse rounded-b-2xl">
        <thead class="text-left text-[#757C86] font-medium text-sm">
          <tr class="">
            <th class="pl-4 py-4">Name</th>
            <th>Job Role</th>
            <th>Department</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="text-[#39404F] text-sm rounded-b-2xl bg-white">
          <!-- <nuxt-link
        
            :to="`/dashboard/employee-management/manage-employee/${employee.employee}`"
          ></nuxt-link> -->
          <tr
            v-for="employee in employees"
            :key="employee.employee"
            class="border border-[#F9FAFB] cursor-pointer"
            @click="navigateToEmployee(employee.employee)"
          >
            <td class="py-2 pl-4 flex space-x-1 mt-2">
              <img src="~/assets/images/img.svg" alt="" />
              <div>
                <p class="text-sm">{{ employee.employee }}</p>
                <p class="text-[10px] text-[#757C86]">
                  {{ employee.email }}
                </p>
              </div>
            </td>

            <td class="py-2">{{ employee.role }}</td>
            <td class="py-2">{{ employee.department }}</td>
            <td class="py-2">
              <p>
                {{ employee.date }} -
                <span class="text-[#757C86] text-xs">{{ employee.time }}</span>
              </p>
            </td>
            <td class="py-2">
              <div
                class="w-[110px] py-1 flex justify-center rounded-2xl space-x-2"
                :class="{
                  'text-[#769BAE] bg-[#769BAE] bg-opacity-10':
                    employee.status === 'Onboarding',
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
                    'bg-[#769BAE]': employee.status === 'Onboarding',
                    'bg-[#058836]': employee.status === 'Active',
                    'bg-[#CFD0D0]': employee.status === 'Deactivated',
                    'bg-[#F6AF45]': employee.status === 'On Leave',
                  }"
                ></div>
                <p>{{ employee.status }}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const employees = [
  {
    employee: "Stella Mini Minus",
    email: "@KatlynM.gmail.com",
    status: "Onboarding",
    role: "Frontend Engineer",
    department: "Engineering",
    date: "28th Nov 2023",
    time: "10:50AM",
  },
  {
    employee: "Stella Mini Minus",
    email: "@KatlynM.gmail.com",
    status: "Active",
    role: "Frontend Engineer",
    department: "Engineering",
    date: "28th Nov 2023",
    time: "10:50AM",
  },
  {
    employee: "Stella Mini Minus",
    email: "@KatlynM.gmail.com",
    status: "Deactivated",
    role: "Frontend Engineer",
    department: "Engineering",
    date: "28th Nov 2023",
    time: "10:50AM",
  },
  {
    employee: "Stella Mini Minus",
    email: "@KatlynM.gmail.com",
    status: "On Leave",
    role: "Frontend Engineer",
    department: "Engineering",
    date: "28th Nov 2023",
    time: "10:50AM",
  },
];
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
