<template>
  <div>
    <div class="bg-white w-full flex justify-between p-4 rounded-lg">
      <div class="flex space-x-3">
        <div class="flex space-x-1">
          <img src="~/assets/images/award.svg" alt="" />
          <p>Award won:</p>
        </div>

        <p>0/0</p>
      </div>
      <div class="flex space-x-3">
        <div class="flex space-x-1">
          <img src="~/assets/images/points.svg" alt="" />
          <p>Total Points:</p>
        </div>

        <p>0</p>
      </div>
    </div>
    <div class="bg-white w-full flex flex-col p-4 rounded-lg my-6">
      <!-- emptystate -->
      <EmptyState
        class="py-10"
        :image="currentaward"
        title="No award in view"
        description="To enable nominations and voting, HR will establish the award program."
        button-text="Set Award"
        @button-click="showModal"
      />
      <!-- content -->
      <!-- <div class="flex justify-between">
        <p>Award</p>
        <div>
          <p>00:00</p>
        </div>
      </div>
      <div
        class="bg-[#FFFDFE] flex justify-between items-start border border-[#E4669E] border-opacity-30 rounded-lg py-4 px-6 my-4"
      >
        <div>
          <p class="text-[#182233] font-xl font-semibold">Congratulations to</p>
          <div class="flex space-x-2 my-3">
            <img src="~/assets/images/img.svg" alt="" class="w-8" />
            <div>
              <p class="text-[#39404F] text-sm font-medium">
                Stella Mini Minus
              </p>
              <p class="text-[#757C86] text-xs -mt-1">Frontend Engineer</p>
            </div>
          </div>
          <p class="font-semibold text-[#39404F]">
            Performance excellence award winner
          </p>
          <div class="flex space-x-1 mt-2 text-sm">
            <img src="~/assets/images/reward2.svg" alt="" />
            <p class="text-[#757C86]">Reward:</p>
            <p class="text-[#585E6C] font-medium">
              A 7-day fully funded trip to Ghana
            </p>
          </div>
        </div>
        <div class="space-y-10">
          <img src="~/assets/images/trophy.svg" alt="" class="mt-2" />
          <button
            class="px-4 py-3 font-medium text-white bg-[#E4669E] rounded-xl"
          >
            Voting result
          </button>
        </div>
      </div> -->
    </div>
    <set-award v-if="isModalVisible" @close="closeModal" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import currentaward from "~/assets/images/empty_currentaward.svg";
import EmptyState from "../global/EmptyState.vue";
import SetAward from "./SetAward.vue";

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const closeSetAwardModal = () => {
  setAwardModal.value = false;
};
</script>
