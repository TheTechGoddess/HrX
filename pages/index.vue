<template>
  <div class="">
    <div class="lg:h-screen relative">
      <div
        class="px-4 md:px-8 lg:px-16"
        style="background: linear-gradient(to right, #f6fdf8 49%, #e4669e 49%)"
      >
        <LandingNavbar />
        <LandingHero />
      </div>
    </div>

    <div class="">
      <LandingCompanies class="bg-white px-4 md:px-8 lg:px-16" />
      <LandingTestimonials class="bg-[#FCF7FF] px-4 md:px-8 lg:px-16" />
      <LandingTeams class="bg-white px-4 md:px-8 lg:px-16 py-8" />
      <LandingReady
        class="bg-gradient-to-r from-pink-300 via-green-200 via-purple-200 to-blue-100 px-4 md:px-8 lg:px-16"
      />
      <LandingFooter class="bg-white px-4 md:px-8 lg:px-16 pt-20 pb-6" />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "landingpage",
});
</script>
