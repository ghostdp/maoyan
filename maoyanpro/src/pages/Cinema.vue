<template>
  <div id="main">
    <Header title="猫眼影院" />
    <CinemaList />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import CinemaList from '@/components/CinemaList.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components : {
    Header,
    CinemaList,
    Footer
  }
}
</script>

<style scoped>
#main{ height: 100%; display: flex; flex-direction:column; }
</style>
