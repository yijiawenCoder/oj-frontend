import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "noLogin",
    },
  }),

  actions: {
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { userName: "yjw", role: "canAdmin" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
