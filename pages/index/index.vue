<template>
	<view class="page-index">
		<view class="tab-header">
			<statusbar-replacer />
			<view class="tab-header-content">
				<view v-for="tab in tabs" class="tab-item" :key="tab.title" :class="{current: tab.idx === currentTabIdx}" @click="changeTab(tab)" :sort="tab.idx"><text>{{tab.title}}</text></view>
				<view class="tab-indicator">
					<view id="indicator-block" class="indicator-block" :style="{transform: 'translateX(' + indicatorPos + ')'}"></view>
				</view>
			</view>
		</view>
		<view class="tab-content">
			<!-- 关注 -->
			<view class="tab-content-body" :class="{prev: 0 === prevIdx || (0 < currentTabIdx && 0 !== nextIdx) , current: currentTabIdx === 0, next: 0 === nextIdx || (0 > currentTabIdx && 0 !== prevIdx)}">
				<view>关注</view>
			</view>
			<!-- 推荐 -->
			<view class="tab-content-body" :class="{prev: 1 === prevIdx || (1 < currentTabIdx && 1 !== nextIdx) , current: currentTabIdx === 1, next: 1 === nextIdx || (1 > currentTabIdx && 1 !== prevIdx)}">
				<view class="tab-content-context">
					<scroll-view class="rec-header" scroll-x :scroll-into-view="'rh' + recommendCates[currentCateIdx].id" scroll-with-animation>
						<view class="rec-header-cate" :id="'rh' + recommendCates[idx].id" v-for="(cate, idx) in recommendCates" :key="cate.id" @click.stop="userChangeCate(idx)"><text class="rec-header-cate-text" :class="{current: idx === currentCateIdx}">{{cate.title}}</text></view>
					</scroll-view>
					<swiper class="rec-body" :indicator-dots="false" :current="currentCateIdx" :autoplay="false" :duration="300" @change="changeCate">
						<swiper-item v-for="cate in recommendCates" :key="cate.id">
							<template v-if="cate.id === '1'">
								<!-- 推荐话题 -->
								<view class="rec-topic-box">
									<view class="rec-topic-header">
										<text class="rec-topic-title">推荐话题</text>
										<view class="rec-topic-btn">
											<text class="rec-topic-btn-text">更多</text>
											<text class="vantfont vant-next"></text>
										</view>
									</view>
									<view class="rec-topic-content">
										<view class="rec-topic-item" v-for="topic in recommendTopics" :key="topic.id">
											<topic-tag :title="topic.title" :color-start="topic.colorStart" :color-end="topic.colorEnd" />
										</view>
									</view>
								</view>
							</template>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<!-- 群组 -->
			<view class="tab-content-body" :class="{prev: 2 === prevIdx || (2 < currentTabIdx && 2 !== nextIdx) , current: currentTabIdx === 2, next: 2 === nextIdx || (2 > currentTabIdx && 2 !== prevIdx)}">
				<view>群组</view>
			</view>
		</view>
	</view>
</template>

