<template>
  <div
    class="bg-white w-full flex flex-col rounded-lg my-6 max-h-[400px] overflow-auto slim-scrollbar p-4"
  >
    <div class="flex justify-between items-center">
      <h1 class="text-header text-xl">Games</h1>
      <p
        v-if="loginUser.loginType === 'Company'"
        @click="isModalVisible = true"
        class="text-primary font-medium cursor-pointer"
      >
        Add New
      </p>
    </div>
    <div
      v-if="games.length > 0 && loginUser.loginType === 'Employee'"
      class="flex justify-between flex-wrap my-2 text-center"
    >
      <a
        v-for="game in games"
        :key="game._id"
        :href="game.link"
        target="_blank"
        rel="noopener noreferrer"
        class="w-36 h-24 flex justify-center my-2 items-center content-center text-center shadow-inner cursor-pointer rounded-lg bg-deactivated p-4"
      >
        <img v-if="game.thumbnailUrl" :src="game.thumbnailUrl" alt="" />
        <p v-else class="font-bold text-xl text-header">{{ game.name }}</p>
      </a>
    </div>
    <div
      v-else-if="gamesHr.length > 0 && loginUser.loginType === 'Company'"
      class="flex justify-between flex-wrap my-2 text-center"
    >
      <a
        v-for="game in gamesHr"
        :key="game._id"
        :href="game.link"
        target="_blank"
        rel="noopener noreferrer"
        class="w-36 h-24 flex justify-center my-2 items-center content-center text-center shadow-inner cursor-pointer rounded-lg bg-deactivated p-4"
      >
        <img v-if="game.thumbnailUrl" :src="game.thumbnailUrl" alt="" />
        <p v-else class="font-bold text-xl text-header">{{ game.name }}</p>
      </a>
    </div>
    <EmptyState
      v-else
      class="py-32"
      :image="currentaward"
      title="No games in view"
      description="Hr will establish the Games."
    />
  </div>
  <new-game v-if="isModalVisible" @close="closeModal" @done="doneModal"/>
  <SuccessPopup
    v-if="showNotificationFromChild"
    :message="'Success!!'"
    @closed="closeNotificationInParent"
  />
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
import NewGame from "./NewGame.vue";
import { getGameData, getGameDataHR } from "~/services/employee";
import EmptyState from "../global/EmptyState.vue";
import currentaward from "~/assets/images/empty_currentaward.svg";
import SuccessPopup from "../global/SuccessPopup.vue";
const loginUser = useLoginUser();
const isModalVisible = ref(false);
const showNotificationFromChild = ref(false);
const closeModal = () => {
  isModalVisible.value = false;
};
const doneModal = () => {
  isModalVisible.value = false;
  showNotificationFromChild.value = true
};
const games = ref([]);
const gamesHr = ref([]);

// Method to close the success notification in the parent
const closeNotificationInParent = () => {
  showNotificationFromChild.value = false;
};

const fetchGames = async () => {
  try {
    const data = await getGameData();
    if (!data.error) {
      console.log(data);
      games.value = data.data.docs; // Update the reactive variable
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};

const fetchGamesHr = async () => {
  try {
    const data = await getGameDataHR();
    if (!data.error) {
      console.log(data);
      gamesHr.value = data.data.docs; // Update the reactive variable
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};

onMounted(() => {
  fetchGames();
  fetchGamesHr();
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
