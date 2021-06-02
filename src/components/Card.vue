<template>
  <div>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card :elevation="hover ? 10 : 0" tile :to="to">
          <v-img
            v-ripple
            class="black--text align-end "
            :aspect-ratio="
              $vuetify.breakpoint.name === 'xs' ||
              $vuetify.breakpoint.name === 'sm'
                ? '1'
                : ''
            "
            :src="src"
          >
          </v-img>
        </v-card>
      </template>
    </v-hover>
    <v-card elevation="0" color="transparent" :to="to" v-ripple="false"
      ><v-card-title class="cardTitle smallPadding noSelect justify-center">
        <span class="break text-center">{{ text }}</span>
      </v-card-title></v-card
    >
  </div>
</template>

<script>
export default {
  props: {
    text: {
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
  },
  methods: {},
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
