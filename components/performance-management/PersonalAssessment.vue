<template>
  <div v-if="employees.length > 0">
    <div v-for="employee in slicedEmployees" :key="employee._id">
      <div class="bg-white -mt-10 py-8 px-4">
        <p class="text-header font-medium mb-3 text-xl">Reviewer</p>
        <div class="flex justify-between items-center">
          <div class="flex space-x-2">
            <img
              :src="employee.reviewer.displayPicture"
              alt=""
              class="w-12 h-12 rounded-full"
            />
            <div class="">
              <p class="text-[#39404F] font-medium">
                {{ employee.reviewer.fullName }}
              </p>
              <p class="text-[#757C86] text-sm -mt-1">
                {{ employee.reviewer.jobRole }}
              </p>
            </div>
            <p>{{ employee.quarter }}</p>
          </div>
          <div class="flex space-x-1">
            <img src="~/assets/images/calender.svg" alt="" />
            <p class="text-[#667085]">
              Date :
              <span
                >{{ formatDate(employee.startDate) }} -
                {{ formatDate(employee.endDate) }}</span
              >
            </p>
          </div>
        </div>
        <!-- <div class="mt-3 text-header">
          <p v-if="employee.employee.averageRating">
            You have reviewed this employee :
            <span>{{ employee.employee.averageRating }}</span>
          </p>
          <p class="text-error" v-else>!!You have not reviewed this employee</p>
        </div> -->
      </div>

      <form @submit.prevent="submitAssessment">
        <table class="w-full border-collapse rounded-b-2xl">
          <thead class="text-left text-[#757C86] font-medium text-sm">
            <tr class="">
              <th class="pl-4 py-4">Criteria</th>
              <th>Feedback</th>
              <th>Review</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody class="text-[#39404F] text-sm rounded-b-2xl bg-white">
            <tr
              v-for="(row, index) in rows"
              :key="index"
              class="border border-[#F9FAFB]"
            >
              <td class="pl-4 py-8">{{ row.criteria }}</td>
              <td>
                <div>
                  <template
                    v-if="
                      row.criteria === 'Time Management' ||
                      row.criteria === 'Problem Solving'
                    "
                  >
                    {{ employee[transformPropertyText(row.criteria)] }}
                  </template>
                  <template v-else>
                    {{ employee[`${row.criteria.toLowerCase()}Comment`] }}
                  </template>
                </div>
                <div>
                  <template
                    v-if="
                      row.criteria === 'Time Management' ||
                      row.criteria === 'Problem Solving'
                    "
                  >
                    <div
                      v-html="
                        renderStars(
                          employee[transformPropertyName(row.criteria)] || 0
                        )
                      "
                    ></div>
                  </template>
                  <template v-else>
                    <div
                      v-html="
                        renderStars(
                          employee[`${row.criteria.toLowerCase()}Review`] || 0
                        )
                      "
                    ></div>
                  </template>
                </div>
              </td>
              <td class="flex space-x-2 mt-2 py-4">
                <span
                  v-for="star in 5"
                  :key="star"
                  class="cursor-pointer text-xl"
                  :class="{ 'text-[#FFD700]': star <= row.rating }"
                  @click="setRating(index, star)"
                >
                  ★
                </span>
              </td>
              <td class="mt-2 py-4">
                <input
                  type="text"
                  v-model="row.comment"
                  placeholder="Got something to say?"
                  class="px-4 py-3.5 w-[70%] placeholder-[#CFD0D0] outline-none text-sm text-[#344054] border rounded-md border-[#F7F8FA]"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="py-4 pr-[136px] bg-white px-4 flex justify-end">
          <button
            type="submit"
            class="py-3 rounded-lg flex font-medium px-4 text-white bg-primary"
          >
            Submit Assessment
          </button>
        </div>
      </form>
    </div>
    <div class="flex justify-center bg-white p-4 rounded-b-lg">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        class="text-lg text-header px-5 py-2"
        :class="{
          'text-primary border border-primary rounded-full':
            currentPage === page,
        }"
      >
        {{ page }}
      </button>
    </div>
  </div>
  <EmptyState
    v-else
    class="py-40 -mt-12"
    :image="currentaward"
    title="No Assessment found yet"
    description="Check back later when HR assigned performance assessment."
  />

  <SuccessPopup
    v-if="showSuccess"
    :message="'Success!!'"
    @close="closeSuccess"
  />
</template>
<script setup>
import { ref } from "vue";
import { useUserStore } from "~/store/user";
import currentaward from "~/assets/images/performance.svg";
import {
  getMyAssessmentData,
  createAssessmentForEmployee,
} from "~/services/performance";
import SuccessPopup from "../global/SuccessPopup.vue";
import EmptyState from "../global/EmptyState.vue";

