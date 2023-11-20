<!-- OptionsDropdown.vue -->
<template>
  <div class="relative">
    <input
      type="text"
      :value="selectedOption"
      readonly
      @click="toggleDropdown"
      :placeholder="placeholder || 'Select'"
      class="bg-[#F7F8FA] cursor-pointer px-4 py-3.5 text-sm rounded text-[#344054] placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0 w-full"
    />
    <div
      v-show="showDropdown"
      class="absolute top-full left-0 w-full border bg-white overflow-y-auto z-10 max-h-[200px] rounded"
    >
      <ul class="mt-2 p-0">
        <li
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="p-2 cursor-pointer hover:bg-gray-100"
        >
          {{ option }}
        </li>
      </ul>
    </div>
    <div
      class="absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-6 bg-center bg-no-repeat cursor-pointer"
      style="pointer-events: none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="black"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6"
      >
        <path d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

// Props
const { options, modelValue, placeholder } = defineProps([
  "options",
  "modelValue",
  "placeholder",
]);
const emits = defineEmits(["update:modelValue"]);

// Selected option
const selectedOption = ref(modelValue);

// Show/hide dropdown
const showDropdown = ref(false);

// Toggle dropdown visibility
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Select an option and hide the dropdown
const selectOption = (option) => {
  selectedOption.value = option;
  emits("update:modelValue", option);
  showDropdown.value = false;
};
</script>
