<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
