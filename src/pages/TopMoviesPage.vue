<template>
  <v-row justify="center">
    <v-col cols="12" class="text-center"
      ><h1 style="color:#66999bff">TOP MOVIES</h1></v-col
    >
    <v-col
      cols="12"
      sm="8"
      v-for="(movie, index) in movies.results"
      :key="index"
    >
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            ripple
            :elevation="hover ? 10 : 2"
            class="d-flex flex-row justify-space-between"
            height="190px"
            style="cursor:pointer"
            :to="`/movie/${movie.id}`"
          >
            <v-img width="150px" :src="getImageUrl() + movie.poster_path">
            </v-img>
            <v-card-text class="d-flex flex-column justify-center">
              <p>
                Title:
                <span style="font-size:20px" class="bold">{{
                  movie.title
                }}</span>
              </p>
              <p>
                Average rating :
                <span style="font-size:20px" class="bold">{{
                  movie.vote_average
                }}</span>
              </p>
              <p>
                Total votes:
                <span style="font-size:20px" class="bold">{{
                  movie.vote_count
                }}</span>
              </p>
            </v-card-text>
            <v-card-text class="d-flex align-center justify-end">
              <h1>#{{ index + 1 + (page - 1) * 20 }}</h1>
            </v-card-text>
          </v-card>
        </template>
      </v-hover></v-col
    >
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
import { IMAGE_URL } from "../axios";
export default {
  name: "topMovies",
  methods: {
    getImageUrl() {
      return IMAGE_URL;
    },
  },
  created() {
    this.$store.dispatch("movie/fetchTopMovies", { page: 1 });
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    movies() {
      return this.$store.getters["movie/getTopMovies"];
    },
  },
  watch: {
    page() {
      this.$store.dispatch("movie/fetchTopMovies", {
        page: this.page,
      });
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped></style>
