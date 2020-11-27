<template>
    <div class="row mb-2 p-md-2" v-infinite-scroll="loadMore" infinite-scroll-disabled="news.busy" infinite-scroll-distance="10">
        <template v-for="( columns, key, index) in news.news_list">
            <div :key="index" class="col-md-6">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-lg-250 position-relative">
                    <div class="row">
                        <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                            <img class="p-1" width="200" height="150" v-bind:src="columns['urlToImage']">
                        </div>
                        <div class="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <h5 class="">{{ columns['title'] }}</h5>
                            <div class="mb-1 text-muted">
                                {{ columns['publishedAt'] | moment("DD-MM-YYYY hh:mm A" ) }}
                            </div>
                            <strong v-if="columns['author']" class="d-inline-block mb-2 text-primary">{{ columns['author'] }}</strong>
                            <strong v-else class="d-inline-block mb-2 text-primary">{{ columns['source'].name }}</strong>
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-md-12 ">
                            <p class="card-text mb-auto pl-1">{{ columns['description'] | truncate(120) }}</p>
                        </div>
                        <div class="col-md-12 ">
                            <!-- <router-link :to="{ name: 'new-details', params: { 'new_details': columns } }">Continue reading</router-link> -->
                            <a @click="goToNewsDetails(columns)" class="stretched-link pl-1">Continue reading</a>
                        </div>
                    </div>
                </div>
            </div>  
        </template>          
    </div>

</template>
<script>
    export default {
        props: {
            news: {
                news_list : [],
                busy: false,
                url_index : 0
            }
        },
        methods:{
            /** pagination functions*/
            loadMore: function () {
                this.news.busy = true;                                 
                this.$emit('update-news', this.news);
            },
            goToNewsDetails(news){
                this.$store.commit('SET_NEWS_DETAILS', news)
                this.$router.push({ name : 'new-details' })
            }
        },
    }
</script>
