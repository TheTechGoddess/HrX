<template>
  <div>
    <h1 class="text-[#182233] font-semibold text-2xl px-6">
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>
