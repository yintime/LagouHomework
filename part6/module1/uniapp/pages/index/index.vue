<template>
	<view class="content">
		<text>首页</text>
		<view>
			<navigator url="/chat/chat">前往聊天</navigator>
		</view>
		<child :msg='msg' @childEvent='childPrint'></child>
	</view>
</template>

<script>
	import Child from '@/components/child.vue'
	export default {
		data() {
			return {
				msg:'父组件props传入参数'
			}
		},
		components:{
			Child
		},
		onLoad() {
			//console.log(getCurrentPages())
		},
		onPullDownRefresh(){
			console.log('页面下拉刷新')
		},
		methods: {
			childPrint(data){
				this.msg = data
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
