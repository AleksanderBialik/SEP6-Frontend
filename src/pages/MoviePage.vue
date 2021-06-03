<template>
  <v-row>
    <v-col cols="12" sm="5" md="4" lg="2">
      <v-card>
        <v-img :src="getImageUrl() + '/kU3B75TyRiCgE270EyZnHjfivoq.jpg'">
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="12" lg="10" sm="7" md="8"
      ><v-card elevation="0">
        <v-card-title class="pl-0 pt-0">TITLE</v-card-title>
        <v-card-text class="pl-0">1900-01-01 - 1901-01-01</v-card-text>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <v-btn @click="addToFavourites()" color="success"
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
          <template v-for="(item, index) in slider">
            <v-carousel-item
              v-if="(index + 1) % columns === 1 || columns === 1"
              :key="index"
            >
              <v-row class="flex-nowrap" style="height:100%">
                <template v-for="(n, i) in columns">
                  <template v-if="index + i < slider.length">
                    <v-col :key="i" cols="12" xl="3" lg="4" md="6">
                      <PersonCard
                        :text="slider[+index + i]"
                        src="/kU3B75TyRiCgE270EyZnHjfivoq.jpg"
                        to="/dsaad"
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
    <v-col cols="12">
      <div>
        <h1 style="color:#66999bff">Similar Movies</h1>
        <v-carousel
          hide-delimiters
          height="auto"
          style="min-height:600px"
          cycle
        >
          <template v-for="(item, index) in slider">
            <v-carousel-item
              v-if="(index + 1) % columns === 1 || columns === 1"
              :key="index"
            >
              <v-row class="flex-nowrap" style="height:100%">
                <template v-for="(n, i) in columns">
                  <template v-if="index + i < slider.length">
                    <v-col :key="i" cols="12" xl="3" lg="4" md="6">
                      <MovieCard
                        :text="slider[+index + i]"
                        src="/kU3B75TyRiCgE270EyZnHjfivoq.jpg"
                        to="/dsaad"
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
  data: () => ({
    person: {},
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
  }),
  methods: {
    getImageUrl() {
      return IMAGE_URL;
    },
    addToFavourites() {
      console.log("HEHE");
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
  },
};
</script>

<style></style>
