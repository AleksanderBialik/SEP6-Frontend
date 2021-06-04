<template>
  <v-row>
    <v-col cols="12" class="text-center"
      ><h1 style="color:#66999bff">Favourite movies</h1></v-col
    >
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
        :src="movie.poster_path"
        :text="movie.title"
        :to="`/movie/${movie.movie_id}`"
        :movieId="String(movie.movie_id)"
        remove
      />
    </v-col>
  </v-row>
</template>

<script>
import MovieCard from "../components/cards/MovieCard";
export default {
  name: "favourites",
  components: {
    MovieCard,
  },

  created() {
    this.$store.dispatch("user/fetchFavouriteMovies");
  },
  computed: {
    movies() {
      return this.$store.getters["user/getFavouriteMovies"];
    },
  },

  data: () => ({}),
};
</script>

<style></style>
