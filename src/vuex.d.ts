import { State } from "@/store";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }

  interface VueConstructor {
    $store: Store<State>;
  }
}
