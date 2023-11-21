<template>
  <div>
    <LeaveHeader />
    <div
      v-if="loginUser.loginType === 'Company'"
      class="bg-white w-full px-4 py-8 rounded-2xl my-6"
    >
      <ButtonSwitch :buttons="tabButtons"></ButtonSwitch>
    </div>
    <div v-else>
      <div class="bg-white w-full p-4 rounded-t-2xl">
        <div class="flex justify-between items-center">
          <p class="text-2xl txt-[#39404F] font-medium">Leaves</p>
          <nuxt-link to="/dashboard/leave/request">
            <button class="p-3 text-white bg-[#E4669E] rounded-xl">
              Request Leave
            </button></nuxt-link
          >
        </div>
      </div>
      <div v-if="leaveData.length > 0" class="rounded-b-2xl overflow-x-auto">
        <table class="w-full border-collapse">
          <thead class="text-left text-[#757C86] font-medium text-sm">
            <tr class="">
              <th class="pl-4 py-4">S/N</th>
              <th class="">Type</th>
              <th class="">From</th>
              <th class="">To</th>
              <th class="">Number of days</th>
              <th class="">Reason</th>
              <th class="">Status</th>
            </tr>
          </thead>
          <tbody class="text-[#39404F] text-sm rounded-b-2xl bg-white">
            <tr
              v-for="(leave, index) in leaveData"
              :key="index"
              class="border border-[#F9FAFB]"
            >
              <td class="pl-4 py-4 overflow-hidden whitespace-nowrap text-left">
                {{ index + 1 }}
              </td>
              <td class="py-4 overflow-hidden whitespace-nowrap text-left">
                {{ leave.leaveType }}
              </td>
              <td class="py-4 overflow-hidden whitespace-nowrap text-left">
                {{ formatDate(leave.startDate) }}
              </td>
              <td class="py-4 overflow-hidden whitespace-nowrap text-left">
                {{ formatDate(leave.endDate) }}
              </td>
              <td class="py-4 overflow-hidden whitespace-nowrap text-left">
                {{
                  dynamicDaysText(calculateDays(leave.startDate, leave.endDate))
                }}
              </td>
              <td class="py-4 overflow-hidden whitespace-nowrap text-left">
                {{ leave.reason }}
              </td>
              <td
                class="py-1 w-[100px] my-3 flex space-x-1 justify-center rounded-2xl overflow-hidden whitespace-nowrap text-left"
                :class="{
                  'text-[#DAA419] bg-[#FBF6E8]': leave.hrStatus === 'Pending',
                  'text-[#058836] bg-[#F0FFEC]': leave.hrStatus === 'Approved',
                  'text-[#FF5454] bg-[#FFE5E5]': leave.hrStatus === 'Rejected',
                }"
              >
                <img :src="getStatusImage(leave.hrStatus)" alt="" />
                <p>{{ leave.hrStatus }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <EmptyState
          class="py-28"
          :image="leave"
          title="You haven’t made any requests yet"
          description="To request a leave, click on the ‘Request leave’ button above to get started"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import LeaveHeader from "../../../components/leave/LeaveHeader.vue";
import ButtonSwitch from "../../../components/global/ButtonSwitch.vue";
import PendingTable from "../../../components/leave/PendingTable.vue";
import ApprovedTable from "../../../components/leave/ApprovedTable.vue";
import RejectedTable from "../../../components/leave/RejectedTable.vue";
import pending from "~/assets/images/pending.svg";
import approved from "~/assets/images/approved.svg";
import rejected from "~/assets/images/rejected.svg";
import leave from "~/assets/images/empty_leave.svg";
import { useUserStore } from "~/store/user";
import { useLoginUser } from "~/store/auth";
import { getMyLeave } from "~/services/leave";
import { ref, onMounted } from "vue";
import EmptyState from "../../../components/global/EmptyState.vue";
const userStore = useUserStore();
const loginUser = useLoginUser();
const leaveData = ref([]);
const tabButtons = [
  {
    label: "Pending",
    component: PendingTable,
  },
  {
    label: "Approved",
    component: ApprovedTable,
  },
  {
    label: "Rejected",
    component: RejectedTable,
  },
];

const fetchMyLeave = async () => {
  try {
    // Assuming you have a function to get the bearer token

    // Call the service to get leave types
    const LeaveResponse = await getMyLeave();

    // Update statistics based on the response
    if (!LeaveResponse.error) {
      leaveData.value = LeaveResponse.data.docs;
      console.log(LeaveResponse);
    } else {
      console.error("Error fetching leave types:", LeaveResponse.error);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

onMounted(fetchMyLeave);

const dynamicDaysText = (days) => {
  return days === 1 ? "1 day" : `${days} days`;
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0"); // Get day and pad with 0 if needed
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month (add 1 as months are zero-indexed) and pad with 0 if needed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function calculateDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const daysDifference = Math.round(
    Math.abs((end - start) / millisecondsPerDay)
  );
  return daysDifference;
}

const statusImageMap = {
  Pending: pending,
  Approved: approved,
  Rejected: rejected,
};

const getStatusImage = (status) => {
  return statusImageMap[status] || "";
};
</script>
