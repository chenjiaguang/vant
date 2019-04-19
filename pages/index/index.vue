<template>
	<view class="content">
		<view class="page-index">
			<view class="tab-header">
				<statusbar-replacer />
				<view class="tab-header-content">
					<view v-for="tab in tabs" class="tab-item" :key="tab.title" :class="{current: tab.idx === currentIdx}" @click="changeTab(tab)" :sort="tab.idx"><text>{{tab.title}}</text></view>
					<view class="tab-indicator">
						<view class="indicator-block"></view>
					</view>
				</view>
			</view>
			<view class="tab-content">
				
			</view>
		</view>
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello Vant',
				tabs: [
					{
						idx: 0,
						title: '关注',
						list: [],
						page: {}
					},
					{
						idx: 1,
						title: '推荐',
						list: [],
						page: {}
					},
					{
						idx: 2,
						title: '群组',
						list: [],
						page: {}
					}
				],
				currentIdx: 0,
				
			}
		},
		onLoad() {

		},
		methods: {
			changeTab: function (e) {
				console.log('changeTab', e.idx)
				uni.showToast({
					title: e.idx.toString(),
					icon: 'none'
				})
			}
		}
	}
</script>

<style>
	page {
		background: #B0C4DE;
	}
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.tab-header{
		width: 100%;
		background-color: #FAFAFA;
	}
	.tab-header-content{
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.tab-item{
		width: 122upx;
		height: 100%;
		font-size: 32upx;
		color: #888888;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tab-item.current{
		font-weight: bold;
		color: #111111;
	}
	.tab-indicator{
		width: 100%;
		height: upx;
		position: absolute;
		left: 0;
		top: 0;
	}
	.indicator-block{
		width: 40upx;
		height: 100%;
		background-color: #00B1F9;
		border-radius: 3upx;
	}
</style>
