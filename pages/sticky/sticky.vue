<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础使用</text>
			滚动页面,即可看到下方的按钮会吸顶。
		</view>
		<cw-sticky :scrollTop="scrollTop"  stickyHeight="44">
			<cw-button
			customStyle="width:100%"
				type="info"
			>吸顶按钮</cw-button>
		</cw-sticky>
		<cw-divider text="已到底部"></cw-divider>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:0
			}
		},
		// mixins: [uni.$u.mixin],
		methods: {
			navigateBack() {
				uni.navigateBack()
			}
		},
		//页面滚动执行方式
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style lang="scss">
	.u-page {
		height: 1200px;
	}
</style>
