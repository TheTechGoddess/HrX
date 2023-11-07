<template>
  <div>
    <LeaveHeader />
    <LeaveProgress v-if="loginType === 'Employee'" />
    <div v-if="loginType === 'Employee'">
      <div class="bg-white w-full p-4 rounded-t-2xl">
        <div class="flex justify-between items-center">
          <p class="text-2xl txt-[#39404F] font-medium">Leaves</p>
          <nuxt-link to="/dashboard/leave/request">
            <button class="p-3 text-white bg-[#E4669E] rounded-xl">
              Request Leave
            </button></nuxt-link
          >
        </div>
        <div class="flex justify-between items-center my-6">
          <button
            class="border border-[#CFD0D0] space-x-2 py-2 px-3 flex rounded-xl items-center"
          >
            <img src="~/assets/images/annual.svg" alt="" />
            <p class="text-xs text-[#39404F]">Last 6 months</p>
            <img src="~/assets/images/down_arrow.svg" alt="" />
          </button>
          <button
            class="border border-[#CFD0D0] space-x-2 py-2 px-3 flex rounded-xl items-center"
          >
            <img src="~/assets/images/annual.svg" alt="" />
            <p class="text-xs text-[#39404F]">Status</p>
            <img src="~/assets/images/down_arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <table class="w-full border-collapse rounded-b-2xl">
          <thead class="text-left text-[#757C86] font-medium text-sm">
            <tr class="">
              <th class="pl-4 py-4">S/N</th>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Number of days</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody class="text-[#39404F] text-sm rounded-b-2xl bg-white">
            <tr
              v-for="leave in leaveData"
              :key="leave.sn"
              class="border border-[#F9FAFB]"
            >
              <td class="pl-4 py-4">{{ leave.sn }}</td>
              <td class="py-4">{{ leave.type }}</td>
              <td class="py-4">{{ leave.from }}</td>
              <td class="py-4">{{ leave.to }}</td>
              <td class="py-4">{{ dynamicDaysText(leave.days) }}</td>
              <td class="py-4">{{ leave.reason }}</td>
              <td
                class="py-1 w-[100px] my-3 flex space-x-1 justify-center rounded-2xl"
                :class="{
                  'text-[#DAA419] bg-[#FBF6E8]': leave.status === 'Pending',
                  'text-[#058836] bg-[#F0FFEC]': leave.status === 'Approved',
                  'text-[#FF5454] bg-[#FFE5E5]': leave.status === 'Rejected',
                }"
              >
                <img :src="getStatusImage(leave.status)" alt="" />
                <p>{{ leave.status }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else class="bg-white w-full px-4 py-8 rounded-2xl my-6">
      <ButtonSwitch
        :buttons="tabButtons"
        custom-path="/leave/requestleave/"
        custom-title="Request for Leave"
      ></ButtonSwitch>
    </div>
  </div>
</template>

<script setup>
import LeaveProgress from "../../../components/leave/LeaveProgress.vue";
import LeaveHeader from "../../../components/leave/LeaveHeader.vue";
import ButtonSwitch from "../../../components/global/ButtonSwitch.vue";
import PendingTable from "../../../components/leave/PendingTable.vue";
import ApprovedTable from "../../../components/leave/ApprovedTable.vue";
import RejectedTable from "../../../components/leave/RejectedTable.vue";
import pending from "~/assets/images/pending.svg";
import approved from "~/assets/images/approved.svg";
import rejected from "~/assets/images/rejected.svg";

const loginType = localStorage.getItem("loginType");
const leaveData = [
  {
    sn: 1,
    type: "Annual leave",
    from: "15/01/2023",
    to: "20/01/2023",
    days: 5,
    reason: "My sister’s wedding...",
    status: "Pending",
  },
  {
    sn: 2,
    type: "Casual leave",
    from: "02/04/2022",
    to: "05/01/2022",
    days: 3,
    reason: "Burnout break",
    status: "Approved",
  },
  {
    sn: 3,
    type: "Sick leave",
    from: "02/04/2022",
    to: "05/01/2022",
    days: 1,
    reason: "Down with a flu",
    status: "Rejected",
  },
];
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
const dynamicDaysText = (days) => {
  return days === 1 ? "1 day" : `${days} days`;
};
const statusImageMap = {
  Pending: pending,
  Approved: approved,
  Rejected: rejected,
};

const getStatusImage = (status) => {
  return statusImageMap[status] || "";
};
</script>
