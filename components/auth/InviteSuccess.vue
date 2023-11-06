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
          @click="closeModal"
        />
        <h1 class="text-3xl text-[#182233] font-semibold mt-4">{{ title }}</h1>
        <p class="text-[#585E6C] mb-6 mt-2">{{ message }}</p>
        <div class="mt-2">
          <nuxt-link :to="buttonLink">
            <button
              type="submit"
              class="py-4 rounded-lg font-medium px-16 bg-[#E4669E] text-white"
            >
              {{ buttonText }}
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
  props: {
    showModal: Boolean, // Prop to control the visibility of the modal
    title: String, // Prop for the modal title
    message: String, // Prop for the modal message
    buttonLink: String, // Prop for the button link
    buttonText: String, // Prop for the button text
  },
  methods: {
    closeModal() {
      this.$emit("close"); // Emit 'close' event to notify the parent component
    },
  },
};
</script>
