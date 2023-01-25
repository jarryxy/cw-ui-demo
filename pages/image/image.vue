<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案例</text>
			<view class="u-demo-block__content">
				<view class="u-page__image-item"><cw-image :src="src"></cw-image></view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义形状</text>
			<view class="u-demo-block__content">
				<view class="u-page__image-item"><cw-image round :src="src"></cw-image></view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义圆角</text>
			<view class="u-demo-block__content">
				<view class="u-page__image-item"><cw-image radius="12" :src="src"></cw-image></view>
			</view>
		</view>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义图片加载插槽</text>
			<view class="u-demo-block__content">
				<view class="u-page__image-item">
					<cw-image useLoadingSlot radius="12" src="">
						<template #loading>
							loading
						</template>
					</cw-image>
				</view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">图片模式</text>
			<view class="u-demo-block__content">
				<view class="u-page__image-item">
					<view class="img">
						<cw-image fit="none" :src="src"></cw-image>
						<view class="fit">none</view>
					</view>
					<view class="img">
						<cw-image fit="fill" :src="src"></cw-image>
						<view class="fit">fill</view>
					</view>
					<view class="img">
						<cw-image fit="cover" :src="src"></cw-image>
						<view class="fit">cover</view>
					</view>
					<view class="img">
						<cw-image fit="contain" :src="src"></cw-image>
						<view class="fit">contain</view>
					</view>
					<view class="img">
						<cw-image fit="widthFix" :src="src"></cw-image>
						<view class="fit">widthFix</view>
					</view>
					<view class="img">
						<cw-image fit="heightFix" :src="src"></cw-image>
						<view class="fit">heightFix</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: 'http://qiniu.yuencode.cn/avatar/2023/01/11/973c751b7c9d4aa59a492b4d4eb0b808.jpeg',
		};
	},
	onLoad() {
		setTimeout(() => {
			this.src1 = this.src;
		}, 3000);
	},
	methods: {
		click() {
			console.log('click');
		}
	}
};
</script>

<style lang="scss">
.fit {
	text-align: center;
	color: gray;
}
.img {
	margin-left: 8px;
	margin-bottom: 6px;
	display: inline-block;
}
</style>
