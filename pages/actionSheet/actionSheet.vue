<template>
	<view class="u-page">
		<cw-cell-group>
			<cw-cell
				@click="openSheet(index)"
				:title="item.title"
				v-for="(item, index) in list"
				:key="index"
				isLink
			>
				<image
					slot="icon"
					class="u-cell-icon"
					:src="item.iconUrl"
					mode="widthFix"
				></image>
			</cw-cell>
		</cw-cell-group>
		<cw-action-sheet
			:show="show0"
			@close="close"
			@select="select"
			:actions="actions0"
			:closeOnClickOverlay="false"
		>
		</cw-action-sheet>
		<cw-action-sheet
			:show="show1"
			@close="show1 = false"
			:actions="actions1"
		>
		</cw-action-sheet>
		<cw-action-sheet
			:show="show2"
			@close="show2 = false"
			:actions="actions2"
			@cancel="cancel"
			cancelText="取消"
		>
		</cw-action-sheet>
		<cw-action-sheet
			:show="show3"
			@close="show3 = false"
			:actions="actions3"
			description="这是一段描述文本,字号偏小,颜色偏淡"
		>
		</cw-action-sheet>
		<cw-action-sheet
			:show="show4"
			@close="show4 = false"
			title="标题位置"
			:round="false"
		>
			<view style="margin: 10px 20px 30px 20px; color: #303133; font-size: 15px;">这是通过slot传入的内容,您可以在此自定义动作面板</view>
		</cw-action-sheet>
		<cw-toast ref="toast"></cw-toast>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				show0: false,
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				actions0: [{
						name: '选项1',
					},
					{
						name: '选项2',
					},
					{
						name: '选项3',
						subname: '描述文本'
					},
				],
				actions1: [{
						name: '选项1',
					},
					{
						loading: true
					},
					{
						name: '选项被禁用',
						disabled: true
					},
				],
				actions2: [{
						name: '选项1',
					},
					{
						name: '选项2',
					},
					{
						name: '选项3',
					},
				],
				actions3: [{
						name: '选项1',
					},
					{
						name: '选项2',
					},
					{
						name: '选项3',
					},
				],
				list: [{
						title: '基本使用',
						iconUrl: 'http://qiniu.yuencode.cn/cwui/demo/actionSheet/custom.png'

					},
					{
						title: '设置状态',
						iconUrl: ''
					},
					{
						title: '显示取消按钮',
						iconUrl: ''
					},
					{
						title: '描述内容',
						iconUrl: ''
					},
					{
						title: '不显示显示圆角',
						iconUrl: ''
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			openSheet(index) {
				this[`show${index}`] = true
			},
			getuserinfo(res) {
				uni.$u.toast(`用户名：${res.userInfo.nickName}`)
			},
			navigateBack() {
				uni.navigateBack()
			},
			close() {
				console.log('close');
				this['show0'] = false
			},
			select(e) {
				console.log('select', e);
			},
			cancel(){
				this.show2 = false
				this.$refs.toast.show({
					message: '取消'
				})
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 0;
	}
</style>
