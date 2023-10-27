<template>
  <div>
    <Modal :visible="showModal">
      <div
        class="bg-white flex flex-col justify-center p-10 rounded-lg text-center w-[400px]"
      >
        <img
          src="~/assets/images/success_check.svg"
          alt=""
          class="self-center cursor-pointer w-12"
          @click="$emit('close')"
        />
        <h1 class="text-2xl text-[#182233] font-semibold mt-8">Successful</h1>
        <p class="text-[#585E6C] mb-6 mt-2">
          All processes have been completed successfully
        </p>
        <div class="mt-6">
          <nuxt-link to="/auth/login">
            <button
              type="submit"
              class="py-4 rounded-lg font-medium px-16 bg-[#E4669E] text-white"
            >
              Log in
            </button>
          </nuxt-link>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/global/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  created() {
    // Retrieve values from localStorage and set them to data properties
    this.selectedPlanName =
      localStorage.getItem("selectedPlanName") || "Default Plan";
    this.selectedPlanMaxEmployees =
      localStorage.getItem("selectedPlanMaxEmployees") || 0;
  },
  computed: {
    inviteMessage() {
      // Check if selectedPlanMaxEmployees is Infinity, and modify the text accordingly
      if (this.selectedPlanMaxEmployees === "Infinity") {
        return "";
      } else {
        return "only invite up to";
      }
    },
  },
};
</script>
