<template>
  <div>
    <v-row v-if="person">
      <v-col cols="12" sm="5" md="4" lg="2">
        <v-card>
          <v-img
            v-if="person.profile_path"
            :src="getImageUrl() + person.profile_path"
          >
          </v-img>
          <v-img v-else src="../assets/nophoto.png"> </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" lg="10" sm="7" md="8"
        ><v-card elevation="0">
          <v-card-title class="pl-0 pt-0"
            >{{ person.name }} ({{ person.known_for_department }})</v-card-title
          >
          <v-card-text class="d-flex pl-0 flex-column justify-center">
            <p v-if="person.birthday">
              Birthday:
              <span style="font-size:20px" class="bold">{{
                person.birthday
              }}</span>
            </p>
            <p v-if="person.deathday">
              Deathday:
              <span style="font-size:20px" class="bold">{{
                person.deathday
              }}</span>
            </p>
            <p>{{ person.biography }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="person.movies" cols="12">
        <div>
          <h1 style="color:#66999bff">Associated Movies</h1>
          <v-carousel
            hide-delimiters
            height="auto"
            style="min-height:600px"
            cycle
          >
            <template v-for="(item, index) in person.movies">
              <v-carousel-item
                v-if="(index + 1) % columns === 1 || columns === 1"
                :key="index"
              >
                <v-row class="flex-nowrap" style="height:100%">
                  <template v-for="(n, i) in columns">
                    <template v-if="index + i < person.movies.length">
                      <v-col :key="i" cols="12" xl="3" lg="4" md="6">
                        <MovieCard
                          :text="person.movies[+index + i].title"
                          :src="person.movies[+index + i].poster_path"
                          :to="`/movie/${person.movies[+index + i].id}`"
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
import MovieCard from "../components/cards/MovieCard";
import { IMAGE_URL } from "../axios";
export default {
  name: "person",
  components: {
    MovieCard,
  },
  created() {
    this.$store.dispatch("people/fetchPerson", {
      personId: this.$route.params.personId,
    });
  },
  data: () => ({}),
  methods: {
    getImageUrl() {
      return IMAGE_URL;
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
    person() {
      return this.$store.getters["people/getPerson"];
    },
  },
};
</script>

<style></style>
