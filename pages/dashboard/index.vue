<template>
  <div>
    <!-- Your component's content goes here -->
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const router = useRouter();

onBeforeMount(() => {
  router.push("/dashboard/overview");
});
</script>
