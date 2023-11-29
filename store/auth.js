import { defineStore } from "pinia";

export const useLoginUser = defineStore("loginUser", {
  state: () => ({
    token: null,
    isLoggedIn: false,
    loginType: null
  }),
  actions: {
    setLoginType(type) {
      this.loginType = type;
    },
    logout() {
      this.token = null;
      this.isLoggedIn = false;
      this.loginType = null;

      // Clear localStorage
      localStorage.clear();
    },
  },
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
