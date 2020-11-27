<template>  
    <div class="container">
        <Header/>
        <Menu/>
        <CategoryShortNews :news="news" @update-news="getNews"/> 
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
    import CategoryShortNews from '../components/home/CategoryShortNews'
    
    export default {
        components: {
            Header,
            Menu,
            CategoryShortNews,         
        },
        watch: { 
            $route() {
                this.news.url_index = 0;
                this.news.news_list = [];
                this.getNews()
            }
        },
        data () {
            return {
                category_url: '',
                image_src: '../image/loader.gif',
                news : {
                    news_list : [],
                    busy: false,
                    url_index : 0,                    
                },
                url  : [
                    'https://newsapi.org/v2/sources?apiKey=346bfbf84b504d14a0e3dff507aed1e4',
                    // 'https://newsapi.org/v2/sources?language=en&apiKey=346bfbf84b504d14a0e3dff507aed1e4',
                    // 'https://newsapi.org/v2/sources?language=en&country=us&apiKey=346bfbf84b504d14a0e3dff507aed1e4'
                ]
            }
        },
        created() {
            
        },
        methods: {
            getNews() {                
                if(this.url[this.news.url_index] != undefined)
                {
                    this.category_url = this.url[this.news.url_index];
                    if(this.$route.params.cat != undefined)
                    {
                        this.category_url += '&category='+this.$route.params.cat+''
                    }                    
                    const params = {
                    }         
                    apiCall({
                        url     : this.category_url,
                        data    : params,
                        method  : "GET"
                    })
                    .then(response => {
                        if(response.data.status == "ok"){
                            var vm = this;
                            if( response.data.sources.length > 0 )
                            {
                                response.data.sources.forEach(function(source){
                                    vm.news.news_list.push(source);
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