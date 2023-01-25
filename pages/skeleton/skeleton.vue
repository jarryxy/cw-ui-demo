<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础使用</text>
			<view class="u-demo-block__content">
				<cw-skeleton
					row="3"
					title
					loading
				></cw-skeleton>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义段落行数</text>
			<view class="u-demo-block__content">
				<cw-skeleton
					row="2"
					title
					loading
				></cw-skeleton>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">设置段落宽度</text>
			<view class="u-demo-block__content">
				<cw-skeleton
					row="2"
					title
					:rowWidth="['100%', '65%']"
					loading
				></cw-skeleton>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否开启动画</text>
			<cw-switch
				v-model="switch1"
				inactiveColor="#e6e6e6"
			></cw-switch>
			 
			<view class="u-demo-block__content">
				<cw-skeleton
					:animate="switch1"
					row="3"
					title
					loading
				></cw-skeleton>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">开启头像占位</text>
	
			<view class="u-demo-block__content">
				<cw-skeleton
					:animate="switch1"
					row="3"
					title
					loading
					avatar
				></cw-skeleton>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">切换状态</text>
			<cw-switch
				v-model="switch2"
				inactiveColor="#e6e6e6"
			></cw-switch>

			<view class="u-demo-block__content">
				<cw-skeleton
					row="2"
					title
					:loading="!switch2"
					avatar
					rowsHeight="14"
				>
					<!-- 需要在外部多嵌套一层占位view，否则在nvue下会导致样式失效 -->
					<view>
						<view class="cw-skeleton-slot">
							<image
								src="@/static/chowa.png"
								class="cw-skeleton-slot__image"
							></image>
							<view class="cw-skeleton-slot__content">
								<!-- <cw-list> -->
									<cw-list-item title="标题">
										<cw-list-item-info>文本文本文本文本文本文本文本文本</cw-list-item-info>
										<cw-list-item-info>文本文本文本文本文本文本文本文本</cw-list-item-info>
									</cw-list-item>
								<!-- </cw-list> -->
							</view>
						</view>
					</view>
				</cw-skeleton>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				switch1: true,
				switch2: false
			}
		}
	}
</script>

<style lang="scss">
	.cw-skeleton-slot {
		@include flex;
		align-items: flex-start;

		&__image {
			width: 40px;
			height: 40px;
			border-radius: 100px;
		}

		&__content {
			margin-left: 10px;
			flex: 1;
		}
	}
</style>
