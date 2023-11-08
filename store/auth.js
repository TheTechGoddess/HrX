import { defineStore } from "pinia";

export const useLoginUser = defineStore("loginUser", {
  state: () => ({
    token: null,
    isLoggedIn: false,
    loginType: null
  }),
  getters: {
    // Getter to check if the user is logged in
    isAuthenticated() {
      const isLoggedIn = this.token !== null;
      console.log("IsLoggedIn:", isLoggedIn, 5);
      return isLoggedIn;
    },
  },
  persist: true,
});
