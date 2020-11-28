<template>  
    <div class="container">
        <Header/>
        <Menu/>     
        <div class="row mb-2 p-md-2">
            <div class="col-xl-12">
                <img class="p-1" style="width:100%;" v-bind:src="news_details['urlToImage']">
            </div>
            <div class="col-md-12 blog-main pb-4">
                <div class="blog-post">
                    <h2 class="blog-post-title">
                        {{ news_details['title'] }}
                    </h2>
                    <p class="blog-post-meta">
                        {{ news_details['publishedAt'] | moment("DD-MM-YYYY hh:mm A" ) }}
                        <br>
                        <strong v-if="news_details['author']" class="d-inline-block mb-2 text-primary">
                            {{ news_details['author'] }}
                        </strong>
                        <strong v-if="news_details['source']" class="d-inline-block mb-2 text-primary">
                            {{ news_details['source'].name }}
                        </strong>
                    </p>
                    <hr>
                    <p>{{ news_details['description'] }}</p>
                    <blockquote>
                    <p>{{ news_details['content'] }}</p>
                    </blockquote>   
                    <p>Read More.
                    <a :href="news_details['url']" target="_blank" class="">
                        {{ news_details['url'] }}
                    </a>
                    </p>  
                </div>
            </div>   
        </div>


    </div>
</template>
<script>
    import Header from '../components/home/Header'
    import Menu from '../components/home/Menu'
    export default {
        components: {
            Header,
            Menu,
        },
        data () {
            return {
                news_details : {}
            }
        },
        created() {
            
        },
        methods: {

        },
        mounted () {
            this.news_details = this.$store.getters.getSingleNewsDetails
        }
    }
</script>