<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="12" xl="12"
      ><v-text-field
        dense
        filled
        flat
        v-model="search"
        label="Search for person"
      >
        <template slot="append">
          <font-awesome-icon icon="search" class="mt-1" />
        </template> </v-text-field
    ></v-col>
    <v-col
      cols="6"
      sm="6"
      md="4"
      lg="3"
      xl="3"
      :class="{
        'column-margin': index + 1 == people.length && people.length % 2 != 0,
      }"
      v-for="(person, index) in people.results"
      :key="index"
    >
      <PersonCard
        :src="person.profile_path"
        :text="person.name"
        :to="`/person/${person.id}`"
      />
    </v-col>

    <v-col cols="10">
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="people.total_pages"
        ></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import PersonCard from "../components/cards/PersonCard";
export default {
  name: "people",
  components: {
    PersonCard,
  },
  data: () => ({
    search: "",
    page: 1,
  }),
  watch: {
    search() {
      if (this.search.length >= 3) {
        this.$store.dispatch("people/fetchPeople", {
          search: this.search,
          page: 1,
        });
      }
      if (this.search.length <= 2) {
        this.$store.commit("people/SET_PEOPLE", {});
      }
    },
    page() {
      this.$store.dispatch("people/fetchPeople", {
        search: this.search,
        page: this.page,
      });
      window.scrollTo(0, 0);
    },
  },
  computed: {
    people() {
      return this.$store.getters["people/getPeople"];
    },
  },
  methods: {},
};
</script>

<style scoped>
.column-margin {
  margin-right: auto !important;
}
</style>
