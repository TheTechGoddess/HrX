<template>
  <div
    class="bg-white w-full flex flex-col rounded-lg my-6 max-h-[400px] overflow-auto slim-scrollbar py-4"
  >
    <div class="flex justify-between items-center px-4">
      <h1 class="text-header text-xl">Weekend Adventure</h1>
      <p
        class="text-primary font-medium cursor-pointer"
        v-if="loginUser.loginType === 'Company'"
      >
        Add New
      </p>
    </div>
    <div class="my-4">
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/adventure_img.svg" alt="" />
        <div class="flex flex-col space-y-1">
          <p class="text-bodytext font-medium">Piano people</p>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/location.svg" alt="" />
            <p class="text-body-text">Venue : The Good Beach VI Lagos</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/calender.svg" alt="" />
            <p class="text-body-text text-xs">12th March 2024</p>
          </div>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/adventure_img.svg" alt="" />
        <div class="flex flex-col space-y-1">
          <p class="text-bodytext font-medium">Piano people</p>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/location.svg" alt="" />
            <p class="text-body-text">Venue : The Good Beach VI Lagos</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/calender.svg" alt="" />
            <p class="text-body-text text-xs">12th March 2024</p>
          </div>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/adventure_img.svg" alt="" />
        <div class="flex flex-col space-y-1">
          <p class="text-bodytext font-medium">Piano people</p>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/location.svg" alt="" />
            <p class="text-body-text">Venue : The Good Beach VI Lagos</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/calender.svg" alt="" />
            <p class="text-body-text text-xs">12th March 2024</p>
          </div>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/adventure_img.svg" alt="" />
        <div class="flex flex-col space-y-1">
          <p class="text-bodytext font-medium">Piano people</p>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/location.svg" alt="" />
            <p class="text-body-text">Venue : The Good Beach VI Lagos</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/calender.svg" alt="" />
            <p class="text-body-text text-xs">12th March 2024</p>
          </div>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/adventure_img.svg" alt="" />
        <div class="flex flex-col space-y-1">
          <p class="text-bodytext font-medium">Piano people</p>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/location.svg" alt="" />
            <p class="text-body-text">Venue : The Good Beach VI Lagos</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/calender.svg" alt="" />
            <p class="text-body-text text-xs">12th March 2024</p>
          </div>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/adventure_img.svg" alt="" />
        <div class="flex flex-col space-y-1">
          <p class="text-bodytext font-medium">Piano people</p>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/location.svg" alt="" />
            <p class="text-body-text">Venue : The Good Beach VI Lagos</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img class="" src="~/assets/images/calender.svg" alt="" />
            <p class="text-body-text text-xs">12th March 2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
const loginUser = useLoginUser();
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
