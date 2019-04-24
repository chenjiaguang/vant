<template>
	<view class="wrapper" :style="{backgroundImage: '-webkit-linear-gradient(left, ' + colorStart + ', ' + colorEnd + ')'}">
		<text class="icon vantfont vant-topic"></text>
		<text class="title">{{title}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			colorStart: {
				type: String,
				required: true
			},
			colorEnd: {
				type: String,
				required: true
			}
		}
	}
</script>

<style>
.wrapper{
	height: 52upx;
	padding: 0 20upx;
	display: flex;
	align-items: center;
	border-radius: 6upx;
}
.icon{
	font-size: 28upx;
	color: #fff;
	margin-right: 12upx;
}
.title{
	font-size: 30upx;
	color: #fff;
}
</style>
