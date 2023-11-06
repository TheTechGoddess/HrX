<template>
  <div>
    <LeaveHeader />
    <LeaveProgress />
    <div>
      <!-- leave application -->
      <div class="bg-white w-full p-4 rounded-2xl mb-8">
        <p class="text-2xl txt-[#39404F]">Leave Application</p>
        <div class="flex flex-col justify-center content-center px-48">
          <form
            action=""
            @submit.prevent="success"
            class="my-3 text-[#39404F] lg:mr-40 flex flex-col w-full justify-center items-center placeholder:text-[#CFD0D0]"
          >
            <div class="py-3 flex flex-col w-full">
              <label for="">Leave Type *</label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Select a leave type"
              />
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">From *</label>
              <div class="flex justify-between">
                <input
                  type="text"
                  class="bg-[#F7F8FA] w-[15%] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                  placeholder="Days"
                />
                <input
                  type="text"
                  class="bg-[#F7F8FA] w-[15%] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                  placeholder="Months"
                />
                <input
                  type="text"
                  class="bg-[#F7F8FA] w-[15%] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                  placeholder="Years"
                />
              </div>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">From *</label>
              <div class="flex justify-between">
                <input
                  type="text"
                  class="bg-[#F7F8FA] w-[15%] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                  placeholder="Days"
                />
                <input
                  type="text"
                  class="bg-[#F7F8FA] w-[15%] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                  placeholder="Months"
                />
                <input
                  type="text"
                  class="bg-[#F7F8FA] w-[15%] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                  placeholder="Years"
                />
              </div>
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for=""> Number of Days *</label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Select "
              />
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for="">Reliever</label>
              <input
                type="text"
                class="bg-[#F7F8FA] px-4 py-3 mt-2 rounded-lg placeholder-[#CFD0D0] placeholder:font-light focus:outline-none focus:border-none focus:ring-0"
                placeholder="Enter name"
              />
            </div>
            <div class="py-3 flex flex-col w-full">
              <label for=""> Reason *</label>
              <textarea
                placeholder="Tell us why"
                cols="30"
                rows="5"
                class="bg-[#F7F8FA] mt-3 w-full border-[#CFD0D0] rounded-lg placeholder:font-light placeholder-[#CFD0D0] px-4 py-3 focus:outline-none focus:border-none focus:ring-0"
              ></textarea>
            </div>

            <div class="mt-20 space-x-4">
              <button
                class="border border-[#585E6C] px-4 py-2.5 font-medium text-[#585E6C] rounded-xl"
              >
                Cancel
              </button>
              <button
                class="bg-[#DFE1E4] text-white px-4 py-3 font-medium rounded-xl"
                type="submit"
              >
                Request Leave
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <InviteSuccess
      :title="'Successful!'"
      :message="'You’ve successfully applied for an annual leave. Your HR will contact you for next steps'"
      :buttonLink="'/dashboard/leave'"
      :buttonText="'Go Back'"
      v-if="showInviteSuccess"
    />
  </div>
</template>

<script setup>
import InviteSuccess from "@/components/auth/InviteSuccess.vue";
import LeaveProgress from "../../../components/leave/LeaveProgress.vue";
import LeaveHeader from "../../../components/leave/LeaveHeader.vue";
const showInviteSuccess = ref(false);
const success = () => {
  showInviteSuccess.value = true;
};
</script>
