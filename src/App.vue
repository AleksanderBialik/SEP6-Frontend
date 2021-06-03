<template>
  <v-app>
    <v-navigation-drawer
      @click.native="onClick()"
      :width="$vuetify.breakpoint.name === 'xs' ? '101vw' : '280'"
      color="#ffc482ff"
      right
      :style="
        $vuetify.breakpoint.name === 'sm' || $vuetify.breakpoint.name === 'xs'
          ? 'margin-top:56px'
          : 'margin-top:64px'
      "
      v-model="drawer"
      fixed
      clipped
      :temporary="false"
      mobile-breakpoint="0"
    >
      <v-list
        nav
        class="bold"
        :class="{
          'text-center': $vuetify.breakpoint.name === 'xs',
        }"
      >
        <v-list-item-group
          active-class="black--text text--accent-4"
          :class="{ 'padding-drawer': $vuetify.breakpoint.name === 'xs' }"
        >
          <v-list-item :to="{ name: 'home' }" @click="drawer = !drawer">
            <v-list-item-title
              :class="{
                'large-font': $vuetify.breakpoint.name === 'xs',
                'normal-font': $vuetify.breakpoint.name != 'xs',
              }"
              >MAIN PAGE</v-list-item-title
            >
          </v-list-item>
          <v-list-item :to="{ name: 'movies' }" @click="drawer = !drawer">
            <v-list-item-title
              :class="{
                'large-font': $vuetify.breakpoint.name === 'xs',
                'normal-font': $vuetify.breakpoint.name != 'xs',
              }"
              >MOVIES</v-list-item-title
            >
          </v-list-item>
          <v-list-item :to="{ name: 'topMovies' }" @click="drawer = !drawer">
            <v-list-item-title
              :class="{
                'large-font': $vuetify.breakpoint.name === 'xs',
                'normal-font': $vuetify.breakpoint.name != 'xs',
              }"
              >TOP MOVIES</v-list-item-title
            >
          </v-list-item>
          <v-list-item :to="{ name: 'people' }" @click="drawer = !drawer">
            <v-list-item-title
              :class="{
                'large-font': $vuetify.breakpoint.name === 'xs',
                'normal-font': $vuetify.breakpoint.name != 'xs',
              }"
              >PEOPLE</v-list-item-title
            >
          </v-list-item>
          <v-list-item :to="{ name: 'favourites' }" @click="drawer = !drawer">
            <v-list-item-title
              :class="{
                'large-font': $vuetify.breakpoint.name === 'xs',
                'normal-font': $vuetify.breakpoint.name != 'xs',
              }"
              >FAVOURITES</v-list-item-title
            >
          </v-list-item>
          <v-list-item :to="{ name: 'login' }" @click="drawer = !drawer">
            <v-list-item-title
              :class="{
                'large-font': $vuetify.breakpoint.name === 'xs',
                'normal-font': $vuetify.breakpoint.name != 'xs',
              }"
              >LOG IN</v-list-item-title
            >
          </v-list-item>
          <v-list-item :to="{ name: 'register' }" @click="drawer = !drawer">
            <v-list-item-title
              :class="{
                'large-font': $vuetify.breakpoint.name === 'xs',
                'normal-font': $vuetify.breakpoint.name != 'xs',
              }"
              >REGISTER</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="drawer = !drawer" v-if="isLoggedIn">
            <v-list-item-title
              :class="{
                'large-font': $vuetify.breakpoint.name === 'xs',
                'normal-font': $vuetify.breakpoint.name != 'xs',
              }"
              >LOG OUT</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#66999bff" dark style="z-index:99" app>
      <router-link to="/home">
        <v-img
          style="cursor:pointer;"
          class="mx-2 logo"
          src="./assets/camera.png"
          contain
        ></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-title class="title">BestMovies123</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon color="black" right @click="drawer = !drawer">
        <font-awesome-icon
          :class="{ 'burger--show': !drawer }"
          class="burger"
          icon="bars"/>
        <font-awesome-icon
          :class="{ 'burger--show': drawer }"
          class="burger"
          icon="times"
      /></v-app-bar-nav-icon>
    </v-app-bar>

    <Snackbar />
    <v-main @click.native="onClick()">
      <v-container :fill-height="fillHeight.includes($route.name)">
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer @click.native="onClick()" padless color="#66999bff">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>BestMovies</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar";
export default {
  name: "App",

  components: {
    Snackbar,
  },

  data: () => ({
    drawer: false,
    fillHeight: ["login", "register"],
  }),
  methods: {
    onClick() {
      if (this.drawer) {
        this.drawer = !this.drawer;
      }
    },
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters["user/isLoggedIn"];
    },
  },
};
</script>
<style lang="scss">
.logo {
  width: 50px;
}
.v-toolbar__title {
  color: black !important;
  font-weight: bold !important;
}
.normal-font {
  font-size: 1.6rem !important;
}
.small-font {
  font-size: 1.4rem !important;
}
.xsmall-font {
  font-size: 1.2rem !important;
}
.bold {
  font-weight: bold;
}
.large-font {
  font-size: 40px !important;
}
.padding-drawer {
  padding-top: 20px !important;
}

.burger {
  display: none;
  font-size: 40px;
  &--show {
    display: block;
    animation-duration: 0.5s;
    animation-name: rotate;
  }
}
@keyframes rotate {
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(180deg);
  }
}
.v-list-item--active {
  color: none !important;
  background-color: none !important;
}
</style>
