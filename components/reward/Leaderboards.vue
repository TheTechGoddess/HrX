<template>
  <div class="w-full">
    <div class="bg-white flex flex-col w-full p-4 rounded-t-lg">
      <h1 class="text-xl texxt-[#39404F]">Leaderboard</h1>
      <div class="my-8 flex justify-between items-center">
        <div
          class="border border-[#E4669E] rounded-lg border-opacity-30 bg-[#FFFDFE] flex flex-col justify-center items-center content-center text-center py-8 px-4 space-y-2 text-xs relative"
        >
          <img src="~/assets/images/img.svg" alt="" class="w-12" />
          <p class="text-[#39404F] font-medium">Zainab Adima Momo</p>
          <p class="text-[#757C86]">Customer Executive</p>
          <p class="text-[#585E6C] text-[10px]">8000pts</p>
          <div class="flex space-x-1 text-[#585E6C] text-[10px]">
            <img src="~/assets/images/award.svg" alt="" />
            <p>4</p>
          </div>
          <div
            class="absolute w-8 h-8 flex bg-[#CCCCCC] border border-[#B4B3B3] rounded-full -top-6 -right-4 justify-center items-center text-center content-center"
          >
            <p class="text-[#39404F] font-medium">2</p>
          </div>
        </div>
        <div
          class="border border-[#E4669E] px-4 border-opacity-30 rounded-lg bg-[#FFFDFE] flex flex-col justify-center items-center content-center text-center py-12 space-y-2 text-xs relative"
        >
          <img src="~/assets/images/sandra.svg" alt="" class="w-12" />
          <p class="text-[#39404F] font-medium">Sandra Tola Adelabu</p>
          <p class="text-[#757C86]">Sr Frontend Engineer</p>
          <p class="text-[#585E6C] text-[10px]">10000pt</p>
          <div class="flex space-x-1 text-[#585E6C] text-[10px]">
            <img src="~/assets/images/award.svg" alt="" />
            <p>5</p>
          </div>
          <div
            class="absolute w-8 h-8 flex bg-[#D4AF37] border border-[#B18801] rounded-full -top-6 -right-4 justify-center items-center text-center content-center"
          >
            <p class="text-[#39404F] font-medium">1</p>
          </div>
        </div>
        <div
          class="border rounded-lg px-4 border-[#E4669E] border-opacity-30 bg-[#FFFDFE] flex flex-col justify-center items-center content-center text-center py-4 space-y-2 text-xs relative"
        >
          <img src="~/assets/images/okon.svg" alt="" class="w-12" />
          <p class="text-[#39404F] font-medium">Okon Joe Emmanuel</p>
          <p class="text-[#757C86]">Sales Manager</p>
          <p class="text-[#585E6C] text-[10px]">7800pts</p>
          <div class="flex space-x-1 text-[#585E6C] text-[10px]">
            <img src="~/assets/images/award.svg" alt="" />
            <p>4</p>
          </div>
          <div
            class="absolute w-8 h-8 flex bg-[#CD7F32] border border-[#A35609] rounded-full -top-6 -right-4 justify-center items-center text-center content-center"
          >
            <p class="text-[#39404F] font-medium">3</p>
          </div>
        </div>
      </div>
    </div>
    <table class="w-full border-collapse rounded-b-2xl">
      <thead class="text-left text-[#757C86] font-medium text-sm">
        <tr class="">
          <th class="pl-4 py-4">Rank</th>
          <th>Employee</th>
          <th>Points</th>
          <th>Award</th>
        </tr>
      </thead>
      <tbody class="text-[#39404F] text-sm rounded-b-lg bg-white">
        <tr
          v-for="award in awards"
          :key="award.rank"
          class="border border-[#F9FAFB]"
        >
          <td class="pl-4 py-4">{{ award.rank }}</td>
          <td class="py-4 flex space-x-1">
            <img src="~/assets/images/img.svg" alt="" />
            <div>
              <p class="text-sm">{{ award.employee }}</p>
              <p class="text-[10px] text-[#757C86] -mt-1">{{ award.role }}</p>
            </div>
          </td>
          <td class="py-4">{{ award.points }}</td>
          <td class="py-4">{{ award.award }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const awards = [
  {
    rank: 4,
    employee: "Stella Mini Minus",
    role: "Frontend Engineer",
    points: "6800",
    award: "3",
  },
  {
    rank: 5,
    employee: "Stella Mini Minus",
    role: "Frontend Engineer",
    points: "6800",
    award: "3",
  },
  {
    rank: 6,
    employee: "Stella Mini Minus",
    role: "Frontend Engineer",
    points: "6800",
    award: "3",
  },
  {
    rank: 7,
    employee: "Stella Mini Minus",
    role: "Frontend Engineer",
    points: "6800",
    award: "3",
  },
  {
    rank: 8,
    employee: "Stella Mini Minus",
    role: "Frontend Engineer",
    points: "6800",
    award: "3",
  },
  {
    rank: 9,
    employee: "Stella Mini Minus",
    role: "Frontend Engineer",
    points: "6800",
    award: "3",
  },
];
</script>
