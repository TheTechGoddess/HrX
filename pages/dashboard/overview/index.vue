<template>
  <div>
    <div class="w-full">
      <Greeting />
      <div class="w-full md:flex md:justify-between md:space-x-4 -mt-3 pt-6">
        <CurrentAward class="md:w-[49%]" />
        <Anonymous class="md:w-[49%]" />
      </div>
      <div class="w-full md:flex md:justify-between md:space-x-4 -mt-3">
        <Games class="md:w-[49%]" />
        <Adventure class="md:w-[49%]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/layout/Title.vue";
import Greeting from "../../../components/overview/Greeting.vue";
import CurrentAward from "../../../components/reward/CurrentAward.vue";
import Anonymous from "../../../components/overview/Anonymous.vue";
import Games from "../../../components/overview/Games.vue";
import Adventure from "../../../components/overview/Adventure.vue";
</script>
