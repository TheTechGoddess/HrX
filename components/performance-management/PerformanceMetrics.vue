<template>
  <div class="bg-white w-full rounded-lg p-4">
    <h1 class="text-[#39404F] text-lg font-semibold">
      Total Assigned Task Metrics - 200
    </h1>
    <div class="my-6 relative flex space-x-16">
      <div class="elem"></div>
      <div class="text-[#585E6C] text-sm space-y-3">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#a9def9] mt-1"></div>
          <p>Completed</p>
        </div>
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#f7fafc] mt-1"></div>
          <p>Uncompleted</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.elem {
  width: 250px;
  height: 250px;
  background: conic-gradient(#f7fafc 0% 30%, #a9def9 30% 100%);
  border-radius: 50%;
}
</style>
