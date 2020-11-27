import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'
import news from "./modules/news";
Vue.use(Vuex);
// const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    news,
  },
  plugins: [new VuexPersistence().plugin],
  // strict: debug
});
