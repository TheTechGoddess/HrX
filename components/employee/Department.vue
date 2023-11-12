<template>
  <div class="bg-white w-full rounded-lg p-4">
    <h1 class="text-[#39404F] text-lg font-semibold">Departments - 6</h1>
    <div class="my-6 relative flex space-x-16">
      <div class="elem"></div>
      <div class="text-[#585E6C] text-sm space-y-1.5">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#fcf6bd] mt-1"></div>
          <p>Product</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#a9def9] mt-1"></div>
          <p>Engineering</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#e4669e] mt-1"></div>
          <p>Sales</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#e0abff] mt-1"></div>
          <p>Growth/Strategy</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#d0f4de] mt-1"></div>
          <p>Marketing</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#f7fafc] mt-1"></div>
          <p>Unidentified</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.elem {
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
  background: radial-gradient(
      circle closest-side at 50% 50%,
      white 75%,
      transparent 0%
    ),
    conic-gradient(
      #f7fafc 0% 10%,
      #fcf6bd 10% 25%,
      #a9def9 25% 30%,
      #e4669e 30% 60%,
      #e0abff 60% 85%,
      #d0f4de 85% 100%
    );
}
</style>
