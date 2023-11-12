<template>
  <div class="dropdown relative">
    <input
      type="text"
      :value="selectedOption"
      @focus="showDropdown"
      @input="updateSelectedOption($event.target.value)"
      :placeholder="placeholder || 'Select an option'"
      class="px-4 py-3.5 rounded placeholder-[#CFD0D0] text-[#344054] bg-[#F7F8FA] text-sm w-full"
    />
    <img
      src="~/assets/images/dropdown2.svg"
      alt=""
      class="absolute top-1/2 right-4 transform -translate-y-1/2 w-4 bg-center bg-no-repeat cursor-pointer"
      @click="toggleDropdown"
    />
    <ul
      v-show="isOpen"
      class="dropdown-options z-90 absolute w-full top-full left-0 mt-1 py-4 bg-[#FFFFFF] border border-[#9882B3] text-[#344054] text-sm rounded"
    >
      <li
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        class="px-4 py-2 cursor-pointer z-90"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OptionsDropdown",
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedOption: "",
      isOpen: false,
    };
  },
  mounted() {
    this.selectedOption = this.value;
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    showDropdown() {
      this.isOpen = true;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.$emit("input", option); // Emitting 'input' event with the selected option
      this.isOpen = false;
    },
    updateSelectedOption(value) {
      this.selectedOption = value;
    },
  },
};
</script>

<style></style>
