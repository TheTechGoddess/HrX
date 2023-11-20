<template>
  <div class="flex justify-between px-6 items-center content-center">
    <div>
      <div
        class="flex items-center space-x-2"
        v-if="loginUser.loginType === 'Employee'"
      >
        <img
          :src="userStore.data.company.logo"
          alt=""
          class="w-8 h-8 rounded-full"
        />
        <p>{{ userStore.data.company.companyName }}</p>
        <img src="~/assets/images/down_arrow.svg" alt="" class="w-2" />
      </div>
      <div class="flex items-center space-x-2" v-else>
        <img
          :src="companyStore.data.logo"
          alt=""
          class="w-8 h-8 rounded-full"
        />
        <p>{{ companyStore.data.companyName }}</p>
      </div>
    </div>

    <div class="lg:ml-36 w-[50%] relative hidden md:flex">
      <input
        type="search"
        name=""
        id=""
        class="w-full bg-[#F7FAFC] border border-[#ECEDEF] py-2 px-10 rounded-lg focus:outline-none focus:ring-0"
        placeholder="Search..."
      />
      <img
        src="~/assets/images/search.svg"
        alt=""
        class="absolute top-2.5 left-4"
      />
    </div>
    <div class="flex items-center space-x-6">
      <div class="p-2 bg-[#FCF0F5] rounded-full">
        <img src="~/assets/images/notifications.svg" alt="" class="w-6" />
      </div>
      <nuxt-link to="/dashboard/overview/settings"
        ><div class="p-2 bg-[#FCF0F5] rounded-full">
          <img src="~/assets/images/settings.svg" alt="" class="w-6" /></div
      ></nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { getMe, getCompany } from "~/services/auth";
import { useLoginUser } from "~/store/auth";
import { useUserStore } from "~/store/user";
import { useCompanyStore } from "~/store/company";
const userStore = useUserStore();
const loginUser = useLoginUser();
const companyStore = useCompanyStore();
// if ((loginUser.loginType = "Employee")) {
// }
onBeforeMount(async () => {
  const userStore = useUserStore();

  const fetchUserData = async () => {
    try {
      const response = await getMe();
      if (response.error) {
        userStore.setError(response.error);
      } else {
        userStore.setId(response.data._id);
        userStore.setEmail(response.data.email);
        userStore.setFullName(response.data.fullName);
        userStore.setRole(response.data.role);
        userStore.setStatus(response.data.status);
        userStore.setIsEmployed(response.data.isEmployed);
        userStore.setDisplayPicture(response.data.displayPicture);

        // Set company-related data
        userStore.setCompanyName(response.data.company.companyName);
        userStore.setCompanyLogo(response.data.company.logo);
        console.log("Data stored in userStore:", userStore); // Log the entire store
      }
    } catch (error) {
      userStore.setError("An unexpected error occurred.");
    }
  };

  const fetchCompanyData = async () => {
    try {
      const response = await getCompany();
      if (response.error) {
        companyStore.setError(response.error);
        console.log(error);
      } else {
        companyStore.setId(response.data._id);
        companyStore.setCompanyEmail(response.data.companyEmail);
        companyStore.setCompanyName(response.data.companyName);
        companyStore.setRole(response.data.role);
        companyStore.setLogo(response.data.logo);
        companyStore.setSubscriptionType(response.data.subscriptionType);
        console.log(response); // Log the entire store
      }
    } catch (error) {
      companyStore.setError("An unexpected error occurred.");
    }
  };

  // Call the fetchUserData function when the component mounts
  fetchUserData();
  fetchCompanyData();
});
</script>
