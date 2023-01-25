<template>
	<view class="cell-page">
		<view class="u-page__item">
			<cw-cell-group title="基础功能">
				<cw-cell link-type="navigateTo" title="单元格">
					内容
				</cw-cell>
				<cw-cell is-link link-type="navigateTo" title="手机认证" url="">
					<view v-if="identity">
						<cw-icon class="iconfont icon-phone-identity phone-identity"></cw-icon>
						189****4321
					</view>
					<view v-else>
						<cw-icon class="iconfont icon-phone-identity phone-disable"></cw-icon>
						未绑定
					</view>
				</cw-cell>
				<cw-cell is-link link-type="navigateTo" title="账号与安全" url="" :border="false" />
			</cw-cell-group>
			<cw-cell-group title="自定义图标图片">
				<cw-cell link-type="navigateTo" title="单元格" icon="star">
					内容
				</cw-cell>
				<cw-cell link-type="navigateTo" title="单元格">
					<template #icon>
						<image src="@/static/chowa.png" style="width: 22px;height: 22px;"></image>
					</template>
					内容
				</cw-cell>
			</cw-cell-group>
			<cw-cell-group title="自定义大小">
				<cw-cell
				    size="large"
				    title="单元格"
				    value="内容"
					isLink
				></cw-cell>
				<cw-cell
				    size="large"
				    title="单元格"
				    value="内容"
				    label="描述信息"
				></cw-cell>
			</cw-cell-group>
			<cw-cell-group title="显示右箭头">
				<cw-cell
					title="单元格"
					value="组件"
					isLink
				></cw-cell>
				<cw-cell
					title="单元格"
					value="工具"
					arrow-direction="up"
					isLink
				></cw-cell>
				<cw-cell
					title="单元格"
					value="模板"
					arrow-direction="down"
					isLink
				></cw-cell>
			</cw-cell-group>
			<cw-cell-group title="跳转页面">
				<cw-cell
					title="打开图标页"
					isLink
					link-type="navigateTo"
					url="/pages/icon/icon"
				></cw-cell>
			</cw-cell-group>
			<cw-cell-group title="右侧内容垂直居中">
				<cw-cell
				    title="单元格"
				    value="内容"
				    label="描述信息"
				    center
				></cw-cell>
			</cw-cell-group>
			<cw-cell-group title="自定义插槽">
				<cw-cell value="内容">
					<view
					    slot="title"
					    class="u-slot-title"
					>
						<text class="cw-cell-text">单元格</text>
						<cw-tag plain
						    size="mini"
						    type="warning">
						标签
						</cw-tag>
					</view>
				</cw-cell>
				<cw-cell
				    title="单元格"
					isLink
				>
					<text class="u-slot-value">99</text>
				</cw-cell>
				<cw-cell title="单元格" useLabelSlot>
					<template #label>
						插槽描述信息
					</template>
				</cw-cell>
			</cw-cell-group>
		</view>
<!-- 

		<view class="u-page__item">
			<text class="u-page__item__title"></text>

		</view>
		<view class="u-page__item">

		</view>
		<u-gap height="30"></u-gap> -->
	</view>
</template>
<script>
	let timer = null
	export default {
		data() {
			return {
				identity: false
			}
		},
		created() {
			timer = setInterval(()=>{
				this.identity = !this.identity
			},1200)
			
		},
		methods: {
			click() {
				console.log('Cell is clicked.');
			}
		},
		destroyed() {
			clearInterval(timer)
		}
	}
</script>

<style lang="scss">
	.phone-identity {
		color: #009966;
	}
	
	.phone-disable {
		color: #f56c6c;
	}
	.cell-page {
		padding-bottom: 20px;
	}

	.u-slot-title {
		@include flex;
		flex-direction: row;
		align-items: center;
	}

	.cw-cell-text {
		font-size: 15px;
		line-height: 22px;
		color: #0984e3;
		margin-right: 5px;
	}

	.u-slot-value {
		line-height: 17px;
		text-align: center;
		font-size: 10px;
		padding: 0 5px;
		height: 17px;
		color: #FFFFFF;
		border-radius: 100px;
		background-color: #d63031;
	}
</style>
