<template>
  <div class="bg-white w-full rounded-lg p-4">
    <h1 class="text-[#39404F] text-lg font-semibold">Total Employees - 20</h1>
    <div class="my-6 relative flex space-x-16">
      <div class="elem"></div>
      <div class="text-[#585E6C] text-sm space-y-3">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#4ea45a] mt-1"></div>
          <p>Active</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#f6af45] mt-1"></div>
          <p>On leave</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#a9def9] mt-1"></div>
          <p>Onboarding</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#f7fafc] mt-1"></div>
          <p>Deactivated</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.elem {
  width: 150px;
  height: 150px;
  background: conic-gradient(
    #4ea45a 0% 40%,
    #a9def9 40% 60%,
    #f6af45 60% 70%,
    #f7fafc 70% 100%
  );
  border-radius: 50%;
}
</style>
