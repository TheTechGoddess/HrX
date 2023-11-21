<template>
  <div>
    <div
      v-if="previousWinners.length > 0 && loginUser.loginType === 'Employee'"
      class="bg-white w-full flex flex-col p-4 rounded-lg max-h-[350px] overflow-auto slim-scrollbar"
    >
      <div class="flex justify-between items-center">
        <p class="text-[#182233] text-xl">Previous Awards</p>
      </div>
      <div
        class="bg-[#FFFDFE] flex flex-col items-start border border-[#E4669E] border-opacity-30 rounded-lg py-4 px-6 my-4"
        v-for="previousWinner in previousWinners"
        :key="previousWinner._id"
      >
        <div>
          <div class="flex space-x-1">
            <img src="~/assets/images/calender.svg" alt="" class="" />
            <p class="text-xs text-[#757C86]">
              {{ formatDate(previousWinner.createdAt) }}
            </p>
          </div>
          <div class="flex space-x-2 my-4">
            <div>
              <img src="~/assets/images/trophy2.svg" alt="" class="w-8 mt-1" />
            </div>
            <img
              :src="previousWinner.winner.displayPicture"
              alt=""
              class="w-6 h-6 rounded-full"
            />
            <div class="mt-1">
              <p class="text-[#39404F] text-sm font-medium">
                {{ previousWinner.winner.fullName }}
              </p>
              <p class="text-[#757C86] text-xs -mt-1">
                {{ previousWinner.award.department }}
              </p>
            </div>
          </div>
          <p class="font-semibold text-[#39404F]">
            {{ previousWinner.award.name }} ({{ previousWinner.award.point }})
          </p>
          <p class="text-[#585E6C] text-xs my-4">
            {{ previousWinner.award.description }}
          </p>
          <div class="flex space-x-1 mt-1 text-sm">
            <img src="~/assets/images/reward2.svg" alt="" />
            <p class="text-[#757C86]">Reward:</p>
            <p class="text-[#585E6C] font-medium">
              {{ previousWinner.award.reward }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else-if="
        previousWinnersHr.length > 0 && loginUser.loginType === 'Company'
      "
      class="bg-white w-full flex flex-col p-4 rounded-lg max-h-[350px] overflow-auto slim-scrollbar"
    >
      <div class="flex justify-between items-center">
        <p class="text-[#182233] text-xl">Previous Awards</p>
      </div>
      <div
        class="bg-[#FFFDFE] flex flex-col items-start border border-[#E4669E] border-opacity-30 rounded-lg py-4 px-6 my-4"
        v-for="previousWinner in previousWinnersHr"
        :key="previousWinner._id"
      >
        <div>
          <div class="flex space-x-1">
            <img src="~/assets/images/calender.svg" alt="" class="" />
            <p class="text-xs text-[#757C86]">
              {{ formatDate(previousWinner.createdAt) }}
            </p>
          </div>
          <div class="flex space-x-2 my-4">
            <div>
              <img src="~/assets/images/trophy2.svg" alt="" class="w-8 mt-1" />
            </div>
            <img
              :src="previousWinner.winner.displayPicture"
              alt=""
              class="w-6 h-6 rounded-full"
            />
            <div class="mt-1">
              <p class="text-[#39404F] text-sm font-medium">
                {{ previousWinner.winner.fullName }}
              </p>
              <p class="text-[#757C86] text-xs -mt-1">
                {{ previousWinner.award.department }}
              </p>
            </div>
          </div>
          <p class="font-semibold text-[#39404F]">
            {{ previousWinner.award.name }} ({{ previousWinner.award.point }})
          </p>
          <p class="text-[#585E6C] text-xs my-4">
            {{ previousWinner.award.description }}
          </p>
          <div class="flex space-x-1 mt-1 text-sm">
            <img src="~/assets/images/reward2.svg" alt="" />
            <p class="text-[#757C86]">Reward:</p>
            <p class="text-[#585E6C] font-medium">
              {{ previousWinner.award.reward }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- emptystate employee -->
      <EmptyState
        v-if="loginUser.loginType === 'Employee'"
        class="py-24"
        :image="currentaward"
        title="No award in view"
        description="To enable nominations and voting, HR will establish the award program. employee"
      />
      <EmptyState
        v-else
        class="py-24"
        :image="currentaward"
        title="No award in view"
        description="To enable nominations and voting, HR will establish the award program"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getPreviousWinners, getPreviousWinnersHR } from "~/services/reward";
import currentaward from "~/assets/images/empty_currentaward.svg";
import EmptyState from "../global/EmptyState.vue";
import { useLoginUser } from "~/store/auth";
const loginUser = useLoginUser();

// Define a reactive variable to store previous winners
const previousWinners = ref([]);
const previousWinnersHr = ref([]);

// Function to fetch previous winners
const fetchPreviousWinners = async () => {
  try {
    const data = await getPreviousWinners();
    if (!data.error) {
      previousWinners.value = data.data.docs; // Update the reactive variable
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};

// Function to fetch previous winners
const fetchPreviousWinnersHr = async () => {
  try {
    const data = await getPreviousWinnersHR();
    if (!data.error) {
      previousWinnersHr.value = data.data.docs; // Update the reactive variable
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};

const formatDate = (inputDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", options);
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchPreviousWinners();
  fetchPreviousWinnersHr();
});
</script>
<style>
/* Styling the scrollbar */
.slim-scrollbar {
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: pink; /* Change scrollbar color */
}

/* For WebKit based browsers (Chrome, Safari, etc.) */
.slim-scrollbar::-webkit-scrollbar {
  width: 8px; /* Adjust the width */
}

.slim-scrollbar::-webkit-scrollbar-thumb {
  background-color: #e4669e; /* Change thumb color */
  border-radius: 4px; /* Round the edges */
}

/* Hide the scrollbar track */
.slim-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
</style>
