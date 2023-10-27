<!-- layouts/auth.vue -->
<template>
  <div class="flex justify-between">
    <div class="w-[50%]"><slot></slot></div>
    <div class="w-[50%]">
      <LayoutAuthSidebarLogin />
    </div>
  </div>
</template>
