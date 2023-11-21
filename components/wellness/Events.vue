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
        Add new event
      </button>
    </div>
    <div>
      <div
        v-if="employeeEvents.length > 0 && loginUser.loginType === 'Employee'"
      >
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
            v-for="employeeEvent in employeeEvents"
            :key="employeeEvent._id"
            :href="employeeEvent.link"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-deactivated p-4 flex flex-col justify-center rounded-lg cursor-pointer"
          >
            <img :src="employeeEvent.image" alt="" class="h-32 rounded-lg" />
            <div class="flex space-x-3 items-center">
              <div class="p-1 rounded-lg border border-deactivated my-3">
                <img :src="logoImg" alt="" />
              </div>
              <p class="text-bodytext text-xs">{{ employeeEvent.organizer }}</p>
            </div>
            <h1 class="text-header text-xl font-medium">
              {{ employeeEvent.eventName }}
            </h1>
            <p class="my-3 text-xs text-bodytext">
              {{ employeeEvent.description }}
            </p>
            <div class="flex space-x-2 items-center">
              <img src="~/assets/images/calender.svg" alt="" />
              <p class="text-xs font-medium text-bodytext">
                <span>{{ formatDate(employeeEvent.startDate) }} </span> -
                <span> {{ formatDate(employeeEvent.endDate) }} </span>
                <!-- <span class="ml-1">{{ event.year }}</span> -->
              </p>
            </div>
          </a>
        </div>
      </div>
      <HrEvents v-else-if="loginUser.loginType === 'Company'" />
      <div v-else>
        <EmptyState
          v-if="loginUser.loginType === 'Employee'"
          class="py-24"
          :image="eventImg"
          title="No Event in view"
          description=" HR will establish the events."
        />
      </div>
    </div>

    <add-event v-if="isModalVisible" @close="closeModal" />
  </div>
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
import eventImg from "~/assets/images/empty_events.svg";
import logoImg from "~/assets/images/wellness_logo.svg";
import AddEvent from "./AddEvent.vue";
import HrEvents from "./HrEvents.vue";
import { getEventsEmployee } from "~/services/wellness";
import EmptyState from "../global/EmptyState.vue";
const loginUser = useLoginUser();

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const employeeEvents = ref([]);

const fetchEmployeeEvents = async () => {
  try {
    // Assuming you have a function to get the bearer token
    console.log(12);
    // Call the service to get leave types
    const employeeEvent = await getEventsEmployee();

    // Update statistics based on the response
    if (!employeeEvent.error) {
      console.log(employeeEvent);
      employeeEvents.value = employeeEvent.data.docs;
    } else {
      console.error("Error fetching leave types:", employeeEvent.error);
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
onMounted(fetchEmployeeEvents);
</script>
