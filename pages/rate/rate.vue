<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案例</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-rate></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义选中星星数量</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-rate
						size="20"
						v-model="value"
						@change="change"
					></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义星星大小</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-rate size="30" count="4"></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义图标数量</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<cw-rate
						size="20"
						v-model="value3"
						count="10"
					></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否禁用评分</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<cw-rate size="20" disabled></cw-rate>
				</view>
			</view>
		</view>
    <view class="u-demo-block">
      <text class="u-demo-block__title">是否只读评分</text>
      <view class="u-demo-block__content">
        <view class="u-page__rate-item">
          <cw-rate size="20" readonly></cw-rate>
        </view>
      </view>
    </view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义选中星星颜色</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<cw-rate
						size="20"
						v-model="activeColorValue"
						color="#2979ff"
					></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">图标间距</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<cw-rate
						size="20"
						v-model="value2"
						gutter="12"
					></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义未选中星星颜色</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<cw-rate
						size="20"
						v-model="value1"
						voidColor="#2979ff"
					></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">禁止触摸选择</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<cw-rate size="20" :touchable="false"></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">允许触摸选择</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<cw-rate size="20" :touchable="true"></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否允许半星</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<cw-rate
						size="20"
						v-model="HalfValue"
						:allowHalf="true"
						@change="change"
					></cw-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义选中的图标</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<cw-rate
						size="20"
						v-model="activeIconValue"
						icon="footprint"
						voidIcon="prohibit"
					></cw-rate>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//自定义星星的个数
				value: 3,
				value1: 2,
				value2: 4,
				value3: 8,
				// 自定义选择星星颜色个数
				activeColorValue: 3,
				// 是否允许半星的个数
				HalfValue: 3.5,
				// 自定义图标星星个数
				activeIconValue: 3,
			}
		},
		watch: {
			value(newValue, oldValue) {
				// console.log(newValue);
			}
		},
		methods: {
			change(e) {
				// console.log('change', e);
			}
		},
	}
</script>

<style lang="scss">
	.u-page {}
</style>
