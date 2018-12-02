<template>
  <div id="main">
    <Header title="用户登录"><router-link tag="i" to="/home" class="iconfont icon-right"></router-link></Header>
    <div id="content">
        <div>用户名：<input ref="username" type="text"></div>
        <div>密码：<input ref="password" type="password"></div>
        <div @tap="handleSubmit"><input type="submit" value="登录"></div>
    </div>   
  </div> 
</template>

<script>

import Header from '@/components/Header.vue';


export default {
  name: 'Login',
  data(){
    return {
       
    };
  },
  components : {
    Header
  },
  methods : {
    handleSubmit(){
        this.axios.get('/users/login',{
            params : {
                username : this.$refs.username.value,
                password : this.$refs.password.value
            }
        }).then((res)=>{
           if(res.data.code === 0){
                window.localStorage.setItem('token' , res.data.token);
                this.$store.commit('USER_NAME',res.data.username);
                this.$router.push('/user');
           }
           else{
                window.location.reload();
           }
        });
    }
  }

}
</script>

<style scoped>
#main{ height: 100%; display: flex; flex-direction:column; }
#content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; }
#content::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}

</style>
