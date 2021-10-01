import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    clearUser(state) {
      state.user = ""
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    initAuth({
      commit
    }) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        commit('setUser', user)
      } else {
        return
      }
    },
    Login({
      commit,
    }, credentials) {
      localStorage.setItem("user", JSON.stringify(credentials));
      commit("setUser", credentials);
    },
    Logout({
      commit,
    }) {
      commit("clearUser")
      localStorage.removeItem("user");
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== "";
    },
    userInfo(state) {
      return state.user;
    }
  },
})