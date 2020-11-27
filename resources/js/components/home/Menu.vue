<template>
  <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between float-right">
          <router-link  class="p-2 text-muted" :to="{ name: 'home'}">Home</router-link>
          <router-link  class="p-2 text-muted" :to="{ name: 'category', params: { 'cat': 'general' }}">General</router-link>
          <router-link  class="p-2 text-muted" :to="{ name: 'category', params: { 'cat': 'business' }}">Business</router-link>
          <router-link  class="p-2 text-muted" :to="{ name: 'category', params: { 'cat': 'entertainment' }}">Entertainment</router-link>
          <router-link  class="p-2 text-muted" :to="{ name: 'category', params: { 'cat': 'health' }}">Health</router-link>
          <router-link  class="p-2 text-muted" :to="{ name: 'category', params: { 'cat': 'science' }}">Science</router-link>
          <router-link  class="p-2 text-muted" :to="{ name: 'category', params: { 'cat': 'sports' }}">Sports</router-link>
          <router-link  class="p-2 text-muted" :to="{ name: 'category', params: { 'cat': 'technology' }}">Technology</router-link>
      </nav>
  </div> 
</template>
<script>
    export default {

    }
</script>
