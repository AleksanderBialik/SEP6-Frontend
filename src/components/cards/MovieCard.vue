<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <div>
        <v-card :elevation="hover ? 10 : 0" tile :to="to">
          <v-img
            v-if="src"
            v-ripple
            style="position:relative"
            class="black--text align-end "
            :aspect-ratio="
              $vuetify.breakpoint.name === 'xs' ||
              $vuetify.breakpoint.name === 'sm'
                ? '1'
                : ''
            "
            :src="getImageUrl()"
          >
          </v-img>
          <v-img
            v-else
            v-ripple
            style="position:relative"
            class="black--text align-end "
            :aspect-ratio="
              $vuetify.breakpoint.name === 'xs' ||
              $vuetify.breakpoint.name === 'sm'
                ? '1'
                : ''
            "
            src="../../assets/nophoto.png"
          >
          </v-img>
        </v-card>
        <v-btn
          @click="removeFromFavourites()"
          type="button"
          color="error"
          v-if="hover && remove"
          >Remove</v-btn
        >
        <v-card elevation="0" color="transparent" :to="to" v-ripple="false"
          ><v-card-title class="cardTitle smallPadding noSelect justify-center">
            <span style="word-break:break-word" class="break text-center">{{
              text
            }}</span>
          </v-card-title></v-card
        >
      </div>
    </template>
  </v-hover>
</template>

<script>
import { IMAGE_URL } from "../../axios";
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    movieId: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      default: "",
    },
    remove: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getImageUrl() {
      return IMAGE_URL + this.src;
    },
    async removeFromFavourites() {
      await this.$store.dispatch("user/removeFromFavourites", {
        movieId: this.movieId,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/settings/_variables";
@media #{map-get($display-breakpoints, 'xs-only')} {
  .cardTitle {
    font-weight: bold;
    font-size: 18px;
    word-break: break-word;
  }
  .smallPadding {
    padding-bottom: 5px;
  }
  .officeCard {
    font-size: 30px;
  }
}
@media #{map-get($display-breakpoints, 'sm-and-up')} {
  .cardTitle {
    font-weight: bold;
    font-size: 21px;
  }
}
@media #{map-get($display-breakpoints, 'md-and-up')} {
  .cardTitle {
    font-weight: bold;
    font-size: 30px;
  }
}
.noSelect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
