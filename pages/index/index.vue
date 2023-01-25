<template>
	<view class="content">
			<view class="header">
				<view class="title">
					<view>
						<image src="@/static/chowa.png" class="logo"></image>
					</view>
					<view class="txt">
						{{title}}
					</view>
				</view>
				<text class="desc">兼容uniapp、微信小程序的移动端组件库。</text>
			</view>
			<view class="list-wrap">
				<cw-cell-group  title="基础组件">
					<cw-cell is-link link-type="navigateTo" title="Icon 图标" url="/pages/icon/icon">
						<!-- <image slot="icon" class="u-cell-icon" src="" mode="widthFix"></image> -->
					</cw-cell>
					<cw-cell is-link link-type="navigateTo" title="Button 按钮" url="/pages/button/button" />
					<cw-cell is-link link-type="navigateTo" title="Image 图片" url="/pages/image/image" />
					<cw-cell is-link link-type="navigateTo" title="Layout 布局" url="/pages/layout/layout" />
					<cw-cell is-link link-type="navigateTo" title="Cell 单元格" url="/pages/cell/cell" />
					<cw-cell is-link link-type="navigateTo" title="Tag 标签" url="/pages/tag/tag" />
					<cw-cell is-link link-type="navigateTo" title="Loading 加载动画" url="/pages/loading/loading" />
				</cw-cell-group>
				<cw-cell-group  title="表单组件">
					<cw-cell is-link link-type="navigateTo" title="ActionSheet 动作面板" url="/pages/actionSheet/actionSheet"/>
					<cw-cell is-link link-type="navigateTo" title="Employee 人员展示" url="/pages/employee/employee"/>
					<cw-cell is-link link-type="navigateTo" title="Field 表单项" url="/pages/field/field"/>
					<cw-cell is-link link-type="navigateTo" title="Radio 单选框" url="/pages/radio/radio"/>
					<cw-cell is-link link-type="navigateTo" title="CheckBox 复选框" url="/pages/checkbox/checkbox"/>
					<cw-cell is-link link-type="navigateTo" title="Rate 评分" url="/pages/rate/rate"/>
					<cw-cell is-link link-type="navigateTo" title="Switch 开关选择器" url="/pages/switch/switch"/>
					<cw-cell is-link link-type="navigateTo" title="Uploader 上传" url="/pages/uploader/uploader"/>
				</cw-cell-group>
				<cw-cell-group  title="数据组件">
					<cw-cell is-link link-type="navigateTo" title="List 列表" url="/pages/list/list"/>
					<cw-cell is-link link-type="navigateTo" title="Progress 进度条" url="/pages/progress/progress"/>
					<cw-cell is-link link-type="navigateTo" title="Panel 面板" url="/pages/panel/panel"/>
				</cw-cell-group>
				<cw-cell-group  title="反馈组件">
					<cw-cell is-link link-type="navigateTo" title="Dialog 对话框" url="/pages/dialog/dialog"/>
					<cw-cell is-link link-type="navigateTo" title="Notify 顶部消息提示" url="/pages/notify/notify"/>
					<cw-cell is-link link-type="navigateTo" title="NoticeBar 滚动通知" url="/pages/noticeBar/noticeBar"/>
					<cw-cell is-link link-type="navigateTo" title="Toast 消息提示" url="/pages/toast/toast"/>
				</cw-cell-group>
				<cw-cell-group  title="布局组件">
					<cw-cell is-link link-type="navigateTo" title="Copyright 版权" url="/pages/copyright/copyright"/>
					<cw-cell is-link link-type="navigateTo" title="Divider 分割线" url="/pages/divider/divider"/>
					<cw-cell is-link link-type="navigateTo" title="Navbar 导航栏" url="/pages/navbar/navbar"/>
					<cw-cell is-link link-type="navigateTo" title="Skeleton 骨架屏" url="/pages/skeleton/skeleton"/>
					<cw-cell is-link link-type="navigateTo" title="Sticky 吸顶" url="/pages/sticky/sticky"/>
				</cw-cell-group>
				<cw-cell-group  title="导航组件">
					<cw-cell is-link link-type="navigateTo" title="Empty 空白显示" url="/pages/empty/empty"/>
					<cw-cell is-link link-type="navigateTo" title="Steps 步骤条" url="/pages/steps/steps"/>
					<cw-cell is-link link-type="navigateTo" title="Tabs 选项卡" url="/pages/tabs/tabs"/>
				</cw-cell-group>
				<cw-cell-group  title="其它组件">
					<cw-cell is-link link-type="navigateTo" title="RichText 富文本" url="/pages/rich-text/rich-text"/>
					<cw-cell is-link link-type="navigateTo" title="Transition 动画" url="/pages/transition/transition"/>
				</cw-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'CW UI'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.logo{
		width:40px;
		height: 40px;
	}
	
	.header{
		padding: 12px;
		.title {
			font-size: 18px;
			color: #aaaaaa;
			padding: 12px;
			display: flex;
		}
		.txt {
			margin-left: 12px;
			line-height: 40px;
			font-size: 36px;
		}
		.desc{
			margin-left: 12px;
			font-size: 16px;
			color: #606266;
		}
	}
	

</style>
