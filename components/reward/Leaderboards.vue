<template>
  <div class="w-full">
    <div
      v-if="loginUser.loginType === 'Employee' && awards && awards.length > 0"
    >
      <div class="bg-white flex flex-col w-full p-4 rounded-t-lg">
        <h1 class="text-xl texxt-[#39404F]">Leaderboard</h1>
        <div
          v-if="awards.length > 0"
          class="my-8 flex justify-between items-center"
        >
          <!-- 2nd award -->
          <div
            class="border border-[#E4669E] rounded-lg border-opacity-30 bg-[#FFFDFE] flex flex-col justify-center items-center content-center text-center py-8 px-4 space-y-2 text-xs relative"
            v-if="awards[1]"
          >
            <img
              :src="awards[1].employee.displayPicture"
              alt=""
              class="w-12 h-12 rounded-full"
            />
            <p class="text-[#39404F] font-medium">
              {{ awards[1].employee.fullName }}
            </p>
            <p class="text-[#757C86]">{{ awards[1].employee.department }}</p>
            <p class="text-[#585E6C] text-[10px]">{{ awards[1].score }} pts</p>
            <div class="flex space-x-1 text-[#585E6C] text-[10px]">
              <img src="~/assets/images/award.svg" alt="" />
              <p>{{ awards[1].numberOfAwards }}</p>
            </div>
            <div
              class="absolute w-8 h-8 flex bg-[#CCCCCC] border border-[#B4B3B3] rounded-full -top-6 -right-4 justify-center items-center text-center content-center"
            >
              <p class="text-[#39404F] font-medium">2</p>
            </div>
          </div>
          <!-- first award -->
          <div
            class="border border-[#E4669E] px-4 border-opacity-30 rounded-lg bg-[#FFFDFE] flex flex-col justify-center items-center content-center text-center py-12 space-y-2 text-xs relative"
            v-if="awards[0]"
          >
            <img
              :src="awards[0].employee.displayPicture"
              alt=""
              class="w-12 h-12 rounded-full"
            />
            <p class="text-[#39404F] font-medium">
              {{ awards[0].employee.fullName }}
            </p>
            <p class="text-[#757C86]">{{ awards[0].employee.department }}</p>
            <p class="text-[#585E6C] text-[10px]">{{ awards[0].score }} pts</p>
            <div class="flex space-x-1 text-[#585E6C] text-[10px]">
              <img src="~/assets/images/award.svg" alt="" />
              <p>{{ awards[0].numberOfAwards }}</p>
            </div>
            <div
              class="absolute w-8 h-8 flex bg-[#D4AF37] border border-[#B18801] rounded-full -top-6 -right-4 justify-center items-center text-center content-center"
            >
              <p class="text-[#39404F] font-medium">1</p>
            </div>
          </div>
          <!-- 3rd award -->
          <div
            class="border rounded-lg px-4 border-[#E4669E] border-opacity-30 bg-[#FFFDFE] flex flex-col justify-center items-center content-center text-center py-4 space-y-2 text-xs relative"
            v-if="awards[2]"
          >
            <img
              :src="awards[2].employee.displayPicture"
              alt=""
              class="w-12 h-12 rounded-full"
            />
            <p class="text-[#39404F] font-medium">
              {{ awards[2].employee.fullName }}
            </p>
            <p class="text-[#757C86]">{{ awards[2].employee.department }}</p>
            <p class="text-[#585E6C] text-[10px]">{{ awards[2].score }} pts</p>
            <div class="flex space-x-1 text-[#585E6C] text-[10px]">
              <img src="~/assets/images/award.svg" alt="" />
              <p>{{ awards[2].numberOfAwards }}</p>
            </div>
            <div
              class="absolute w-8 h-8 flex bg-[#CD7F32] border border-[#A35609] rounded-full -top-6 -right-4 justify-center items-center text-center content-center"
            >
              <p class="text-[#39404F] font-medium">3</p>
            </div>
          </div>
        </div>
      </div>
      <!-- other awards -->
      <table class="w-full border-collapse rounded-b-2xl">
        <thead class="text-left text-[#757C86] font-medium text-sm">
          <tr class="">
            <th class="pl-4 py-4">Rank</th>
            <th>Employee</th>
            <th>Points</th>
            <th>Award</th>
          </tr>
        </thead>
        <!-- <tbody class="text-[#39404F] text-sm rounded-b-lg bg-white">
          <tr
            v-for="award in awards"
            :key="award.rank"
            class="border border-[#F9FAFB]"
          >
            <td class="pl-4 py-4">{{ award.rank }}</td>
            <td class="py-4 flex space-x-1">
              <img src="~/assets/images/img.svg" alt="" />
              <div>
                <p class="text-sm">{{ award.employee }}</p>
                <p class="text-[10px] text-[#757C86] -mt-1">{{ award.role }}</p>
              </div>
            </td>
            <td class="py-4">{{ award.points }}</td>
            <td class="py-4">{{ award.award }}</td>
          </tr>
        </tbody> -->
      </table>
    </div>
    <div
      v-else-if="
        loginUser.loginType === 'Company' && awardsHr && awardsHr.length > 0
      "
    >
      <div class="bg-white flex flex-col w-full p-4 rounded-t-lg">
        <h1 class="text-xl texxt-[#39404F]">Leaderboard</h1>
        <div
          v-if="awardsHr.length > 0"
          class="my-8 flex justify-between items-center"
        >
          <!-- 2nd award -->
          <div
            class="border border-[#E4669E] rounded-lg border-opacity-30 bg-[#FFFDFE] flex flex-col justify-center items-center content-center text-center py-8 px-4 space-y-2 text-xs relative"
            v-if="awardsHr[1]"
          >
            <img
              :src="awardsHr[1].employee.displayPicture"
              alt=""
              class="w-12 h-12 rounded-full"
            />
            <p class="text-[#39404F] font-medium">
              {{ awardsHr[1].employee.fullName }}
            </p>
            <p class="text-[#757C86]">{{ awardsHr[1].employee.department }}</p>
            <p class="text-[#585E6C] text-[10px]">
              {{ awardsHr[1].score }} pts
            </p>
            <div class="flex space-x-1 text-[#585E6C] text-[10px]">
              <img src="~/assets/images/award.svg" alt="" />
              <p>{{ awardsHr[1].numberOfAwards }}</p>
            </div>
            <div
              class="absolute w-8 h-8 flex bg-[#CCCCCC] border border-[#B4B3B3] rounded-full -top-6 -right-4 justify-center items-center text-center content-center"
            >
              <p class="text-[#39404F] font-medium">2</p>
            </div>
          </div>
          <!-- first award -->
          <div
            class="border border-[#E4669E] px-4 border-opacity-30 rounded-lg bg-[#FFFDFE] flex flex-col justify-center items-center content-center text-center py-12 space-y-2 text-xs relative"
            v-if="awardsHr[0]"
          >
            <img
              :src="awardsHr[0].employee.displayPicture"
              alt=""
              class="w-12 h-12 rounded-full"
            />
            <p class="text-[#39404F] font-medium">
              {{ awardsHr[0].employee.fullName }}
            </p>
            <p class="text-[#757C86]">{{ awardsHr[0].employee.department }}</p>
            <p class="text-[#585E6C] text-[10px]">
              {{ awardsHr[0].score }} pts
            </p>
            <div class="flex space-x-1 text-[#585E6C] text-[10px]">
              <img src="~/assets/images/award.svg" alt="" />
              <p>{{ awardsHr[0].numberOfAwards }}</p>
            </div>
            <div
              class="absolute w-8 h-8 flex bg-[#D4AF37] border border-[#B18801] rounded-full -top-6 -right-4 justify-center items-center text-center content-center"
            >
              <p class="text-[#39404F] font-medium">1</p>
            </div>
          </div>
          <!-- 3rd award -->
          <div
            class="border rounded-lg px-4 border-[#E4669E] border-opacity-30 bg-[#FFFDFE] flex flex-col justify-center items-center content-center text-center py-4 space-y-2 text-xs relative"
            v-if="awardsHr[2]"
          >
            <img
              :src="awardsHr[2].employee.displayPicture"
              alt=""
              class="w-12 h-12 rounded-full"
            />
            <p class="text-[#39404F] font-medium">
              {{ awardsHr[2].employee.fullName }}
            </p>
            <p class="text-[#757C86]">{{ awardsHr[2].employee.department }}</p>
            <p class="text-[#585E6C] text-[10px]">
              {{ awardsHr[2].score }} pts
            </p>
            <div class="flex space-x-1 text-[#585E6C] text-[10px]">
              <img src="~/assets/images/award.svg" alt="" />
              <p>{{ awardsHr[2].numberOfAwards }}</p>
            </div>
            <div
              class="absolute w-8 h-8 flex bg-[#CD7F32] border border-[#A35609] rounded-full -top-6 -right-4 justify-center items-center text-center content-center"
            >
              <p class="text-[#39404F] font-medium">3</p>
            </div>
          </div>
        </div>
      </div>
      <table class="w-full border-collapse rounded-b-2xl">
        <thead class="text-left text-[#757C86] font-medium text-sm">
          <tr class="">
            <th class="pl-4 py-4">Rank</th>
            <th>Employee</th>
            <th>Points</th>
            <th>Award</th>
          </tr>
        </thead>
        <!-- <tbody class="text-[#39404F] text-sm rounded-b-lg bg-white">
          <tr
            v-for="award in awards"
            :key="award.rank"
            class="border border-[#F9FAFB]"
          >
            <td class="pl-4 py-4">{{ award.rank }}</td>
            <td class="py-4 flex space-x-1">
              <img src="~/assets/images/img.svg" alt="" />
              <div>
                <p class="text-sm">{{ award.employee }}</p>
                <p class="text-[10px] text-[#757C86] -mt-1">{{ award.role }}</p>
              </div>
            </td>
            <td class="py-4">{{ award.points }}</td>
            <td class="py-4">{{ award.award }}</td>
          </tr>
        </tbody> -->
      </table>
    </div>
    <div v-else class="py-60 bg-white rounded-lg">
      <!-- emptystate employee -->
      <EmptyState
        v-if="loginUser.loginType === 'Employee'"
        class="py-28"
        :image="currentaward"
        title="No leaderboard data available"
        description="Win awards and secure your spot on the leaderboard. Your achievements will shine here."
      />
      <EmptyState
        v-else
        class="py-28"
        :image="currentaward"
        title="No leaderboard data available"
        description="Win awards and secure your spot on the leaderboard. Your achievements will shine here."
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getLeadersHr, getLeadersEmployee } from "~/services/reward";
import currentaward from "~/assets/images/empty_currentaward.svg";
import EmptyState from "../global/EmptyState.vue";
import { useLoginUser } from "~/store/auth";
const loginUser = useLoginUser();
const awards = ref([]);
const awardsHr = ref([]);

const fetchLeaders = async () => {
  try {
    const data = await getLeadersEmployee();
    if (!data.error) {
      awards.value = data.data.docs;
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};

// Function to fetch previous winners
const fetchLeadersHr = async () => {
  try {
    const data = await getLeadersHr();
    if (!data.error) {
      awardsHr.value = data.data.docs;
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};

onMounted(() => {
  fetchLeaders();
  fetchLeadersHr();
});
</script>
