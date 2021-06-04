<template>
  <div>
    <div>
      <h1 style="color:#66999bff">Popular People</h1>
      <v-carousel hide-delimiters height="auto" cycle style="min-height:600px">
        <template v-for="(person, index) in people">
          <v-carousel-item
            v-if="(index + 1) % columns === 1 || columns === 1"
            :key="index"
          >
            <v-row class="flex-nowrap" style="height:100%">
              <template v-for="(n, i) in columns">
                <template v-if="index + i < people.length">
                  <v-col :key="i" cols="12" xl="3" lg="4" md="6">
                    <PersonCard
                      :text="people[+index + i].name"
                      :src="people[+index + i].profile_path"
                      :to="`/person/${people[+index + i].id}`"
                    />
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-carousel-item>
        </template>
      </v-carousel>
    </div>
    <div>
      <h1 style="color:#66999bff">Popular Movies</h1>
      <v-carousel hide-delimiters height="auto" cycle style="min-height:600px">
        <template v-for="(movie, index) in movies">
          <v-carousel-item
            v-if="(index + 1) % columns === 1 || columns === 1"
            :key="index"
          >
            <v-row class="flex-nowrap" style="height:100%">
              <template v-for="(n, i) in columns">
                <template v-if="index + i < movies.length">
                  <v-col :key="i" cols="12" xl="3" lg="4" md="6">
                    <MovieCard
                      :text="movies[+index + i].title"
                      :src="movies[+index + i].poster_path"
                      :to="`/movie/${movies[+index + i].id}`"
                    />
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-carousel-item>
        </template>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import PersonCard from "../components/cards/PersonCard.vue";
import MovieCard from "../components/cards/MovieCard.vue";

export default {
  name: "Home",

  components: {
    PersonCard,
    MovieCard,
  },
  created() {
    this.$store.dispatch("movie/fetchPopularMovies");
    this.$store.dispatch("people/fetchPopularPeople");
  },
  data() {
    return {
      slider: [
        "red",
        "green",
        "orange",
        "blue",
        "pink",
        "purple",
        "indigo",
        "cyan",
        "deep-purple",
        "light-green",
        "deep-orange",
        "blue-grey",
      ],
    };
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
    movies() {
      return this.$store.getters["movie/getPopularMovies"].results;
    },
    people() {
      return this.$store.getters["people/getPopularPeople"].results;
    },
  },
};
</script>

<style></style>
