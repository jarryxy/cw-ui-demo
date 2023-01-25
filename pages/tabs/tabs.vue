<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础演示</text>
			<view class="u-demo-block__content">
				<cw-tabs @click="click">
					<cw-tab v-for="(item, index) in list1" :index="index" :title="item.name" :key="index"></cw-tab>
				</cw-tabs>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义线条颜色</text>
			<view class="u-demo-block__content">
				<cw-tabs  @click="click" :active="3" color="#3498db">
					<cw-tab v-for="(item, index) in list1" :index="index" :title="item.name" :key="index"></cw-tab>
				</cw-tabs>
			</view>
		</view>
		<view
			class="u-demo-block"
			style="margin-bottom: 0;"
		>
			<text class="u-demo-block__title">粘性布局</text>
		</view>
		<cw-sticky :scrollTop="scrollTop" backgroundColor="#fff">
			<cw-tabs>
				<cw-tab v-for="(item, index) in list1" :title="item.name" :key="index"></cw-tab>
			</cw-tabs>
		</cw-sticky>
		<view style="height: 30px;"></view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">显示微标</text>
			<view class="u-demo-block__content">
				<cw-tabs @click="click">
					<cw-tab v-for="(item, index) in list1" :index="index" :dot="item.dot" :info="item.info" :title="item.name" :key="index"></cw-tab>
				</cw-tabs>
			</view>
		</view>
	</view>
</template>

<script>
	const lineBg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";
	export default {
		data() {
			return {
				scrollTop: 0,
				lineBg,
				list1: [{
					name: '关注',
					dot: true
				}, {
					name: '推荐',
					info: '12'
				}, {
					name: '电影'
				}, {
					name: '科技'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}]
			}
		},
		onLoad() {

		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		methods: {
			click(item) {
				console.log('item', item);
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding-bottom: 500px;
		height: 100vh;
	}
</style>
