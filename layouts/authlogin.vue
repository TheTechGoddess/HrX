<!-- layouts/auth.vue -->
<template>
  <div class="flex justify-between">
    <div class="md:w-[50%]"><slot></slot></div>
    <div class="md:w-[50%] hidden md:flex">
      <LayoutAuthSidebarLogin />
    </div>
  </div>
</template>
