<template>
	<view>
		<cw-tabs color="#3498db" @click="onClick" :active="active"><cw-tab v-for="(item, index) in list" :index="index" :title="item.title" :key="index"></cw-tab></cw-tabs>
		<!-- <view style="height: 50vh;"></view> -->
		<cw-copyright v-show="active == 0" name="yuencode.cn" :icons="['community', 'footprint']"></cw-copyright>
		<cw-copyright v-show="active == 1">
			<template #content>
				<text>yuencode v 1.0.0</text>
				<text>yuencode.cn 版权所有 保留所有权利</text>
				<text>https://www.yuencode.cn</text>
			</template>
		</cw-copyright>
		<cw-copyright v-show="active == 2" fixed>
			<template #content>
				<text>yuencode v 1.0.0</text>
				<text>yuencode.cn 版权所有 保留所有权利</text>
				<text>https://www.yuencode.cn</text>
			</template>
		</cw-copyright>
		<cw-copyright v-show="active == 3" name="yuencode.cn">
			<template #icon>
				我是图标
			</template>
		</cw-copyright>
	</view>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			list: [
				{ title: '基本使用' }, 
				{ title: '插槽' },
				{ title: '固定底部' },
				{ title: '自定义图标' },
			]
		};
	},
	methods: {
		onClick(e) {
			this.active = e.index;
			console.log(e);
		}
	}
};
</script>

<style></style>
