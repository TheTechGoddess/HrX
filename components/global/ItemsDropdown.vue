<!-- ItemsDropdown.vue -->
<template>
  <div class="dropdown-container">
    <div class="dropdown" :class="{ open: isOpen }" @click="toggleDropdown">
      <button
        class="border border-[#CFD0D0] space-x-2 py-2 px-3 flex rounded-xl items-center"
        ref="dropdownButton"
      >
        <img src="~/assets/images/annual.svg" alt="" />
        <span>{{ selectedItem }}</span>
        <img src="~/assets/images/down_arrow.svg" alt="" />
      </button>
      <ul v-if="isOpen" class="dropdown-menu">
        <li
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(item)"
          class="bg-white"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, defineEmits } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["itemSelected"]);

const selectedItem = ref(props.items[0]);
const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectItem(item) {
  selectedItem.value = item;
  isOpen.value = false;
  // Emit the 'itemSelected' event with the selected item
  emits("itemSelected", item);
}

// Close dropdown when clicking outside the component
onMounted(() => {
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown-container")) {
      isOpen.value = false;
    }
  });
});

// Cleanup event listener on component unmount
onUnmounted(() => {
  document.removeEventListener("click", () => {
    isOpen.value = false;
  });
});
</script>

<style scoped>
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 24320;
  left: 0;
  display: none;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 0;
  margin: 0;
  list-style: none;
  max-height: 200px; /* Limit the maximum height of the dropdown */
  overflow-y: auto; /* Enable scrollbar if content exceeds max-height */
  width: 100%;
  border-radius: 10px;
}

.dropdown-menu li {
  padding: 5px 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}

.dropdown.open .dropdown-menu {
  display: block;
}
</style>
