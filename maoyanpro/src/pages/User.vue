<template>
  <div id="main">
    <Header title="我的猫眼" />
    <p>hello user : {{ $store.state.username }} , <a @tap="handleLogout" href="javascript:;">退出</a></p>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components : {
    Header,
    Footer
  },
  methods : {
    handleLogout(){
      this.axios.get('/users/logout').then((res)=>{
        console.log(res);
        if(res.data.code === 0){
          window.localStorage.clear();
          window.location.reload();
        }
      });
    }
  }
}
</script>

<style scoped>
#main{ height: 100%; display: flex; flex-direction:column; }
</style>
