<template>
  <div class="">
    <div class="bg-[#FEFDF2] w-full flex flex-col relative rounded-2xl pb-3">
      <h1
        class="text-[40px] px-6 font-semibold my-10 text-center text-[#182233]"
      >
        See how teams use HRX
      </h1>
      <div class="flex justify-between mb-8 px-6">
        <div class="flex items-center justify-center w-full my-5">
          <button
            v-for="(button, index) in buttons"
            :key="index"
            @click="activeButton = index"
            :class="{
              'px-5 py-2.5 md:mx-5 lg:mx-10 text-small-normal': true,
              'text-primary-blue border-b-2 border-b-[#E4669E]':
                activeButton === index,
              'text-light-text': activeButton !== index,
            }"
          >
            {{ button.label }}
          </button>
        </div>
      </div>
      <div>
        <div v-if="activeButton === 0" class="lg:flex justify-between">
          <div class="w-full lg:w-[50%] flex flex-col px-6">
            <h1
              class="text-[#39404F] font-semibold text-[32px] mt-3 self-start"
            >
              Simplifying admin for smoother operations.
            </h1>
            <hr class="w-[45%] bg-[#757C86] my-6" />
            <div class="flex">
              <img
                src="~/assets/images/check.svg"
                alt=""
                class="-mt-7 md:mt-0"
              />
              <p class="text-xl text-[#757C86]">
                Gain valuable insights into your workforce.
              </p>
            </div>
            <div class="flex my-5">
              <img
                src="~/assets/images/check.svg"
                alt=""
                class="-mt-7 md:mt-0"
              />
              <p class="text-xl text-[#757C86]">
                Make data driven decisions for HR strategy.
              </p>
            </div>
            <div class="flex">
              <img
                src="~/assets/images/check.svg"
                alt=""
                class="-mt-7 md:mt-0"
              />
              <p class="text-xl text-[#757C86]">
                Predict and plan for future staffing needs.
              </p>
            </div>
            <div class="my-5">
              <nuxt-link to="/auth/company-signup">
                <button class="bg-[#E4669E] text-white py-3 px-4 rounded-lg">
                  Get Started
                </button>
              </nuxt-link>
            </div>
          </div>
          <div class="hidden lg:flex lg:flex-col w-full lg:w-[50%]">
            <div
              class="bg-[url('~/assets/images/design.svg')] bg-cover bg-top-right px-6"
            >
              <img src="~/assets/images/box.svg" alt="" />
            </div>
          </div>
        </div>
        <div v-if="activeButton === 1">Managers & Supervisors</div>
        <div v-if="activeButton === 2">Employees</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const activeButton = ref(0);
const buttons = [
  { label: "HR professionals" },
  { label: "Managers & Supervisors" },
  { label: "Employees" },
];
</script>
