import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

import { User } from "../models/User";

// define your typings for the store state
export interface State {
  user: User | null;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
    changeUsername(state, username: string) {
      state.user!.username = username;
    },
    changePassword(state, password: string) {
      state.user!.password = password;
    }
  },
  actions: {
    setUser(context, user: User) {
      context.commit("setUser", user);
    },
    clearUser(context) {
      context.commit("clearUser");
    },
    changeUsername(context, username: string) {
      context.commit("changeUsername", username);
    },
    changePassword(context, password: string) {
      context.commit("changePassword", password);
    }
  },
  modules: {}
});
