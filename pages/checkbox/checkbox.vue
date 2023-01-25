<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案例</text>
			<text class="u-block__title">Vue、React你喜欢那个？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<cw-checkbox-group
						v-model="radiovalue1"
						@change="groupChange"
					>
						<cw-checkbox
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in radiolist1"
							:key="index"
							:name="item.name"
							@change="radioChange"
						>{{item.name}}
						</cw-checkbox>
					</cw-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">label位置</text>
			<text class="u-block__title">Vue、React你喜欢那个？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<cw-checkbox-group
						v-model="radiovalue1"
						@change="groupChange"
					>
						<cw-checkbox
							labelPosition="left"
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in radiolist1"
							:key="index"
							:name="item.name"
							@change="radioChange"
						>{{item.name}}
						</cw-checkbox>
					</cw-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否禁用</text>
			<text class="u-block__title">苹果、香蕉和菠萝哪个最甜？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<cw-checkbox-group
						v-model="radiovalue3"
					>
						<cw-checkbox
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in radiolist3"
							:key="index"
							:name="item.name"
							:disabled="!index"
						>{{item.name}}
						</cw-checkbox>
					</cw-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色&性状</text>
			<text class="u-block__title">你比较喜欢下面哪个颜色？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<cw-checkbox-group
						v-model="radiovalue5"
					>
						<cw-checkbox
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in radiolist5"
							:key="index"
							shape="round"
							checkedColor="#19be6b"
							:name="item.name"
						>{{item.name}}
						</cw-checkbox>
					</cw-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">横向排列形式</text>
			<text class="u-block__title">状态管理你喜欢用的是？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<cw-checkbox-group
						v-model="radiovalue6"
						direction="horizontal"
					>
						<cw-checkbox
							:customStyle="{marginBottom: '16px'}"
							v-for="(item, index) in radiolist6"
							:key="index"
							:name="item.name"
						>{{item.name}}
						</cw-checkbox>
					</cw-checkbox-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 基本案列数据
				radiolist1: [{
						name: 'Vue'
					},
					{
						name: 'React'
					}
				],
				// cw-checkbox-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue1: ['Vue'],

				// 是否禁用数据
				radiolist3: [{
						name: '苹果'
					},
					{
						name: '香蕉'
					},
					{
						name: '菠萝'
					}
				],
				// cw-checkbox-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue3: ['苹果'],

				//自定义颜色数据
				radiolist5: [{
						name: '红色'
					},
					{
						name: '绿色'
					},
					{
						name: '蓝色'
					},
					{
						name: '黄色'
					}
				],
				// cw-checkbox-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue5: ['绿色'],

				//横向排列形式数据
				radiolist6: [{
						name: 'Zustand',
					},
					{
						name: 'Pinia',
					},
					{
						name: 'Redux',
					},
					{
						name: 'Mobox',
					},
				],
				// cw-checkbox-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue6: ['Pinia'],
			}
		},
		watch: {
			radiovalue1(newValue, oldValue) {
				console.log('v-model', newValue);
			}
		},
		methods: {
			groupChange(n) {
				console.log('groupChange', n);
			},
			radioChange(n) {
				console.log('radioChange', n);
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		&__style {
			font-size: 16px;
			color: rgb(96, 98, 102);
			margin-bottom: 20rpx;
			font-weight: bold;
		}
		.u-block__title{
			display: inline-block;
		}
		&__title{
			font-size: 16px;
			color: rgb(96, 98, 102);
			margin-bottom: 20rpx;
		}
		::v-deep .cw-checkbox__label{
			color: rgb(96, 98, 102);
		}
	}
</style>
