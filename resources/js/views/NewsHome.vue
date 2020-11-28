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
                    pageSize : 10,
                    page : 0,   
                    total_result    : 1,                  
                    total_count     : 0                  
                },
            }
        },
        created() {
            
        },
        methods: {
            getNews() {
                if(this.news.total_count < this.news.total_result)
                {
                    const params = {
                        country : 'us',
                        apiKey  : '346bfbf84b504d14a0e3dff507aed1e4',
                        pageSize: this.news.pageSize,
                        page    : this.news.page,
                    }  
                    const qs = new URLSearchParams(params);   

                    apiCall({
                        url     : `http://newsapi.org/v2/top-headlines?${qs}`,
                        data    : {},
                        method  : "GET"
                    })
                    .then(response => {
                        if(response.data.status == "ok"){
                            var vm = this;
                            this.news.total_count += response.data.articles.length
                            if( response.data.articles.length > 0 )
                            {
                                response.data.articles.forEach(function(article){
                                    vm.news.news_list.push(article);
                                });
                            }
                            this.news.busy = false;                            
                            this.news.total_result = response.data.totalResults;
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