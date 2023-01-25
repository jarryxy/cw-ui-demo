<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案例</text>
			<view><cw-divider>分割线</cw-divider></view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否虚线</text>
			<view><cw-divider :dashed="true">分割线</cw-divider></view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否细线</text>
			<view><cw-divider :hairline="true">分割线</cw-divider></view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">文本内容靠左</text>
			<view><cw-divider contentPosition="left">分割线</cw-divider></view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">文本内容靠右</text>
			<view><cw-divider contentPosition="right">分割线</cw-divider></view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色、文本大小</text>
			<view><cw-divider fontSize="16" textColor="#05c46b" borderColor="#2979ff">分割线</cw-divider></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss"></style>
