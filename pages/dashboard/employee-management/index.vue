<template>
  <div>
    <div class="flex justify-between">
      <Title title="Employee Management" />
      <button
        @click="showInviteModal"
        class="px-3 py-2.5 font-medium text-white bg-[#E4669E] rounded-xl"
      >
        Invite Employees
      </button>
    </div>

    <div class="md:flex md:justify-between md:space-x-4 pt-6">
      <TotalEmployees class="" />
      <Department class="" />
    </div>
    <EmployeeList />
    <invite-employees v-if="isInviteModalVisible" @close="closeInviteModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/layout/Title.vue";
import TotalEmployees from "../../../components/employee/TotalEmployees.vue";
import Department from "../../../components/employee/Department.vue";
import EmployeeList from "../../../components/employee/EmployeeList.vue";
import InviteEmployees from "@/components/auth/InviteEmployees.vue";

const isInviteModalVisible = ref(false);

const showInviteModal = () => {
  isInviteModalVisible.value = true;
};

const closeInviteModal = () => {
  isInviteModalVisible.value = false;
};
</script>
