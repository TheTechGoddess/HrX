<template>
  <div>
    <div class="bg-white w-full flex flex-col p-4 rounded-lg my-6">
      <!-- voting result hr-->
      <div
        v-if="
          isVotingTimeHrOver &&
          winnerDataHr &&
          loginUser.loginType === 'Company'
        "
      >
        <div class="flex justify-between">
          <p>Award</p>
          <div>
            <p>00:00</p>
          </div>
        </div>
        <div
          class="bg-[#FFFDFE] flex justify-between items-start border border-[#E4669E] border-opacity-30 rounded-lg py-4 px-6 my-4"
        >
          <div>
            <p class="text-[#182233] font-xl font-semibold">The winner is</p>
            <div class="flex space-x-2 my-4">
              <img
                :src="winnerDataHr.winner.displayPicture"
                alt=""
                class="w-6 h-6 rounded-full"
              />
              <div>
                <p class="text-[#39404F] text-sm font-medium">
                  {{ winnerDataHr.winner.fullName }}
                </p>
                <p class="text-[#757C86] text-xs -mt-1">
                  {{ winnerDataHr.winner.department }}
                </p>
              </div>
            </div>
            <p class="font-semibold text-[#39404F]">
              {{ winnerDataHr.award.name }}
            </p>
            <p class="text-bodytext text-sm my-2">
              {{ winnerDataHr.award.description }}
            </p>
            <div class="flex space-x-1 mt-3 text-sm">
              <img src="~/assets/images/reward2.svg" alt="" />
              <p class="text-[#757C86]">Reward:</p>
              <p class="text-[#585E6C] font-medium">
                {{ winnerDataHr.award.reward }}
              </p>
            </div>
            <div class="flex space-x-4 mt-6">
              <button
                @click="isModalVisible = true"
                class="px-4 py-3 font-medium text-white bg-[#E4669E] rounded-xl"
              >
                Reset Award
              </button>
              <button
                class="px-4 py-3 font-medium text-white bg-[#E4669E] rounded-xl"
                @click="openVoteResultHr(recentAwardHr._id)"
              >
                Voting result
              </button>
            </div>
          </div>
          <div class="space-y-10">
            <img src="~/assets/images/trophy.svg" alt="" class="mt-2" />
          </div>
        </div>
      </div>

      <!-- voting result employee-->
      <div
        v-else-if="
          isVotingTimeOver && winnerData && loginUser.loginType === 'Employee'
        "
      >
        <div class="flex justify-between">
          <p>Award</p>
          <div>
            <p>00:00</p>
          </div>
        </div>
        <div
          class="bg-[#FFFDFE] flex justify-between items-start border border-[#E4669E] border-opacity-30 rounded-lg py-4 px-6 my-4"
        >
          <div class="flex flex-col w-full">
            <p class="text-[#182233] font-xl font-semibold">The winner is</p>
            <div class="flex space-x-2 my-4">
              <img
                :src="winnerData.winner.displayPicture"
                alt=""
                class="w-6 h-6 rounded-full"
              />
              <div>
                <p class="text-[#39404F] text-sm font-medium">
                  {{ winnerData.winner.fullName }}
                </p>
                <p class="text-[#757C86] text-xs -mt-1">
                  {{ winnerData.winner.department }}
                </p>
              </div>
            </div>
            <p class="font-semibold text-[#39404F]">
              {{ winnerData.award.name }}
            </p>
            <p class="text-bodytext text-sm my-2">
              {{ winnerData.award.description }}
            </p>
            <div class="flex space-x-1 mt-3 text-sm">
              <img src="~/assets/images/reward2.svg" alt="" />
              <p class="text-[#757C86]">Reward:</p>
              <p class="text-[#585E6C] font-medium">
                {{ winnerData.award.reward }}
              </p>
            </div>
          </div>
          <div class="">
            <img src="~/assets/images/trophy.svg" alt="" class="mt-2" />
            <button
              class="px-4 py-3 font-medium text-white bg-[#E4669E] rounded-xl self-end mt-16"
              @click="openVoteResult(recentAward._id)"
            >
              Voting result
            </button>
          </div>
        </div>
      </div>

      <div v-else>
        <!-- nominate employee -->
        <div class="flex justify-between">
          <p>Award</p>
          <div>
            <p>00:00</p>
          </div>
        </div>
        <!-- recent award employee -->
        <div
          v-if="recentAward && loginUser.loginType === 'Employee'"
          class="bg-[#FFFDFE] flex flex-col w-full items-start border border-[#E4669E] border-opacity-30 rounded-lg py-4 px-6 my-4"
        >
          <div>
            <div v-if="isVotingTime">
              <p class="text-[#F6AF45] text-xs font-medium">
                Voting Time...
                <span>ends: {{ getFormattedTime(recentAward.endVoting) }}</span>
              </p>
            </div>
            <div v-else>
              <p class="text-[#F6AF45] text-xs font-medium">
                Nomination time!!!
                <span
                  >ends: {{ getFormattedTime(recentAward.endNomination) }}</span
                >
              </p>
            </div>
            <p class="font-semibold text-[#39404F] my-3">
              {{ recentAward.name }}
              <span class="text-bodytext text-sm"
                >({{ recentAward.point }} points)</span
              >
            </p>
            <p class="text-bodytext text-sm">
              {{ recentAward.description }}
            </p>
            <div class="flex space-x-1 mt-2 text-sm mb-3">
              <img src="~/assets/images/reward2.svg" alt="" />
              <p class="text-[#757C86]">Reward:</p>
              <p class="text-[#585E6C] font-medium">
                {{ recentAward.reward }}
              </p>
            </div>
          </div>
          <div v-if="yourNominee" class="mt-4">
            <div class="flex space-x-3 items-center" v-if="!highestNominees">
              <p class="text-sm text-bodytext">Your Nominee:</p>
              <div class="flex space-x-2 my-3">
                <img
                  :src="yourNominee.displayPicture"
                  alt=""
                  class="w-6 h-6 rounded-full"
                />
                <div>
                  <p class="text-[#39404F] text-sm font-medium">
                    {{ yourNominee.fullName }}
                  </p>
                  <p class="text-[#757C86] text-xs -mt-1">
                    {{ yourNominee.department }}
                  </p>
                </div>
              </div>
            </div>
            <div v-else class="">
              <div class="flex space-x-3 items-center">
                <p class="text-sm text-header">Top 5 nominees:</p>
                <div class="flex my-3" v-for="nominee in highestNominees">
                  <img
                    :src="nominee._id.displayPicture"
                    alt=""
                    class="w-6 h-6 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div v-else class="w-full flex justify-end mt-8">
            <button
              @click="openNominateModal(recentAward._id)"
              class="px-4 py-3 font-medium text-white bg-[#E4669E] rounded-xl"
            >
              Nominate
            </button>
          </div>
          <button
            v-if="isVotingTime"
            @click="openVoteModal(recentAward._id)"
            class="px-10 mt-3 flex justify-end self-end text-end content-end items-end py-3 font-medium text-white bg-[#E4669E] rounded-xl"
          >
            Vote
          </button>
        </div>
        <!-- recent award hr -->
        <div
          v-else-if="recentAwardHr && loginUser.loginType === 'Company'"
          class="bg-[#FFFDFE] flex flex-col items-start border border-[#E4669E] border-opacity-30 rounded-lg py-4 px-6 my-4"
        >
          <div>
            <div v-if="isVotingTimeHr">
              <p class="text-[#F6AF45] text-xs font-medium">
                Voting Time...
                <span
                  >ends: {{ getFormattedTime(recentAwardHr.endVoting) }}</span
                >
              </p>
            </div>
            <div v-else>
              <p class="text-[#F6AF45] text-xs font-medium">
                Nomination time!!!
                <span
                  >ends:
                  {{ getFormattedTime(recentAwardHr.endNomination) }}</span
                >
              </p>
            </div>
            <p class="font-semibold text-[#39404F] my-3">
              {{ recentAwardHr.name }}
              <span class="text-bodytext text-sm">(200 points)</span>
            </p>
            <p class="text-bodytext text-sm">
              {{ recentAwardHr.description }}
            </p>
            <div class="flex space-x-1 mt-2 text-sm mb-3">
              <img src="~/assets/images/reward2.svg" alt="" />
              <p class="text-[#757C86]">Reward:</p>
              <p class="text-[#585E6C] font-medium">
                {{ recentAwardHr.reward }}
              </p>
            </div>
          </div>
          <div v-if="highestNominees" class="mt-4">
            <div class="">
              <div class="flex space-x-3 items-center">
                <p class="text-sm text-header">Top 5 nominees:</p>
                <div class="flex my-3" v-for="nominee in highestNomineesHr">
                  <img
                    :src="nominee._id.displayPicture"
                    alt=""
                    class="w-6 h-6 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-end mt-8">
            <button
              @click="isModalVisible = true"
              class="px-4 py-3 font-medium text-white bg-[#E4669E] rounded-xl"
            >
              Reset Award
            </button>
          </div>
        </div>
        <div v-else>
          <!-- emptystate employee -->
          <EmptyState
            v-if="loginUser.loginType === 'Employee'"
            class="py-24"
            :image="currentaward"
            title="No award in view"
            description="To enable nominations and voting, HR will establish the award program."
          />
          <!-- emptystate hr -->
          <EmptyState
            v-else
            class="py-24"
            :image="currentaward"
            title="No award in view"
            description="To enable nominations and voting, HR will establish the award program."
            button-text="Set Award"
            @button-click="isModalVisible = true"
          />
        </div>
      </div>
    </div>
    <set-award v-if="isModalVisible" @close="closeModal" />
    <vote-employee
      v-if="voteEmployee"
      :awardsId="awardsId"
      @close="closeVote"
    />
    <voting-results
      v-if="votingResultModal"
      :awardsId="awardsId"
      :awardsIdHr="awardsIdHr"
      @close="closeResult"
    />
    <nominate-employee v-if="nominateEmployee" :awardsId="awardsId" />
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import currentaward from "~/assets/images/empty_currentaward.svg";
import EmptyState from "../global/EmptyState.vue";
import SetAward from "./SetAward.vue";
import NominateEmployee from "./NominateEmployee.vue";
import VoteEmployee from "./VoteEmployee.vue";
import VotingResults from "./VotingResults.vue";
import { useLoginUser } from "~/store/auth";
import { useUserStore } from "~/store/user";
import {
  getRecentAward,
  getRecentAwardHr,
  getYourNominee,
  getHighestNominee,
  getRecentWinner,
  getRecentWinnerHR,
} from "~/services/reward";
const loginUser = useLoginUser();
const userStore = useUserStore();

