// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
  },
  mutations: {
    setTheme(state, newTheme) {
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    },
  },
  actions: {
    toggleTheme({ commit, state }) {
      const newTheme = state.theme === "light" ? "dark" : "light";
      commit("setTheme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme); // Set theme on HTML element
    },
  },
  modules: {},
});
