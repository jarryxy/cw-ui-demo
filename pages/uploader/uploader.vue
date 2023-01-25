<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础用法</text>
			<view class="u-demo-block__content">
				<view class="u-page__upload-item">
				<cw-uploader
				    :fileList="fileList1"
				    @after-read="afterRead"
				    @delete="deletePic"
				    name="1"
				    :maxCount="10"
				></cw-uploader>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">上传视频</text>
			<view class="u-demo-block__content">
				<view class="u-page__upload-item">
				<cw-uploader
				    :fileList="fileList2"
				    @after-read="afterRead"
				    @delete="deletePic"
				    name="2"
				    multiple
				    :maxCount="10"
				    accept="video"
				></cw-uploader>
				</view>
			</view>
		</view>
			<view class="u-demo-block">
			<text class="u-demo-block__title">关闭文件预览</text>
			<view class="u-demo-block__content">
				<view class="u-page__upload-item">
				<cw-uploader
				    :fileList="fileList3"
				    @after-read="afterRead"
				    @delete="deletePic"
				    name="3"
				    multiple
				    :maxCount="10"
				    :previewFullImage="false"
				></cw-uploader>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
		<text class="u-demo-block__title">限制上传数量 3个</text>
		<view class="u-demo-block__content">
			<view class="u-page__upload-item">
			<cw-uploader
				:fileList="fileList3"
				@after-read="afterRead"
				@delete="deletePic"
				name="5"
				multiple
				:maxCount="3"
			></cw-uploader>
			</view>
		</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义上传样式</text>
			<view class="u-demo-block__content">
				<view class="u-page__upload-item">
					<cw-uploader
						:fileList="fileList6"
						@after-read="afterRead"
						@delete="deletePic"
						name="6"
						multiple
						:maxCount="1"
					>
						<image src="http://qiniu.yuencode.cn/public/2023/01/14/upload-icon.png" mode="widthFix" style="width: 80px;height: 80px;"></image>
					</cw-uploader>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [],
				fileList2: [],
				fileList3: [{
					url: 'http://qiniu.yuencode.cn/avatar/2022/12/20/ea22c005f9354f9fbd244370829a34a6.png',
				}],
				fileList4: [{
						url: 'http://qiniu.yuencode.cn/avatar/2022/12/20/ea22c005f9354f9fbd244370829a34a6.png',
					},
					{
						url: 'http://qiniu.yuencode.cn/avatar/2022/12/20/ea22c005f9354f9fbd244370829a34a6.png',
					}
				],
				fileList5: [],
				fileList6: [],
				fileList7: []
			}
		},
		onLoad() {
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					// let a = uni.uploadFile({
					// 	url: 'http://www.example.com/upload', // 仅为示例，非真实的接口地址
					// 	filePath: url,
					// 	name: 'file',
					// 	formData: {
					// 		user: 'test'
					// 	},
					// 	success: (res) => {
							
					// 	}
					// });
					setTimeout(() => {
						// resolve(res.data.data)
						resolve({
							data: {
								url
							}
						})
					}, 1000)
				})
			},
		},
	}
</script>

<style lang="scss">
	.u-page {
		&__upload-item{
			margin-top:5px;
		}
	}
</style>
