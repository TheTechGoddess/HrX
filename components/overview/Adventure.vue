<template>
  <div
    class="bg-white w-full flex flex-col rounded-lg my-6 max-h-[400px] overflow-auto slim-scrollbar py-4"
  >
    <div class="flex justify-between items-center px-4">
      <h1 class="text-header text-xl">Weekend Adventure</h1>
      <p
        class="text-primary font-medium cursor-pointer"
        v-if="loginUser.loginType === 'Company'"
        @click="isModalVisible = true"
      >
        Add New
      </p>
    </div>
    <div
      class="my-4"
      v-if="loginUser.loginType === 'Employee' && adventures.length > 0"
    >
      <div
        v-for="adventure in adventures"
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/adventure_img.svg" alt="" />
        <div class="flex flex-col space-y-1">
          <p class="text-bodytext font-medium">{{ adventure.name }}</p>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/location.svg" alt="" />
            <p class="text-body-text">Venue : {{ adventure.venue }}</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/calender.svg" alt="" />
            <p class="text-body-text text-xs">
              {{ formatDate(adventure.createdAt) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="my-4"
      v-else-if="loginUser.loginType === 'Company' && adventuresHr.length > 0"
    >
      <div
        v-for="adventure in adventuresHr"
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/adventure_img.svg" alt="" />
        <div class="flex flex-col space-y-1">
          <p class="text-bodytext font-medium">{{ adventure.name }}</p>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/location.svg" alt="" />
            <p class="text-body-text">Venue : {{ adventure.venue }}</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/calender.svg" alt="" />
            <p class="text-body-text text-xs">
              {{ formatDate(adventure.createdAt) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <EmptyState
      v-else
      class="py-32"
      :image="currentaward"
      title="No adventures in view"
      description="Hr will establish the Adventures."
    />
    <new-adventure
      v-if="isModalVisible"
      @close="closeModal"
      @done="doneModal"
    />
    <SuccessPopup
      v-if="showNotificationFromChild"
      :message="'Success!!'"
      @closed="closeNotificationInParent"
    />
  </div>
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
import NewAdventure from "./NewAdventure.vue";
import { getAdventureData, getAdventureHRData } from "~/services/employee";
import EmptyState from "../global/EmptyState.vue";
import currentaward from "~/assets/images/empty_currentaward.svg";
import SuccessPopup from "../global/SuccessPopup.vue";
const loginUser = useLoginUser();
const isModalVisible = ref(false);
const adventures = ref([]);
const adventuresHr = ref([]);
const showNotificationFromChild = ref(false);
const closeModal = () => {
  isModalVisible.value = false;
};
const doneModal = () => {
  isModalVisible.value = false;
  showNotificationFromChild.value = true;
};
const closeNotificationInParent = () => {
  showNotificationFromChild.value = false;
};
const fetchAdeventure = async () => {
  try {
    const data = await getAdventureData();
    if (!data.error) {
      console.log(data);
      adventures.value = data.data.docs; // Update the reactive variable
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};
const fetchAdeventureHr = async () => {
  try {
    const data = await getAdventureHRData();
    if (!data.error) {
      console.log(data);
      adventuresHr.value = data.data.docs; // Update the reactive variable
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

onMounted(() => {
  fetchAdeventure();
  fetchAdeventureHr();
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
