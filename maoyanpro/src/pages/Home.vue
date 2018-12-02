<template>
  <div id="main">
    <Header title="猫眼电影" />
    <Movie />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Movie from '@/components/Movie.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components : {
    Header,
    Movie,
    Footer
  }
}
</script>

<style scoped>
#main{ height: 100%; display: flex; flex-direction:column; }
</style>
