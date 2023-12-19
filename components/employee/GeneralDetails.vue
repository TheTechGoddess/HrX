<template>
  <div>
    <!-- saved profile information -->
    <div class="flex" v-if="!edited">
      <!-- Profile Information-->
      <div class="w-full">
        <div class="w-full">
          <div class="flex justify-between my-3 items-center">
            <h1 class="text-lg text-[#39404F] font-medium">Personal Data</h1>
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
                :placeholder="
                  employeeData
                    ? employeeData.fullName.split(' ')[0]
                    : 'First Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData
                    ? employeeData.fullName.split(' ')[1]
                    : 'Last Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Date of Birth</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="employeeData ? employeeData.dob : 'Date of Birth'"
              />
              <label for="" class="mb-2 text-[#39404F]">Department</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#39404F] text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.department : 'Department'
                "
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Middle Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.middleName : 'Middle Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Gender</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="employeeData ? employeeData.gender : 'Gender'"
              />
              <label for="" class="mb-2 text-[#39404F]">Nationality</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.nationality : 'Nationality'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Job Role</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#39404F] text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="employeeData ? employeeData.jobRole : 'Job Role'"
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
                :placeholder="
                  employeeData ? employeeData.email : 'Email Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.address : 'Residential Address'
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
                  employeeData ? employeeData.phoneNumber : 'Phone Number'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Country</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.nationality : 'Country'
                "
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
                :placeholder="
                  employeeData
                    ? employeeData.nextofKinRelationship
                    : 'Relationship'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.nextofKinNumber : 'Phone Number'
                "
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                placeholder="Last Name"
              />
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.nextofKinEmail : 'Email Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData
                    ? employeeData.nextofKinContact
                    : 'Residential Address'
                "
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
                :placeholder="
                  employeeData ? employeeData.managerFirstName : 'First Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.managerLastName : 'Last Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.managerNumber : 'Phone Number'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Department</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#39404F] text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.managerDepartment : 'Department'
                "
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Middle Name</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.managerMiddleName : 'Middle Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Gender</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.managerGender : 'Gender'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#39404F] outline-none text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.managerEmail : 'Email Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Job Role</label>
              <input
                type="text"
                readonly
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#39404F] text-sm text-[#344054] bg-[#EFF3FB] cursor-default rounded"
                :placeholder="
                  employeeData ? employeeData.managerJobRole : 'Job Role'
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
              Personal Data
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
              <label for="" class="mb-2 text-[#39404F]">First Name</label>
              <input
                type="text"
                v-model="firstName"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData
                    ? employeeData.fullName.split(' ')[0]
                    : 'First Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                v-model="lastName"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData
                    ? employeeData.fullName.split(' ')[1]
                    : 'Last Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Date of Birth</label>
              <input
                type="text"
                v-model="dateOfBirth"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="employeeData ? employeeData.dob : 'Date of Birth'"
              />
              <label for="" class="mb-2 text-[#39404F]">Department</label>
              <OptionsDropdown
                type="text"
                v-model="department"
                class="mb-8 w-40% ::placeholder"
                :placeholder="
                  employeeData ? employeeData.department : 'Department'
                "
                :options="departmentOptions"
              >
              </OptionsDropdown>
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Middle Name</label>
              <input
                type="text"
                v-model="middleName"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.middleName : 'Middle Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Gender</label>
              <OptionsDropdown
                type="text"
                v-model="gender"
                class="mb-8 w-40% ::placeholder"
                :placeholder="
                  employeeData ? employeeData.gender : 'Select Gender'
                "
                :options="genderOptions"
              >
              </OptionsDropdown>
              <label for="" class="mb-2 text-[#39404F]">Nationality</label>
              <input
                type="text"
                v-model="nationality"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.nationality : 'Nationality'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Job Role</label>
              <input
                type="text"
                v-model="jobRole"
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#CFD0D0] text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="employeeData ? employeeData.jobRole : 'Job Role'"
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
                v-model="emailAddress"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded cursor-auto"
                :placeholder="
                  employeeData ? employeeData.email : 'Email Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                v-model="homeAddress"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.address : 'Residential Address'
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
                  employeeData ? employeeData.phoneNumber : 'Phone Number'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Country</label>
              <input
                type="text"
                v-model="country"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.nationality : 'Country'
                "
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
                v-model="kinFirstName"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="First Name"
              />
              <label for="" class="mb-2 text-[#39404F]">Relationship</label>
              <input
                type="text"
                v-model="kinRelationship"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData
                    ? employeeData.nextofKinRelationship
                    : 'Relationship'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                v-model="kinPhoneNumber"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.nextofKinNumber : 'Phone Number'
                "
              />
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                v-model="kinLastName"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                placeholder="Last Name"
              />
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                type="text"
                v-model="kinEmailAddress"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.nextofKinEmail : 'Email Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Address</label>
              <input
                type="text"
                v-model="kinAddress"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData
                    ? employeeData.nextofKinContact
                    : 'Residential Address'
                "
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
                v-model="managerFirstName"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.managerFirstName : 'First Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Last Name</label>
              <input
                type="text"
                v-model="managerLastName"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.managerLastName : 'Last Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Phone Number</label>
              <input
                type="text"
                v-model="managerPhoneNumber"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.managerNumber : 'Phone Number'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Department</label>
              <OptionsDropdown
                type="text"
                v-model="managerDepartment"
                class="mb-8 w-40% ::placeholder"
                :placeholder="
                  employeeData
                    ? employeeData.managerDepartment
                    : 'Select Department'
                "
                :options="departmentOptions"
              >
              </OptionsDropdown>
            </div>
            <!-- right -->
            <div class="w-[48%] flex flex-col">
              <label for="" class="mb-2 text-[#39404F]">Middle Name</label>
              <input
                type="text"
                v-model="managerMiddleName"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.managerMiddleName : 'Middle Name'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Gender</label>
              <OptionsDropdown
                type="text"
                v-model="managerGender"
                class="mb-8 w-40% ::placeholder"
                :placeholder="
                  employeeData ? employeeData.managerGender : 'Select Gender'
                "
                :options="genderOptions"
              >
              </OptionsDropdown>
              <label for="" class="mb-2 text-[#39404F]">Email Address</label>
              <input
                v-model="manageremailAddress"
                type="text"
                class="mb-8 px-4 py-3.5 w-40% placeholder-[#CFD0D0] outline-none text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.managerEmail : 'Email Address'
                "
              />
              <label for="" class="mb-2 text-[#39404F]">Job Role</label>
              <input
                type="text"
                v-model="managerJobRole"
                class="mb-8 px-4 py-3.5 w-40% outline-none placeholder-[#CFD0D0] text-sm text-[#344054] bg-[#F7F8FA] rounded"
                :placeholder="
                  employeeData ? employeeData.managerJobRole : 'Job Role'
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
import { getEmployeeHr, updateEmployeeHr } from "~/services/employee";
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

