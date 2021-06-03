<template>
  <v-row justify="center">
    <v-col cols="12" class="text-center"
      ><h1 style="color:#66999bff">TOP MOVIES</h1></v-col
    >
    <v-col cols="12" sm="8" v-for="(movie, index) in movies" :key="index">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            ripple
            :elevation="hover ? 10 : 2"
            :to="to"
            class="d-flex flex-row justify-space-between"
            height="190px"
            style="cursor:pointer"
          >
            <v-img
              width="150px"
              :src="getImageUrl() + '/kU3B75TyRiCgE270EyZnHjfivoq.jpg'"
            >
            </v-img>
            <v-card-text class="d-flex flex-column justify-center">
              <p>Title</p>
              <p>Average rating</p>
              <p>Total votes</p>
            </v-card-text>
            <v-card-text class="d-flex align-center justify-end">
              <h1>#{{ index + 1 }}</h1>
            </v-card-text>
          </v-card>
        </template>
      </v-hover></v-col
    >
    <v-col cols="10">
      <div class="text-center">
        <v-pagination v-model="page" :length="2000"></v-pagination>
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
  data: () => ({
    page: 1,
    movies: [
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
      "aaaaa",
    ],
  }),
};
</script>

<style></style>
