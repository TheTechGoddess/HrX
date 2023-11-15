<template>
  <div class="dropdown relative">
    <input
      type="text"
      :value="getSelectedCountText()"
      @focus="showDropdown"
      @input="updateSelectedOption($event.target.value)"
      :placeholder="getPlaceholderText()"
      class="px-4 py-3.5 rounded placeholder-[#a9a3af] text-[#344054] bg-[#F7F8F9] text-sm w-full"
    />
    <img
      src="~/assets/images/down_arrow.svg"
      alt=""
      class="absolute top-1/2 right-2 transform -translate-y-1/2 w-4 h-6 bg-center bg-no-repeat cursor-pointer"
      @click="toggleDropdown"
    />
    <ul
      v-show="isOpen"
      class="dropdown-options absolute w-full top-full left-0 mt-1 py-4 bg-[#FFFFFF] border border-[#9882B3] text-[#344054] text-sm rounded"
    >
      <li
        v-for="option in options"
        :key="option"
        class="px-4 py-2 cursor-pointer"
      >
        <label class="flex items-center">
          <input
            type="checkbox"
            :checked="isSelected(option)"
            @change="selectOption(option)"
            class="form-checkbox h-4 w-4 text-[#9882B3] rounded-sm focus:ring-[#9882B3]"
          />
          <span class="ml-2">{{ option }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SelectDropdown",
  props: {
    value: {
      type: Array,
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
      isOpen: false,
    };
  },
  computed: {
    selectedOptions: {
      get() {
        return this.value;
      },
      set(options) {
        this.$emit("input", options);
      },
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    showDropdown() {
      this.isOpen = true;
    },
    hideDropdown() {
      this.isOpen = false;
    },
    isSelected(option) {
      return this.selectedOptions.includes(option);
    },
    selectOption(option) {
      if (this.isSelected(option)) {
        this.selectedOptions = this.selectedOptions.filter(
          (selectedOption) => selectedOption !== option
        );
      } else {
        this.selectedOptions.push(option);
      }
    },
    updateSelectedOption(value) {
      this.selectedOptions = value.split(",").map((option) => option.trim());
    },
    getSelectedCountText() {
      const selectedCount = this.selectedOptions.length;
      if (selectedCount === 0) {
        return "";
      } else if (selectedCount === 1) {
        return "1 selected";
      } else {
        return `${selectedCount} selected`;
      }
    },
    getPlaceholderText() {
      return this.selectedOptions.length > 0
        ? ""
        : this.placeholder || "Select an option";
    },
    handleWindowClick(event) {
      if (!this.$el.contains(event.target)) {
        // Click occurred outside the dropdown, so close it
        this.hideDropdown();
      }
    },
  },
  mounted() {
    // Add event listener when the component is mounted
    window.addEventListener("click", this.handleWindowClick);
  },
  beforeDestroy() {
    // Remove event listener before the component is destroyed
    window.removeEventListener("click", this.handleWindowClick);
  },
};
</script>

<style></style>
