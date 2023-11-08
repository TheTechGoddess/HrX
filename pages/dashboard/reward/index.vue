<template>
  <div>
    <Title title="Reward & Recognition" />
    <div class="md:flex md:justify-between md:space-x-4 pt-6">
      <Awards class="" />
      <Leaderboards class="" />
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/layout/Title.vue";
import Awards from "../../../components/reward/Awards.vue";
import Leaderboards from "../../../components/reward/Leaderboards.vue";
</script>
