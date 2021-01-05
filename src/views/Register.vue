<template>
  <div class="register">
    <h1>This is an register page</h1>

    <div v-if="$store.state.user?.username">
      {{ $store.state.user.username }}
    </div>
    <form id="register" @submit="register">
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
          autocomplete="new-password"
          required="true"
          pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Password should contain atleast one digit, upper- and lowercase character and must be atleast 8 characters long."
          v-model="user.password"
        />
      </div>
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { User } from "../models/User";

export default class Register extends Vue {
  user: User = {
    username: "",
    password: ""
  };

  register(event: Event) {
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
