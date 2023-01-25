<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案列</text>
			<view class="u-demo-block__content">
				<view class="u-page__loading-item">
					<cw-loading></cw-loading>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">条状loading</text>
			<view class="u-demo-block__content">
				<view class="u-page__loading-item">
					<cw-loading type="spinner"></cw-loading>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色</text>
			<view class="u-demo-block__content">
				<view class="u-page__loading-item">
					<cw-loading color="#00b894"></cw-loading>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义大小</text>
			<view class="u-demo-block__content">
				<view class="u-page__loading-item">
					<cw-loading type="circular" size="40"></cw-loading>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义文字</text>
			<view class="u-demo-block__content">
				<view class="u-page__loading-item">
					<cw-loading
					    :vertical="true"
					>加载中</cw-loading>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义文字大小</text>
			<view class="u-demo-block__content">
				<view class="u-page__loading-item">
					<cw-loading
					    :vertical="true"
						textSize="18"
					>加载中</cw-loading>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		&__loading-item {
			margin-top: 5px;
		}
	}

	.u-demo-block__content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
</style>
