// store/user.js
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user", // Unique identifier for the store
  state: () => ({
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    accessToken: null,
    isLoggedIn: false,
  }),
  actions: {
    // Action to set the user's details when logged in
    setUserDetails(userDetails) {
      this.id = userDetails.id;
      this.email = userDetails.email;
      this.firstName = userDetails.first_name;
      this.lastName = userDetails.last_name;
      this.isLoggedIn = true;
    },

    // Action to set the access token
    setAccessToken(token) {
      this.accessToken = token;
    },
  },
  getters: {
    // Getter to check if the user is logged in
    isAuthenticated() {
      const isLoggedIn = this.accessToken !== null;
      console.log("IsLoggedIn:", isLoggedIn, 5);
      return isLoggedIn;
    },
  },
  persist: true,
});
