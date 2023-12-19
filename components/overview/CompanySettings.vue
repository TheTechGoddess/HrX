<template>
  <div>
    <!-- saved profile information -->
    <div class="flex" v-if="!edited">
      <!-- Profile Information-->
      <div class="w-full">
        <div class="w-full">
          <div class="flex justify-between my-3 items-center">
            <h1 class="text-lg text-[#39404F] font-medium">
              Company Information
            </h1>
            <button
              v-if="!edited"
              @click="editProfile"
              class="font-medium bg-[#E4669E] text-white px-3 py-2 rounded-lg"
            >
              Edit details
            </button>
          </div>

          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Company Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.companyName : 'Company Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Jurisdiction</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.jurisdiction
                    ? employeeData.jurisdiction
                    : 'Jurisdiction'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">TAX ID No.</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.taxIdNo
                    ? employeeData.taxIdNo
                    : 'Tax Id'
                "
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Industry</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.industry
                    ? employeeData.industry
                    : 'Industry'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">RC No.</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.rcNo
                    ? employeeData.rcNo
                    : 'RC Number'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Company Size</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.companySize
                    ? employeeData.companySize
                    : 'Company Size'
                "
              />
            </div>
          </div>
          <!-- contact  -->
          <h1 class="text-lg text-[#39404F] font-medium mb-4 mt-8">
            Company Contact
          </h1>
          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.companyEmail
                    ? employeeData.companyEmail
                    : 'Email Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.address
                    ? employeeData.address
                    : 'Company Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Website</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.website
                    ? employeeData.website
                    : 'Company Website'
                "
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.phoneNumber
                    ? employeeData.phoneNumber
                    : 'Phone Number'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Country</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData && employeeData.country
                    ? employeeData.country
                    : 'Country'
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- when you click edit -->
    <div class="flex" v-else>
      <!-- Profile Information-->
      <form action="" class="w-full" @submit.prevent="save">
        <div class="w-full">
          <div class="flex justify-between">
            <h1 class="text-lg text-[#39404F] font-medium mb-4">
              Company Information
            </h1>
            <button
              v-if="edited"
              type="submit"
              class="font-medium bg-[#E4669E] text-white px-3 py-2 rounded-lg"
            >
              Save Changes
            </button>
          </div>

          <div class="w-full flex justify-between capitalize">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Company Name</label>
              <input
                type="text"
                v-model="companyName"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.companyName : 'Company Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Jurisdiction</label>
              <input
                type="text"
                v-model="jurisdiction"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData && employeeData.jurisdiction
                    ? employeeData.jurisdiction
                    : 'Jurisdiction'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">TAX ID No.</label>
              <input
                type="text"
                v-model="taxIdNo"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData && employeeData.taxIdNo
                    ? employeeData.taxIdNo
                    : 'Tax Id'
                "
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Industry</label>
              <input
                type="text"
                v-model="industry"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData && employeeData.industry
                    ? employeeData.industry
                    : 'Industry'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">RC No.</label>
              <input
                type="text"
                v-model="rcNo"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData && employeeData.rcNo
                    ? employeeData.rcNo
                    : 'RC Number'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Company Size</label>
              <input
                type="text"
                v-model="companySize"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData && employeeData.companySize
                    ? employeeData.companySize
                    : 'Company Size'
                "
              />
            </div>
          </div>
          <!-- contact  -->
          <h1 class="text-lg text-[#39404F] font-medium mb-4 mt-8">
            Company Contact
          </h1>
          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded cursor-auto"
                :placeholder="
                  employeeData && employeeData.companyEmail
                    ? employeeData.companyEmail
                    : 'Email Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                v-model="address"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData && employeeData.address
                    ? employeeData.address
                    : 'Company Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Website</label>
              <input
                type="text"
                v-model="website"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData && employeeData.website
                    ? employeeData.website
                    : 'Company Website'
                "
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                v-model="phoneNumber"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData && employeeData.phoneNumber
                    ? employeeData.phoneNumber
                    : 'Phone Number'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Country</label>
              <input
                type="text"
                v-model="country"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData && employeeData.country
                    ? employeeData.country
                    : 'Country'
                "
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import OptionsDropdown from "~/components/global/OptionsDropdown.vue";
import { updateCompany, getCompany } from "~/services/employee";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const employeeId = route.params.id;
const employeeData = ref(null);
const edited = ref(false);
const editProfile = () => {
  console.log("Editting...");
  edited.value = true;
};

const companyName = ref("");
const jurisdiction = ref("");
const taxIdNo = ref("");
const industry = ref("");
const website = ref("");
const companySize = ref("");
const rcNo = ref("");
const address = ref("");
const phoneNumber = ref("");
const country = ref("");

async function fetchEmployeeHRData() {
  try {
    const result = await getCompany();

    if (result.error) {
      console.error("Error fetching employee HR:", result.error);
      // Handle error state or display a message to the user
    } else {
      employeeData.value = result.data; // Update the employee data
    }
  } catch (error) {
    console.error("Error fetching employee HR:", error);
    // Handle any unexpected errors during the fetch
  }
}

const save = async () => {
  const updatedData = {};
  if (companyName.value && jurisdiction.value) {
    updatedData.fullName = companyName.value + " " + jurisdiction.value;
  }
  if (jurisdiction.value) {
    updatedData.jurisdiction = jurisdiction.value;
  }
  if (industry.value) {
    updatedData.industry = industry.value;
  }
  if (taxIdNo.value) {
    updatedData.dob = taxIdNo.value;
  }
  if (rcNo.value) {
    updatedData.rcNo = rcNo.value;
  }
  if (website.value) {
    updatedData.website = website.value;
  }
  if (country.value) {
    updatedData.country = country.value;
  }
  if (address.value) {
    updatedData.address = address.value;
  }
  if (phoneNumber.value) {
    updatedData.phoneNumber = phoneNumber.value;
  }
  if (companySize.value) {
    updatedData.companySize = companySize.value;
  }

  try {
    const response = await updateCompany(updatedData);

    if (response.error) {
      console.error("Error updating employee data:", response.error);
      // Handle error state or display a message to the user
    } else {
      fetchEmployeeHRData();
      edited.value = false; // Set edited to false to exit edit mode
      // Optionally, you may want to re-fetch employee data after update
    }
  } catch (error) {
    console.error("Error updating employee data:", error);
    // Handle any unexpected errors during the update
  }
};

onMounted(() => {
  fetchEmployeeHRData();
});
</script>
