<template>
	<view class="u-page">
		<view class="u-page__top-box"><text class="u-demo-block__title">演示效果</text></view>
			<cw-tabs color="#3498db" @click="onClick" :active="active">
				<cw-tab v-for="(item, index) in list" :index="index" :title="item.title" :key="index"></cw-tab>
			</cw-tabs>
		<view class="box">
			<cw-empty v-show="active == 0"></cw-empty>
			<cw-empty v-show="active == 1" icon="prohibit"></cw-empty>
			<cw-empty v-show="active == 2">
				<cw-button size="small" type="primary" :style="{ marginTop: 10 + 'px' }">查看更多</cw-button>
			</cw-empty>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			list: [
				{title:'基本使用'},
				{title:'自定义图标'},
				{title:'使用插槽'},
			]
		};
	},
	methods: {
		onClick(e){
			this.active = e.index
			console.log(e)
		}
	}
};
</script>

<style lang="scss">
.u-page {
	padding: 40rpx 0px;

	&__top-box {
		padding-left: 40rpx;
	}
}

.empty-select {
	margin-top: 10px;
}

.box{
	height: 500px;
	position: relative;
}
</style>
