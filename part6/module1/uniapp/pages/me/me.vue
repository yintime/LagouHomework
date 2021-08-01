<template>
	<view>
		<text>{{name}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'我组件中的name'
			}
		},
		onLoad(){
			uni.$on('getInfo',(name)=>{
				console.log('Me页面中的全局事件')
				this.name = name
			})
			//打印运行环境（开发/生产）
			console.log(process.env.NODE_ENV)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
