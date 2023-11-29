<template>
  <div v-if="visible" :class="['notification', notificationType]">
    <div
      class="notification-content flex flex-row-reverse justify-between bg-green-400 px-6 rounded py-3"
    >
      <div>{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    // You can add a prop for different notification types if needed
    notificationType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    // Automatically close the notification after 15 seconds
    setTimeout(() => {
      this.closeNotification();
    }, 10000);
  },
  methods: {
    closeNotification() {
      // Apply fade out effect before closing
      this.visible = false;
      // Optionally emit an event to inform the parent component that the notification is closed
      this.$emit("closed");
    },
  },
};
</script>

<style>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  z-index: 9999;
  max-width: 300px;
  opacity: 1;
  transition: opacity 0.5s ease; /* Apply fade-out transition */
}

.notification-content {
  opacity: 1;
}

/* Add other styles for different types of notifications */
.notification.fade-out {
  opacity: 0;
}
</style>
