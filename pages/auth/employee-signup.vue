<template>
  <div class="py-10 xl:pl-28 lg:pl-20 bg-[#FFF] px-6 lg:px-0">
    <img src="~/assets/images/logo.svg" alt="" class="w-[70.27px]" />
    <div class="mt-16">
      <h1 class="text-2xl text-[#182233] font-semibold">
        Complete sign up process
      </h1>
      <p class="text-[#585E6C]">
        Please ensure to provide all the required information
      </p>
      <form
        action=""
        @submit.prevent="handleSubmit"
        class="my-3 text-[#39404F] lg:mr-40 placeholder:text-[#CFD0D0]"
      >
        <div class="py-3">
          <label for="logo">Upload image *</label>
          <div
            class="mt-2 w-12 h-12 rounded-full items-center bg-[#F7F8FA] flex justify-center"
            :class="{ 'border border-[#FF4B41]': errors.companyLogo }"
            @input="clearError('companyLogo')"
          >
            <input
              type="file"
              id="logo"
              accept="image/*"
              @change="handleLogoUpload"
              class="hidden"
            />
            <label for="logo" class="cursor-pointer">
              <img
                v-if="logoPreview"
                :src="logoPreview"
                alt="Company Logo"
                class="w-12 h-12 rounded-full"
              />
              <img
                v-else
                src="~/assets/images/add.svg"
                alt="Add Logo"
                class="w-4"
              />
            </label>
          </div>
          <p v-if="errors.companyLogo" class="text-[#FF4B41] text-xs mt-1">
            {{ errors.companyLogo }}
          </p>
        </div>
        <div class="py-3 flex flex-col">
          <label for="">Full name *</label>
          <input
            type="text"
            class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
            placeholder="Enter your full name"
            v-model="companyName"
            :class="{ 'border border-[#FF4B41]': errors.companyName }"
            @input="clearError('companyName')"
          />
          <p v-if="errors.companyName" class="text-[#FF4B41] text-xs mt-1">
            {{ errors.companyName }}
          </p>
        </div>
        <div class="py-3 flex flex-col">
          <label for=""> Email Address *</label>
          <input
            type="text"
            class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
            placeholder="ade@hrx.co"
            v-model="companyEmail"
            :class="{ 'border border-[#FF4B41]': errors.companyEmail }"
            @input="clearError('companyEmail')"
          />
          <p v-if="errors.companyEmail" class="text-[#FF4B41] text-xs mt-1">
            {{ errors.companyEmail }}
          </p>
        </div>

        <div class="py-3 flex flex-col">
          <label for="">Password *</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="bg-[#F7F8FA] px-4 py-4 mt-2 w-full rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
              placeholder="Password must be alphanumeric"
              v-model="password"
              :class="{ 'border border-[#FF4B41]': errors.password }"
              @input="clearError('password')"
            />
            <i
              @click="showPassword = !showPassword"
              class="absolute top-[36px] right-4 transform -translate-y-1/2 cursor-pointer"
            >
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CFD0D0"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CFD0D0"
                class="bi bi-eye-slash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                />
                <path
                  d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                />
                <path
                  d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                />
              </svg>
            </i>
          </div>
          <p v-if="errors.password" class="text-[#FF4B41] text-xs mt-1">
            {{ errors.password }}
          </p>
        </div>
        <div class="py-3 flex flex-col">
          <label for="">Confirm Password *</label>
          <div class="relative">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              class="bg-[#F7F8FA] px-4 py-4 mt-2 w-full rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
              placeholder="Password must be a match"
              v-model="confirmPassword"
              :class="{ 'border border-[#FF4B41]': errors.confirmPassword }"
              @input="clearError('confirmPassword')"
            />
            <i
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute top-[36px] right-4 transform -translate-y-1/2 cursor-pointer"
            >
              <svg
                v-if="showConfirmPassword"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CFD0D0"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CFD0D0"
                class="bi bi-eye-slash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                />
                <path
                  d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                />
                <path
                  d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                />
              </svg>
            </i>
          </div>
          <p v-if="errors.confirmPassword" class="text-[#FF4B41] text-xs mt-1">
            {{ errors.confirmPassword }}
          </p>
        </div>
        <div class="flex items-center mt-2 mb-1">
          <input
            type="checkbox"
            id="agreeCheckbox"
            class="hidden"
            @click="toggleCheckbox"
          />
          <label
            for="agreeCheckbox"
            class="relative cursor-pointer select-none"
          >
            <div
              class="w-4 h-4 border border-[#E4669E] rounded flex items-center justify-center"
              :class="{
                'bg-[#E4669E]': isChecked,
                'bg-transparent': !isChecked,
              }"
            >
              <img src="~/assets/images/checked.svg" alt="" v-if="isChecked" />
            </div>
          </label>
          <span class="ml-2 text-[#585E6C] text-sm font-normal"
            >I have read and agree to HRX’s
            <span class="text-[#182233]">Terms and Conditions</span></span
          >
        </div>
        <p v-if="errors.isChecked" class="text-[#FF4B41] text-xs mt-1">
          {{ errors.isChecked }}
        </p>
        <div class="mt-6">
          <button
            type="submit"
            class="py-4 rounded-lg flex font-medium px-16 text-white"
            :class="isFormValid ? 'bg-[#E4669E]' : 'bg-[#DFE1E4]'"
          >
            <p>Sign up</p>
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
    <InviteSuccess
      :title="'Success'"
      :message="'All processes have been completed successfully'"
      :buttonLink="'/auth/login'"
      :buttonText="'Log in'"
      v-if="showInviteSuccess"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { registerEmployee } from "~/services/auth";
