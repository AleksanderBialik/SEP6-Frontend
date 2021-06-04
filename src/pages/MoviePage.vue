<template>
  <div>
    <v-row v-if="movie">
      <v-col cols="12" sm="5" md="4" lg="2">
        <v-card>
          <v-img
            v-if="movie.poster_path"
            :src="getImageUrl() + movie.poster_path"
          >
          </v-img>
          <v-img v-else src="../assets/nophoto.png"> </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" lg="10" sm="7" md="8"
        ><v-card elevation="0">
          <v-card-title class="pl-0 pt-0">{{ movie.title }}</v-card-title>
          <v-card-text class="d-flex pl-0 flex-column justify-center">
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
            <p>{{ movie.overview }}</p>
          </v-card-text>
          <v-btn v-if="isLoggedIn" @click="addToFavourites()" color="success"
            >Add to favourites</v-btn
          >
        </v-card>
      </v-col>
      <v-col cols="12">
        <div>
          <h1 style="color:#66999bff">Cast</h1>
          <v-carousel
            hide-delimiters
            height="auto"
            style="min-height:600px"
            cycle
          >
            <template v-for="(item, index) in movie.cast">
              <v-carousel-item
                v-if="(index + 1) % columns === 1 || columns === 1"
                :key="index"
              >
                <v-row class="flex-nowrap" style="height:100%">
                  <template v-for="(n, i) in columns">
                    <template v-if="index + i < movie.cast.length">
                      <v-col :key="i" cols="12" xl="3" lg="4" md="6">
                        <PersonCard
                          :text="
                            movie.cast[+index + i].name +
                              ' (' +
                              movie.cast[+index + i].known_for_department +
                              ')'
                          "
                          :src="movie.cast[+index + i].profile_path"
                          :to="`/person/${movie.cast[+index + i].id}`"
                        />
                      </v-col>
                    </template>
                  </template>
                </v-row>
              </v-carousel-item>
            </template>
          </v-carousel>
        </div>
      </v-col>
      <v-col v-if="movie.similar_movies" cols="12">
        <div>
          <h1 style="color:#66999bff">Similar Movies</h1>
          <v-carousel
            hide-delimiters
            height="auto"
            style="min-height:600px"
            cycle
          >
            <template v-for="(item, index) in movie.similar_movies">
              <v-carousel-item
                v-if="(index + 1) % columns === 1 || columns === 1"
                :key="index"
              >
                <v-row class="flex-nowrap" style="height:100%">
                  <template v-for="(n, i) in columns">
                    <template v-if="index + i < movie.similar_movies.length">
                      <v-col :key="i" cols="12" xl="3" lg="4" md="6">
                        <MovieCard
                          :text="movie.similar_movies[+index + i].title"
                          :src="movie.similar_movies[+index + i].poster_path"
                          :to="`/movie/${movie.similar_movies[+index + i].id}`"
                        />
                      </v-col>
                    </template>
                  </template>
                </v-row>
              </v-carousel-item>
            </template>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
    <v-row v-else justify="center" align="center">
      <v-col cols="12"
        ><div class="text-monospace text errorText">
          No movie with that ID!
        </div></v-col
      >
    </v-row>
  </div>
</template>

<script>
import PersonCard from "../components/cards/PersonCard";
import MovieCard from "../components/cards/MovieCard";
import { IMAGE_URL } from "../axios";
export default {
  name: "movie",
  components: {
    PersonCard,
    MovieCard,
  },
  created() {
    this.$store.dispatch("movie/fetchMovie", {
      movieId: this.$route.params.movieId,
    });
  },
  data: () => ({
    person: {},
  }),
  methods: {
    getImageUrl() {
      return IMAGE_URL;
    },
    addToFavourites() {
      let movie = {
        movie_id: this.movie.id,
        title: this.movie.title,
        poster_path: this.movie.poster_path,
      };
      this.$store.dispatch("user/addToFavourites", movie);
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("movie/fetchMovie", {
        movieId: this.$route.params.movieId,
      });
      window.scrollTo(0, 0);
    },
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    },
    movie() {
      return this.$store.getters["movie/getMovie"];
    },
    isLoggedIn: function() {
      return this.$store.getters["user/isLoggedIn"];
    },
  },
};
</script>

<style scoped>
.errorText {
  font-size: 22px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
