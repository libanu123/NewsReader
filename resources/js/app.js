/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'

Vue.use(VueRouter)
Vue.use(VueMoment);

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

Vue.filter('truncate', function (value, limit) {
    if(value!=null && value!=null)
    {
        if (value.length > limit) {
            value = value.substring(0, (limit - 3)) + '...';
        }
        return value
    }
})

import App from './views/App'
import NewsHome from './views/NewsHome'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: NewsHome,
            children: [
            ]
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});