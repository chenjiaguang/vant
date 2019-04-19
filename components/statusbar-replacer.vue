<template>
	<view class="wrapper" :style="{backgroundColor: bg}"></view>
</template>

<script>
	export default {
		props: {
			bg: {
				type: String,
				default: 'transparent'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.wrapper{
	width: 100%;
	height: var(--status-bar-height);
}
</style>
