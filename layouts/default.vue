<!-- layouts/auth.vue -->
<template>
  <div class="lg:flex lg:justify-between">
    <div class="flex flex-col w-[50px] lg:w-[295px]">
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
