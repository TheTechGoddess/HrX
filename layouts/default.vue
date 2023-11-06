<!-- layouts/auth.vue -->
<template>
  <div class="md:flex md:justify-between">
    <div class="w-[295px]">
      <LayoutSidebar />
    </div>

    <div class="w-full h-screen">
      <LayoutNavbar class="h-[80px]" />
      <div class="bg-[#F7FAFC] px-4 py-5">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
