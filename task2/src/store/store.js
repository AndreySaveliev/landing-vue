import { reactive } from "vue";

export const store = reactive({
  user: {},
  setUser(user) {
    this.user = user;
  },
});
