<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案例</text>
			<view class="u-demo-block__content">
				<cw-cell-group>
					<cw-cell v-for="(item, index) in info" :key="index">
						<cw-employee :info="item"></cw-employee>
					</cw-cell>
				</cw-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			info:[]
		};
	},
	created() {
		for (let item in Array.from({length:2})) {
			this.info.push({
					avatar:'http://qiniu.yuencode.cn/avatar/2023/01/11/55459320bffd403cb63bae83ce818629.jpeg',
					realName:'张三',
					department:'维修部',
					job:'经理'
				},
				{
					avatar:'http://qiniu.yuencode.cn/avatar/2023/01/11/973c751b7c9d4aa59a492b4d4eb0b808.jpeg',
					realName:'李四',
					department:'人事部',
					job:'前台'
				},
				{
					avatar:'http://qiniu.yuencode.cn/avatar/2023/01/11/0e83c55353504a3f98cd4117802a8055.jpeg',
					realName:'王五',
					department:'技术部',
					job:'总监'
				})
		}
	},
	methods: {}
};
</script>

<style></style>
