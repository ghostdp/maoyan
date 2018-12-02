<template>
  <div id="main">
  <Header title="电影详情"><router-link tag="i" to="/home" class="iconfont icon-right"></router-link></Header>
    <div id="content">
            <div class="detail_list">
                <div class="detail_list_bg"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src="detailMovie.img | setWH('148.208')" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{ detailMovie.nm }}</h2>
                        <p>{{ detailMovie.enm }}</p>
                        <p>{{ detailMovie.sc }}</p>
                        <p>{{ detailMovie.cat }}</p>
                        <p v-cloak>{{ detailMovie.src }} / {{ detailMovie.dur }}分钟</p>
                        <p>{{ detailMovie.pubDesc }}</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <p>{{ detailMovie.dra }}</p>
            </div>
            <div class="detail_player swiper-container">
                <ul class="swiper-wrapper">
                    <li v-for="item in detailMovie.photos" class="swiper-slide">
                        <div>
                            <img :src="item | setWH('90.70')" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</template>

<script>

import Header from '@/components/Header.vue';


export default {
  name: 'Detail',
  data(){
    return {
        detailMovie : {}
    };
  },
  components : {
    Header
  },
  mounted(){
    let id = this.$route.params.id;
    this.axios.get('/ajax/detailmovie?movieId='+id).then((res)=>{
        this.detailMovie = res.data.detailMovie;
        this.$nextTick(()=>{
            new Swiper('.detail_player' , {
                slidesPerView : 'auto',
                freeMode : true,
                freeModeSticky: true
            });
        });
    });
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
#content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
.detail_list .detail_list_bg{ width:100%; height:100%; background: url(/static/images/movie_1.jpg) 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
.detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
.detail_list .detail_list_img img{ width:100%; height: 100%;}
.detail_list .detail_list_info{ margin-top: 20px;}
.detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}

#content .detail_intro{ padding: 10px;}
#content .detail_player{ margin:20px;}
.detail_player .swiper-slide{ width:90px; margin-right: 5px; text-align: center; font-size: 14px;}
.detail_player .swiper-slide img{ width:90px; height:70px; margin-bottom: 5px;}
.detail_player .swiper-slide p:nth-of-type(2){ color:#999;}
[v-cloak] {
  display: none;
}
</style>
