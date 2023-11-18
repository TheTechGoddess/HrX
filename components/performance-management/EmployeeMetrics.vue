<template>
  <div class="bg-white w-full rounded-lg p-4">
    <h1 class="text-[#39404F] text-lg font-semibold">
      Total Assigned Task Metrics - 200
    </h1>
    <div class="my-6 relative flex space-x-16">
      <div class="elem"></div>
      <div class="text-[#585E6C] text-sm space-y-3">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#E0ABFF] mt-1"></div>
          <p>Female</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#D0F4DE] mt-1"></div>
          <p>Male</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#F7FAFC] mt-1"></div>
          <p>Unidentified</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.elem {
  width: 250px;
  height: 250px;
  background: conic-gradient(#d0f4de 0% 10%, #e0abff 10% 25%, #f7fafc 25% 100%);
  border-radius: 50%;
}
</style>
