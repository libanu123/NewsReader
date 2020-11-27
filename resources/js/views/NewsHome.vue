<template>  
    <div class="container">
        <Header/>
        <Menu/>
        <ShortNews :news="news" @update-news="getNews"/> 
        <div v-if="news.busy" class="row" style="margin-top:100px; margin-bottom:100px;">
            <div class="col-lg-12 text-center">
                <img :src="image_src">
            </div>        
        </div>
        <router-view/>  
        
    </div>

</template>
<script>
    import apiCall from "../utils/api";
    import Header from '../components/home/Header'
    import Menu from '../components/home/Menu'
    import ShortNews from '../components/home/ShortNews'
    
    export default {
        components: {
            Header,
            Menu,
            ShortNews,         
        },
        data () {
            return {
                image_src: 'image/loader.gif',
                news : {
                    news_list : [],
                    busy: false,
                    url_index : 0,                    
                },
                url  : [
                    'http://newsapi.org/v2/top-headlines?country=us&apiKey=346bfbf84b504d14a0e3dff507aed1e4',
                    // 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb1eff194ae343ea9a0d78c10df051dc',
                    // 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=eb1eff194ae343ea9a0d78c10df051dc',
                    // 'https://newsapi.org/v2/top-headlines?q=trump&apiKey=eb1eff194ae343ea9a0d78c10df051dc',
                    // 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=eb1eff194ae343ea9a0d78c10df051dc',
                    // 'https://newsapi.org/v2/everything?q=apple&from=2020-11-26&to=2020-11-26&sortBy=popularity&apiKey=eb1eff194ae343ea9a0d78c10df051dc',
                    // 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=eb1eff194ae343ea9a0d78c10df051dc'
                ]
            }
        },
        created() {
            
        },
        methods: {
            getNews() {
                if(this.url[this.news.url_index] != undefined)
                {
                    const params = {
                    }         
                    apiCall({
                        url     : this.url[this.news.url_index],
                        data    : params,
                        method  : "GET"
                    })
                    .then(response => {
                        if(response.data.status == "ok"){
                            var vm = this;
                            if( response.data.articles.length > 0 )
                            {
                                response.data.articles.forEach(function(article){
                                    vm.news.news_list.push(article);
                                });
                            }
                            // this.$store.commit('SET_NEWS_DETAILS', vm.news)
                            this.news.busy = false;                            
                            this.news.url_index ++;
                        }       
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
                else{
                   this.news.busy = false; 
                }
            },
        },
        mounted () {
        }
    }
</script>

<style>
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }
</style>