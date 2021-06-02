import Vue from "vue";
import Router from "vue-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MoviesPage from "./pages/MoviesPage";
import TopMoviesPage from "./pages/TopMoviesPage";
import PeoplePage from "./pages/PeoplePage";
import MoviePage from "./pages/MoviePage";
import PersonPage from "./pages/PersonPage";
import FavouritesPage from "./pages/FavouritesPage";
import ErrorPage from "./pages/ErrorPage.vue";
import jwt_decode from "jwt-decode";
import store from "./store";
// import moment from "moment";
// import axios from "./axios"

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: { name: "home" },
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/movie/:movieId",
      name: "movie",
      component: MoviePage,
    },
    {
      path: "/person/:personId",
      name: "person",
      component: PersonPage,
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesPage,
    },
    {
      path: "/movies/top",
      name: "topMovies",
      component: TopMoviesPage,
    },
    {
      path: "/people",
      name: "people",
      component: PeoplePage,
    },
    {
      path: "/favourites",
      name: "favourites",
      component: FavouritesPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "*",
      component: ErrorPage,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      jwt_decode(window.localStorage.getItem("token"));
    } catch (err) {
      router.push({ name: "login" });
      store.dispatch(
        "snackbar/setSnackbar",
        {
          color: "red",
          icon: "exclamation-triangle",
          message: "Log in to see your favourites list",
        },
        { root: true }
      );
      store.dispatch("snackbar/toggleSnackbar", true, { root: true });
    }
  } else {
    next();
  }
  next();
});

export default router;
