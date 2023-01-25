<template>
	<view class="u-page"><cw-rich-text :detail="content"></cw-rich-text></view>
</template>

<script>
export default {
	data() {
		return {
			content: [
				{
					tag: 'h2',
					attrs: [
						{
							name: 'id',
							value: 'tohhm'
						}
					],
					children: ['什么是Vue?']
				},
				{
					tag: 'p',
					attrs: [
						{
							name: 'data-we-empty-p',
							value: ''
						}
					],
					children: [
						{
							tag: 'font',
							attrs: [
								{
									name: 'color',
									value: '#4d80bf'
								}
							],
							children: ['Vue ']
						},
						'(发音为 /vjuː/，类似 ',
						{
							tag: 'strong',
							attrs: [],
							children: ['view']
						},
						') 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。',
						{
							tag: 'br',
							attrs: [],
							children: []
						}
					]
				},
				{
					tag: 'p',
					attrs: [
						{
							name: 'data-we-empty-p',
							value: ''
						}
					],
					children: [
						{
							tag: 'img',
							attrs: [
								{
									name: 'src',
									value: 'http://qiniu.yuencode.cn/notice/2023/01/23/30294597-9AC9-4BB3-AEF7-590F99A990D2_4_5005_c_20230123152000A001.jpeg'
								},
								{
									name: 'contenteditable',
									value: 'false'
								},
								{
									name: 'width',
									value: '50%'
								}
							],
							children: []
						}
					]
				}
			]
		};
	},
	methods: {}
};
</script>

<style></style>
