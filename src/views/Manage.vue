<template>
  <div class="manage">
    <h1>This is an manage page</h1>

    <div v-if="$store.state.user?.username">
      {{ $store.state.user.username }}
    </div>
    <form id="changeUsername" @submit="changeUsername">
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
      <input type="submit" value="Change username" />
    </form>
    <form id="changePassword" @submit="changePassword">
      <div>
        <label for="current-password">Current password</label>
        <input
          id="current-password"
          class="form-control"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
          required="true"
          title="Password should contain atleast one digit, upper- and lowercase character and must be atleast 8 characters long."
        />
      </div>
      <div>
        <label for="new-password">New password</label>
        <input
          id="new-password"
          class="form-control"
          type="password"
          placeholder="New password"
          autocomplete="new-password"
          required="true"
          pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Password should contain atleast one digit, upper- and lowercase character and must be atleast 8 characters long."
        />
      </div>
      <div>
        <label for="repeat-password">Repeat new password</label>
        <input
          id="repeat-password"
          class="form-control"
          type="password"
          placeholder="Repeat password"
          autocomplete="new-password"
          required="true"
          pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Password should contain atleast one digit, upper- and lowercase character and must be atleast 8 characters long."
          v-model="user.password"
        />
      </div>
      <input type="submit" value="Change password" />
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

  mounted() {
    this.user.username = this.$store.state.user?.username || "";
  }

  changeUsername(event: Event) {
    this.$store.dispatch("changeUsername", this.user.username);
    this.$router.push("/");
    event.preventDefault();
  }

  changePassword(event: Event) {
    this.$store.dispatch("changePassword", this.user.password);
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
