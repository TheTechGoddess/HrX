<template>
  <div
    class="bg-white w-full flex flex-col rounded-lg my-6 max-h-[390px] overflow-auto slim-scrollbar"
  >
    <h1 class="text-header text-xl m-4">Anonymous Message</h1>
    <form class="mt-4 mx-4" v-if="loginUser.loginType === 'Employee'">
      <p>
        Tell your HR what’s on your mind. We promise to keep your identity
        hidden🤫
      </p>
      <textarea
        name="emailAddresses"
        placeholder="Drop your thoughts here"
        cols="20"
        rows="5"
        class="mt-3 w-full bg-[#F7F8FA] rounded-lg placeholder:text-[#CFD0D0] px-4 py-3 focus:outline-none"
      ></textarea>
      <!-- <p v-if="errorMessage" class="text-[#FF4B41]">{{ errorMessage }}</p> -->
      <div class="flex justify-end mt-6 mb-4">
        <button
          type="submit"
          class="py-3 rounded-lg font-medium px-8 bg-[#E4669E] text-white"
        >
          Send
        </button>
      </div>
    </form>
    <div v-else>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/anonymous.svg" alt="" />
        <div class="flex flex-col space-y-2">
          <p class="text-header">Anonymous</p>
          <p class="text-body-text">
            I think Kaytln is a bad HR and she needs to go soon!
          </p>
          <p class="text-body-text text-xs">12th Oct 2023</p>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/anonymous.svg" alt="" />
        <div class="flex flex-col space-y-2">
          <p class="text-header">Anonymous</p>
          <p class="text-body-text">
            I think Kaytln is a bad HR and she needs to go soon!
          </p>
          <p class="text-body-text text-xs">12th Oct 2023</p>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/anonymous.svg" alt="" />
        <div class="flex flex-col space-y-2">
          <p class="text-header">Anonymous</p>
          <p class="text-body-text">
            I think Kaytln is a bad HR and she needs to go soon!
          </p>
          <p class="text-body-text text-xs">12th Oct 2023</p>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/anonymous.svg" alt="" />
        <div class="flex flex-col space-y-2">
          <p class="text-header">Anonymous</p>
          <p class="text-body-text">
            I think Kaytln is a bad HR and she needs to go soon!
          </p>
          <p class="text-body-text text-xs">12th Oct 2023</p>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/anonymous.svg" alt="" />
        <div class="flex flex-col space-y-2">
          <p class="text-header">Anonymous</p>
          <p class="text-body-text">
            I think Kaytln is a bad HR and she needs to go soon!
          </p>
          <p class="text-body-text text-xs">12th Oct 2023</p>
        </div>
      </div>
      <div
        class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
      >
        <img class="" src="~/assets/images/anonymous.svg" alt="" />
        <div class="flex flex-col space-y-2">
          <p class="text-header">Anonymous</p>
          <p class="text-body-text">
            I think Kaytln is a bad HR and she needs to go soon!
          </p>
          <p class="text-body-text text-xs">12th Oct 2023</p>
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
