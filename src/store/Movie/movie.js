import axios from "../../axios";

const movie = {
  namespaced: true,

  state: () => ({
    movies: {},
    movie: null,
    topMovies: {},
    popularMovies: {},
  }),

  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_MOVIE(state, movie) {
      state.movie = movie;
    },
    SET_TOP_MOVIES(state, topMovies) {
      state.topMovies = topMovies;
    },
    SET_POPULAR_MOVIES(state, popularMovies) {
      state.popularMovies = popularMovies;
    },
  },

  actions: {
    async fetchMovie({ dispatch, commit }, object) {
      try {
        const response = await axios.get(`movie/${object.movieId}`);
        commit("SET_MOVIE", response.data);
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Couldnt retrieve the movie",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
    async fetchMovies({ dispatch, commit }, object) {
      try {
        const response = await axios.get(
          `movies?search=${object.search}&page=${object.page}`
        );
        commit("SET_MOVIES", response.data);
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
    async fetchTopMovies({ dispatch, commit }, object) {
      try {
        const response = await axios.get(`movies/top?page=${object.page}`);
        commit("SET_TOP_MOVIES", response.data);
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Couldnt retrieve the top movies",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
    async fetchPopularMovies({ dispatch, commit }) {
      try {
        const response = await axios.get(`movies/popular`);
        commit("SET_POPULAR_MOVIES", response.data);
        console.log(response);
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Couldnt retrieve the popular movies",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
  },

  getters: {
    getMovies: (state) => state.movies,
    getMovie: (state) => state.movie,
    getTopMovies: (state) => state.topMovies,
    getPopularMovies: (state) => state.popularMovies,
  },
};

export default movie;
