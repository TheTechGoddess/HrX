<template>
  <div>
    <Modal :visible="showModal">
      <div
        class="bg-white hide-scrollbar flex flex-col py-6 px-8 rounded-lg w-[300px] md:w-[500px] lg:w-[500px]"
      >
        <img
          src="~/assets/images/close.svg"
          alt=""
          class="self-end cursor-pointer"
          @click="$emit('close')"
        />
        <div class="mt-2">
          <div class="mr-5">
            <h1 class="text-xl text-[#182233] font-medium mb-2">Add Game</h1>
          </div>

          <form @submit.prevent="submit" class="mt-10">
            <div class="py-3 flex flex-col w-full">
              <label for=""> Game name <span class="text-error">*</span></label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter"
                v-model="game"
              />
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">Link <span class="text-error">*</span></label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter"
                v-model="link"
              />
            </div>
            <div class="mt-4 flex flex-col">
              <button
                type="submit"
                class="py-3 rounded-lg font-medium px-8 bg-[#E4669E] text-white self-end"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
    <InviteSuccess
      :title="'Success'"
      :message="'You’ve successfully created an award'"
      :buttonLink="'/auth/login'"
      :buttonText="'Close'"
      v-if="showSuccess"
    />
  </div>
</template>

<script setup>
import Modal from "@/components/global/Modal.vue";
import OptionsDropdown from "../global/OptionsDropdown.vue";
import InviteSuccess from "../auth/InviteSuccess.vue";
import { createGame, getGameData } from "~/services/employee";
import { ref, onMounted, nextTick, computed } from "vue";

// Data properties
const showModal = ref(false);
const showSuccess = ref(false);
const game = ref("");
const link = ref("");

const submit = async () => {
  if (game.value.trim() !== "" && link.value.trim() !== "") {
    try {
      const data = {
        name: game.value,
        link: link.value,
      };
      const response = await createGame(data);

      // Handle response or update UI accordingly
      console.log(response);
      showSuccess.value = true;
    } catch (error) {
      console.error("Error creating anonymous entry:", error);
    }
  }
};
</script>
<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
