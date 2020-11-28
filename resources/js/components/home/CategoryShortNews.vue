<template>
    <div class="row mb-2 p-md-2 " v-infinite-scroll="loadMore" infinite-scroll-disabled="news.busy" infinite-scroll-distance="10">
        <template v-for="( columns, key, index) in news.news_list">
            <div :key="index" class="col-md-6 ">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-lg-250 position-relative p-2">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5 class="">{{ columns['name'] }}</h5>                            
                            <div class="mb-1 text-muted">
                                {{ columns['category'] }}
                            </div>
                        </div>
                        
                    </div>
                    <div class="row" >
                        <div class="col-md-12 ">
                            <p class="card-text mb-auto pl-1">{{ columns['description'] }}</p>
                        </div>
                        <div class="col-md-12 ">
                            <p>Read More.
                            <a :href="columns['url']" class="stretched-link pl-1">
                                {{ columns['url'] }}
                            </a>
                            </p>
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
            }
        },
        methods:{
            loadMore: function () {
                this.news.busy = true; 
                if( this.news.news_list.length > 0 )
                {
                    this.news.busy = false; 
                }      
                else{
                    this.$emit('update-news', this.news);
                }                          
            },
        },
    }
</script>