const isModalVisible = ref(false);
const nominateEmployee = ref(false);
const votingResultModal = ref(false);
const voteEmployee = ref(false);
const awardsId = ref(null);
const awardsIdHr = ref(null);
const yourNominee = ref(null);
const highestNominees = ref([]);
const highestNomineesHr = ref([]);
const myId = userStore.data._id;
console.log(myId);
const awardFetched = ref(false);
const awardHrFetched = ref(false);

const openNominateModal = (awardId) => {
  awardsId.value = awardId;
  nominateEmployee.value = true;
};

const openVoteModal = (awardId) => {
  awardsId.value = awardId;
  voteEmployee.value = true;
};

const openVoteResult = (awardId) => {
  awardsId.value = awardId;
  votingResultModal.value = true;
};

const openVoteResultHr = (awardIdHr) => {
  awardsIdHr.value = awardIdHr;
  votingResultModal.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const closeVote = () => {
  voteEmployee.value = false;
};

const closeResult = () => {
  votingResultModal.value = false;
};

// Inside your <script setup>
const recentAward = ref(null);
const recentAwardHr = ref(null);
const winnerData = ref(null);
const winnerDataHr = ref(null);

// Fetch recent award data when the component is mounted or whenever needed
const fetchRecentAward = async () => {
  try {
    const awardData = await getRecentAward();
    recentAward.value = awardData.data; // Store the fetched data in the variable
  } catch (error) {
    console.error("Error fetching recent award:", error);
    // Handle the error as needed
  }
};
const fetchRecentAwardHr = async () => {
  try {
    const awardData = await getRecentAwardHr();
    recentAwardHr.value = awardData.data; // Store the fetched data in the variable
  } catch (error) {
    console.error("Error fetching recent award:", error);
    // Handle the error as needed
  }
};

const fetchNomineeData = async () => {
  try {
    // Check if both award fetches are completed
    if (awardFetched.value && awardHrFetched.value) {
      const nomineeData = await getYourNominee(recentAward.value._id); // Fetch nominee data using your ID
      yourNominee.value = nomineeData.data.nominatedUser; // Store the fetched nominee data in the variable
    } else {
      // If either or both awards are not fetched yet, wait and retry fetching nominee data
      setTimeout(fetchNomineeData, 500); // Retry after 500 milliseconds
    }
  } catch (error) {
    console.error("Error fetching nominee data:", error);
    // Handle the error as needed
  }
};

const fetchHighestNominee = async () => {
  try {
    // Check if both award fetches are completed
    if (awardFetched.value && awardHrFetched.value) {
      const nomineeData = await getHighestNominee(recentAward.value._id); // Fetch nominee data using your ID
      highestNominees.value = nomineeData.data; // Store the fetched nominee data in the variable
    } else {
      // If either or both awards are not fetched yet, wait and retry fetching nominee data
      setTimeout(fetchHighestNominee, 500); // Retry after 500 milliseconds
    }
  } catch (error) {
    console.error("Error fetching nominee data:", error);
    // Handle the error as needed
  }
};

const fetchHighestNomineeHr = async () => {
  try {
    // Check if both award fetches are completed
    if (awardFetched.value && awardHrFetched.value) {
      const nomineeData = await getHighestNominee(recentAwardHr.value._id); // Fetch nominee data using your ID
      highestNomineesHr.value = nomineeData.data; // Store the fetched nominee data in the variable
    } else {
      // If either or both awards are not fetched yet, wait and retry fetching nominee data
      setTimeout(fetchHighestNominee, 500); // Retry after 500 milliseconds
    }
  } catch (error) {
    console.error("Error fetching nominee data:", error);
    // Handle the error as needed
  }
};

const fetchWinner = async () => {
  try {
    const awardWinner = await getRecentWinner();
    winnerData.value = awardWinner.data;
  } catch (error) {
    console.error("Error fetching recent award:", error);
    // Handle the error as needed
  }
};

const fetchWinnerHr = async () => {
  try {
    const awardWinner = await getRecentWinnerHR();
    winnerDataHr.value = awardWinner.data;
  } catch (error) {
    console.error("Error fetching recent award:", error);
    // Handle the error as needed
  }
};

const isVotingTime = computed(() => {
  const currentTimestamp = new Date();

  if (
    !recentAward.value ||
    !recentAward.value.endNomination ||
    !recentAward.value.endVoting
  ) {
    console.log("Waiting for recentAward to fetch...");
    return false;
  }

  const endNominationParts = recentAward.value.endNomination.split(" ");
  const endVotingParts = recentAward.value.endVoting.split(" ");

  if (endNominationParts.length !== 5 || endVotingParts.length !== 5) {
    console.log("Invalid timestamp format");
    return false;
  }

  const endNominationTime = new Date(
    endNominationParts[0], // Year
    endNominationParts[1] - 1, // Month (zero-indexed)
    endNominationParts[2], // Day
    endNominationParts[3], // Hours
    endNominationParts[4] // Minutes
  );

  const endVotingTime = new Date(
    endVotingParts[0], // Year
    endVotingParts[1] - 1, // Month (zero-indexed)
    endVotingParts[2], // Day
    endVotingParts[3], // Hours
    endVotingParts[4] // Minutes
  );

  console.log("Current Timestamp:", currentTimestamp);
  console.log("End Nomination Time:", endNominationTime);
  console.log("End Voting Time:", endVotingTime);

  const isVoting = currentTimestamp > endNominationTime;

  console.log("Is it Voting Time?", isVoting);

  return isVoting;
});

const isVotingTimeHr = computed(() => {
  const currentTimestamp = new Date();

  if (
    !recentAwardHr.value ||
    !recentAwardHr.value.endNomination ||
    !recentAwardHr.value.endVoting
  ) {
    console.log("Waiting for recentAward to fetch...");
    return false;
  }

  const endNominationParts = recentAwardHr.value.endNomination.split(" ");
  const endVotingParts = recentAwardHr.value.endVoting.split(" ");

  if (endNominationParts.length !== 5 || endVotingParts.length !== 5) {
    console.log("Invalid timestamp format");
    return false;
  }

  const endNominationTime = new Date(
    endNominationParts[0], // Year
    endNominationParts[1] - 1, // Month (zero-indexed)
    endNominationParts[2], // Day
    endNominationParts[3], // Hours
    endNominationParts[4] // Minutes
  );

  const endVotingTime = new Date(
    endVotingParts[0], // Year
    endVotingParts[1] - 1, // Month (zero-indexed)
    endVotingParts[2], // Day
    endVotingParts[3], // Hours
    endVotingParts[4] // Minutes
  );

  console.log("Current Timestamp:", currentTimestamp);
  console.log("End Nomination Time:", endNominationTime);
  console.log("End Voting Time:", endVotingTime);

  const isVoting = currentTimestamp > endNominationTime;

  console.log("Is it Voting Time?", isVoting);

  return isVoting;
});

const isVotingTimeOver = computed(() => {
  const currentTimestamp = new Date();

  if (
    !recentAward.value ||
    !recentAward.value.endNomination ||
    !recentAward.value.endVoting
  ) {
    console.log("Waiting for recentAward to fetch...");
    return false;
  }

  const endNominationParts = recentAward.value.endNomination.split(" ");
  const endVotingParts = recentAward.value.endVoting.split(" ");

  if (endNominationParts.length !== 5 || endVotingParts.length !== 5) {
    console.log("Invalid timestamp format");
    return false;
  }

  const endNominationTime = new Date(
    endNominationParts[0], // Year
    endNominationParts[1] - 1, // Month (zero-indexed)
    endNominationParts[2], // Day
    endNominationParts[3], // Hours
    endNominationParts[4] // Minutes
  );

  const endVotingTime = new Date(
    endVotingParts[0], // Year
    endVotingParts[1] - 1, // Month (zero-indexed)
    endVotingParts[2], // Day
    endVotingParts[3], // Hours
    endVotingParts[4] // Minutes
  );

  console.log("Current Timestamp:", currentTimestamp);
  console.log("End Nomination Time:", endNominationTime);
  console.log("End Voting Time:", endVotingTime);

  const isVotingOver = currentTimestamp > endVotingTime;

  console.log("Is Voting Over?", isVotingOver);

  return isVotingOver;
});

const isVotingTimeHrOver = computed(() => {
  const currentTimestamp = new Date();

  if (
    !recentAwardHr.value ||
    !recentAwardHr.value.endNomination ||
    !recentAwardHr.value.endVoting
  ) {
    console.log("Waiting for recentAward to fetch...");
    return false;
  }

  const endNominationParts = recentAwardHr.value.endNomination.split(" ");
  const endVotingParts = recentAwardHr.value.endVoting.split(" ");

  if (endNominationParts.length !== 5 || endVotingParts.length !== 5) {
    console.log("Invalid timestamp format");
    return false;
  }

  const endNominationTime = new Date(
    endNominationParts[0], // Year
    endNominationParts[1] - 1, // Month (zero-indexed)
    endNominationParts[2], // Day
    endNominationParts[3], // Hours
    endNominationParts[4] // Minutes
  );

  const endVotingTime = new Date(
    endVotingParts[0], // Year
    endVotingParts[1] - 1, // Month (zero-indexed)
    endVotingParts[2], // Day
    endVotingParts[3], // Hours
    endVotingParts[4] // Minutes
  );

  console.log("Current Timestamp:", currentTimestamp);
  console.log("End Nomination Time:", endNominationTime);
  console.log("End Voting Time:", endVotingTime);

  const isVotingOver = currentTimestamp > endVotingTime;

  console.log("Is Voting Over?", isVotingOver);

  return isVotingOver;
});

onMounted(async () => {
  try {
    await fetchRecentAward(); // Fetch the recent award
    awardFetched.value = true; // Set the flag once the recent award is fetched
  } catch (error) {
    console.error("Error fetching recent award:", error);
    // Handle the error as needed
  }

  try {
    await fetchRecentAwardHr(); // Fetch the recent HR award
    awardHrFetched.value = true; // Set the flag once the recent HR award is fetched
  } catch (error) {
    console.error("Error fetching recent HR award:", error);
    // Handle the error as needed
  }

  fetchNomineeData(); // Start fetching nominee data after both award fetches
  fetchHighestNominee();
  fetchHighestNomineeHr();
});

const getFormattedTime = (timestamp) => {
  const [year, month, day, hours, minutes] = timestamp.split(" ");

  let formattedHours = parseInt(hours, 10);
  let period = "AM";

  if (formattedHours >= 12) {
    period = "PM";
    if (formattedHours > 12) {
      formattedHours -= 12;
    }
  }

  formattedHours = String(formattedHours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${period}`;
};

// Call the function to fetch data when the component is mounted or when needed
onMounted(() => {
  fetchRecentAward();
  fetchRecentAwardHr();
  fetchWinner();
  fetchWinnerHr();
});
</script>
