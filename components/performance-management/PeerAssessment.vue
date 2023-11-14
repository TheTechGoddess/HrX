<template>
  <div>
    <div class="flex justify-between items-center bg-white -mt-10 py-8 px-4">
      <div class="flex space-x-2">
        <img src="~/assets/images/img.svg" alt="" class="w-8" />
        <div>
          <p class="text-[#39404F] font-medium">Stella Mini Minus</p>
          <p class="text-[#757C86] text-sm -mt-1">Frontend Engineer</p>
        </div>
      </div>
      <div class="flex space-x-1">
        <img src="~/assets/images/calender.svg" alt="" />
        <p class="text-[#667085]">Date : 3rd - 5th Nov 2023</p>
      </div>
    </div>
    <form>
      <table class="w-full border-collapse rounded-b-2xl">
        <thead class="text-left text-[#757C86] font-medium text-sm">
          <tr class="">
            <th class="pl-4 py-4">Criteria</th>
            <th>Review</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody class="text-[#39404F] text-sm rounded-b-2xl bg-white">
          <tr
            v-for="performance in performanceData"
            :key="performance.type"
            class="border border-[#F9FAFB]"
          >
            <td class="pl-4 py-4">{{ performance.type }}</td>
            <td class="flex space-x-2 mt-2 py-4">
              <img
                v-for="(review, index) in performance.reviews"
                :key="index"
                :src="review"
                alt="Star Rating"
                class="w-4 h-4 mt-2"
              />
            </td>
            <td class="mt-2 py-4">
              <input
                type="text"
                :placeholder="performance.comment"
                class="px-4 py-3.5 w-[70%] placeholder-[#CFD0D0] outline-none text-sm text-[#344054] border rounded-md border-[#F7F8FA] rounded"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="py-4 pr-[136px] bg-white px-4 flex justify-end">
        <button
          type="submit"
          class="py-3 rounded-lg flex font-medium px-4 text-white bg-[#DFE1E4]"
        >
          Submit Assessment
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import star from "~/assets/images/star.svg";
import nostar from "~/assets/images/nostar.svg";
const performanceData = [
  {
    type: "Collaboration",
    reviews: [star, star, star, star, nostar],
    comment: "Got something to say?",
  },
  {
    type: "Creativity",
    reviews: [star, star, star, nostar, nostar],
    comment: "Got something to say?",
  },
  {
    type: "Communication",
    reviews: [star, star, nostar, nostar, nostar],
    comment: "Got something to say?",
  },
  {
    type: "Time Management",
    reviews: [star, star, star, star, nostar],
    comment: "Got something to say?",
  },
  {
    type: "Problem solving",
    reviews: [star, star, nostar, nostar, nostar],
    comment: "Got something to say?",
  },
];
</script>
