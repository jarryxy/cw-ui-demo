<template>
	<view class="container">
		<cw-cell-group title="基础使用">
			<cw-field
				label="姓名"
				v-model="form.name">
			</cw-field>
			<cw-cell
				title="性别"
				clickable
				is-link
				:is-detail="form.sex ? true : false"
				:value="form.sex ? form.sex : '请选择'"
				@click="show1=true"
			/>
			<cw-cell 
				title="水果"
			>
				<cw-radio-group v-model="form.fruit" direction="horizontal">
					<cw-radio value="0" name="0">苹果</cw-radio>
					<cw-radio value="1" name="1">香蕉</cw-radio>
					<cw-radio value="2" name="2">砂糖橘</cw-radio>
				</cw-radio-group>
			</cw-cell>
			<cw-cell
				title="爱好"
			>
				<cw-checkbox-group v-model="form.hobby" direction="horizontal">
					<cw-checkbox value="0" name="0">钢琴</cw-checkbox>
					<cw-checkbox value="1" name="1">吉他</cw-checkbox>
					<cw-checkbox value="2" name="2">砂糖橘</cw-checkbox>
				</cw-checkbox-group>
			</cw-cell>
			<cw-field label="个人简介" type="textarea" :maxlength="200" show-word-limit autosize v-model="form.desc" placeholder="请输入" />
			<cw-cell title="图片" :border="false" title-class="upload-title" value-class="upload-cell">
				<cw-uploader :file-list="uploadImgList" @delete="deleteImg" @after-read="afterRead" :max-count="4" />
			</cw-cell>
		</cw-cell-group>
		<cw-field
			label="验证码"
			v-model="form.code"
			placeholder="请输入验证码">
			<template #right-icon>
				<cw-button
					@tap="getCode"
					type="primary"
					size="mini"
					:disabled="disabled1"
				>{{codeText}}</cw-button>
			</template>
		</cw-field>
		<cw-button custom-class="btn" block :loading="loading" type="info" @click="submit">提交</cw-button>
		<cw-action-sheet 
			:show="show1" 
			:actions="actions1" 
			title="性别" 
			@close="show1 = false"
			@select="onSelect1">
		</cw-action-sheet>
		<cw-toast ref="toast"></cw-toast>
		<cw-notify ref="notify"></cw-notify>
	</view>
</template>

<script>
let timer = null
export default {
	data() {
		return {
			form: {
				name:'小宇',
				sex:'',
				fruit:'0',
				hobby:['0','1'],
				desc:'',
				imgs: []
			},
			show1:false,
			actions1:[
				{name:'男',value:0},
				{name:'女',value:1}
			],
			codeText:'发送验证码',
			disabled1:false,
			// 上传图片列表
			uploadImgList: [],
			rules: {
				name: {
					required: true,
					message: '请输入姓名'
				},
				sex: {
					required: true,
					message: '请选择性别'
				},
				desc: [
					{ required: true, message: '请输入个人简介'}, 
					{ min: 5, message: '简介不低于5个字符' }
				]
			},
			loading: false
		};
	},
	onReady() {

	},
	methods: {
		onSelect1(e){
			this.form.sex = e.name
		},
		getCode(){
			this.sec = 30
			this.disabled1 = true
			this.codeText = `${this.sec}秒发送验证码`
			timer = setInterval(()=>{
				this.sec--
				if(this.sec <= 0){
					this.disabled1 = false
					clearInterval(timer)
					this.codeText='重新发送'
					return
				}
				this.codeText = `${this.sec}秒发送验证码`
			},1000)
		},
		async afterRead(event) {
			// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file);
			let fileListLen = this.uploadImgList.length;
			lists.map(item => {
				this.uploadImgList.push({
					...item,
					status: 'uploading',
					message: '上传中'
				});
			});
			for (let i = 0; i < lists.length; i++) {
				// const result = await ossApi.upload({
				// 	filePath: lists[i].url,
				// 	module: 'repair'
				// });
				// this.form.imgs.push(result.data.url);
				const result = {
					data:{
						url: lists[i].url
					}
				}
				setTimeout(()=>{
					this.form.imgs.push(result);
					let item = this.uploadImgList[fileListLen];
					this.uploadImgList.splice(
						fileListLen,
						1,
						Object.assign(item, {
							status: 'success',
							message: '',
							url: result.data.url
						})
					);
					fileListLen++;
				},1200)
	
			}
		},
		deleteImg(event) {
			this.uploadImgList.splice(event.index, 1);
			this.form.imgs.splice(event.index, 1);
		},
		submit() {
			this.$validator(this.rules,this.form).then(() => {
				this.$refs.toast.loading({
					duration: 0,
					forbidClick: true,
					message: '提交中…'
				});
				this.loading = true;
				setTimeout(()=>{
					this.loading = false;
					this.$refs.toast.clear();
					this.$refs.notify.show({
						type: 'success',
						message: '提交成功'
					});
				},1200)
				// catch err
				// this.$refs.notify.show({
				// 	type: 'danger',
				// 	message: res.message
				// });
				// this.$refs.toast.clear();
				// this.loading = false;
			}).catch(() => {
				// uni.$u.toast("请检查信息填写是否正确")
			})

		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	padding-bottom: calc(constant(safe-area-inset-bottom) + 44px);
	padding-bottom: calc(env(safe-area-inset-bottom) + 44px);
}

.upload-title {
	flex: none !important;
}

.upload-cell {
	flex: auto !important;
}

::v-deep .btn {
	position: fixed !important;
	left: 0;
	right: 0;
	z-index: 50;
	bottom: constant(safe-area-inset-bottom);
	bottom: env(safe-area-inset-bottom);
}
</style>
