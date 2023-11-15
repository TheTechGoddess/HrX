<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="w-[400px] relative">
        <input
          type="search"
          name=""
          id=""
          class="w-full bg-[#F7FAFC] border border-[#ECEDEF] py-2 px-10 rounded-lg focus:outline-none focus:ring-0"
          placeholder="Find latest events here..."
        />
        <img
          src="~/assets/images/search.svg"
          alt=""
          class="absolute top-2.5 left-4"
        />
      </div>
      <button
        v-if="loginUser.loginType === 'Company'"
        class="px-3 py-2.5 font-medium text-white bg-primary rounded-xl -mt-4"
      >
        Add new Training
      </button>
    </div>
    <div>
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
          v-for="event in events"
          :key="event.id"
          :href="event.externalLink"
          target="_blank"
          rel="noopener noreferrer"
          class="border border-deactivated p-4 flex flex-col justify-center rounded-lg cursor-pointer"
        >
          <img :src="event.imageUrl" alt="" />
          <div class="flex space-x-3 items-center">
            <div class="p-1 rounded-lg border border-deactivated my-3">
              <img :src="event.logoUrl" alt="" />
            </div>
            <p class="text-bodytext text-xs">{{ event.organizer }}</p>
          </div>
          <h1 class="text-header text-xl font-medium">{{ event.title }}</h1>
          <p class="my-3 text-xs text-bodytext">{{ event.description }}</p>
          <div class="flex space-x-2 items-center">
            <img src="~/assets/images/calender.svg" alt="" />
            <p class="text-xs font-medium text-bodytext">
              <span>{{ formatDate(event.startDate) }} </span>-
              <span> {{ formatDate(event.endDate) }} </span>
              <span class="ml-1">{{ event.year }}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
    <div>
      <div class="my-8 flex justify-between">
        <h1 class="text-header font-medium text-xl">Financial Programs</h1>
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
          v-for="event in events"
          :key="event.id"
          :href="event.externalLink"
          target="_blank"
          rel="noopener noreferrer"
          class="border border-deactivated p-4 flex flex-col justify-center rounded-lg cursor-pointer"
        >
          <img :src="event.imageUrl" alt="" />
          <div class="flex space-x-3 items-center">
            <div class="p-1 rounded-lg border border-deactivated my-3">
              <img :src="event.logoUrl" alt="" />
            </div>
            <p class="text-bodytext text-xs">{{ event.organizer }}</p>
          </div>
          <h1 class="text-header text-xl font-medium">{{ event.title }}</h1>
          <p class="my-3 text-xs text-bodytext">{{ event.description }}</p>
          <div class="flex space-x-2 items-center">
            <img src="~/assets/images/calender.svg" alt="" />
            <p class="text-xs font-medium text-bodytext">
              <span>{{ formatDate(event.startDate) }} </span> -
              <span> {{ formatDate(event.endDate) }} </span>
              <span class="ml-1"> {{ event.year }}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useLoginUser } from "~/store/auth";
import eventImg from "~/assets/images/event_img.svg";
import logoImg from "~/assets/images/wellness_logo.svg";
const loginUser = useLoginUser();

const events = ref([
  {
    id: 1,
    imageUrl: eventImg,
    logoUrl: logoImg,
    organizer: "She Can Women",
    title: "Fitness Show for Everyone",
    description:
      "This program is for people who’ve had a long week that just want to get a good stretch in before the start of another busy week",
    startDate: new Date("2023-11-16"),
    endDate: new Date("2023-11-18"),
    year: 2023,
    externalLink: "https://example.com",
  },
  {
    id: 1,
    imageUrl: eventImg,
    logoUrl: logoImg,
    organizer: "She Can Women",
    title: "Fitness Show for Everyone",
    description:
      "This program is for people who’ve had a long week that just want to get a good stretch in before the start of another busy week",
    startDate: new Date("2023-11-16"),
    endDate: new Date("2023-11-18"),
    year: 2023,
    externalLink: "https://example.com",
  },
  {
    id: 1,
    imageUrl: eventImg,
    logoUrl: logoImg,
    organizer: "She Can Women",
    title: "Fitness Show for Everyone",
    description:
      "This program is for people who’ve had a long week that just want to get a good stretch in before the start of another busy week",
    startDate: new Date("2023-11-16"),
    endDate: new Date("2023-11-18"),
    year: 2023,
    externalLink: "https://example.com",
  },
  {
    id: 1,
    imageUrl: eventImg,
    logoUrl: logoImg,
    organizer: "She Can Women",
    title: "Fitness Show for Everyone",
    description:
      "This program is for people who’ve had a long week that just want to get a good stretch in before the start of another busy week",
    startDate: new Date("2023-11-16"),
    endDate: new Date("2023-11-18"),
    year: 2023,
    externalLink: "https://example.com",
  },
  {
    id: 1,
    imageUrl: eventImg,
    logoUrl: logoImg,
    organizer: "She Can Women",
    title: "Fitness Show for Everyone",
    description:
      "This program is for people who’ve had a long week that just want to get a good stretch in before the start of another busy week",
    startDate: new Date("2023-11-16"),
    endDate: new Date("2023-11-18"),
    year: 2023,
    externalLink: "https://example.com",
  },
  // Add more events as needed
]);

const formatDate = (date) => {
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  return `${day} ${month}`;
};
</script>
