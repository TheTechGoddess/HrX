<template>
  <div>
    <div
      v-if="loginUser.loginType === 'Employee'"
      class="bg-primary bg-opacity-10 w-full flex justify-between px-4 py-6 rounded-lg items-center"
    >
      <div class="flex flex-col">
        <p class="text-bodytext">Good Day</p>
        <div class="flex space-x-3 items-center my-1">
          <img
            :src="userStore.data.displayPicture"
            alt=""
            class="w-10 h-10 rounded-full"
          />
          <h1 class="text-2xl font-medium text-header">
            {{ userStore.data.fullName }}
          </h1>
        </div>
        <p class="text-bodytext text-lg" v-if="affirmation">
          {{ affirmation }}
        </p>
      </div>
      <img
        src="~/assets/images/banner_img.svg"
        alt=""
        class="hidden md:flex -mt-10 -mb-10"
      />
    </div>
    <div
      v-else
      class="bg-primary bg-opacity-10 w-full flex justify-between px-4 py-6 rounded-lg items-center"
    >
      <div class="flex flex-col">
        <p class="text-bodytext">Good Day</p>
        <div class="flex space-x-3 items-center my-1">
          <img
            :src="companyStore.data.logo"
            alt=""
            class="w-10 h-10 rounded-full"
          />
          <h1 class="text-2xl font-medium text-header">
            <p>{{ companyStore.data.companyName }}</p>
          </h1>
        </div>
        <div class="flex space-x-1">
          <p class="text-bodytext text-lg" v-if="affirmationHr">
            {{ affirmationHr }}
          </p>
          <img
            src="~/assets/images/pen.svg"
            alt=""
            class="w-6 cursor-pointer"
            @click="isModalVisible = true"
          />
        </div>
      </div>
      <img
        src="~/assets/images/banner_img.svg"
        alt=""
        class="-mt-10 -mb-10 hidden md:flex"
      />
    </div>
    <NewAffirmation
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
import { useUserStore } from "~/store/user";
import { useCompanyStore } from "~/store/company";
import NewAffirmation from "./NewAffirmation.vue";
import { getAffirmationData, getAffirmationHrData } from "~/services/employee";
import SuccessPopup from "../global/SuccessPopup.vue";
const userStore = useUserStore();
const loginUser = useLoginUser();
const companyStore = useCompanyStore();
const isModalVisible = ref(false);
const showNotificationFromChild = ref(false);
const affirmation = ref(null);
const affirmationHr = ref(null);

const closeModal = () => {
  isModalVisible.value = false;
};

const doneModal = () => {
  isModalVisible.value = false;
  showNotificationFromChild.value = true;
  fetchAffirmationHr();
};

const closeNotificationInParent = () => {
  showNotificationFromChild.value = false;
};

const fetchAffirmation = async () => {
  try {
    const data = await getAffirmationData();
    if (!data.error) {
      console.log(data);
      affirmation.value = data.data.message;
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};

const fetchAffirmationHr = async () => {
  try {
    const data = await getAffirmationHrData();
    if (!data.error) {
      console.log(data);
      affirmationHr.value = data.data.message;
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};

onMounted(() => {
  fetchAffirmation();
  fetchAffirmationHr();
});
</script>
