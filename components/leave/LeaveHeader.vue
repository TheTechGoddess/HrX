<template>
  <div>
    <div class="flex justify-between items-center">
      <Title title="Leave Management" />
      <button
        v-if="loginUser.loginType === 'Company'"
        class="px-3 py-2 font-medium text-white bg-[#E4669E] rounded-xl"
        @click="showModal"
      >
        Add leave type
      </button>
      <ItemsDropdown v-else :items="myItemList" @itemSelected="handleItemSelection" />
      <leave-type v-if="isModalVisible" @close="closeModal" />
    </div>
    <template v-if="loginUser.loginType === 'Employee'">
      <!-- leave progess -->
      <div
        class="bg-white w-full px-20 py-4 rounded-2xl capitalize flex my-5 justify-between items-center flex-wrap"
      >
        <div
          v-for="(statistic, index) in statistics"
          :key="index"
          class="flex space-x-20 items-center justify-center"
        >
          <div class="flex space-x-3 item-center justify-center content-center">
            <div
              class="w-14 h-14 bg-[#FFFAFF] border border-[#FCF0F5] rounded flex text-[#E4669E] text-3xl font-semibold justify-center content-center items-center"
            >
              {{
                statistic.value < 10 ? "0" + statistic.value : statistic.value
              }}
            </div>
            <div class="flex flex-col mt-1.5">
              <p class="text-[#39404F]">{{ statistic.label }}</p>
              <p class="text-[#757C86] text-sm">{{ statistic.unit }}</p>
            </div>
          </div>

          <hr
            v-if="index < statistics.length - 1"
            class="h-[59px] w-[1px] border-0 bg-[#DFE1E4]"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import Title from "@/components/layout/Title.vue";
import LeaveType from "@/components/leave/LeaveType.vue";
import ItemsDropdown from "../global/ItemsDropdown.vue";
import { getLeaveTypes, getLeaveSummary } from "~/services/leave";
import { useLoginUser } from "~/store/auth";
import { ref } from "vue";
const loginUser = useLoginUser();

const isModalVisible = ref(false);
const myItemList = ref([]);
const statistics = ref([
  { label: "Total", value: 0, unit: "days" },
  { label: "Applied", value: 0, unit: "days" },
  { label: "Days", value: 0, unit: "Left" },
  { label: "Rejected", value: 0, unit: "Requests" },
]);

const showModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

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

const handleItemSelection = async (selectedItem) => {
  try {
    const leaveSummary = await getLeaveSummary(selectedItem);

    if (leaveSummary.success) {
      const { totalDays, appliedDays, daysleft, rejected } = leaveSummary.data;

      // Update the statistics ref with the retrieved data
      statistics.value = [
        { label: "Total", value: totalDays, unit: "days" },
        { label: "Applied", value: appliedDays, unit: "days" },
        { label: "Days", value: daysleft, unit: "Left" },
        { label: "Rejected", value: rejected, unit: "Requests" },
      ];

      console.log("Statistics updated:", statistics.value);
      // Perform other actions if needed
    } else {
      console.error("Failed to retrieve leave summary:", leaveSummary.msg);
      // Handle failure scenario
    }
  } catch (error) {
    console.error("Error fetching leave summary:", error);
    // Handle error scenario
  }
};

onMounted(() => {
  fetchLeaveTypes();
});
</script>
