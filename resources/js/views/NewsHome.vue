<template>  
    <div class="container">
        <Header/>
        <Menu/>
        <ShortNews :news="news" @update-news="getNews"/>        
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
            ShortNews            
        },
        data () {
            return {
                news : {
                    news_list : [],
                    busy: false,
                    url_index : 0
                },
                url  : [
                    'http://newsapi.org/v2/top-headlines?country=us&apiKey=eb1eff194ae343ea9a0d78c10df051dc',
                    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb1eff194ae343ea9a0d78c10df051dc',
                    'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=eb1eff194ae343ea9a0d78c10df051dc',
                    'https://newsapi.org/v2/top-headlines?q=trump&apiKey=eb1eff194ae343ea9a0d78c10df051dc',
                ]
            }
        },
        created() {
            
        },
        methods: {
            getNews() {
                console.log(this.news.url_index)
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
                            this.news.busy = false;
                            this.news.url_index ++;
                        }                                     
                    })
                    .catch(error => {
                        console.log(error);
                    });
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