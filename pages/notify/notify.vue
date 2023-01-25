<template>
	<view class="u-page">
		<cw-cell-group>
			<cw-cell
				:titleStyle="{fontWeight: 500}"
				@click="openNotify(item.notifyData)"
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
		<cw-notify ref="notify"></cw-notify>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				notifyData: {
					message: 'notify顶部提示',
					type: 'primary',
				},
				list: [{
						notifyData: {
							message: 'notify顶部提示',
							type: 'primary',
						},
						title: '主要提示',
						iconUrl: ''
					}, {
						notifyData: {
							message: 'notify顶部提示',
							type: 'success',
						},
						title: '成功提示',
						iconUrl: ''
					}, {
						notifyData: {
							message: 'notify顶部提示',
							type: 'danger',
						},
						title: '危险提示',
						iconUrl: ''
					}, {
						notifyData: {
							message: 'notify顶部提示',
							type: 'warning',
						},
						title: '警告提示',
						iconUrl: ''
					},
					{
						notifyData: {
							message: 'notify顶部提示',
							background: '#8e44ad',
						},
						title: '自定义样式',
						iconUrl: ''
					},
					{
						notifyData: {
							message: 'notify顶部提示',
							type: 'primary',
							duration: 6000,
						},
						title: '自定义持续时间',
						iconUrl: ''
					},
					{
						notifyData: {
							message: 'notify顶部提示',
							type: 'success',
							duration: 3000,
							onClose:(e)=>{
								this.$refs.notify.show({
									message: 'notify关闭了',
									type: 'danger',
								})
							},
						},
						title: '回调事件',
						iconUrl: ''
					}
				]
			}
		},
		onLoad() {},
		methods: {
			openNotify(params) {
				this.$refs.notify.show({
					...params
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
