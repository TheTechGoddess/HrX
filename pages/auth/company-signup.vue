<template>
  <div class="py-10 pl-20 bg-[#FFF]">
    <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
    <LayoutProgressBar />
    <div>
      <h1 class="text-2xl text-[#182233] font-semibold">
        Registration of company
      </h1>
      <p class="text-[#585E6C]">
        Please ensure to provide all the required information
      </p>
      <form
        action=""
        class="my-3 text-[#39404F] mr-48 placeholder:text-[#CFD0D0]"
      >
        <div class="py-3">
          <label for="">Upload company’s logo *</label>
          <div
            class="mt-2 w-12 h-12 rounded-full bg-[#F7F8FA] flex justify-center"
          >
            <img src="~/assets/images/add.svg" alt="" class="w-4" />
          </div>
        </div>
        <div class="py-3 flex flex-col">
          <label for="">Company’s name *</label>
          <input
            type="text"
            class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
            placeholder="Enter your company’s name"
          />
        </div>
        <div class="py-3 flex flex-col">
          <label for="">Company’s Email Address *</label>
          <input
            type="text"
            class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
            placeholder="Enter your company’s email address"
          />
        </div>
        <div class="py-3 flex flex-col">
          <label for="">Industry *</label>
          <input
            type="text"
            class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
            placeholder="Enter your Industry"
          />
        </div>
        <div class="py-3 flex flex-col">
          <label for="">Country *</label>
          <input
            type="text"
            class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
            placeholder="Select Country"
          />
        </div>
        <div class="py-3 flex flex-col">
          <label for="">Phone number *</label>
          <input
            type="text"
            class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
            placeholder="Enter your company’s name"
          />
        </div>
        <div class="py-3 flex flex-col">
          <label for="">Password *</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="bg-[#F7F8FA] px-4 py-4 mt-2 w-full rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
              placeholder="Password must be alphanumeric"
            />
            <i
              @click="showPassword = !showPassword"
              class="absolute top-[36px] right-4 transform -translate-y-1/2 cursor-pointer"
            >
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CFD0D0"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CFD0D0"
                class="bi bi-eye-slash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                />
                <path
                  d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                />
                <path
                  d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                />
              </svg>
            </i>
          </div>
        </div>
        <div class="py-3 flex flex-col">
          <label for="">Confirm Password *</label>
          <div class="relative">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              class="bg-[#F7F8FA] px-4 py-4 mt-2 w-full rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
              placeholder="Password must be a match"
            />
            <i
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute top-[36px] right-4 transform -translate-y-1/2 cursor-pointer"
            >
              <svg
                v-if="showConfirmPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CFD0D0"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CFD0D0"
                class="bi bi-eye-slash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                />
                <path
                  d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                />
                <path
                  d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                />
              </svg>
            </i>
          </div>
        </div>
        <div class="flex items-center mt-2 mb-1">
          <input
            type="checkbox"
            id="agreeCheckbox"
            class="hidden"
            @click="toggleCheckbox"
          />
          <label
            for="agreeCheckbox"
            class="relative cursor-pointer select-none"
          >
            <div
              class="w-4 h-4 border border-[#E4669E] rounded flex items-center justify-center"
              :class="{
                'bg-[#E4669E]': isChecked,
                'bg-transparent': !isChecked,
              }"
            >
              <img src="~/assets/images/checked.svg" alt="" v-if="isChecked" />
            </div>
          </label>
          <span class="ml-2 text-[#585E6C] text-sm font-normal"
            >I have read and agree to HRX’s
            <span class="text-[#182233]">Terms and Conditions</span></span
          >
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="py-4 rounded-lg font-medium px-16 bg-[#DFE1E4] text-white"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
definePageMeta({
  layout: "auth",
});
const isChecked = ref(false);
const toggleCheckbox = () => {
  isChecked.value = !isChecked.value;
};
const showPassword = ref(false);
const showConfirmPassword = ref(false);
</script>
