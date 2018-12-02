<template>
   <div id="content">
		<div class="cinema_menu">
			<div class="city_switch">
				全城 <i class="iconfont icon-lower-triangle"></i>
			</div>
			<div class="brand_swtich">
				品牌 <i class="iconfont icon-lower-triangle"></i>
			</div>
			<div class="feature_switch">
				特色 <i class="iconfont icon-lower-triangle"></i>
			</div>
		</div>
		<div class="cinema_body">
			<ul>
				<!-- <li>
					<div>
						<span>大地影院(澳东世纪店)</span>
						<span class="q"><span class="price">22.9</span> 元起</span>
					</div>
					<div class="address">
						<span>金州区大连经济技术开发区澳东世纪3层</span>
						<span>1763.5km</span>
					</div>
					<div class="card">
				            			<div>小吃</div>
				            			<div>折扣卡</div>
				   					</div>
				</li> -->
				<li v-for="item in cinemaList">
					<div>
						<span>{{ item.nm }}</span>
						<span class="q"><span class="price">{{ item.sellPrice }}</span> 元起</span>
					</div>
					<div class="address">
						<span>{{item.addr}}</span>
						<span>{{item.distance}}</span>
					</div>
					<div class="card">
            			<!-- <div>小吃</div>
            			<div>折扣卡</div> -->
            			<div v-for="val , key in item.tag" v-if="val===1" :class=" key | classCard ">{{ key | formatCard }}</div>
   					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'CinemaList',
  data(){
  	return {
  		cinemaList : []
  	}
  },
  mounted(){
  	this.axios.get('/ajax/cinemaList?limit=20&cityId=65').then((res)=>{
		this.cinemaList = res.data.cinemas;
  	});
  },
  filters : {
  	formatCard(key){
  		var data = [
  			{ key : 'allowRefund' , val : '退' },
  			{ key : 'endorse' , val : '改签' },
  			{ key : 'sell' , val : '折扣卡' },
  			{ key : 'snack' , val : '小吃' }
  		];
  		for(var i=0;i<data.length;i++){
			if( data[i].key === key ){
				return data[i].val;
			}
  		}
		return '';
  	},
  	classCard(key){
		var data = [
  			{ key : 'allowRefund' , val : 'bl' },
  			{ key : 'endorse' , val : 'bl' },
  			{ key : 'sell' , val : 'or' },
  			{ key : 'snack' , val : 'or' }
  		];
  		for(var i=0;i<data.length;i++){
			if( data[i].key === key ){
				return data[i].val;
			}
  		}
		return '';
  	}
  }
}
</script>

<style>
#content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; }
#content::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; position: fixed; background:white;}
#content .cinema_body{ margin-top: 45px;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>