const userStore = useUserStore();
const employees = ref([]);
const assignedTasks = ref("");
const completedTasks = ref("");
const myId = userStore.data._id;
console.log(myId);
const showSuccess = ref(false);

const rows = ref([
  { criteria: "Collaboration", rating: 0, comment: "" },
  { criteria: "Communication", rating: 0, comment: "" },
  { criteria: "Creativity", rating: 0, comment: "" },
  { criteria: "Time Management", rating: 0, comment: "" },
  { criteria: "Problem Solving", rating: 0, comment: "" },
]);

const transformPropertyName = (criteria) => {
  // Adjust property names for specific criteria
  if (criteria === "Time Management") {
    return "timeManagementReview";
  } else if (criteria === "Problem Solving") {
    return "problemSolvingReview";
  }
  // If no specific transformation needed, return the criteria name as is
  return criteria.toLowerCase() + "Review";
};

const transformPropertyText = (criteria) => {
  // Adjust property names for specific criteria
  if (criteria === "Time Management") {
    return "timeManagementComment";
  } else if (criteria === "Problem Solving") {
    return "problemSolvingComment";
  }
  // If no specific transformation needed, return the criteria name as is
  return criteria.toLowerCase() + "Comment";
};

const setRating = (index, value) => {
  rows.value[index].rating = value;
};

const renderStars = (rating) => {
  const roundedRating = Math.round(rating); // Round the rating to the nearest integer
  const fullStars = '<span class="text-yellow-500 w-6 h-6">★</span>'.repeat(
    roundedRating
  ); // Full stars
  const emptyStars = '<span class="text-gray-300 w-6 h-6">★</span>'.repeat(
    5 - roundedRating
  ); // Empty stars

  return fullStars + emptyStars; // Concatenate full and empty stars
};

const currentPage = ref(1);
const perPage = 1; // Set the number of employees per page

const slicedEmployees = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;

  return employees.value.slice(start, end);
});

const totalPages = computed(() => {
  const filteredEmployees = employees.value.filter((employee) => {
    const startDate = new Date(employee.startDate);
    const endDate = new Date(employee.endDate);

    // Check if today's date is between startDate and endDate
    return currentDate >= startDate && currentDate <= endDate;
  });

  return Math.ceil(filteredEmployees.length / perPage);
});

const goToPage = (page) => {
  const filteredEmployees = employees.value.filter((employee) => {
    const startDate = new Date(employee.startDate);
    const endDate = new Date(employee.endDate);

    // Check if today's date is between startDate and endDate
    return currentDate >= startDate && currentDate <= endDate;
  });

  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const currentDate = new Date(); // Get today's date

// ... (other code remains unchanged)

const fetchData = async () => {
  try {
    const performanceData = await getMyAssessmentData();
    if (!performanceData.error) {
      employees.value = performanceData.data.docs;

      // employees.value = allEmployees.filter((employee) => {
      //   const startDate = new Date(employee.startDate);
      //   const endDate = new Date(employee.endDate);
      //   return startDate <= endDate;
      // });

      console.log(employees.value); // Add this log to check if data is retrieved
    } else {
      console.error(performanceData.error);
      // Handle error state if necessary
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
};

// ... (other code remains unchanged)

const formatDate = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month, day] = dateString.split(" ");
  const numericDay = parseInt(day, 10);

  // Get the appropriate ordinal suffix for the day
  const daySuffix =
    numericDay > 3 && numericDay < 21
      ? "th"
      : numericDay % 10 === 1
      ? "st"
      : numericDay % 10 === 2
      ? "nd"
      : numericDay % 10 === 3
      ? "rd"
      : "th";

  // Create the formatted date string
  const formattedDate = `${numericDay}${daySuffix} ${
    months[parseInt(month, 10) - 1]
  } ${year}`;
  return formattedDate;
};

const submitAssessment = async () => {
  if (Array.isArray(slicedEmployees.value)) {
    for (const employe of slicedEmployees.value) {
      const assessmentData = {};
      for (const { criteria, rating, comment } of rows.value) {
        const formattedCriteria = criteria.replace(/\s+/g, ""); // Remove spaces from criteria

        assessmentData[`employee${formattedCriteria}Review`] = rating;
        assessmentData[`employee${formattedCriteria}Comment`] = comment;
      }

      const response = await createAssessmentForEmployee(
        employe._id,
        assessmentData
      );
      if (response.error) {
        console.error("Error submitting assessment:", response.error);
      } else {
        showSuccess.value = true; // Show success modal

        // Clear ratings and comments
        rows.value.forEach((row) => {
          row.rating = 0;
          row.comment = "";
        });
        completedTasks.value = "";
        assignedTasks.value = "";
      }
    }
  } else {
    console.error("slicedEmployees is not an array or is empty.");
    // Handle the case when slicedEmployees is not an array
  }
};

onMounted(() => {
  fetchData(); // Call the fetchData function on component mount
});
</script>
