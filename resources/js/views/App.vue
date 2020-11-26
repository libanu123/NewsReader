<template>
    <div>
        <h1>Tvm News</h1>
        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'hello' }">Hello World</router-link>
        </p>
        <div class="container">
            {{ news }}
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import apiCall from "../utils/api";
    export default {
        data () {
            return {
                news : null,
                url  : 'http://newsapi.org/v2/top-headlines?country=us&apiKey=eb1eff194ae343ea9a0d78c10df051dc'
            }
        },
        created() {
            
        },
        methods: {
            getNews() {
                const params = {
                }
                // const proxyUrl = "https://cors-anywhere.herokuapp.com/"
                // axios
                // .get(proxyUrl+this.url)
                // .then(response => (this.news = response))              

                apiCall({
                    url     : this.url,
                    data    : params,
                    method  : "GET"
                })
                .then(response => {
                    this.news = response                  
                })
                .catch(error => {
                    console.log(error);
                });
            },
        },
        mounted () {
            this.getNews()
        }
    }
</script>
