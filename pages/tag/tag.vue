<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础功能</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-tag
					    plain
					    size="mini"
					    type="warning">
						标签
					</cw-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义主题</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<!-- <cw-tag type="default">
						标签
					</cw-tag> -->
					<cw-tag>
						标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag type="primary">
						标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="warning"
					>标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="success"
					>标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="danger"
					>标签
					</cw-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">圆形标签</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-tag
					    plain
						round
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="warning"
						round
					>
					标签
					</cw-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">镂空标签</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-tag
					    plain
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="warning"
					    plain
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="success"
					    plain
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="danger"
					    plain
					>
					标签
					</cw-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">标记样式</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-tag
					    plain
					    mark
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="warning"
					    plain
					    mark
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="success"
					    mark
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="danger"
						mark
					>
					标签
					</cw-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义尺寸</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-tag
					    type="warning"
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    plain
					    size="medium"
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="success"
					    plain
					    size="large"
					>
					标签
					</cw-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">可关闭标签</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-tag
					    closeable
					    v-show="close1"
					    @close="close1 = false"
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="warning"
					    closeable
						v-show="close2"
					    @close="close2 = false"
					>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="success"
					    plain
					    size="large"
					    closeable
						v-show="close3"
					    @close="close3 = false"
					>
					标签
					</cw-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">带图片和图标</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<cw-tag
					    plain
					>标签
					<cw-icon name="local"></cw-icon>
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="warning"
					>
					<cw-icon name="notice"></cw-icon>
					标签
					</cw-tag>
				</view>
				<view class="u-page__tag-item">
					<cw-tag
					    type="success"
					    plain
					    size="large"
					>
					<image style="width: 14px;height: 14px;" src="@/static/chowa.png"></image>
					标签
					</cw-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">单选标签</text>
			<view class="u-demo-block__content">
				<view
				    class="u-page__tag-item"
				    v-for="(item, index) in radios"
				    :key="index"
				>
					<cw-tag
					    :plain="!item.checked"
					    type="warning"
						@click="radioClick(index)"
					>
					{{`选项${index + 1}`}}
					</cw-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">多选标签</text>
			<view class="u-demo-block__content">
				<view
				    class="u-page__tag-item"
				    v-for="(item, index) in checkboxs"
				    :key="index"
				>
					<cw-tag
					    :plain="!item.checked"
					    type="primary"
					    @click="checkboxClick(index)"
					>{{`选项${index + 1}`}}
					</cw-tag>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				close1: true,
				close2: true,
				close3: true,
				radios: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}
				],
				checkboxs: [{
						checked: true
					},
					{
						checked: true
					},
					{
						checked: false
					}
				]
			}
		},
		methods: {
			radioClick(name) {
				console.log(1)
				this.radios.map((item, index) => {
					item.checked = index === name ? true : false
				})
			},
			checkboxClick(name) {
				this.checkboxs[name].checked = !this.checkboxs[name].checked
			}
		}
	}
</script>

<style lang="scss">
	.u-page__tag-item {
		margin-right: 20px;
	}

	.u-demo-block__content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
</style>
