// userStore.js

import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    data: {
      _id: null,
      email: null,
      role: null,
      company: {
        _id: null,
        companyName: null,
        logo: null,
      },
      status: null,
      isEmployed: null,
      isConfirmed: null,
      serviceDocument: [],
      createdAt: null,
      updatedAt: null,
      __v: null,
      displayPicture: null,
      fullName: null,
    },
    error: null,
  }),
  actions: {
    setId(id) {
      this.data._id = id;
    },
    setEmail(email) {
      this.data.email = email;
    },
    setFullName(fullName) {
      this.data.fullName = fullName;
    },
    setRole(role) {
      this.data.role = role;
    },
    setStatus(status) {
      this.data.status = status;
    },
    setIsEmployed(isEmployed) {
      this.data.isEmployed = isEmployed;
    },
    setDisplayPicture(displayPicture) {
      this.data.displayPicture = displayPicture;
    },
    setCompanyName(companyName) {
      this.data.company.companyName = companyName;
    },
    setCompanyLogo(logo) {
      this.data.company.logo = logo;
    },
    setError(error) {
      this.error = error;
    },
  },
});
