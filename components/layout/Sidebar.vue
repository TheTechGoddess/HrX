<template>
  <div class="my-10 fixed">
    <div class="px-5">
      <img src="~/assets/images/logo.svg" alt="" class="w-[44px]" />
    </div>
    <div class="my-10 flex flex-col">
      <router-link
        v-for="(page, index) in pages"
        :key="index"
        :to="page.path"
        :style="{
          'background-image': isActive(page.path)
            ? 'linear-gradient(to right, #FAE0EC, #FCF0F5, #F8F8F8)'
            : 'none',
          'border-left': isActive(page.path) ? '5px solid #E4669E' : 'none',
        }"
        class="flex py-2.5 my-1 px-5 rounded-l-xl"
      >
        <img :src="page.imageSrc" alt="" />
        <p class="mx-2 text-sm text-[#757C86]">{{ page.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import overview from "~/assets/images/overview.svg";
import wellness from "~/assets/images/wellness.svg";
import user from "~/assets/images/user.svg";
import leave from "~/assets/images/leave.svg";

const route = useRoute();

const pages = [
  { title: "Overview", path: "/dashboard/overview", imageSrc: overview },
  {
    title: "Wellness Program",
    path: "/dashboard/wellness",
    imageSrc: wellness,
  },
  {
    title: "User Management",
    path: "/dashboard/user-management",
    imageSrc: user,
  },
  { title: "Leave Management", path: "/dashboard/leave", imageSrc: leave },
  {
    title: "Performance Management",
    path: "/dashboard/performance-management",
    imageSrc: overview,
  },
];

function isActive(path) {
  return route.path.startsWith(path);
}
</script>
<style scoped></style>
