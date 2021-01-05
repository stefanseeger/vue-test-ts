<template>
  <div v-if="$store.state.user?.username">{{ $store.state.user.username }}</div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <template v-if="!$store.state.user?.username">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </template>
    <template v-if="!!$store.state.user?.username">
      <router-link to="/manage">Manage</router-link> |
      <a href="" @click="logout">Logout</a>
    </template>
  </div>
  <router-view id="content" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import About from "@/views/About.vue"; // @ is an alias to /src
import Home from "@/views/Home.vue"; // @ is an alias to /src
import Login from "@/views/Login.vue"; // @ is an alias to /src
import Register from "@/views/Register.vue"; // @ is an alias to /src
import Manage from "@/views/Manage.vue"; // @ is an alias to /src

export default class App extends Vue {
  components = {
    About,
    Home,
    Login,
    Register,
    Manage,
    HelloWorld
  };

  logout(event: Event) {
    event.preventDefault();
    this.$store.dispatch("clearUser");
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content {
  max-width: 60%;
  margin: auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
