<template>
	<view class="u-page">
		<!-- <view style="height: 30px;"></view> -->
		<cw-cell-group>
			<cw-cell
				:titleStyle="{fontWeight: 500}"
				:title="item.title"
				v-for="(item, index) in list"
				:key="index"
				isLink
				@click="showToast(item)"
			>
				<image
				    slot="icon"
				    class="u-cell-icon"
				    :src="item.iconUrl"
				    mode="widthFix"
				></image>
			</cw-cell>
		</cw-cell-group>
		
		<cw-toast ref="toast"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				show: false,
				list: [{
						type: 'text',
						title: '基本使用',
						message: "基本使用",
						iconUrl: ''
					},
					{
						type: 'loading',
						icon: false,
						title: '正在加载',
						message: "正在加载...",
					},
					{
						type: 'loading',
						title: '异步关闭',
						duration:0,
						message: "3秒后关闭",
						iconUrl: ''
					},

					{
						type: 'loading',
						title: '自定义加载样式',
						message: "spinner样式",
						loadingType:'spinner',
						iconUrl: ''
					},
					{
						type: 'text',
						position: "top",
						title: '自定义位置',
						message: "位置偏上",
						iconUrl: ''
					},
					{
						type: 'text',
						title: '结束后跳转标签页',
						message: "跳转tag页面",
						iconUrl: '',
						test: true
					}
				],
			}
		},
		computed: {
			getIcon() {
				return path => {
					return 'https://cdn.uviewui.com/uview/example/' + path + '.png';
				}
			}, 
		},
		methods: {
			showToast(params) {
				if(params.duration == 0){
					setTimeout(()=>{
						this.$refs.toast.clear()
					},3000)
				}
				this.$refs.toast.show({
					...params,
					onClose() {
						params.test && uni.navigateTo({
							url: '/pages/tag/tag'
						})
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 0;
	}

	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}

	.u-cell-group__title__text {
		font-weight: bold;
	}
</style>
