<template>
  <div
    class="w-full bg-white rounded-lg py-6 flex flex-col justify-center items-center content-center text-center"
  >
    <img :src="image" alt="Empty State" class="mb-4 max-w-sm" />
    <h2 class="text-xl font-medium text-header">{{ title }}</h2>
    <p class="text-bodytext text-center mt-1">
      {{ description }}
    </p>
    <button
      v-if="buttonText"
      @click="handleButtonClick"
      class="mt-4 px-6 py-2 bg-primary text-white rounded-md"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "", // Make the button text optional
  },
});

const emits = defineEmits(["button-click"]); // Emitting an event to trigger an action

const handleButtonClick = () => {
  emits("button-click"); // Emitting the 'button-click' event
};
</script>
