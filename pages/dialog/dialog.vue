<template>
	<view class="u-page">
		<cw-cell-group>
			<cw-cell @click="showModal(index)" :title="item.title" v-for="(item, index) in list" :key="index" isLink>
				<image slot="icon" class="u-cell-icon" :src="item.iconUrl" mode="widthFix"></image>
			</cw-cell>
		</cw-cell-group>
		<cw-dialog ref="dialog"></cw-dialog>
		<cw-dialog ref="dialog1" useTitleSlot useSlot>
			<template #title>
				<text>标题</text>
				<cw-icon name="voice" color="#e67e22"></cw-icon>
			</template>
			<view>
				<cw-image src="http://qiniu.yuencode.cn/avatar/2023/01/11/973c751b7c9d4aa59a492b4d4eb0b808.jpeg"></cw-image>
			</view>
		</cw-dialog>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					title: '基础使用',
					iconUrl: 'http://qiniu.yuencode.cn/cwui/demo/modal/4.png'
				},
				{
					title: '无标题',
					iconUrl: ''
				},
				{
					title: '带取消按钮',
					iconUrl: ''
				},
				{
					title: '异步关闭',
					iconUrl: ''
				},
				{
					title: '允许点击遮罩关闭',
					iconUrl: ''
				},
				{
					title: '传入slot',
					iconUrl: ''
				},
				{
					title: '自定义动画效果',
					iconUrl: ''
				}
			]
		};
	},
	methods: {
		showModal(index) {
			this[`show${index + 1}`] = true;
			let config = {
				title: '标题',
				message: '对话框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作'
			};
			switch (index) {
				case 0:
					this.$refs.dialog.show(config);
					break;
				case 1:
					config.title = '';
					this.$refs.dialog.show(config);
					break;
				case 2:
					config.showCancelButton = true;
					this.$refs.dialog.show(config);
					break;
				case 3:
					config.showCancelButton = true;
					config.asyncClose = true;
					config.beforeClose = action => {
						if(action == 'cancel'){
							return Promise.resolve(true)
						}
						return new Promise((resolve, reject) => {
							setTimeout(() => {
								resolve(true)
							}, 1200);
						});
					};
					this.$refs.dialog.show(config);
					break;
				case 4:
					config.showCancelButton = true;
					config.closeOnClickOverlay = true
					this.$refs.dialog.show(config);
					break;
				case 5:
					this.$refs.dialog1.show(config);
					break;
				case 6:
					/*
					* scale
					* fade
					* center
					* bottom
					* top
					* left
					* right
					*/
				   config.transition = 'left'
					this.$refs.dialog.show(config)
			}
		},
		navigateBack() {
			uni.navigateBack();
		},
		confirm4() {
			setTimeout(() => {
				this.show4 = false;
			}, 2000);
		},
		confirm() {
			this.show3 = false;
			console.log('confirm');
		},
		cancel() {
			this.show3 = false;
			console.log('cancel');
		},
		close() {
			this.show3 = false;
			console.log('close');
		}
	}
};
</script>

<style lang="scss">
.u-page {
	padding: 0;
}
</style>