const firstName = ref("");
const lastName = ref("");
const dateOfBirth = ref("");
const department = ref("");
const middleName = ref("");
const gender = ref("");
const nationality = ref("");
const jobRole = ref("");
const homeAddress = ref("");
const phoneNumber = ref("");
const country = ref("");
const kinFirstName = ref("");
const kinLastName = ref("");
const kinRelationship = ref("");
const kinPhoneNumber = ref("");
const kinEmailAddress = ref("");
const kinAddress = ref("");
const managerFirstName = ref("");
const managerLastName = ref("");
const managerPhoneNumber = ref("");
const managerDepartment = ref("");
const managerMiddleName = ref("");
const managerGender = ref("");
const manageremailAddress = ref("");
const managerJobRole = ref("");

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

async function fetchEmployeeHRData() {
  try {
    const result = await getEmployeeHr(employeeId);

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
  if (firstName.value && lastName.value) {
    updatedData.fullName = firstName.value + " " + lastName.value;
  }
  if (lastName.value) {
    updatedData.lastName = lastName.value;
  }
  if (middleName.value) {
    updatedData.middleName = middleName.value;
  }
  if (dateOfBirth.value) {
    updatedData.dob = dateOfBirth.value;
  }
  if (department.value) {
    updatedData.department = department.value;
  }
  if (jobRole.value) {
    updatedData.jobRole = jobRole.value;
  }
  if (gender.value) {
    updatedData.gender = gender.value;
  }
  if (homeAddress.value) {
    updatedData.address = homeAddress.value;
  }
  if (phoneNumber.value) {
    updatedData.phoneNumber = phoneNumber.value;
  }
  if (kinFirstName.value && kinLastName.value) {
    updatedData.nextofKin = kinFirstName.value + " " + kinFirstName.value;
  }
  if (kinAddress.value) {
    updatedData.nextofKinContact = kinAddress.value;
  }
  if (kinPhoneNumber.value) {
    updatedData.nextofKinNumber = kinPhoneNumber.value;
  }
  if (kinRelationship.value) {
    updatedData.nextofKinRelationship = kinRelationship.value;
  }
  if (kinEmailAddress.value) {
    updatedData.nextofKinEmail = kinEmailAddress.value;
  }
  if (managerFirstName.value) {
    updatedData.managerFirstName = managerFirstName.value;
  }
  if (managerLastName.value) {
    updatedData.managerLastName = managerLastName.value;
  }
  if (managerMiddleName.value) {
    updatedData.managerMiddleName = managerMiddleName.value;
  }
  if (managerDepartment.value) {
    updatedData.managerDepartment = managerDepartment.value;
  }
  if (managerJobRole.value) {
    updatedData.managerJobRole = managerJobRole.value;
  }
  if (managerGender.value) {
    updatedData.managerGender = managerGender.value;
  }
  if (manageremailAddress.value) {
    updatedData.managerEmail = manageremailAddress.value;
  }
  if (managerPhoneNumber.value) {
    updatedData.managerNumber = managerPhoneNumber.value;
  }
  if (nationality.value) {
    updatedData.nationality = nationality.value;
  }

  try {
    const response = await updateEmployeeHr(employeeId, updatedData);

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
