<template>
  <div>
    <!-- saved profile information -->
    <div class="flex" v-if="!edited">
      <!-- Profile Information-->
      <div class="w-full">
        <div class="w-full">
          <div class="flex justify-between">
            <h1 class="text-lg text-[#39404F] font-medium mb-4">
              Personal Data
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
              <label for="" class="mb-2 text-[#39404F]">First Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="First Name"
              />
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Enwonwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Date of Birth</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="23/05/200"
              />
              <label for="" class="mb-2 text-[#39404F]">Department</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#39404F] text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Engineering"
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Middle Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Kenechukwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Gender</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Female"
              />
              <label for="" class="mb-2 text-[#39404F]">Nationality</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Nigerian"
              />
              <label for="" class="mb-2 text-[#39404F]">Job Role</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#39404F] text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Frontend Engineer"
              />
            </div>
          </div>
          <!-- contact  -->
          <h1 class="text-lg text-[#39404F] font-medium mb-4 mt-8">Contact</h1>
          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="favour@hrx.co"
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Chevyview Estate Chevron, Lagos"
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="08123456789"
              />
              <label for="" class="mb-2 text-[#39404F]">Country</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Nigeria"
              />
            </div>
          </div>
          <!-- kin  -->
          <h1 class="text-lg text-[#39404F] font-medium mb-4 mt-8">
            Next of Kin
          </h1>
          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">First Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="First Name"
              />
              <label for="" class="mb-2 text-[#39404F]">Relationship</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Enwonwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="23/05/200"
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Kenechukwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Female"
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Nigerian"
              />
            </div>
          </div>
          <h1 class="text-lg text-[#39404F] font-medium mb-4 mt-8">
            Manager Details
          </h1>
          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">First Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="First Name"
              />
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Enwonwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="08123456789"
              />
              <label for="" class="mb-2 text-[#39404F]">Department</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#39404F] text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Engineering"
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Middle Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Kenechukwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Gender</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Female"
              />
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="favour@hrx.co"
              />
              <label for="" class="mb-2 text-[#39404F]">Job Role</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#39404F] text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Frontend Engineer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- when you click edit -->
    <div class="flex" v-else>
      <!-- Profile Information-->
      <form action="" class="w-full">
        <div class="w-full">
          <div class="flex justify-between">
            <h1 class="text-lg text-[#39404F] font-medium mb-4">
              Personal Data
            </h1>
            <button
              v-if="edited"
              @click="save"
              class="font-medium bg-[#E4669E] text-white px-3 py-2 rounded-lg"
            >
              Save Changes
            </button>
          </div>

          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">First Name</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="First Name"
              />
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Enwonwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Date of Birth</label>
              <input
                ref="dobInputRef"
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="23/05/2000"
              />
              <label for="" class="mb-2 text-[#39404F]">Department</label>
              <OptionsDropdown
                type="text"
                class="mb-8 w-40% ::placeholder"
                placeholder="Select Department"
                :options="departmentOptions"
              >
              </OptionsDropdown>
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Middle Name</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Kenechukwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Gender</label>
              <OptionsDropdown
                type="text"
                class="mb-8 w-40% ::placeholder"
                placeholder="Select Gender"
                :options="genderOptions"
              >
              </OptionsDropdown>
              <label for="" class="mb-2 text-[#39404F]">Nationality</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Nigerian"
              />
              <label for="" class="mb-2 text-[#39404F]">Job Role</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#CFD0D0] text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Frontend Engineer"
              />
            </div>
          </div>
          <!-- contact  -->
          <h1 class="text-lg text-[#39404F] font-medium mb-4 mt-8">Contact</h1>
          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="favour@hrx.co"
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Chevyview Estate Chevron, Lagos"
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="08123456789"
              />
              <label for="" class="mb-2 text-[#39404F]">Country</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Nigeria"
              />
            </div>
          </div>
          <!-- kin  -->
          <h1 class="text-lg text-[#39404F] font-medium mb-4 mt-8">
            Next of Kin
          </h1>
          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">First Name</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="First Name"
              />
              <label for="" class="mb-2 text-[#39404F]">Relationship</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Enwonwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="23/05/200"
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Kenechukwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Female"
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Nigerian"
              />
            </div>
          </div>
          <h1 class="text-lg text-[#39404F] font-medium mb-4 mt-8">
            Manager Details
          </h1>
          <div class="w-full flex justify-between">
            <!-- left -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">First Name</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="First Name"
              />
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Enwonwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="08123456789"
              />
              <label for="" class="mb-2 text-[#39404F]">Department</label>
              <OptionsDropdown
                type="text"
                class="mb-8 w-40% ::placeholder"
                placeholder="Select Department"
                :options="departmentOptions"
              >
              </OptionsDropdown>
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Middle Name</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Kenechukwu"
              />
              <label for="" class="mb-2 text-[#39404F]">Gender</label>
              <OptionsDropdown
                type="text"
                class="mb-8 w-40% ::placeholder"
                placeholder="Select Gender"
                :options="genderOptions"
              >
              </OptionsDropdown>
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="favour@hrx.co"
              />
              <label for="" class="mb-2 text-[#39404F]">Job Role</label>
              <input
                type="text"
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#CFD0D0] text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Frontend Engineer"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import OptionsDropdown from "~/components/global/OptionsDropdown.vue";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const state = reactive({
  dobInputRef: ref(null),
});
const edited = ref(false);
const editProfile = () => {
  console.log("Editting...");
  edited.value = true;
};
const save = () => {
  console.log("Saving...");
  edited.value = false;
};
const genderOptions = ["Male", "Female"];
const departmentOptions = [
  "Operations",
  "Sales",
  "Engineering",
  "Product",
  "Growth",
  "Marketing",
  "Agent",
];
onBeforeMount(() => {
  if (state.dobInputRef) {
    flatpickr(state.dobInputRef.value, {
      dateFormat: "d/m/Y", // Format as per your requirement
      maxDate: "2008-12-31", // Set the maximum date to December 31, 2008
      // You can customize further based on your needs
    });
  }
});
</script>
