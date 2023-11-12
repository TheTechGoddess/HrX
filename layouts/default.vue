<!-- layouts/auth.vue -->
<template>
  <div
    class="2xl:w-full 2xl:text-center 2xl:flex 2xl:flex-col"
  >
    <div class="md:flex md:justify-between 2xl:w-[1500px] 2xl:self-center">
      <div class="hidden md:flex md:flex-col md:w-[295px]">
        <LayoutSidebar />
      </div>

      <div class="w-full h-screen">
        <LayoutNavbar class="h-[80px]" />
        <div class="bg-[#F7FAFC] px-4 py-5">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
