<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="12" xl="12"
      ><v-text-field
        dense
        filled
        flat
        v-model="search"
        label="Search for movie"
      >
        <template slot="append">
          <font-awesome-icon icon="search" class="mt-1" />
        </template> </v-text-field
    ></v-col>
    <v-col
      cols="6"
      sm="6"
      md="4"
      lg="3"
      xl="3"
      :class="{
        'column-margin': index + 1 == movies.length && movies.length % 2 != 0,
      }"
      v-for="(movie, index) in movies.results"
      :key="index"
    >
      <MovieCard
        :src="movie.poster_path"
        :text="movie.title"
        :to="`/movie/${movie.id}`"
      />
    </v-col>

    <v-col cols="10">
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="movies.total_pages"
        ></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import MovieCard from "../components/cards/MovieCard";
export default {
  name: "movies",
  components: {
    MovieCard,
  },
  data: () => ({
    search: "",
    page: 1,
  }),
  watch: {
    search() {
      if (this.search.length >= 3) {
        this.$store.dispatch("movie/fetchMovies", {
          search: this.search,
          page: 1,
        });
      }
      if (this.search.length <= 2) {
        this.$store.commit("movie/SET_MOVIES", {});
      }
    },
    page() {
      this.$store.dispatch("movie/fetchMovies", {
        search: this.search,
        page: this.page,
      });
      window.scrollTo(0, 0);
    },
  },
  computed: {
    movies() {
      return this.$store.getters["movie/getMovies"];
    },
  },
  methods: {},
};
</script>

<style scoped>
.column-margin {
  margin-right: auto !important;
}
</style>
