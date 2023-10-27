<template>
  <div class="flex justify-between py-2">
    <div class="flex items-center">
      <div class="mr-6">
        <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
      </div>
      <div>
        <ul class="hidden lg:flex space-x-6">
          <li class="text-[#182233] cursor-pointer">About Us</li>
          <li class="text-[#182233] cursor-pointer">Pricing</li>
          <li class="text-[#182233] cursor-pointer">Contact us</li>
        </ul>
      </div>
    </div>
    <div>
      <ul class="flex space-x-4 items-center">
        <li class="text-white cursor-pointer">Request A Demo</li>
        <div class="h-8 w-0.5 bg-white"></div>
        <li>
          <nuxt-link to="/auth/login">
            <button
              class="bg-white px-4 py-2 text-[#E4669E] font-medium rounded-lg"
            >
              Login
            </button></nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