<script>
	import topicTag from '../../components/topic-tag.vue'
	
	export default {
		data() {
			return {
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
				currentTabIdx: 1,
				tabIndicatorPos: [],
				recommendCates: [
					{id: '1', title: '热门'},
					{id: '2', title: '海南'},
					{id: '3', title: '动漫'},
					{id: '4', title: '游戏'},
					{id: '5', title: '文化'},
					{id: '6', title: '科技'},
					{id: '7', title: '娱乐'},
					{id: '8', title: '数码'},
					{id: '9', title: '财经'},
					{id: '10', title: '体育'},
					{id: '11', title: '社会'}
				],
				currentCateIdx: 0,
				recommendTopics: [
					{id: '1', title: '舌尖上的海口', colorStart: '#FF4881', colorEnd: '#FF7EB7'},
					{id: '2', title: '加油萌宠', colorStart: '#23D195', colorEnd: '#53F2CF'},
					{id: '3', title: '治理熊孩子', colorStart: '#FFA910', colorEnd: '#FFD425'},
					{id: '4', title: '明星晒照哪家强', colorStart: '#23D195', colorEnd: '#53F2CF'},
					{id: '5', title: '人群中的好声音', colorStart: '#33ADFF', colorEnd: '#62D6FF'},
					{id: '6', title: '烂片预警', colorStart: '#33ADFF', colorEnd: '#62D6FF'},
					{id: '7', title: '海南生活', colorStart: '#6647D4', colorEnd: '#CA7DFF'},
					{id: '8', title: '延禧攻略', colorStart: '#FF4881', colorEnd: '#FF7EB7'}
				]
			}
		},
		computed: {
			indicatorPos () {
				let res = '-200%' // 默认隐藏指示滑块
				if (this.tabIndicatorPos && this.tabIndicatorPos[this.currentTabIdx]) {
					res = this.tabIndicatorPos[this.currentTabIdx] + 'px'
				}
				return res
			},
			prevIdx () {
				return this.currentTabIdx === 0 ? (this.tabs.length - 1) : (this.currentTabIdx - 1)
			},
			nextIdx () {
				return (this.currentTabIdx === (this.tabs.length - 1)) ? 0 : (this.currentTabIdx + 1)
			}
		},
		components: {topicTag},
		onLoad() {

		},
		onReady () {
			this.initTabIndicatorPos()
		},
		methods: {
			initTabIndicatorPos: function () {
				let query = uni.createSelectorQuery()
				query.select('#indicator-block').boundingClientRect((indEvent) => {
					if (indEvent && indEvent.width) {
						let query2 = uni.createSelectorQuery()
						query2.selectAll('.tab-item').boundingClientRect((e) => {
							this.tabIndicatorPos = e.map(item => {
								let left = parseInt(item.left + (item.width / 2) - (indEvent.width / 2))
								return left
							})
						}).exec()
					}
				}).exec()
			},
			changeTab: function (tab) {
				this.currentTabIdx = tab.idx
			},
			changeCate: function (e) {
				if (e.detail.source === 'touch') { // 用户触摸swiper触发的回调
					this.currentCateIdx = e.detail.current
				}
			},
			userChangeCate: function (idx) {
				console.log('userChangeCate', idx)
				this.currentCateIdx = idx
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background: #F5F5F5;
		display: flex;
		flex-direction: column;
	}
	.page-index{
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
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
		flex-shrink: 0;
		flex-grow: 0;
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
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.indicator-block{
		width: 40upx;
		height: 6upx;
		background-color: #00B1F9;
		border-radius: 3upx;
		transform: translateX(-200%);
		transition: all 300ms;
	}
	.tab-content{
		width: 100%;
		flex: 1;
		position: relative;
	}
	.tab-content-body{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		transform: translateX(0%);
		transition: all 300ms;
	}
	.tab-content-body.prev{
		transform: translateX(-100%);
		opacity: 0;
	}
	.tab-content-body.current{
		transform: translateX(0%);
		opacity: 1;
	}
	.tab-content-body.next{
		transform: translateX(100%);
		opacity: 0;
	}
	.tab-content-context{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.rec-header{
		width: 100%;
		white-space: nowrap;
		font-size: 0;
		background-color: #fff;
	}
	.rec-header-cate{
		display: inline-block;
		padding: 0 22upx;
		height: 80upx;
	}
	.rec-header-cate-text{
		font-size: 30upx;
		line-height: 80upx;
		color: #333333;
	}
	.rec-header-cate-text.current{
		color: #1EB0FD;
	}
	.rec-body{
		border-top: 1upx solid #E5E5E5;
		flex: 1;
	}
	.rec-body-cate{
		
	}
	.rec-topic-box{
		padding: 24upx 30upx;
	}
	.rec-topic-header{
		height: 40upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.rec-topic-title{
		font-size: 28upx;
		color: #333;
	}
	.rec-topic-btn{
		display: flex;
		align-items: center;
	}
	.rec-topic-btn-text{
		font-size: 26upx;
		color: #666;
	}
	.rec-topic-btn .vant-next{
		font-size: 20upx;
		color: #BBB;
	}
	.vant-next{
		font-size: 0;
	}
	.rec-topic-content{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #666;
	}
	.rec-topic-item{
		margin: 8upx 16upx 8upx 0;
		overflow: hidden;
	}
</style>
