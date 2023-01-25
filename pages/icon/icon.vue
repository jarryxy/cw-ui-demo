<template>
	<view class="u-page">
		<view class="u-border-left u-border-top u-page__grid">
			<view
			    @tap="selectIcon(item.name)"
			    class="u-page__grid__item u-border-bottom u-border-right"
			    v-for="(item, index) in iconList"
			    :key="index"
			>
				<view class="u-page__grid__item__icon">
					<cw-icon
					    :name="item.name"
					    size="30"
					    color="#909399"
					></cw-icon>
				</view>
				<text class="u-page__grid__item__text">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList:[
					{name:'service'},
					{name:'zone'},
					{name:'mission'},
					{name:'access'},
					{name:'vistor'},
					{name:'question'},
					{name:'convenient'},
					{name:'local'},
					{name:'star'},
					{name:'photograph'},
					{name:'scan'},
					{name:'use-nfc'},
					{name:'not-support'},
					{name:'nfc'},
					{name:'qrcode'},
					{name:'pet'},
					{name:'phone'},
					{name:'home'},
					{name:'prohibit'},
					{name:'keyboard-hide'},
					{name:'backspace'},
					{name:'family-relation'},
					{name:'identity'},
					{name:'search'},
					{name:'clear'},
					{name:'empty'},
					{name:'video'},
					{name:'voice'},
					{name:'article'},
					{name:'neighbor'},
					{name:'chowa'},
					{name:'errgeneral'},
					{name:'arrow-left'},
					{name:'arrow'},
					{name:'arrow-down'},
					{name:'arrow-up'},
					{name:'cross'},
					{name:'plus'},
					{name:'success'},
					{name:'fail'},
					{name:'neterror'},
					{name:'fitment'},
					{name:'park'},
					{name:'maintain'},
					{name:'community'},
					{name:'footprint'},
					{name:'report'},
					{name:'movecar'},
					{name:'pay'},
					{name:'approve'},
					{name:'menu'},
					{name:'notice'},
					{name:'setting'},
				]
			}
		},
		methods: {
			selectIcon(name) {
				// #ifdef H5
				// uni.showToast({
				// 	title:'H5暂不支持复制',
				// 	icon:'none'
				// })
				// return
				// #endif
				uni.setClipboardData({
					data: name,
					success: () => {

					},
					showToast: false
				});
				uni.showToast({
					title:'图标名称已复制',
					icon:'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 14rpx;

		&__grid {
			@include flex(row);
			flex-wrap: wrap;

			&__item {
				@include flex(column);
				align-items: center;
				justify-content: center;
				// height: 240rpx;
				// width: 240rpx;
				padding: 0 5px;
				
				&__icon {
					height: 130rpx;
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					flex-direction: row;
					align-items: flex-end;
				}
				
				&__text {
					color: #909193;
					/* #ifndef APP-NVUE */
					word-wrap: break-word;
					word-break: break-all;
					/* #endif */
					font-size: 14px;
					height: 110rpx;
				}
			}
		}
	}
</style>
