<template>
  <v-row justify="center">
    <Localisation />
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
      v-for="(movie, index) in movies"
      :key="index"
    >
      <MovieCard
        src="/kU3B75TyRiCgE270EyZnHjfivoq.jpg"
        text="aaaa"
        :to="`/movie/${movie.id}/`"
      />
    </v-col>

    <v-col cols="10">
      <div class="text-center">
        <v-pagination v-model="page" :length="2000"></v-pagination>
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
    movies: [
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
      "dasdas",
    ],
  }),
  watch: {
    search() {
      if (this.search.length >= 3) {
        this.$store.dispatch("movie/fetchMovies", { search: this.search });
      }
    },
  },
  computed: {
    movies() {
      return this.$store.getters["movie/getMovies"];
    },
  },
};
</script>

<style scoped>
.column-margin {
  margin-right: auto !important;
}
</style>
