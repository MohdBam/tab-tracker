<template>
  <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
          <span class="home" @click="navigateTo({ name : 'songs'})">TabTracker</span>
      </v-toolbar-title>
      <v-toolbar-items>
          <v-btn flat dark @click="navigateTo({ name : 'songs'})">
              browse
          </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn v-if="!this.$store.state.isUserLoggedIn" flat dark @click="navigateTo({ name : 'login'})">
              login
          </v-btn>
          <v-btn  v-if="!this.$store.state.isUserLoggedIn" flat dark @click="navigateTo({ name : 'register'})">
              sign up
          </v-btn>
          <v-btn  v-if="this.$store.state.isUserLoggedIn" flat dark @click="logout">
              log out
          </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

  methods: {
    navigateTo(route){
        this.$router.push(route)
    },
    logout() {
        this.$store.dispatch('setToken',null)
        this.$store.dispatch('setUser',null)
        this.$router.push({name: 'songs'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
    cursor: pointer;
    transition: color 0.5s;
}

.home:hover{
    color:#004a61;
}

</style>
