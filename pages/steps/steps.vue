<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础演示</text>
			<view class="u-demo-block__content">
				<cw-steps :active="current1" :steps="steps1"></cw-steps>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">竖向展示</text>
			<view class="u-demo-block__content">
				<cw-steps
				    :active="1" :steps="steps1"
					direction="column"
				></cw-steps>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义图标</text>
			<view class="u-demo-block__content">
				<cw-steps
				    :active="1"
				    activeIcon="family-relation"
				    inactiveIcon="arrow"
					:steps="steps1"
				>
				</cw-steps>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色</text>
			<view class="u-demo-block__content">
				<cw-steps :active="1" activeColor="#e67e22" :steps="steps1">
				</cw-steps>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current1: 1,
				steps1:[
					{text:'已下单',desc:'10:30'},
					{text:'已出库',desc:'10:35'},
					{text:'运输中',desc:'11:40'},
				],
				steps2:[
					{text:'已下单',desc:'10:30'},
					{text:'仓库着火',desc:'10:35'},
					{text:'运输中',desc:'11:40'},
				]
			}
		},
		onLoad() {
		}
	}
</script>

<style lang="scss">
	.slot-icon {
		width: 21px;
		height: 21px;
		background-color: #f9ae3d;
		border-radius: 100px;
		font-size: 12px;
		color: #fff;
		line-height: 21px;
		text-align: center;
	}
</style>
