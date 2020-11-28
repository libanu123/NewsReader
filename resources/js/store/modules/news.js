// import Vue from "vue";
import { SET_NEWS_DETAILS } from "../actions/news";

const state = { 
  single_news_details : {}
};

const getters = {
  getSingleNewsDetails: state => state.single_news_details
};

const actions = {
  [SET_NEWS_DETAILS]: ({commit, state}, news) => {
    commit('SET_NEWS_DETAILS', news)
    return true;
  },
};

const mutations = {
  [SET_NEWS_DETAILS]: (state, news) => {
    state.single_news_details = news
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
