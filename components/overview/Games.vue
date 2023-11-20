<template>
  <div
    class="bg-white w-full flex flex-col rounded-lg my-6 max-h-[400px] overflow-auto slim-scrollbar p-4"
  >
    <div class="flex justify-between items-center">
      <h1 class="text-header text-xl">Games</h1>
      <p
        v-if="loginUser.loginType === 'Company'"
        class="text-primary font-medium cursor-pointer"
      >
        Add New
      </p>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 text-center"
    >
      <div
        v-for="(game, index) in games"
        :key="index"
        class="w-36 h-24 flex justify-center items-center content-center text-center shadow-inner cursor-pointer rounded-lg bg-deactivated"
      >
        <p class="font-bold text-xl text-header">{{ game.name }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
const loginUser = useLoginUser();

const games = [
  { name: "Kahoot", isSelected: false },
  { name: "Among Us", isSelected: false },
  { name: "Minecraft", isSelected: false },
  { name: "Fortnite", isSelected: false },
  { name: "LOLs", isSelected: false },
  { name: "Valorant", isSelected: false },
  { name: "Overwatch", isSelected: false },
  { name: "Rocket", isSelected: false },
  { name: "Apex", isSelected: false },
  { name: "Dota", isSelected: false },
  { name: "COD: Warzone", isSelected: false },
  { name: "FIFA", isSelected: false },
  { name: "The Legend of Zelda", isSelected: false },
  { name: "Super Mario Bros", isSelected: false },
  { name: "World of Warcraft", isSelected: false },
  { name: "Genshin Impact", isSelected: false },
  { name: "Among Trees", isSelected: false },
  { name: "Cyberpunk", isSelected: false },
  { name: "Red Dead", isSelected: false },
  { name: "Assassin's Creed", isSelected: false },
  { name: "Halo Infinite", isSelected: false },
  { name: "The Witcher 3", isSelected: false },
  // Add even more games here...
];
</script>
<style>
/* Styling the scrollbar */
.slim-scrollbar {
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: pink; /* Change scrollbar color */
}

/* For WebKit based browsers (Chrome, Safari, etc.) */
.slim-scrollbar::-webkit-scrollbar {
  width: 8px; /* Adjust the width */
}

.slim-scrollbar::-webkit-scrollbar-thumb {
  background-color: #e4669e; /* Change thumb color */
  border-radius: 4px; /* Round the edges */
}

/* Hide the scrollbar track */
.slim-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
</style>
