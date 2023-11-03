<template>
  <div class="py-10 xl:pl-28 lg:pl-20 bg-[#FFF] px-6 lg:px-0">
    <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
    <LayoutProgressBar />
    <div>
      <h1 class="text-2xl text-[#182233] font-semibold">Email verification</h1>
      <p class="text-[#585E6C]">Enter the 6 digits sent to your email here</p>
    </div>
    <form @submit.prevent="verifyEmail" class="my-3 mt-16 text-[#39404F]">
      <div class="flex justify-between lg:mr-40">
        <input
          v-for="index in 6"
          :key="index"
          v-model="confirmationDigits[index - 1]"
          @input="onInput(index)"
          type="text"
          class="bg-[#F7F8FA] flex text-center px-4 py-4 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
          :class="{ 'border border-[#ff4b41] text-[#ff4b41]': inputError }"
          maxlength="1"
        />
      </div>
      <p class="text-[#FF4B41] mt-3">{{ errorMessage }}</p>
      <p class="text-[#E4669E] font-medium mt-16">Resend code</p>
      <div class="mt-4">
        <button
          type="submit"
          class="py-4 rounded-lg font-medium px-16"
          :class="{
            'bg-[#E4669E] text-white': isAllFieldsFilled,
            'bg-[#DFE1E4] text-white': !isAllFieldsFilled,
          }"
        >
          <p>Verify</p>
          <img
            v-if="loading"
            src="~/assets/images/loading.svg"
            alt=""
            class="ml-2 rotating"
          />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "authsignup",
});
import { ref, onMounted, nextTick, computed } from "vue";
import { confirmEmail } from "~/services/auth";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const errorMessage = ref("");
const inputError = ref(false);
const confirmationCode = route.params.id; 
const email = localStorage.getItem("email");
const confirmationDigits = ref(["", "", "", "", "", ""]);

const onInput = (index) => {
  if (index < 6 && confirmationDigits[index - 1].length === 1) {
    const nextInputRef = $refs["input" + (index + 1)];
    if (nextInputRef && nextInputRef.focus) {
      nextInputRef.focus();
    }
  }
};

const isAllFieldsFilled = computed(() => {
  return confirmationDigits.value.every((digit) => digit !== "");
});

const verifyEmail = async () => {
  const confirmationData = {
    confirmationCode: confirmationDigits.value.join(""),
  };

  try {
    loading.value = true;
    const response = await confirmEmail(confirmationCode, confirmationData);

    if (response.error) {
      errorMessage.value = response.error; 
      inputError.value = true;
    } else {
      console.log("Verification successful:", response);
      const token = response.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      router.push("/auth/select-plan");
    }
  } catch (error) {
    console.error("Unexpected error:", error); 
  } finally {
    loading.value = false;
  }
};
</script>
<style>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotating {
  animation: rotate 2s linear infinite;
}
</style>