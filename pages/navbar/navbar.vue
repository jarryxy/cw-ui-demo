<template>
	<view class="u-page">
		<cw-nav-bar
			title="自定义导航栏"
			safeAreaInsetTop
			fixed
			leftArrow
			leftText="返回"
			@click-left="navigateBack"
			placeholder
		>
		</cw-nav-bar>
		<view class="u-page__item">
			<text class="u-page__item__title">基础功能</text>
			<cw-nav-bar
				title="个人中心"
				:safeAreaInsetTop="false"
				:fixed="false"

			>
			</cw-nav-bar>
		</view>
		<view class="u-page__item">
			<text class="u-page__item__title">自定义文本</text>
			<cw-nav-bar
				:safeAreaInsetTop="false"
				title="个人中心"
				:fixed="false"
				leftArrow
				left-text="返回"
				right-text="首页"
				@click-right="rightClick"
				@click-left="leftClick"
			>
			</cw-nav-bar>
		</view>
		<view class="u-page__item">
			<text class="u-page__item__title">自定义插槽</text>
			<cw-nav-bar
				:fixed="false"
				title="个人中心"
				:safeAreaInsetTop="false"
			>
				<view
					class="u-nav-slot"
					slot="left"
				>
					<cw-icon
						@click="leftClick"
						name="arrow-left"
						size="18"
						color="rgb(96, 98, 102)"
					></cw-icon>
					<view :style="lineStyle"></view>
					<cw-icon
						@click="rightClick"
						name="home"
						color="rgb(96, 98, 102)"
						size="18"
					></cw-icon>
				</view>
			</cw-nav-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lineStyle: 'vertical-align: middle;margin: 0px 8px; border-left: 1px solid rgb(214, 215, 217); height: 16px; border-top-color: rgb(214, 215, 217); border-right-color: rgb(214, 215, 217); border-bottom-color: rgb(214, 215, 217);'
			}
		},
		methods: {
			navigateBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			rightClick() {
				console.log('rightClick');
			},
			leftClick() {
				console.log('leftClick');
			},
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	page {
		background-color: #f3f4f6;
	}
	/* #endif */
	
	.u-page {
		padding: 0;
		flex: 1;
		background-color: #f3f4f6;

		&__item {

			&__title {
				display: inline-block;
				color: #909193;
				background-color: #f3f4f6;
				padding: 15px;
				font-size: 15px;

				&__slot-title {
					color: #3c9cff;
					font-size: 14px;
				}
			}
		}
	}

	.u-nav-slot {
		@include flex;
		align-items: center;
		justify-content: space-between;
		border-width: 0.5px;
		border-radius: 100px;
		border-color: #dadbde;
		border-style: solid;
		padding: 3px 7px;
		opacity: 0.8;
	}
</style>
