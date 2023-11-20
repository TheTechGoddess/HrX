<template>
  <div>
    <Modal :visible="showModal" @close="showModal = false">
      <div
        class="bg-white flex flex-col py-6 px-8 rounded-lg w-[300px] md:w-[500px] lg:w-[400px]"
      >
        <img
          src="~/assets/images/close.svg"
          alt=""
          class="self-end cursor-pointer"
          @click="$emit('close')"
        />
        <div class="mt-2">
          <h1 class="text-xl text-[#182233] font-medium mb-2">Vote</h1>
          <div class="mt-6">
            <div
              v-for="nominee in highestNominees"
              :key="nominee._id._id"
              @click="voteForSelectedNominee(nominee._id._id)"
              class="my-3 w-full bg-[#F7F8FA] px-4 py-2 rounded-lg hover:bg-deactivated cursor-pointer"
            >
              <div class="flex space-x-2 my-3">
                <img
                  :src="nominee._id.displayPicture"
                  alt=""
                  class="w-6 h-6 rounded-lg"
                />
                <div>
                  <p class="text-[#39404F] text-sm font-medium">
                    {{ nominee._id.fullName }}
                  </p>
                  <p class="text-[#757C86] text-xs -mt-1">
                    {{ nominee._id.department }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="errors.backendError"
            class="text-error text-xs mt-1 flex justify-end self-end text-end content-end items-end"
          >
            {{ errors.backendError }}
          </div>
        </div>
      </div>
    </Modal>
    <InviteSuccess
      :title="'Success'"
      :message="'You’ve successfully voted for an employee '"
      :buttonLink="'/auth/login'"
      :buttonText="'Close'"
      v-if="showSuccess"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed, defineProps } from "vue";
import InviteSuccess from "../auth/InviteSuccess.vue";
import stella from "~/assets/images/img.svg";
import Modal from "@/components/global/Modal.vue";
import { getHighestNominee, voteForNominee } from "~/services/reward";

const showModal = ref(false);
const showSuccess = ref(false);
const errors = ref({});
// Define team members
const highestNominees = ref([]);

const props = defineProps({
  awardsId: String, // Assuming awardsId is a String, adjust the type accordingly
});

console.log("Awards ID:", props.awardsId); // Logging the awardsId

const fetchHighestNominee = async () => {
  try {
    const nomineeData = await getHighestNominee(props.awardsId); // Using awardsId from props directly
    console.log("success");
    highestNominees.value = nomineeData.data; // Store the fetched nominee data in the variable
  } catch (error) {
    console.error("Error fetching nominee data:", error);
    // Handle the error as needed
  }
};
const voteForSelectedNominee = async (selectedNomineeId) => {
  const payload = {
    nominatedUser: selectedNomineeId,
    award: props.awardsId,
  };

  try {
    const voteResult = await voteForNominee(payload);
    if (voteResult.error) {
      errors.value.backendError = voteResult.error;
      console.error("Voting error:", voteResult.error);
      // Optionally, show an error message to the user
    } else {
      // Voting was successful
      console.log("Vote successful!", voteResult);
      // Optionally, show a success message to the user
      showSuccess.value = true;
      // Close the modal after successful vote
      showModal.value = false;
    }
  } catch (error) {
    console.error("Error while voting:", error);
    // Handle the error as needed
  }
};

onMounted(() => {
  fetchHighestNominee();
});
</script>
