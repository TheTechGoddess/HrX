<template>
  <div class="w-full">
    <div>
      <TimerAward />
      <CurrentAward />
    </div>

    <PreviousAward />
  </div>
</template>

<script setup>
import CurrentAward from "./CurrentAward.vue";
import PreviousAward from "./PreviousAward.vue";
import TimerAward from "./TimerAward.vue";
</script>
