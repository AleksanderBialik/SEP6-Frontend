import axios from "../../axios";

const people = {
  namespaced: true,

  state: () => ({
    person: {},
    people: {},
    popularPeople: [],
  }),

  mutations: {
    SET_PEOPLE(state, people) {
      state.people = people;
    },
    SET_PERSON(state, person) {
      state.person = person;
    },
    SET_POPULAR_PEOPLE(state, popularPeople) {
      state.popularPeople = popularPeople;
    },
  },

  actions: {
    async fetchPerson({ dispatch, commit }, object) {
      try {
        const response = await axios.get(`person/${object.personId}`);
        commit("SET_PERSON", response.data);
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Couldnt retrieve the person",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
    async fetchPeople({ dispatch, commit }, object) {
      try {
        const response = await axios.get(
          `person?search=${object.search}&page=${object.page}`
        );
        commit("SET_PEOPLE", response.data);
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Couldnt retrieve the people",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
    async fetchPopularPeople({ dispatch, commit }) {
      try {
        const response = await axios.get(`person/popular`);
        commit("SET_POPULAR_PEOPLE", response.data);
      } catch (error) {
        dispatch(
          "snackbar/setSnackbar",
          {
            color: "red",
            icon: "exclamation-triangle",
            message: "Couldnt retrieve the popular people",
          },
          { root: true }
        );
        dispatch("snackbar/toggleSnackbar", true, { root: true });
      }
    },
  },

  getters: {
    getPeople: (state) => state.people,
    getPerson: (state) => state.person,
    getPopularPeople: (state) => state.popularPeople,
  },
};

export default people;