import InviteSuccess from "@/components/auth/InviteSuccess.vue";

definePageMeta({
  layout: "authsignup",
});
const isChecked = ref();
const toggleCheckbox = () => {
  isChecked.value = !isChecked.value;
};
const loading = ref(false);
const showInviteSuccess = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const logoFile = ref(null);
const logoPreview = ref(null);
const router = useRouter();
const companyLogo = ref(null);
const companyName = ref("");
const password = ref("");
const confirmPassword = ref("");
const companyEmail = ref("");
const errors = ref({});
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validateForm = () => {
  errors.value = {};
  if (!companyLogo.value) {
    errors.value.companyLogo = "Image is required.";
  }
  if (!companyName.value.trim()) {
    errors.value.companyName = "Full name is required.";
  }
  if (!companyEmail.value.trim()) {
    errors.value.companyEmail = "Email address is required.";
  } else if (!emailPattern.test(companyEmail.value)) {
    errors.value.companyEmail =
      "Invalid email format. Please enter a valid email address.";
  }
  if (password.value.length < 8) {
    errors.value.password =
      "Your password must contain at least (one number, one special character, uppercase, lowercase and minimum of 8 characters)";
  }
  if (!/[\W_]/.test(password.value)) {
    errors.value.password =
      "Your password must contain at least (one number, one special character, uppercase, lowercase and minimum of 8 characters)";
  }
  if (!/[a-z]/.test(password.value)) {
    errors.value.password =
      "Your password must contain at least (one number, one special character, uppercase, lowercase and minimum of 8 characters)";
  }
  if (!/[A-Z]/.test(password.value)) {
    errors.value.password =
      "Your password must contain at least (one number, one special character, uppercase, lowercase and minimum of 8 characters)";
  }
  if (!/\d/.test(password.value)) {
    errors.value.password =
      "Your password must contain at least (one number, one special character, uppercase, lowercase and minimum of 8 characters)";
  }
  if (password.value !== confirmPassword.value) {
    errors.value.confirmPassword = "Passwords do not match.";
  }
  if (!isChecked.value) {
    errors.value.isChecked =
      "Tick the box to agree to the terms and conditions.";
  }
  return Object.keys(errors.value).length === 0;
};

const isFormValid = computed(() => {
  return (
    Object.keys(errors.value).length === 0 &&
    companyLogo.value &&
    companyName.value.trim() !== "" &&
    password.value.length >= 8 &&
    /[\W_]/.test(password.value) &&
    /[a-z]/.test(password.value) &&
    /[A-Z]/.test(password.value) &&
    /\d/.test(password.value) &&
    password.value === confirmPassword.value &&
    isChecked.value
  );
});

const clearError = (fieldName) => {
  errors.value[fieldName] = "";
};
const handleLogoUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    // Check if the selected file is an image
    if (file.type.startsWith("image/")) {
      // Set the selected logo to the companyLogo variable
      companyLogo.value = file;

      // Read the file and set the logoPreview to show a preview
      const reader = new FileReader();
      reader.onload = (e) => {
        logoPreview.value = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      // Display an error message or reset the input
      alert("Please select an image file.");
      event.target.value = null; // Reset the input
    }
  }
};

const register = async () => {
  const formData = new FormData();
  formData.append("displayPicture", companyLogo.value);
  formData.append("fullName", companyName.value);
  formData.append("password", password.value);
  // formData.append("email", companyEmail.value);
  try {
    loading.value = true;
    const response = await registerEmployee(formData);
    if (!response.error) {
      console.log("Registration successful:", response);
      showInviteSuccess.value = true;
    } else {
      console.error("Registration error:", response.error);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  } finally {
    loading.value = false;
  }
};

const handleSubmit = () => {
  if (validateForm()) {
    register();
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
