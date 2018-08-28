<template>
  <v-layout column>
    <v-flex  xs6 offset-xs3>
      <panel title="Login">
      
        <form slot="content">
          <v-text-field
            label="Email" v-model="email"
          ></v-text-field>
    <br>
          <v-text-field
            label="Password" v-model="password" type="password" autocomplete="new-password"
          ></v-text-field>
    <br>
    <v-btn class="cyan" @click="login" dark>Login</v-btn>
    <div class="error" v-html="error"/>
    </form>
    </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },

  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });

        console.log(response.data);
        this.$store
          .dispatch("setToken", response.data.token)
          .then(this.$store.dispatch("setUser", response.data.user));
          this.$router.push({
            name : 'songs'
          })
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
