<template>
  <div>
    <Modal :visible="showModal" @close="showModal = false">
      <div>
        <div
          v-if="loginUser.loginType === 'Employee'"
          class="bg-white flex flex-col py-6 px-8 rounded-lg w-[300px] md:w-[500px] lg:w-[400px]"
        >
          <img
            src="~/assets/images/close.svg"
            alt=""
            class="self-end cursor-pointer"
            @click="$emit('close')"
          />
          <div class="mt-2">
            <h1 class="text-xl text-[#182233] font-medium mb-2">
              Voting Result
            </h1>
            <div class="mt-6">
              <div
                v-for="nominee in highestNominees"
                :key="nominee._id._id"
                class="my-3 w-full bg-[#F7F8FA] rounded-lg cursor-pointer"
              >
                <div class="flex justify-between relative">
                  <div class="flex space-x-2 my-5 mx-4 z-40">
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
                  <p class="my-6 mx-4 z-40 text-header font-semibold">
                    {{ nominee.percentage }} %
                  </p>
                  <div
                    :style="'width:' + nominee.percentage + '%'"
                    class="h-full bg-[#FEF1F6] absolute rounded"
                  ></div>
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
        <div
          v-else
          class="bg-white flex flex-col py-6 px-8 rounded-lg w-[300px] md:w-[500px] lg:w-[400px]"
        >
          <img
            src="~/assets/images/close.svg"
            alt=""
            class="self-end cursor-pointer"
            @click="$emit('close')"
          />
          <div class="mt-2">
            <h1 class="text-xl text-[#182233] font-medium mb-2">
              Voting Result
            </h1>
            <div class="mt-6">
              <div
                v-for="nominee in highestNomineesHr"
                :key="nominee._id._id"
                class="my-3 w-full bg-[#F7F8FA] rounded-lg cursor-pointer"
              >
                <div class="flex justify-between relative">
                  <div class="flex space-x-2 my-5 mx-4 z-40">
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
                  <p class="my-6 mx-4 z-40 text-header font-semibold">
                    {{ nominee.percentage }} %
                  </p>
                  <div
                    :style="'width:' + nominee.percentage + '%'"
                    class="h-full bg-[#FEF1F6] absolute rounded"
                  ></div>
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
import Modal from "@/components/global/Modal.vue";
import { getVoteResult } from "~/services/reward";
import { useLoginUser } from "~/store/auth";
const loginUser = useLoginUser();

const showModal = ref(false);
const showSuccess = ref(false);
const errors = ref({});
// Define team members
const highestNominees = ref([]);
const highestNomineesHr = ref([]);

const props = defineProps({
  awardsId: String,
  awardsIdHr: String,
});

console.log("Awards ID:", props.awardsId); // Logging the awardsId

const fetchVoteResults = async () => {
  try {
    const nomineeData = await getVoteResult(props.awardsId); // Using awardsId from props directly
    console.log("success");
    highestNominees.value = nomineeData.data; // Store the fetched nominee data in the variable
  } catch (error) {
    console.error("Error fetching nominee data:", error);
    // Handle the error as needed
  }
};

const fetchVoteResultsHR = async () => {
  try {
    const nomineeData = await getVoteResult(props.awardsIdHr); // Using awardsId from props directly
    console.log("success");
    highestNomineesHr.value = nomineeData.data; // Store the fetched nominee data in the variable
  } catch (error) {
    console.error("Error fetching nominee data:", error);
    // Handle the error as needed
  }
};

onMounted(() => {
  fetchVoteResults();
  fetchVoteResultsHR();
});
</script>
