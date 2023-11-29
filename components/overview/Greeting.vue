<template>
  <div>
    <div
      v-if="loginUser.loginType === 'Employee'"
      class="bg-primary bg-opacity-10 w-full flex justify-between px-4 py-6 rounded-lg items-center"
    >
      <div class="flex flex-col">
        <p class="text-bodytext">Good Afternoon</p>
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
        <p class="text-bodytext text-lg">
          Remember info lo fin fo. I hope you have a good day today!
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
        <p class="text-bodytext">Good Afternoon</p>
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
          <p class="text-bodytext text-lg">
            Remember info lo fin fo. I hope you have a good day today!
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
    <new-affirmation v-if="isModalVisible" @close="closeModal" />
  </div>
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
import { useUserStore } from "~/store/user";
import { useCompanyStore } from "~/store/company";
import NewAffirmation from "./NewAffirmation.vue";
const userStore = useUserStore();
const loginUser = useLoginUser();
const companyStore = useCompanyStore();
const isModalVisible = ref(false);

const closeModal = () => {
  isModalVisible.value = false;
};
</script>
