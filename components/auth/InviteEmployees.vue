<template>
  <div>
    <Modal :visible="showModal">
      <div class="bg-white flex flex-col py-6 px-8 rounded-lg w-[650px]">
        <img
          src="~/assets/images/close.svg"
          alt=""
          class="self-end cursor-pointer"
          @click="$emit('close')"
        />
        <div class="mt-2">
          <div class="mr-5">
            <h1 class="text-xl text-[#182233] font-medium mb-2">
              Invite Employees
            </h1>
            <p class="text-[#585E6C] w-[550px]">
              Based on the plan you chose ({{ selectedPlanName }}) you can
              {{ inviteMessage }}
              {{ selectedPlanMaxEmployees }}
              employees
            </p>
          </div>

          <form action="" class="mt-10">
            <p>Employee(s)’s work emails</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              class="border mt-3 w-full border-[#CFD0D0] rounded-lg placeholder:text-[#CFD0D0] px-4 py-3 focus:outline-none"
              placeholder="Enter employees active email address"
            ></textarea>
            <div class="flex justify-end mt-6">
              <button class="py-4 rounded-lg font-medium px-16 text-[#E4669E]">
                Skip
              </button>
              <button
                type="submit"
                class="py-4 rounded-lg font-medium px-16 bg-[#E4669E] text-white"
              >
                Invite
              </button>
            </div>
          </form>
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
