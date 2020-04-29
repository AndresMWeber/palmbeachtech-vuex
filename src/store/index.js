import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
Vue.use(Vuex);

export default function() {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
  });
}
