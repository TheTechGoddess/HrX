<template>
  <div>
    <Modal :visible="showModal">
      <div
        class="bg-white flex flex-col justify-center p-6 rounded-lg text-center w-[400px]"
      >
        <img
          src="~/assets/images/success_check.svg"
          alt=""
          class="self-center cursor-pointer w-24"
          @click="$emit('close')"
        />
        <h1 class="text-3xl text-[#182233] font-semibold mt-4">Saved!</h1>
        <p class="text-[#585E6C] mb-6 mt-2">
          You’ve successfully created a new leave for employees!
        </p>
        <div class="mt-2 flex flex-col space-y-3">
          <nuxt-link to="/dashboard/leave">
            <button
              class="py-3 rounded-lg font-medium px-10 bg-[#E4669E] text-white"
              @click="$emit('close')"
            >
              Go Back
            </button>
          </nuxt-link>
          <div>
            <button
              class="border border-[#585E6C] text-[#585E6C] px-3 py-3 rounded-lg font-medium"
              @click="$emit('close')"
            >
              Add Leave Type
            </button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/global/Modal.vue";
import LeaveType from "./LeaveType.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
