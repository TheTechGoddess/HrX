<template>
  <div>
    <div class="my-10 fixed hidden lg:flex lg:flex-col">
      <div class="px-5 hidden lg:flex">
        <nuxt-link to="/dashboard/overview">
          <img src="~/assets/images/logo.svg" alt="" class="w-[44px]"
        /></nuxt-link>
      </div>
      <div class="my-10">
        <router-link
          v-for="(page, index) in filteredPages"
          :key="index"
          :to="page.path"
          :style="{
            'background-image': isActive(page.path)
              ? 'linear-gradient(to right, #FAE0EC, #FCF0F5, #F8F8F8)'
              : 'none',
            'border-left': isActive(page.path) ? '5px solid #E4669E' : 'none',
          }"
          class="flex py-2.5 w-full my-1 px-5 rounded-l-xl"
        >
          <img :src="page.imageSrc" alt="" />
          <p class="mx-2 text-sm text-[#757C86]">{{ page.title }}</p>
        </router-link>
      </div>
    </div>
    <!-- mobile view -->
    <div class="fixed flex flex-col lg:hidden">
      <div class="flex flex-col lg:hidden">
        <button
          @click="toggleSidebar"
          class="text-gray-800 focus:outline-none z-50 ml-5 mt-6"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="#E4669E"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              :class="{ hidden: sidebarVisible, block: !sidebarVisible }"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
            <path
              :class="{ hidden: !sidebarVisible, block: sidebarVisible }"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div
        class="fixed inset-y-0 left-0 z-40 my-5 bg-white w-64 md:w-auto shadow-lg md:shadow-none transform transition-transform duration-300"
        :class="{
          '-translate-x-full': !sidebarVisible,
          'translate-x-0': sidebarVisible,
        }"
      >
        <!-- Sidebar content -->
        <div class="my-10 flex flex-col">
          <router-link
            v-for="(page, index) in filteredPages"
            :key="index"
            :to="page.path"
            :style="{
              'background-image': isActive(page.path)
                ? 'linear-gradient(to right, #FAE0EC, #FCF0F5, #F8F8F8)'
                : 'none',
              'border-left': isActive(page.path) ? '5px solid #E4669E' : 'none',
            }"
            class="flex py-2.5 w-full my-1 px-5 rounded-l-xl"
          >
            <img :src="page.imageSrc" alt="" />
            <p class="mx-2 text-sm text-[#757C86]">{{ page.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import overview from "~/assets/images/overview.svg";
import wellness from "~/assets/images/wellness.svg";
import user from "~/assets/images/user.svg";
import leave from "~/assets/images/leave.svg";
import { useLoginUser } from "~/store/auth";

const sidebarVisible = ref(false);

function toggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value;
}

const loginUser = useLoginUser();
const route = useRoute();

const pages = [
  { title: "Overview", path: "/dashboard/overview", imageSrc: overview },

  {
    title: "Reward & Recognition",
    path: "/dashboard/reward",
    imageSrc: wellness,
  },
  {
    title: "Employee Management",
    path: "/dashboard/employee-management",
    imageSrc: user,
  },
  { title: "Leave Management", path: "/dashboard/leave", imageSrc: leave },
  {
    title: "Performance Management",
    path: "/dashboard/performance-management",
    imageSrc: overview,
  },
  {
    title: "Wellness Program",
    path: "/dashboard/wellness",
    imageSrc: wellness,
  },
];

const filteredPages = computed(() => {
  if (loginUser.loginType === "Employee") {
    return pages.filter((page) => page.title !== "Employee Management");
  }
  return pages;
});

function isActive(path) {
  return route.path.startsWith(path);
}
</script>

<style scoped></style>
