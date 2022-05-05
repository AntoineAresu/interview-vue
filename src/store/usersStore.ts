import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    email: "",
    isConnected: false,
  }),
  actions: {
    login(user: any) {
      this.$patch({
        email: user.email,
        isConnected: true,
      });
    },
    logout() {
      this.$patch({
        email: "",
        isConnected: false,
      });
    },
  },
});
