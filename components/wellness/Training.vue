<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="w-[400px]">
        <input
          type="search"
          name=""
          id=""
          class="w-full bg-[#F7FAFC] z-10 border border-[#ECEDEF] py-2 px-10 rounded-lg focus:outline-none focus:ring-0"
          placeholder="Find latest events here..."
        />
        <img src="~/assets/images/search.svg" alt="" class="-mt-8 ml-4" />
      </div>
      <button
        v-if="loginUser.loginType === 'Company'"
        @click="showModal"
        class="px-3 py-2.5 font-medium text-white bg-primary rounded-xl -mt-4"
      >
        Add new Training
      </button>
    </div>
    <div>
      <div v-if="eventss.length > 0 && loginUser.loginType === 'Employee'">
        <div class="my-8 flex justify-between">
          <h1 class="text-header font-medium text-xl">Health Programs</h1>
          <button
            class="border border-[#CFD0D0] space-x-2 py-2 px-3 flex rounded-xl items-center"
          >
            <img src="~/assets/images/annual.svg" alt="" />
            <p class="text-xs text-[#39404F]">Oldest</p>
            <img src="~/assets/images/down_arrow.svg" alt="" />
          </button>
        </div>
        <div class="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            v-for="event in eventss"
            :key="event._id"
            :href="event.link"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-deactivated p-4 flex flex-col justify-center rounded-lg cursor-pointer"
          >
            <img :src="event.image" alt="" class="h-32 rounded-lg" />
            <div class="flex space-x-3 items-center">
              <p class="text-bodytext text-xs">{{ event.organizer }}</p>
            </div>
            <h1 class="text-header text-xl font-medium">
              {{ event.trainingName }}
            </h1>
            <p class="my-3 text-xs text-bodytext">{{ event.description }}</p>
            <div class="flex space-x-2 items-center">
              <img src="~/assets/images/calender.svg" alt="" />
              <p class="text-xs font-medium text-bodytext">
                <span>{{ formatDate(event.date) }} </span>
                <!-- <span class="ml-1">{{ event.year }}</span> -->
              </p>
            </div>
          </a>
        </div>
      </div>
      <HrTrainings v-else-if="loginUser.loginType === 'Company'" />
      <div v-else>
        <EmptyState
          v-if="loginUser.loginType === 'Employee'"
          class="py-24"
          :image="eventImg"
          title="No Training in view"
          description=" HR will establish the trainingss."
        />
      </div>
    </div>

    <add-training v-if="isModalVisible" @close="closeModal" />
  </div>
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
import AddTraining from "./AddTraining.vue";
import HrTrainings from "./HrTrainings.vue";
import { getTrainingsEmployee } from "~/services/wellness";
import EmptyState from "../global/EmptyState.vue";
import eventImg from "~/assets/images/empty_events.svg";
const loginUser = useLoginUser();

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const eventss = ref([]);

const fetchEventss = async () => {
  try {
    // Assuming you have a function to get the bearer token

    // Call the service to get leave types
    const event = await getTrainingsEmployee();

    // Update statistics based on the response
    if (!event.error) {
      console.log(event);
      eventss.value = event.data.docs;
    } else {
      console.error("Error fetching leave types:", event.error);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

const formatDate = (dateString) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

// Call fetchLeaveTypes on component mount
onMounted(fetchEventss);
</script>
