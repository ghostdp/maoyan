<template>
   <div class="city_body">
		<div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li v-for="item in hotCity">{{ item.name }}</li>
				</ul>
			</div>
			<div class="city_sort" ref="cityList">
				<div v-for="item in cityList">
					<h2>{{ item.index.toUpperCase() }}</h2>
					<ul>
						<li v-for="val in item.list">{{val}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="city_index">
			<ul>
				<li v-for="item,index in cityList" @tap="handleLink(index)">{{ item.index.toUpperCase() }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
 	name: 'City',
  	data(){
		return {
			cityList : [],
			hotCity : []
		};
	},
	mounted(){
		this.axios.get('/static/mock/city.json').then((res)=>{
			var msg = res.data.msg;
			if(msg === 'ok'){
				this.cityList = this.formatCityList(res.data.data.cities);
			}
		});
	},
	methods : {
		formatCityList(cities){
			var result = [];
			for(var i=0;i<cities.length;i++){
				
				var firstLetter = cities[i].pinyin.charAt(0);
					
				if( cities[i].isHot ){
					this.hotCity.push( cities[i] );
				}	

				if( toCom(firstLetter) ){
					result.push( { index : firstLetter , list : [ cities[i].name ] } );
				}
				else{
					for(var j=0;j<result.length;j++){
						if( result[j].index === firstLetter ){
							result[j].list.push( cities[i].name );
						}
					}
				}

			}

			result.sort((c1 , c2)=>{
				if( c1.index < c2.index ){
					return -1;
				}
				else if(c1.index > c2.index){
					return 1;
				}
				else{
					return 0;
				}
			});	

			function toCom(firstLetter){
				for(var i=0;i<result.length;i++){
					if( result[i].index === firstLetter ){
						return false;
					}
				}
				return true;
			}			


			return result;
		},
		handleLink(index){
			var cityLists = this.$refs.cityList.getElementsByTagName('h2');
			this.$refs.cityList.parentNode.scrollTop = cityLists[index].offsetTop;
		}
	}
}
</script>

<style>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul{}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort{}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>
