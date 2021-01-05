<template>
  <div class="login">
    <h1>This is an login page</h1>

    <div v-if="$store.state.user?.username">
      {{ $store.state.user.username }}
    </div>
    <form id="login" @submit="login">
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          class="form-control"
          autocomplete="username"
          placeholder="Username"
          required="true"
          v-model="user.username"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          class="form-control"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
          required="true"
          v-model="user.password"
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { User } from "../models/User";

export default class Login extends Vue {
  user: User = {
    username: "",
    password: ""
  };

  login(event: Event) {
    this.$store.dispatch("setUser", { ...this.user });
    this.$router.push("/");
    event.preventDefault();
  }
}
</script>

<style lang="scss">
form {
  display: flex;
  flex-flow: row wrap;

  > * {
    flex: 1 100%;
    padding: 10px;
  }

  div {
    label,
    input {
      flex-grow: 1;
      flex-direction: column;
    }
  }
}
</style>
