<template>
  <div>
    <Modal :visible="showModal" @close="showModal = false">
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
    <SuccessPopup
      v-if="showNotification"
      :message="'Success!!'"
      @closed="handleNotificationClose"
    />
  </div>
</template>

<script setup>
import Modal from "@/components/global/Modal.vue";
import SuccessPopup from "../global/SuccessPopup.vue";
import { createGame } from "~/services/employee";
import { ref, nextTick } from "vue";
import { defineEmits } from "vue";

// Data properties
const showModal = ref(false);
const game = ref("");
const link = ref("");
const showNotification = ref(false);
const emits = defineEmits(["done", "showSuccessNotification"]);

const submit = async () => {
  if (game.value.trim() !== "" && link.value.trim() !== "") {
    try {
      const data = {
        name: game.value,
        link: link.value,
      };
      const response = await createGame(data);

      console.log(response);
      emits("done");
      showModal.value = false;
      await nextTick();
      // Emit an event to inform the parent to display the success notification
      emits("showSuccessNotification");
      showNotification.value = true; // Show the success notification
    } catch (error) {
      console.error("Error creating anonymous entry:", error);
    }
  }
};

// Handle closing the success notification internally in the component
const handleNotificationClose = () => {
  showNotification.value = false;
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
