// companyStore.js

import { defineStore } from "pinia";

export const useCompanyStore = defineStore("company", {
  state: () => ({
    data: {
      _id: null,
      role: null,
      companyName: null,
      logo: null,
      companyEmail: null,
      subscriptionType: null,
    },
    error: null,
  }),
  actions: {
    setId(id) {
      this.data._id = id;
    },
    setRole(role) {
      this.data.role = role;
    },
    setCompanyName(companyName) {
      this.data.companyName = companyName;
    },
    setLogo(logo) {
      this.data.logo = logo;
    },
    setCompanyEmail(companyEmail) {
      this.data.companyEmail = companyEmail;
    },
    setSubscriptionType(subscriptionType) {
      this.data.subscriptionType = subscriptionType;
    },
    setError(error) {
      this.error = error;
    },
  },
});
