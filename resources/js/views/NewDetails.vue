<template>  
    <div class="container">
        <Header/>
        <Menu/>
        <!-- <p>{{ new_details }}</p>      -->
        <div class="row mb-2 p-md-2">
            <div class="col-xl-12">
                <img class="p-1" style="width:100%;" v-bind:src="new_details['urlToImage']">
            </div>
            <div class="col-md-12 blog-main pb-4">
                <!-- <h3 class=" mb-4 font-italic border-bottom">
                    
                </h3> -->

                <div class="blog-post">
                    <h2 class="blog-post-title">
                        {{ new_details['title'] }}
                    </h2>
                    <p class="blog-post-meta">
                        {{ new_details['publishedAt'] | moment("DD-MM-YYYY hh:mm A" ) }}
                        <br>
                        <strong v-if="new_details['author']" class="d-inline-block mb-2 text-primary">
                            {{ new_details['author'] }}
                        </strong>
                        <strong v-if="new_details['source']" class="d-inline-block mb-2 text-primary">
                            {{ new_details['source'].name }}
                        </strong>
                    </p>
                    <hr>
                    <p>{{ new_details['description'] }}</p>
                    <blockquote>
                    <p>{{ new_details['content'] }}</p>
                    </blockquote>   
                    <p>Read More.
                    <a :href="new_details['url']" target="_blank" class="">
                        {{ new_details['url'] }}
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
        props: {
            new_details: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
            }
        },
        created() {
            
        },
        methods: {

        },
        mounted () {
        }
    }
</script>