<template>
	<view>
		<view class="red">
			<text>子组件</text>
		</view>
		<text>{{msg}}</text>
		<button @click="doChildEvent">子组件执行父组件传入的自定义事件</button>
	</view>
</template>

<script>
	export default {
		props:['msg'],
		data() {
			return {
				
			};
		},
		methods:{
			doChildEvent(){
				this.$emit('childEvent', '父组件从子组件收到的参数内容')
				//下面事件是me页面onLoad之后才会挂载的
				uni.$emit('getInfo','child提交的名字')
			}
		}
	}
</script>

<style scoped>
	.red{
		color:red;
	}
</style>
