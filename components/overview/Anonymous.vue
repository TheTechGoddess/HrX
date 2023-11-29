<template>
  <div
    class="bg-white w-full flex flex-col rounded-lg my-6 max-h-[367px] overflow-auto slim-scrollbar"
  >
    <div class="m-4">
      <h1 class="text-header text-xl">Anonymous Message</h1>
      <p v-if="loginUser.loginType === 'Company'" class="text-sm text-bodytext">
        See what employees think. Their identities have been hidden🤫
      </p>
    </div>
    <form
      @submit.prevent="submit"
      class="mx-4"
      v-if="loginUser.loginType === 'Employee'"
    >
      <p>
        Tell your HR what’s on your mind. We promise to keep your identity
        hidden🤫
      </p>
      <textarea
        v-model="messages"
        placeholder="Drop your thoughts here"
        cols="20"
        rows="5"
        class="mt-3 w-full bg-[#F7F8FA] rounded-lg placeholder:text-[#CFD0D0] px-4 py-3 focus:outline-none"
      ></textarea>
      <!-- <p v-if="errorMessage" class="text-[#FF4B41]">{{ errorMessage }}</p> -->
      <div class="flex justify-end mt-3 mb-4">
        <button
          type="submit"
          class="py-3 rounded-lg font-medium px-8 bg-[#E4669E] text-white"
        >
          Send
        </button>
      </div>
    </form>
    <div v-else-if="loginUser.loginType === 'Company'">
      <div
        v-if="anonymousMeassages.length > 0"
        v-for="message in anonymousMeassages"
      >
        <div
          class="border-t border-deactivated py-3 px-4 flex space-x-4 items-start"
        >
          <img class="" src="~/assets/images/anonymous.svg" alt="" />
          <div class="flex flex-col space-y-.5">
            <p class="text-header">Anonymous</p>

            <p class="text-bodytext">
              {{ message.message }}
            </p>
            <p class="text-bodytext text-xs">
              {{ formatDate(message.createdAt) }}
            </p>
          </div>
        </div>
      </div>
      <EmptyState
        v-else
        class="py-24"
        :image="anony"
        title="No anonymous messages in view"
        description="Anonymous messages will appear here "
      />
    </div>

    <SuccessPopup
      v-if="showSuccess"
      :message="'Success!!'"
      @closed="showNotification = false"
    />
  </div>
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
import { createAnonymousEntry, getAnonymousData } from "~/services/employee";
import EmptyState from "../global/EmptyState.vue";
import anony from "~/assets/images/anonymous.svg";
import InviteSuccess from "../auth/InviteSuccess.vue";
const showSuccess = ref(false);
const loginUser = useLoginUser();
const messages = ref("");
const errorMessage = ref("");
const anonymousMeassages = ref([]);

const submit = async () => {
  if (loginUser.loginType === "Employee" && messages.value.trim() !== "") {
    try {
      const data = {
        message: messages.value, // Adjust the structure to match your API expectations
      };
      const response = await createAnonymousEntry(data);

      // Handle response or update UI accordingly
      console.log(response); // Log the response or perform actions based on it

      // Assuming a successful response means the message was sent,
      // you might want to clear the input field after sending
      messages.value = "";
      errorMessage.value = ""; // Reset error message if any
      showSuccess.value = true;
    } catch (error) {
      console.error("Error creating anonymous entry:", error);
      // Handle error cases here
      if (error && error.error) {
        errorMessage.value = error.error;
      } else {
        errorMessage.value = "An unexpected error occurred.";
      }
    }
  }
};

const fetchAnonymousMessages = async () => {
  try {
    const data = await getAnonymousData();
    if (!data.error) {
      anonymousMeassages.value = data.data.docs; // Update the reactive variable
    } else {
      console.error("Error fetching previous winners:", data.error);
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error);
  }
};

const formatDate = (inputDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", options);
};

onMounted(() => {
  fetchAnonymousMessages();
});
</script>
<style>
/* Styling the scrollbar */
.slim-scrollbar {
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: pink; /* Change scrollbar color */
}

/* For WebKit based browsers (Chrome, Safari, etc.) */
.slim-scrollbar::-webkit-scrollbar {
  width: 8px; /* Adjust the width */
}

.slim-scrollbar::-webkit-scrollbar-thumb {
  background-color: #e4669e; /* Change thumb color */
  border-radius: 4px; /* Round the edges */
}

/* Hide the scrollbar track */
.slim-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
</style>
