<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础功能</text>
			<view class="u-demo-block__content">
				<cw-notice-bar
				    :text="text1"
					@click="click"
				></cw-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">可关闭</text>
			<view class="u-demo-block__content">
				<cw-notice-bar
				    :text="text5"
					mode="closeable"
					@click="click"
				></cw-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义横向滚动速度</text>
			<view class="u-demo-block__content">
				<cw-notice-bar
				    :text="text2"
					speed="500"
					mode="closable"
					@click="click"
				></cw-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">可跳转(点击右箭头)</text>
			<view class="u-demo-block__content">
				<cw-notice-bar
				    :text="text3"
					mode="link"
					url="/pages/tag/tag"
					@click="click"
				></cw-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">左侧图标</text>
			<view class="u-demo-block__content">
				<cw-notice-bar
				    :text="text4"
					leftIcon="notice"
					@click="click"
				></cw-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">右侧自定义</text>
			<view class="u-demo-block__content">
				<cw-notice-bar
				    :text="text4"
					@click="click">
					<template #right-icon>
						图标
					</template>
				</cw-notice-bar>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义样式</text>
			<view class="u-demo-block__content">
				<cw-notice-bar
				    :text="text3"
					color="#ffffff"
					@click="click"
					backgroundColor="#8e44ad"
				></cw-notice-bar>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text1: '故事的小黄花从出生那年就飘着，童话的荡秋千随记忆一直飘到现在。',
				text2: '哈哈哈哈哈哈哈',
				text3: '裹着心的光，很暖，与你有关。有梦就听得到，用爱呼应感叹。',
				text4: '一路有雨也有霜，月落乌啼江南',
				text5: '可关闭的 可关闭的 可关闭的'
			}
		},
		onLoad() {
			
		},
		methods: {
			click(e) {
				console.log(e)
			}
		},
	}
</script>

<style lang="scss">
	.u-demo-block__content {
		@include flex(column);
	}
</style>
