import axios from "../../axios";
import router from "../../router";
import jwt_decode from "jwt-decode";

const user = {
  namespaced: true,

  state: () => ({
    token: window.localStorage.getItem("token"),
    favouriteMovies: [],
  }),

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_FAVOURITE_MOVIES(state, favouriteMovies) {
      state.favouriteMovies = favouriteMovies;
    },
  },

  actions: {
    async login({ commit, dispatch }, object) {
      try {
        const response = await axios.post("user/login", {
          password: object.password,
          username: object.username,
        });
        const token = response.headers["X-Auth-Token"];
        localStorage.setItem("token", token);
        commit("SET_TOKEN", token);
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "success",
            icon: "check",
            message: "Logged in!",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      } catch (error) {
        commit("SET_TOKEN", null);

        localStorage.removeItem("token");

        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Error while trying to log in",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
    async register({ dispatch }, object) {
      try {
        await axios.post("user/register", {
          password: object.password,
          username: object.username,
        });

        dispatch(
          "snackbar/setSnackbar",
          {
            color: "success",
            icon: "check",
            message: "Account has been registered!",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Error while trying to register",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
    async logout({ commit, dispatch }) {
      try {
        localStorage.removeItem("token");
        router.push("/home");
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "success",
            icon: "check",
            message: "Logged out succesfully!",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });

        commit("SET_TOKEN", null);
      } catch (error) {
        console.log(error.response);
      }
    },
    async fetchFavouriteMovies({ dispatch, commit }) {
      try {
        const response = await axios.get(`user/playlist/getFavourite`);
        commit("SET_FAVOURITE_MOVIES", response.data);
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Couldnt retrieve the movies",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
    async addToFavourites({ dispatch }, object) {
      try {
        await axios.get(`user/playlist/addToFavourite`, {
          movie_id: object.movieId,
          title: object.title,
          poster_path: object.path,
        });
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "success",
            icon: "check",
            message: "Movie was added to favourites!",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Couldnt retrieve the movies",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
    async removeFromFavourites({ dispatch }, object) {
      try {
        await axios.delete(
          `user/playlist/removeFromFavourite/${object.movieId}`
        );
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "success",
            icon: "check",
            message: "Movie was removed from favourites!",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Couldnt retrieve the movies",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
  },

  getters: {
    getFavouriteMovies: (state) => state.favouriteMovies,
    getToken: (state) => {
      if (state.token) {
        return jwt_decode(state.token);
      } else {
        return null;
      }
    },
  },
};

export default user;
