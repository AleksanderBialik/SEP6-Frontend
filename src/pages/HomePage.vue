<template>
  <div>
    <div style="margin-bottom:30px;">
      <h1>Popular People</h1>
      <v-carousel hide-delimiters height="auto">
        <template v-for="(item, index) in slider">
          <v-carousel-item
            v-if="(index + 1) % columns === 1 || columns === 1"
            :key="index"
          >
            <v-row class="flex-nowrap" style="height:100%">
              <template v-for="(n, i) in columns">
                <template v-if="index + i < slider.length">
                  <v-col :key="i" cols="3">
                    <Card
                      text="BRAD PID :DDDD"
                      src="https://www.vogue.pl/uploads/repository/00_inne/pitt-serial.jpg"
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
    <div>
      <h1>Popular Movies</h1>
      <v-carousel hide-delimiters height="auto">
        <template v-for="(item, index) in slider">
          <v-carousel-item
            v-if="(index + 1) % columns === 1 || columns === 1"
            :key="index"
          >
            <v-row class="flex-nowrap" style="height:100%">
              <template v-for="(n, i) in columns">
                <template v-if="index + i < slider.length">
                  <v-col :key="i" cols="3">
                    <Card
                      text="BRAD PID :DDDD"
                      src="https://www.vogue.pl/uploads/repository/00_inne/pitt-serial.jpg"
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
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Home",

  components: {
    Card,
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
  },
};
</script>

<style></style>
