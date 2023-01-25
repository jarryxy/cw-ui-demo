<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">按钮类型</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<cw-button>默认按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button type="primary">主要按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button type="info">信息按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button type="danger">危险按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button type="warning">警告按钮</cw-button>
				</view>
			</view>
		</view>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">镂空按钮</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<cw-button plain>默认按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button plain type="primary">主要按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button plain type="info">信息按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button plain type="danger">危险按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button plain type="warning">警告按钮</cw-button>
				</view>
			</view>
		</view>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">禁用按钮</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<cw-button disabled>默认按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button disabled type="primary">主要按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button disabled type="info">信息按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button disabled type="danger">危险按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button disabled type="warning">警告按钮</cw-button>
				</view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">加载中按钮</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<cw-button loading type="primary">主要按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button loading type="info">信息按钮</cw-button>
				</view>
			</view>
		</view>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义背景色</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<cw-button color="linear-gradient(to left, #81ecec, #6c5ce7)">渐变色按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button color="#55efc4">亮蓝色按钮</cw-button>
				</view>
			</view>
		</view>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">按钮图标&按钮形状</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<cw-button type="primary" icon="plus">按钮图标</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button type="info" round>圆形按钮</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button type="warning" square>方块按钮</cw-button>
				</view>
			</view>
		</view>
		
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义大小</text>
			<view class="u-demo-block__content" style="padding-bottom: 15px; flex-direction: column;align-items: stretch;flex-wrap: nowrap;">
				<view class="u-page__button-item">
					<cw-button type="primary" size="large">超大尺寸</cw-button>
				</view>
			</view>
			<view class="u-demo-block__content">

				<view class="u-page__button-item">
					<cw-button type="info" size="normal">普通尺寸</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button type="danger" size="small">小型尺寸</cw-button>
				</view>
				<view class="u-page__button-item">
					<cw-button type="warning" size="mini">超小尺寸</cw-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// type: 'default',
				// disabled: false
			}
		},
		onLoad() {
			setTimeout(() => {
				this.type = 'primary'
				this.disabled = true
			}, 2000)
		},
		methods: {
			click() {
				console.log('click');
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		&__button-item {
			margin: 0 15px 15px 0;
		}
	}

	.u-demo-block__content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
</style>
