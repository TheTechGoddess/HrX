<template>
  <div>
    <div class="bg-white w-full flex flex-col p-4 rounded-lg">
      <div class="flex justify-between items-center">
        <p class="text-[#182233] text-xl">Previous Awards</p>
        <button
          class="flex space-x-1.5 border border-[#CFD0D0] py-1.5 px-3 rounded-lg"
        >
          <img src="~/assets/images/calender.svg" alt="" class="mt-1" />
          <p>Last 1 month</p>
          <img src="~/assets/images/down_arrow.svg" alt="" class="mt-2" />
        </button>
      </div>
      <div
        class="bg-[#FFFDFE] flex flex-col items-start border border-[#E4669E] border-opacity-30 rounded-lg py-4 px-6 my-4"
      >
        <div>
          <div class="flex space-x-1">
            <img src="~/assets/images/calender.svg" alt="" class="" />
            <p class="text-xs text-[#757C86]">12th October, 2023</p>
          </div>
          <div class="flex space-x-2 my-3">
            <div>
              <img src="~/assets/images/trophy2.svg" alt="" class="w-8 mt-1" />
            </div>
            <img src="~/assets/images/img.svg" alt="" class="w-8" />
            <div class="mt-1">
              <p class="text-[#39404F] text-sm font-medium">
                Stella Mini Minus
              </p>
              <p class="text-[#757C86] text-xs -mt-1">Frontend Engineer</p>
            </div>
          </div>
          <p class="font-semibold text-[#39404F]">
            Performance excellence award
          </p>
          <p class="text-[#585E6C] text-xs my-2">
            This is for employee who consistently excel in his/her job and
            contribute significantly to the company's success.
          </p>
          <div class="flex space-x-1 mt-1 text-sm">
            <img src="~/assets/images/reward2.svg" alt="" />
            <p class="text-[#757C86]">Reward:</p>
            <p class="text-[#585E6C] font-medium">
              A 7-day fully funded trip to Ghana
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
