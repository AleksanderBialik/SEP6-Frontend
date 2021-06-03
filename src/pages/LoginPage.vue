<template>
  <v-row justify="center">
    <v-col cols="6">
      <v-card>
        <v-card-title class="justify-center">LOGIN</v-card-title>
        <ValidationObserver
          ref="logObs"
          v-slot="{ invalid, handleSubmit }"
          mode="lazy"
        >
          <v-form @submit.prevent="handleSubmit(onLogin)" class="mx-5">
            <v-card-subtitle
              style="padding:0px 0px 0px 10px"
              class="text-left label"
              >{{
            }}</v-card-subtitle>
            <VTextFieldWithValidation
              type="email"
              placeholder="username"
              rules="required"
              outlined
              v-model="username"
              dense
            />
            <v-card-subtitle
              style="padding:0px 0px 0px 10px"
              class="text-left label"
              >{{
            }}</v-card-subtitle>
            <VTextFieldWithValidation
              placeholder="password"
              type="password"
              rules="required"
              v-model="password"
              outlined
              dense
            />
            <v-spacer></v-spacer>
            <v-card-actions class="justify-center flex-column">
              <v-btn class="mb-2" type="submit" :disabled="invalid">
                Login</v-btn
              >
              <v-card-subtitle
                >Don't have an account?
                <span
                  @click="$router.push({ name: 'register' })"
                  style="color:blue; cursor:pointer"
                  >Register
                </span></v-card-subtitle
              >
            </v-card-actions>
          </v-form>
        </ValidationObserver>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import VTextFieldWithValidation from "../components/inputs/VTextFieldWithValidation";
import { ValidationObserver } from "vee-validate";
export default {
  name: "login",

  components: {
    VTextFieldWithValidation,
    ValidationObserver,
  },
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    async onLogin() {
      const username = this.username;
      const password = this.password;

      await this.$store.dispatch("user/login", { username, password });
      this.$refs.logObs.reset();
    },
  },
};
</script>

<style></style>
