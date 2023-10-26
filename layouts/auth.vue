<!-- layouts/auth.vue -->
<template>
  <div class="flex justify-between ">
    <div class="w-[50%]"><slot></slot></div>
    <div class="w-[50%]">
      <LayoutAuthSidebar
        :sidebarTitle="sidebarTitle"
        :sidebarDescription="sidebarDescription"
        :sidebarText="sidebarText"
      />
    </div>
  </div>
</template>

<script setup>
// Props for the auth layout
const { sidebarTitle, sidebarDescription, sidebarText } = defineProps({
  sidebarTitle: String,
  sidebarDescription: String,
  sidebarText: String,
});
</script>
