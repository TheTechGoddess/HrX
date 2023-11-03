<template>
  <div class="py-10 xl:pl-28 md:pl-20 bg-[#FFF] px-6 md:px-0">
    <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
    <div class="mt-16">
      <h1 class="text-2xl text-[#182233] font-semibold">Reset Password</h1>
      <p class="text-[#585E6C]">
        Enter a verified email account, a new password will be sent to you.
      </p>
      <form
        action=""
        @submit.prevent="handleSubmit"
        class="my-8 text-[#39404F] lg:mr-40 placeholder:text-[#CFD0D0]"
      >
        <div class="py-3 flex flex-col w-full">
          <label for=""> Email Address *</label>
          <input
            type="text"
            class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
            placeholder="Enter your  email address"
            v-model="email"
            :class="{ 'border border-[#FF4B41]': errors.email }"
            @input="clearError('email')"
          />
          <p v-if="errors.email" class="text-[#FF4B41] text-xs mt-1">
            {{ errors.email }}
          </p>
          <p v-if="errors.login" class="text-[#FF4B41] text-xs mt-1">
            {{ errors.login }}
          </p>
        </div>
        <div class="mt-10">
          <button
            type="submit"
            class="py-4 rounded-lg flex font-medium px-16 text-white"
            :class="isFormValid ? 'bg-[#E4669E]' : 'bg-[#DFE1E4]'"
          >
            <p>Reset password</p>
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
  </div>
</template>
<script setup>
import { ref } from "vue";
import { resetPassword } from "~/services/auth";

definePageMeta({
  layout: "authsignup",
});
const loading = ref(false);
const email = ref("");
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const errors = ref({});
const router = useRouter();

const validateForm = () => {
  errors.value = {};
  if (!email.value.trim()) {
    errors.value.email = "Email address is required.";
  } else if (!emailPattern.test(email.value)) {
    errors.value.email =
      "Invalid email format. Please enter a valid email address.";
  }
  return Object.keys(errors.value).length === 0;
};

const isFormValid = computed(() => {
  return Object.keys(errors.value).length === 0;
});

const clearError = (fieldName) => {
  errors.value[fieldName] = "";
};

const forgetPassword = async () => {
  try {
    loading.value = true;
    const response = await resetPassword(email);

    if (response.error) {
      errors.login = response.error; // Set the error message from the resetPassword function
    } else {
      // Handle success, you can show a message to the user
      console.log("Password reset request successful:", response);
      // Optionally, you can navigate to another page or display a success message.
      router.push("/auth/login"); // Redirect to a success page
    }
  } catch (error) {
    console.error("Unexpected error:", error); // Set a generic error message
    errors.login = "An unexpected error occurred while resetting the password.";
  } finally {
    loading.value = false;
  }
};

const handleSubmit = () => {
  if (validateForm()) {
    forgetPassword();
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