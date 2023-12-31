<template>
  <div class="py-10 xl:pl-28 lg:pl-20 bg-[#FFF] px-6 lg:px-0">
    <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
    <div class="mt-28">
      <h1 class="text-2xl text-[#182233] font-semibold">Activate account</h1>
      <p class="text-[#585E6C]">
        Welcome, enter the 6 digit code sent to your email.
      </p>
    </div>
    <form
      action=""
      @submit.prevent="handleSubmit"
      class="my-3 mt-16 text-[#39404F]"
    >
      <div class="flex justify-between md:mr-40">
        <input
          v-for="index in 6"
          :key="index"
          v-model="confirmationDigits[index - 1]"
          @input="onInput(index)"
          type="text"
          class="bg-[#F7F8FA] flex text-center mr-1.5 px-4 py-4 w-16 rounded-lg focus:outline-none focus:border-none focus:ring-0"
          :class="{ 'border border-[#ff4b41] text-[#ff4b41]': inputError }"
          maxlength="1"
        />
      </div>
      <p class="text-[#FF4B41] mt-3">{{ errorMessage }}</p>
      <div class="mt-16">
        <button
          type="submit"
          class="py-4 rounded-lg font-medium px-16 flex"
          :class="{
            'bg-[#E4669E] text-white': isAllFieldsFilled,
            'bg-[#DFE1E4] text-white': !isAllFieldsFilled,
          }"
        >
          <p>Activate</p>
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
import { confirmEmployee } from "~/services/auth";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const errorMessage = ref("");
const inputError = ref(false);
const employeeId = route.params.id; // Replace with your dynamic code
const email = localStorage.getItem("email");
const confirmationDigits = ref(["", "", "", "", "", ""]);

const onInput = (index) => {
  if (index < 6 && confirmationDigits[index - 1].length === 1) {
    const nextInputRef = $refs["input" + (index + 1)];
    if (nextInputRef && nextInputRef.focus) {
      nextInputRef.focus();
    }
  }

  // Clear the error message and inputError flag for the current input
  errorMessage.value = "";
  inputError.value = false;
};

const isAllFieldsFilled = computed(() => {
  return confirmationDigits.value.every((digit) => digit !== "");
});

const verifyEmail = async () => {
  const confirmationCode = confirmationDigits.value.join("");

  try {
    loading.value = true;
    const response = await confirmEmployee(employeeId, confirmationCode);

    if (response.error) {
      errorMessage.value = response.error; // Use the error message from the confirmEmail function
      inputError.value = true;
    } else {
      console.log("Verification successful:", response);
      const token = response.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      router.push("/auth/employee-signup");
    }
  } catch (error) {
    console.error("Unexpected error:", error); // Set a generic error message
  } finally {
    loading.value = false;
  }
};
const handleSubmit = () => {
  if (isAllFieldsFilled.value) {
    verifyEmail();
  } else {
    errorMessage.value = "Please fill in all fields.";
    inputError.value = true;
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
