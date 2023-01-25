<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础功能</text>
			<view class="u-demo-block__content">
				<cw-progress :percentage="percentage1">
				</cw-progress>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">不显示百分比</text>
			<view class="u-demo-block__content">
				<cw-progress
				    :showPivot="false"
				    :percentage="percentage2"
				>
				</cw-progress>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义高度</text>
			<view class="u-demo-block__content">
				<cw-progress
				    strokeWidth="8"
				    :showText="false"
				    :percentage="percentage3"
				>
				</cw-progress>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色</text>
			<view class="u-demo-block__content">
				<cw-progress
				    height="8"
				    :percentage="percentage4"
				    color="#38df50"
				    textColor="#e1be0e"
					pivotColor="#C720AF"
					trackColor="#3bd0ff"
				>
				</cw-progress>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">手动加减</text>
			<view class="u-demo-block__content">
				<cw-progress
				    height="8"
				    :showText="false"
				    :percentage="percentage6"
				    activeColor="#3c9cff"
				    inactiveColor="#f3f4f6"
				>
				</cw-progress>
				<view class="button-group">
					<view class="button-group__circle" hover-class="u-hover-class" @click="computedWidth('minus')">
						<view class="button-group__circle__text">减少</view>
					</view>
					<view class="button-group__circle" hover-class="u-hover-class" @click="computedWidth('plus')">
						<view class="button-group__circle__text">增加</view>
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
				androidNvue: false,
				percentage1: 30,
				percentage2: 40,
				percentage3: 50,
				percentage4: 60,
				percentage5: 70,
				percentage6: 50,
			}
		},
		onLoad() {
			// #ifdef APP-NVUE
			this.androidNvue = uni.$u.os() === 'android'
			// #endif
			setTimeout(()=>{
				this.percentage1 = 100
			},2500)
		},
		methods: {
			sleep(value = 30) {
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve()
					}, value)
				})
			},
			range(min = 0, max = 0, value = 0) {
				return Math.max(min, Math.min(max, Number(value)))
			},
			computedWidth(type) {
				if(type === 'plus') {
					this.percentage6 = this.range(0, 100, this.percentage6 + 10)
				} else {
					this.percentage6 = this.range(0, 100, this.percentage6 - 10)
				}
			}
		},
	}
</script>

<style lang="scss">
	.u-page {}

	.u-demo-block__content {
		flex-direction: column !important;
		flex-wrap: nowrap;
		align-items: stretch;
	}
	
	.button-group {
		@include flex;
		justify-content: center;
		
		&__circle {
			background-color: #e2fbf9;
			border-radius: 8px;
			justify-content: center;
			align-items: center;
			margin: 30px 30px;
			&__text {
				width: 50px;
				height: 50px;
				text-align: center;
				line-height: 50px;
				color: rgb(56, 188, 175);
				font-size: 13px;
			}
		}
	}
</style>
