<template>
    <div id="content">
		<div class="movie_menu">
			<router-link tag="div" to="/home/city" class="city_name">
				<span>大连</span><i class="iconfont icon-lower-triangle"></i>
			</router-link>
			<div class="hot_swtich">
				<router-link tag="div" to="/home/now" class="hot_item">正在热映</router-link>
				<router-link tag="div" to="/home/coming" class="hot_item">即将上映</router-link>
			</div>
			<router-link tag="div" to="/home/search" class="search_entry">
				<i class="iconfont icon-sousuo"></i>
			</router-link>
		</div>
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>
export default {
  name: 'Movie'
}
</script>

<style scoped>
#content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; }
#content::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; position: fixed; background:white; z-index: 10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
.movie_menu .router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
