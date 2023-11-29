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
              Words of Affirmation
            </h1>
          </div>

          <form @submit.prevent="submit" class="mt-10">
            <div class="py-3 flex flex-col w-full">
              <label for="">
                Words of affirmation <span class="text-error">*</span></label
              >
              <textarea
                v-model="affirmation"
                placeholder="Drop your thoughts here"
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
    <SuccessPopup
      v-if="showNotification"
      :message="'Success!!'"
      @closed="showNotification = false"
    />
  </div>
</template>

<script setup>
import Modal from "@/components/global/Modal.vue";
import OptionsDropdown from "../global/OptionsDropdown.vue";
import SuccessPopup from "../global/SuccessPopup.vue";
import { createGame, getGameData } from "~/services/employee";
import { ref, onMounted, nextTick, computed } from "vue";

// Data properties
const showModal = ref(false);
const game = ref("");
const link = ref("");
const showNotification = ref(false);

const submit = async () => {
  if (game.value.trim() !== "" && link.value.trim() !== "") {
    try {
      const data = {
        name: game.value,
        link: link.value,
      };
      const response = await createGame(data);

      console.log(response);
      showModal.value = false;
      await nextTick();
      showNotification.value = true;
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
