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
            <h1 class="text-xl text-[#182233] font-medium mb-2">
              Add Affirmation
            </h1>
          </div>

          <form @submit.prevent="submit" class="mt-10">
            <div class="py-3 flex flex-col w-full">
              <label for="">
                Affirmation <span class="text-error">*</span></label
              >
              <textarea
                v-model="game"
                placeholder="Type here"
                cols="20"
                rows="5"
                class="mt-3 w-full bg-[#F7F8FA] rounded-lg placeholder:text-[#CFD0D0] px-4 py-3 focus:outline-none"
              ></textarea>
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
import { createAffirmation } from "~/services/employee";
import { ref, nextTick } from "vue";
import { defineEmits } from "vue";

// Data properties
const showModal = ref(false);
const game = ref("");
const showNotification = ref(false);
const emits = defineEmits(["done", "showSuccessNotification"]);

const submit = async () => {
  if (game.value.trim() !== "") {
    try {
      const data = {
        message: game.value,
      };
      const response = await createAffirmation(data);

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
