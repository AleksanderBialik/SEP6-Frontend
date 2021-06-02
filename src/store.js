import Vue from "vue";
import Vuex from "vuex";
import snackbar from "./store/Snackbar/snackbar";
import movie from "./store/Movie/movie";
import people from "./store/People/people";
import user from "./store/User/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { snackbar, movie, people, user },
});
