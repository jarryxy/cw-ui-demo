<template>
	<view class="u-page">
		<cw-list :fetching="fetching" :current="current" :total="total" :list="list" empty="暂无记录" icon="report">
			<cw-list-item
				title="标题"
				:status="'列表-'+(index+1)"
				url=""
				v-for="(item, index) in list"
				:key="index"
			>
				<cw-list-item-info label="类型">
					<block>类型1</block>
				</cw-list-item-info>
		
				<cw-list-item-info label="描述">描述</cw-list-item-info>
		
				<cw-list-item-info label="进度">
						<block v-if="item.step == 1"><cw-tag round color="#13c2c2">待指定</cw-tag></block>
						<block v-else-if="item.step == 2"><cw-tag round color="#eb2f96">待确认</cw-tag></block>
						<block v-else-if="item.step == 3"><cw-tag round color="#ffe58f">待处理</cw-tag></block>
						<block v-else-if="item.step == 4"><cw-tag round color="#52c41a">已答复</cw-tag></block>
				</cw-list-item-info>
		
				<cw-list-item-info label="时间">{{ datetime }}</cw-list-item-info>
			</cw-list-item>
		</cw-list>
	</view>
</template>

<script>
export default {
	data() {
		return {
			fetching: false,
			current:1,
			total:0,
			list:[]
		};
	},
	onLoad() {
		this.fetching = true
		this.getDate().then(res=>{
			this.fetching = false
			this.list = [...this.list, ...res.data]
			this.total = this.list.length
		})
	},
	methods: {
		double(v){
			return v<10 ? '0'+v : v
		},
		getDate(){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					let list = []
					for(let i=0;i<15;i++){
						list.push({
							step: (parseInt(Math.random() * 10) % 4  + 1),
						})
					}
					return resolve({
						data: list
					})
				},300)
			})
		}
	},
	onReachBottom() {
		this.getDate().then(res=>{
			this.fetching = false
			this.list = [...this.list, ...res.data]
		})
	},
	computed:{
		datetime(){
			let d = new Date()
			return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 ${this.double(d.getHours())}:${this.double(d.getMinutes())}:${this.double(d.getSeconds())}`
		}
	}
};
</script>

<style scoped>
.u-page {
	padding: 0;
}
</style>
