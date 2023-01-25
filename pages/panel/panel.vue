<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础功能</text>
			<view class="u-demo-block__content">
				<view><cw-panel title="标题" desc="描述" status="状态"></cw-panel></view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">底部插槽</text>
			<view class="u-demo-block__content">
				<view>
					<cw-panel useFooterSlot title="标题" desc="描述" status="状态">
						<template #footer>
							<view class="footer-slot">
								<cw-button size="small" type="info">支付</cw-button>
							</view>
						</template>
					</cw-panel>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {}
};
</script>

<style lang="scss">
.u-page {
}
.footer-slot{
	display: flex;
	justify-content: flex-end;
}
</style>
