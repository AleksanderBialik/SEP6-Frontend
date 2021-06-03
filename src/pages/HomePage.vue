<template>
  <div>
    <div style="margin-bottom:30px;">
      <h1 style="color:#66999bff">Popular People</h1>
      <v-carousel hide-delimiters height="auto" cycle style="min-height:600px">
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
    <div>
      <h1 style="color:#66999bff">Popular Movies</h1>
      <v-carousel hide-delimiters height="auto" cycle style="min-height:600px">
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
                      text="BRAD PID :DDDD"
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
  </div>
</template>

<script>
import PersonCard from "../components/cards/PersonCard.vue";

export default {
  name: "Home",

  components: {
    PersonCard,
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
