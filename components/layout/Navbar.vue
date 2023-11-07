<template>
  <div class="flex justify-between px-6 items-center content-center">
    <div class="flex items-center space-x-2">
      <img src="~/assets/images/company-logo.svg" alt="" class="w-6" />
      <p>Mazrz Health</p>
      <img src="~/assets/images/down_arrow.svg" alt="" class="w-2" />
    </div>
    <div class="ml-36 w-[50%] relative">
      <input
        type="search"
        name=""
        id=""
        class="w-full bg-[#F7FAFC] border border-[#ECEDEF] py-2 px-10 rounded-lg focus:outline-none focus:ring-0"
        placeholder="Search..."
      />
      <img
        src="~/assets/images/search.svg"
        alt=""
        class="absolute top-2.5 left-4"
      />
    </div>
    <div class="flex items-center space-x-6">
      <div class="p-2 bg-[#FCF0F5] rounded-full">
        <img src="~/assets/images/notifications.svg" alt="" />
      </div>
      <div class="p-2 bg-[#FCF0F5] rounded-full">
        <img src="~/assets/images/settings.svg" alt="" class="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>
