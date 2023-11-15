<template>
  <div>
    <Modal :visible="showModal">
      <div
        class="bg-white flex flex-col py-6 px-8 rounded-lg w-[300px] h-screen overflow-y-auto md:w-[500px] lg:w-[400px]"
      >
        <img
          src="~/assets/images/close.svg"
          alt=""
          class="self-end cursor-pointer"
          @click="$emit('close')"
        />
        <div class="mt-2">
          <div class="mr-5">
            <h1 class="text-xl text-[#182233] font-medium mb-2">Add Event</h1>
          </div>

          <form @submit.prevent="handleSubmit" class="mt-10">
            <div class="py-3 flex flex-col w-full">
              <label for="">Event Name <span class="text-error">*</span></label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter"
                v-model="event"
                :class="{ 'border border-error': errors.event }"
                @input="clearError('event')"
              />
              <p v-if="errors.event" class="text-error text-xs mt-1">
                {{ errors.event }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">Link <span class="text-error">*</span></label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter"
                v-model="link"
                :class="{ 'border border-error': errors.link }"
                @input="clearError('link')"
              />
              <p v-if="errors.link" class="text-error text-xs mt-1">
                {{ errors.link }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">Category <span class="text-error">*</span></label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter"
                v-model="category"
                :class="{ 'border border-error': errors.category }"
                @input="clearError('leaveName')"
              />
              <p v-if="errors.category" class="text-error text-xs mt-1">
                {{ errors.category }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">Location <span class="text-error">*</span></label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-4 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter"
                v-model="location"
                :class="{ 'border border-error': errors.location }"
                @input="clearError('location')"
              />
              <p v-if="errors.location" class="text-error text-xs mt-1">
                {{ errors.location }}
              </p>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">From <span class="text-error">*</span></label>
              <div class="flex justify-between space-x-5">
                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Days"
                  v-model="fromDay"
                  :options="dayOptions"
                  :class="{ 'border border-error rounded-lg': errors.fromDay }"
                  @input="clearError('fromDay')"
                >
                </OptionsDropdown>

                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Months"
                  v-model="fromMonth"
                  :options="monthOptions"
                  :class="{
                    'border border-error rounded-lg': errors.fromMonth,
                  }"
                  @input="clearError('fromMonth')"
                >
                </OptionsDropdown>
                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Years"
                  v-model="fromYear"
                  :options="yearOptions"
                  :class="{ 'border border-error rounded-lg': errors.fromYear }"
                  @input="clearError('fromYear')"
                >
                </OptionsDropdown>
              </div>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">To <span class="text-error">*</span></label>
              <div class="flex justify-between space-x-5">
                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Days"
                  v-model="toDay"
                  :options="dayOptions"
                  :class="{ 'border border-error rounded-lg': errors.toDay }"
                  @input="clearError('toDay')"
                >
                </OptionsDropdown>

                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Months"
                  v-model="toMonth"
                  :options="monthOptions"
                  :class="{ 'border border-error rounded-lg': errors.toMonth }"
                  @input="clearError('toMonth')"
                >
                </OptionsDropdown>
                <OptionsDropdown
                  type="text"
                  class=""
                  placeholder="Years"
                  v-model="toYear"
                  :options="yearOptions"
                  :class="{ 'border border-error rounded-lg': errors.toYear }"
                  @input="clearError('toYear')"
                >
                </OptionsDropdown>
              </div>
            </div>
            <div class="py-3">
              <label for="logo">Image <span class="text-error">*</span></label>
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
            <div class="py-3 flex flex-col w-full">
              <label for=""
                >Short Description <span class="text-error">*</span></label
              >
              <textarea
                v-model="description"
                cols="10"
                rows="5"
                class="bg-[#F7F8FA] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                :class="{ 'border border-[#FF4B41]': errors.description }"
                placeholder="Type message here "
              ></textarea>
              <p v-if="errors.description" class="text-error text-xs mt-1">
                {{ errors.description }}
              </p>
            </div>
            <div class="mt-4 flex flex-col">
              <button
                type="submit"
                class="py-3 rounded-lg flex font-medium px-6 text-white self-end"
                :class="isFormValid ? 'bg-[#E4669E]' : 'bg-[#DFE1E4]'"
              >
                <p>Save</p>
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
    </Modal>
  </div>
</template>

<script setup>
import Modal from "@/components/global/Modal.vue";
import OptionsDropdown from "../global/OptionsDropdown.vue";
import { createEvent } from "~/services/wellness";
import { ref, onMounted, nextTick, computed } from "vue";

// Data properties
const showModal = ref(false);
const showLeaveSuccess = ref(false);
const errors = ref({});
const loading = ref(false);
const event = ref("");
const link = ref("");
const category = ref("");
const location = ref("");
const description = ref("");
const fromDay = ref("");
const fromMonth = ref("");
const fromYear = ref("");
const toDay = ref("");
const toMonth = ref("");
const toYear = ref("");
const logoFile = ref(null);
const logoPreview = ref(null);
const companyLogo = ref(null);

const validateForm = () => {
  errors.value = {};
  if (!event.value) {
    errors.value.event = "required.";
  }
  if (!link.value.trim()) {
    errors.value.link = "required.";
  }
  if (!category.value.trim()) {
    errors.value.category = "required.";
  }
  if (!location.value.trim()) {
    errors.value.location = "required.";
  }
  if (!description.value.trim()) {
    errors.value.description = "required.";
  }
  if (!companyLogo.value) {
    errors.value.companyLogo = "required.";
  }
  if (!fromDay.value && fromDay.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!fromMonth.value && fromMonth.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!fromYear.value && fromYear.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!toDay.value && toDay.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!toMonth.value && toMonth.value !== "") {
    errors.value.fromDay = "required.";
  }
  if (!toYear.value && toYear.value !== "") {
    errors.value.fromDay = "required.";
  }

  return Object.keys(errors.value).length === 0;
};

const isFormValid = computed(() => {
  return Object.keys(errors.value).length === 0;
});

const clearError = (fieldName) => {
  errors.value[fieldName] = "";
};

// const dayOptions = ['Male', 'Female']

const dayOptions = Array.from({ length: 30 }, (_, index) => index + 1);
const monthOptions = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const yearOptions = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

const handleSubmit = () => {
  if (validateForm()) {
    submitEvent();
  }
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

const submitEvent = async () => {
  try {
    loading.value = true;

    // Convert month names to numbers
    const monthNumberMap = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };

    const startDate = `${fromYear.value}-${monthNumberMap[fromMonth.value]}-${
      fromDay.value
    }`;
    const endDate = `${toYear.value}-${monthNumberMap[toMonth.value]}-${
      toDay.value
    }`;

    const formData = new FormData();
    formData.append("eventName", event.value);
    formData.append("link", link.value);
    formData.append("category", category.value);
    formData.append("location", location.value);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("image", companyLogo.value);
    formData.append("description", description.value);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    // Call the createEvent service
    const response = await createEvent(formData);

    // Check the response and handle accordingly
    if (!response.error) {
      // Optionally handle success (e.g., show a success message)
      console.log("Event created successfully");
      // Reset form and close modal (if needed)
      // $emit("close");
    } else {
      // Handle the error (you may want to show an error message to the user)
      console.error(response.error);
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("An unexpected error occurred:", error);
  } finally {
    loading.value = false;
  }
};
</script>
