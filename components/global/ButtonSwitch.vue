<template>
  <div class="w-full">
    <div class="flex justify-between items-center w-full">
      <div class="w-full">
        <div class="flex border-b border-b-[#ECEDEF] w-full">
          <button
            class=""
            v-for="(button, index) in buttons"
            :key="index"
            :class="[
              ' px-1 py-2.5 mx-4 ',
              activeButton === index
                ? 'border-b border-b-[#E4669E] text-[#E4669E]'
                : 'text-[#CFD0D0]',
            ]"
            @click="toggleContent(index)"
          >
            {{ button.label }}
          </button>
        </div>
      </div>
    </div>
    <div class="mx-4 mt-10">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonSwitch",

  props: {
    buttons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeButton: 0,
    };
  },
  computed: {
    activeComponent() {
      return this.buttons[this.activeButton].component;
    },
  },
  methods: {
    toggleContent(index) {
      this.activeButton = index;
    },
  },
};
</script>
