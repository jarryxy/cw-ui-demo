(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uploader-uploader"],{"0300":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getAllRect=function(t,e){return new Promise((function(a){uni.createSelectorQuery().in(t).selectAll(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a(t[0])}))}))},e.getCurrentPage=function(){var t=getCurrentPages();return t[t.length-1]},e.getRect=function(t,e){return new Promise((function(a){uni.createSelectorQuery().in(t).select(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a(t[0])}))}))},e.getSystemInfoSync=l,e.groupSetData=function(t,e){(0,r.canIUseGroupSetData)()?t.groupSetData(e):e()},e.nextTick=function(t){c.default.nextTick(t)},e.pickExclude=function(t,e){if(!(0,o.isPlainObject)(t))return{};return Object.keys(t).reduce((function(a,i){return e.includes(i)||(a[i]=t[i]),a}),{})},e.range=function(t,e,a){return Math.min(Math.max(t,e),a)},e.requestAnimationFrame=function(t){var e=l();if("devtools"===e.platform)return setTimeout((function(){t()}),1e3/30);return uni.createSelectorQuery().selectViewport().boundingClientRect().exec((function(){t()}))},e.toPromise=function(t){if((0,o.isPromise)(t))return t},a("d3b7"),a("ac1f"),a("13d5"),a("b64b"),a("caad"),a("2532");var n,r=a("c933"),o=a("3da5"),c=i(a("e143"));function l(){return null==n&&(n=uni.getSystemInfoSync()),n}},"0302":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),r=i(a("5530")),o=i(a("1da1"));a("a434"),a("99af"),a("d81d"),a("14d9"),a("d3b7");var c={data:function(){return{fileList1:[],fileList2:[],fileList3:[{url:"http://qiniu.yuencode.cn/avatar/2022/12/20/ea22c005f9354f9fbd244370829a34a6.png"}],fileList4:[{url:"http://qiniu.yuencode.cn/avatar/2022/12/20/ea22c005f9354f9fbd244370829a34a6.png"},{url:"http://qiniu.yuencode.cn/avatar/2022/12/20/ea22c005f9354f9fbd244370829a34a6.png"}],fileList5:[],fileList6:[],fileList7:[]}},onLoad:function(){},methods:{deletePic:function(t){this["fileList".concat(t.name)].splice(t.index,1)},afterRead:function(t){var e=this;return(0,o.default)((0,n.default)().mark((function a(){var i,o,c,l,d;return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=[].concat(t.file),o=e["fileList".concat(t.name)].length,i.map((function(a){e["fileList".concat(t.name)].push((0,r.default)((0,r.default)({},a),{},{status:"uploading",message:"上传中"}))})),c=0;case 4:if(!(c<i.length)){a.next=14;break}return a.next=7,e.uploadFilePromise(i[c].url);case 7:l=a.sent,d=e["fileList".concat(t.name)][o],e["fileList".concat(t.name)].splice(o,1,Object.assign(d,{status:"success",message:"",url:l})),o++;case 11:c++,a.next=4;break;case 14:case"end":return a.stop()}}),a)})))()},uploadFilePromise:function(t){return new Promise((function(e,a){setTimeout((function(){e({data:{url:t}})}),1e3)}))}}};e.default=c},"1da1":function(t,e,a){"use strict";function i(t,e,a,i,n,r,o){try{var c=t[r](o),l=c.value}catch(d){return void a(d)}c.done?e(l):Promise.resolve(l).then(i,n)}a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var o=t.apply(e,a);function c(t){i(o,n,r,c,l,"next",t)}function l(t){i(o,n,r,c,l,"throw",t)}c(void 0)}))}},a("d3b7")},2615:function(t,e,a){"use strict";var i=a("2d2f"),n=a.n(i);n.a},"2a87":function(t,e,a){a("d81d"),a("4de4"),a("d3b7"),a("ddb0");var i=a("e685"),n=a("52d4");t.exports=function t(e){return n.isArray(e)?e.filter((function(t){return null!=t&&""!==t})).map((function(e){return t(e)})).join(";"):"[object Object]"===Object.prototype.toString.call(e)?i.keys(e).filter((function(t){return null!=e[t]&&""!==e[t]})).map((function(t){return[t,[e[t]]].join(":")})).join(";"):e}},"2d2f":function(t,e,a){var i=a("f5f2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6820ecc1",i,!0,{sourceMap:!1,shadowMode:!1})},"3da5":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.isBoolean=function(t){return"boolean"===typeof t},e.isDef=function(t){return void 0!==t&&null!==t},e.isFunction=r,e.isImageUrl=function(t){return c.test(t)},e.isNumber=function(t){return/^\d+(\.\d+)?$/.test(t)},e.isObj=function(t){var e=(0,n.default)(t);return null!==t&&("object"===e||"function"===e)},e.isPlainObject=o,e.isPromise=function(t){return o(t)&&r(t.then)&&r(t.catch)},e.isVideoUrl=function(t){return l.test(t)},a("ac1f"),a("00b4");var n=i(a("53ca"));function r(t){return"function"===typeof t}function o(t){return null!==t&&"object"===(0,n.default)(t)&&!Array.isArray(t)}var c=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,l=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i},"405a":function(t,e,a){var i=a("c011");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("07ea2be1",i,!0,{sourceMap:!1,shadowMode:!1})},"4ded":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:[t.$o.utils.bem("loading",{vertical:t.vertical}),t.customClass]},[a("v-uni-view",{class:"cw-loading__spinner cw-loading__spinner--"+t.type,style:t.spinnerStyle},t._l(t.array12,(function(e,i){return"spinner"===t.type?a("v-uni-view",{key:i,staticClass:"cw-loading__dot"}):t._e()})),1),a("v-uni-view",{staticClass:"cw-loading__text",style:t.textStyle},[t._t("default")],2)],1)},n=[]},"5ff6":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("d81d"),a("d3b7"),a("4de4");var n=a("62bd"),r=a("f3b3"),o=a("3da5"),c=i(a("8679")),l={mixins:[r.chooseImageProps,r.chooseVideoProps,c.default],props:{accept:{type:String,default:"image"},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},uploadText:{type:String,default:""},uploadIconColor:{type:String,default:"#dcdee0"},useBeforeRead:{type:Boolean,default:!1},afterRead:null,beforeRead:null,previewSize:{type:[String,Number],default:80},name:{type:String,default:""},fileList:{type:Array,default:function(){return[]}},maxSize:{type:Number,default:Number.MAX_default},maxCount:{type:Number,default:100},deletable:{type:Boolean,default:!0},showUpload:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"scaleToFill"},uploadIcon:{type:String,default:"photograph"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{lists:[],isInCount:!0}},methods:{formatFileList:function(){var t=this.fileList,e=void 0===t?[]:t,a=this.maxCount,i=e.map((function(t){return Object.assign(Object.assign({},t),{isImage:(0,n.isImageFile)(t),isVideo:(0,n.isVideoFile)(t),deletable:!(0,o.isBoolean)(t.deletable)||t.deletable})}));this.lists=i,this.isInCount=i.length<a},getDetail:function(t){return{name:this.name,index:null==t?this.fileList.length:t}},startUpload:function(){var t=this;if(!a){var e=this.lists,a=this.disabled,i=this.accept,r=this.multiple,o=this.capture,c=this.compressed,l=this.maxDuration,d=this.sizeType,u=this.camera,s=this.maxCount;(0,n.chooseFile)({lists:e,disabled:a,accept:i,multiple:r,capture:o,compressed:c,maxDuration:l,sizeType:d,camera:u,maxCount:s-e.length}).then((function(e){t.onBeforeRead(r?e:e[0])})).catch((function(e){console.error(e),t.$emit("error",e)}))}},onBeforeRead:function(t){var e=this,a=this.beforeRead,i=this.useBeforeRead,n=!0;"function"===typeof a&&(n=a(t,this.getDetail())),i&&(n=new Promise((function(a,i){e.$emit("before-read",Object.assign(Object.assign({file:t},e.getDetail()),{callback:function(t){t?a():i()}}))}))),n&&((0,o.isPromise)(n)?n.then((function(a){return e.onAfterRead(a||t)})):this.onAfterRead(t))},onAfterRead:function(t){var e=this.maxSize,a=this.afterRead,i=Array.isArray(t)?t.some((function(t){return t.size>e})):t.size>e;i?this.$emit("oversize",Object.assign({file:t},this.getDetail())):("function"===typeof a&&a(t,this.getDetail()),this.$emit("after-read",Object.assign({file:t},this.getDetail())))},deleteItem:function(t){var e=t.currentTarget.dataset.index;this.$emit("delete",Object.assign(Object.assign({},this.getDetail(e)),{file:this.fileList[e]}))},onPreviewImage:function(t){if(this.previewFullImage){var e=t.currentTarget.dataset.index,a=this.lists,i=a[e];uni.previewImage({urls:a.filter((function(t){return(0,n.isImageFile)(t)})).map((function(t){return t.url})),current:i.url,fail:function(){uni.showToast({title:"预览图片失败",icon:"none"})}})}},onPreviewVideo:function(t){if(this.previewFullImage){var e=t.currentTarget.dataset.index,a=this.lists;uni.previewMedia({sources:a.filter((function(t){return(0,n.isVideoFile)(t)})).map((function(t){return Object.assign(Object.assign({},t),{type:"video"})})),current:e,fail:function(){uni.showToast({title:"预览视频失败",icon:"none"})}})}},onPreviewFile:function(t){var e=t.currentTarget.dataset.index;uni.openDocument({filePath:this.lists[e].url,showMenu:!0})},onClickPreview:function(t){var e=t.currentTarget.dataset.index,a=this.lists[e];this.$emit("click-preview",Object.assign(Object.assign({},a),this.getDetail(e)))}},watch:{fileList:{handler:function(){this.formatFileList()},immediate:!0}}};e.default=l},"62bd":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.chooseFile=function(t){var e=t.accept,a=t.multiple,n=t.capture,r=t.compressed,o=t.maxDuration,c=t.sizeType,l=t.camera,d=t.maxCount;return new Promise((function(t,u){switch(e){case"image":uni.chooseImage({count:a?Math.min(d,9):1,sourceType:n,sizeType:c,success:function(e){return t(function(t){return t.tempFiles.map((function(t){return Object.assign(Object.assign({},(0,i.pickExclude)(t,["path"])),{type:"image",url:t.path,thumb:t.path})}))}(e))},fail:u});break;case"media":uni.chooseMedia({count:a?Math.min(d,9):1,sourceType:n,maxDuration:o,sizeType:c,camera:l,success:function(e){return t(function(t){return t.tempFiles.map((function(e){return Object.assign(Object.assign({},(0,i.pickExclude)(e,["fileType","thumbTempFilePath","tempFilePath"])),{type:t.type,url:e.tempFilePath,thumb:"video"===t.type?e.thumbTempFilePath:e.tempFilePath})}))}(e))},fail:u});break;case"video":uni.chooseVideo({sourceType:n,compressed:r,maxDuration:o,camera:l,success:function(e){return t(function(t){return[Object.assign(Object.assign({},(0,i.pickExclude)(t,["tempFilePath","thumbTempFilePath","errMsg"])),{type:"video",url:t.tempFilePath,thumb:t.thumbTempFilePath})]}(e))},fail:u});break;default:uni.chooseFile({count:a?d:1,type:e,success:function(e){return t(function(t){return t.tempFiles.map((function(t){return Object.assign(Object.assign({},(0,i.pickExclude)(t,["path"])),{url:t.path})}))}(e))},fail:u});break}}))},e.isImageFile=function(t){if(null!=t.isImage)return t.isImage;if(t.type)return"image"===t.type;if(t.url)return(0,n.isImageUrl)(t.url);return!1},e.isVideoFile=function(t){if(null!=t.isVideo)return t.isVideo;if(t.type)return"video"===t.type;if(t.url)return(0,n.isVideoUrl)(t.url);return!1},a("d81d"),a("d3b7");var i=a("0300"),n=a("3da5")},"62c7":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={cwIcon:a("463b").default,cwLoading:a("96ea").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cw-uploader",attrs:{customStyle:t.customStyle}},[a("v-uni-view",{staticClass:"cw-uploader__wrapper"},[t._l(t.lists,(function(e,i){return t.previewImage?a("v-uni-view",{key:i,staticClass:"cw-uploader__preview",attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickPreview.apply(void 0,arguments)}}},[e.isVideo?a("v-uni-view",[t._v(t._s(e))]):t._e(),e.isImage?a("v-uni-image",{staticClass:"cw-uploader__preview-image",style:t.sizeStyle,attrs:{mode:t.imageFit,src:e.thumb||e.url,alt:e.name||"图片"+i,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPreviewImage.apply(void 0,arguments)}}}):e.isVideo?a("v-uni-video",{staticClass:"cw-uploader__preview-image",style:t.sizeStyle,attrs:{src:e.url.data?e.url.data.url:"",title:e.name||"视频"+i,poster:e.thumb,autoplay:e.autoplay,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPreviewVideo.apply(void 0,arguments)}}}):a("v-uni-view",{staticClass:"cw-uploader__file",style:t.sizeStyle,attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPreviewFile.apply(void 0,arguments)}}},[a("cw-icon",{staticClass:"cw-uploader__file-icon",attrs:{name:"description"}}),a("v-uni-view",{staticClass:"cw-uploader__file-name cw-ellipsis"},[t._v(t._s(e.name||e.url))])],1),"uploading"===e.status||"failed"===e.status?a("v-uni-view",{staticClass:"cw-uploader__mask"},["failed"===e.status?a("cw-icon",{staticClass:"cw-uploader__mask-icon",attrs:{name:"close"}}):a("cw-loading",{attrs:{"custom-class":"cw-uploader__loading"}}),e.message?a("v-uni-text",{staticClass:"cw-uploader__mask-message"},[t._v(t._s(e.message))]):t._e()],1):t._e(),t.deletable&&e.deletable?a("v-uni-view",{staticClass:"cw-uploader__preview-delete",attrs:{"data-index":i},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.deleteItem.apply(void 0,arguments)}}},[a("cw-icon",{staticClass:"cw-uploader__preview-delete-icon",attrs:{name:"cross"}})],1):t._e()],1):t._e()})),t.isInCount?[(t.$slots.default||t.$slots.$default)&&t.showUpload?a("v-uni-view",{staticClass:"cw-uploader__slot",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.startUpload.apply(void 0,arguments)}}},[t._t("default")],2):t._e(),t.showUpload?a("v-uni-view",{class:"cw-uploader__upload "+(t.disabled?"cw-uploader__upload--disabled":""),style:t.sizeStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.startUpload.apply(void 0,arguments)}}},[a("cw-icon",{staticClass:"cw-uploader__upload-icon",attrs:{name:t.uploadIcon,customStyle:"color:"+t.uploadIconColor+";"}}),t.uploadText?a("v-uni-text",{staticClass:"cw-uploader__upload-text"},[t._v(t._s(t.uploadText))]):t._e()],1):t._e()]:t._e()],2)],1)},r=[]},7182:function(t,e,a){"use strict";var i=a("e876"),n=a.n(i);n.a},"7ba4":function(t,e,a){"use strict";a.r(e);var i=a("62c7"),n=a("e952");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("9992");var o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"3ad96c9c",null,!1,i["a"],void 0);e["default"]=c.exports},"7d1e":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a630"),a("3ca3");var n=i(a("2a87")),r=i(a("3b08")),o={name:"cw-loading",props:{color:String,vertical:Boolean,type:{type:String,default:"circular"},customClass:{type:String,default:""},size:String,textSize:String},data:function(){return{array12:Array.from({length:12})}},computed:{spinnerStyle:function(){var t=this.color,e=this.size;return(0,n.default)({color:t,width:(0,r.default)(e),height:(0,r.default)(e)})},textStyle:function(){var t=this.textSize;return(0,n.default)({"font-size":(0,r.default)(t)})}}};e.default=o},8679:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2a87")),r=i(a("3b08")),o={computed:{sizeStyle:function(){var t=this.previewSize;return(0,n.default)({width:(0,r.default)(t),height:(0,r.default)(t)})}}};e.default=o},"90ee":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".u-page__upload-item[data-v-6c704eb5]{margin-top:5px}",""]),t.exports=e},"96ea":function(t,e,a){"use strict";a.r(e);var i=a("4ded"),n=a("fab2");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("2615");var o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"16cccdff",null,!1,i["a"],void 0);e["default"]=c.exports},9992:function(t,e,a){"use strict";var i=a("405a"),n=a.n(i);n.a},b636:function(t,e,a){var i=a("e065");i("asyncIterator")},c011:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.cw-ellipsis[data-v-3ad96c9c]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.cw-multi-ellipsis--l2[data-v-3ad96c9c]{-webkit-line-clamp:2}.cw-multi-ellipsis--l2[data-v-3ad96c9c],\n.cw-multi-ellipsis--l3[data-v-3ad96c9c]{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.cw-multi-ellipsis--l3[data-v-3ad96c9c]{-webkit-line-clamp:3}.cw-clearfix[data-v-3ad96c9c]:after{display:table;clear:both;content:""}.cw-hairline[data-v-3ad96c9c],\n.cw-hairline--bottom[data-v-3ad96c9c],\n.cw-hairline--left[data-v-3ad96c9c],\n.cw-hairline--right[data-v-3ad96c9c],\n.cw-hairline--surround[data-v-3ad96c9c],\n.cw-hairline--top[data-v-3ad96c9c],\n.cw-hairline--top-bottom[data-v-3ad96c9c]{position:relative}.test[data-v-3ad96c9c]{border:2px solid red}.cw-hairline--bottom[data-v-3ad96c9c]:after,\n.cw-hairline--left[data-v-3ad96c9c]:after,\n.cw-hairline--right[data-v-3ad96c9c]:after,\n.cw-hairline--surround[data-v-3ad96c9c]:after,\n.cw-hairline--top-bottom[data-v-3ad96c9c]:after,\n.cw-hairline--top[data-v-3ad96c9c]:after,\n.cw-hairline[data-v-3ad96c9c]:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;-webkit-transform:scale(.5);transform:scale(.5)}.cw-hairline--top[data-v-3ad96c9c]:after{border-top-width:1px}.cw-hairline--left[data-v-3ad96c9c]:after{border-left-width:1px}.cw-hairline--right[data-v-3ad96c9c]:after{border-right-width:1px}.cw-hairline--bottom[data-v-3ad96c9c]:after{border-bottom-width:1px}.cw-hairline--top-bottom[data-v-3ad96c9c]:after{border-width:1px 0}.cw-hairline--surround[data-v-3ad96c9c]:after{border-width:1px}.cw-notify__container[data-v-3ad96c9c]{position:fixed;top:0;left:0;box-sizing:border-box;width:100%}.cw-uploader[data-v-3ad96c9c]{position:relative;display:inline-block}.cw-uploader__wrapper[data-v-3ad96c9c]{display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.cw-uploader__slot[data-v-3ad96c9c]:empty{display:none}.cw-uploader__slot:not(:empty) + .cw-uploader__upload[data-v-3ad96c9c]{display:none!important}.cw-uploader__upload[data-v-3ad96c9c]{position:relative;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:80px;height:80px;margin:0 8px 8px 0;background-color:#f7f8fa}.cw-uploader__upload[data-v-3ad96c9c]:active{background-color:#f2f3f5}.cw-uploader__upload-icon[data-v-3ad96c9c]{font-size:24px}.cw-uploader__upload-text[data-v-3ad96c9c]{margin-top:8px;color:#969799;font-size:12px}.cw-uploader__upload--disabled[data-v-3ad96c9c]{opacity:.5}.cw-uploader__preview[data-v-3ad96c9c]{position:relative;cursor:pointer;margin:0 8px 8px 0}.cw-uploader__preview-image[data-v-3ad96c9c]{display:block;overflow:hidden;width:80px;height:80px}.cw-uploader__preview-delete[data-v-3ad96c9c]{padding:0 0 8px 8px}.cw-uploader__preview-delete[data-v-3ad96c9c],\n.cw-uploader__preview-delete[data-v-3ad96c9c]:after{position:absolute;top:0;right:0;width:14px;height:14px;line-height:14px}.cw-uploader__preview-delete[data-v-3ad96c9c]:after{content:"";background-color:rgba(0,0,0,.7);border-radius:0 0 0 12px}.cw-uploader__preview-delete-icon[data-v-3ad96c9c]{position:absolute;top:-2px;right:-2px;z-index:1;-webkit-transform:scale(.5);transform:scale(.5);font-size:16px;color:#fff}.cw-uploader__file[data-v-3ad96c9c]{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;width:80px;height:80px;background-color:#f7f8fa}.cw-uploader__file-icon[data-v-3ad96c9c]{color:#646566;font-size:20px}.cw-uploader__file-name[data-v-3ad96c9c]{box-sizing:border-box;width:100%;text-align:center;margin-top:8px;padding:0 4px;color:#646566;font-size:12px}.cw-uploader__mask[data-v-3ad96c9c]{position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:#fff;background-color:rgba(50,50,51,.88)}.cw-uploader__mask-icon[data-v-3ad96c9c]{font-size:22px}.cw-uploader__mask-message[data-v-3ad96c9c]{margin-top:6px;padding:0 4px;font-size:12px;line-height:14px}.cw-uploader__loading[data-v-3ad96c9c]{width:22px;height:22px;color:#fff!important}',""]),t.exports=e},c7eb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},a=Object.prototype,n=a.hasOwnProperty,r=Object.defineProperty||function(t,e,a){t[e]=a.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function u(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(I){u=function(t,e,a){return t[e]=a}}function s(t,e,a,i){var n=e&&e.prototype instanceof v?e:v,o=Object.create(n.prototype),c=new O(i||[]);return r(o,"_invoke",{value:k(t,a,c)}),o}function f(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var p={};function v(){}function h(){}function m(){}var w={};u(w,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(L([])));b&&b!==a&&n.call(b,c)&&(w=b);var y=m.prototype=v.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var a;r(this,"_invoke",{value:function(r,o){function c(){return new e((function(a,c){(function a(r,o,c,l){var d=f(t[r],t,o);if("throw"!==d.type){var u=d.arg,s=u.value;return s&&"object"==(0,i.default)(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){a("next",t,c,l)}),(function(t){a("throw",t,c,l)})):e.resolve(s).then((function(t){u.value=t,c(u)}),(function(t){return a("throw",t,c,l)}))}l(d.arg)})(r,o,a,c)}))}return a=a?a.then(c,c):c()}})}function k(t,e,a){var i="suspendedStart";return function(n,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===n)throw r;return S()}for(a.method=n,a.arg=r;;){var o=a.delegate;if(o){var c=j(o,a);if(c){if(c===p)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===i)throw i="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);i="executing";var l=f(t,e,a);if("normal"===l.type){if(i=a.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(i="completed",a.method="throw",a.arg=l.arg)}}}function j(t,e){var a=e.method,i=t.iterator[a];if(void 0===i)return e.delegate=null,"throw"===a&&t.iterator["return"]&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var n=f(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:h,configurable:!0}),h.displayName=u(m,d,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,d,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},_(x.prototype),u(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(e,a,i,n,r){void 0===r&&(r=Promise);var o=new x(s(e,a,i,n),r);return t.isGeneratorFunction(a)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(y),u(y,d,"Generator"),u(y,c,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),a=[];for(var i in e)a.push(i);return a.reverse(),function t(){for(;a.length;){var i=a.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,i){return o.type="throw",o.arg=t,e.next=a,i&&(e.method="next",e.arg=void 0),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var c=n.call(r,"catchLoc"),l=n.call(r,"finallyLoc");if(c&&l){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),C(a),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var i=a.completion;if("throw"===i.type){var n=i.arg;C(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:L(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},t},a("7a82"),a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("b636"),a("944a"),a("0c47"),a("23dc"),a("3410"),a("d9e2"),a("d401"),a("14d9"),a("159b"),a("131a"),a("26e9"),a("fb6a");var i=function(t){return t&&t.__esModule?t:{default:t}}(a("53ca"))},c933:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.canIUseAnimate=function(){return n("2.9.0")},e.canIUseCanvas2d=function(){return n("2.9.0")},e.canIUseFormFieldButton=function(){return n("2.10.3")},e.canIUseGroupSetData=function(){return n("2.4.0")},e.canIUseModel=function(){return n("2.9.3")},e.canIUseNextTick=function(){return uni.canIUse("nextTick")},a("14d9"),a("e25e");var i=a("0300");function n(t){var e=(0,i.getSystemInfoSync)();return function(t,e){t=t.split("."),e=e.split(".");var a=Math.max(t.length,e.length);while(t.length<a)t.push("0");while(e.length<a)e.push("0");for(var i=0;i<a;i++){var n=parseInt(t[i],10),r=parseInt(e[i],10);if(n>r)return 1;if(n<r)return-1}return 0}(e.SDKVersion,t)>=0}},d01b:function(t,e,a){"use strict";a.r(e);var i=a("0302"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},e0d8:function(t,e,a){"use strict";a.r(e);var i=a("fa54"),n=a("d01b");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("7182");var o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"6c704eb5",null,!1,i["a"],void 0);e["default"]=c.exports},e876:function(t,e,a){var i=a("90ee");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7e85c43b",i,!0,{sourceMap:!1,shadowMode:!1})},e952:function(t,e,a){"use strict";a.r(e);var i=a("5ff6"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},f3b3:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.chooseVideoProps=e.chooseImageProps=void 0,a("a9e3");var i={props:{sizeType:{type:Array,default:function(){return["original","compressed"]}},capture:{type:Array,default:function(){return["album","camera"]}}}};e.chooseImageProps=i;var n={props:{capture:{type:Array,default:function(){return["album","camera"]}},compressed:{type:Boolean,default:!0},maxDuration:{type:Number,default:60},camera:{type:String,default:"back"}}};e.chooseVideoProps=n},f5f2:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.cw-ellipsis[data-v-16cccdff]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.cw-multi-ellipsis--l2[data-v-16cccdff]{-webkit-line-clamp:2}.cw-multi-ellipsis--l2[data-v-16cccdff],\n.cw-multi-ellipsis--l3[data-v-16cccdff]{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.cw-multi-ellipsis--l3[data-v-16cccdff]{-webkit-line-clamp:3}.cw-clearfix[data-v-16cccdff]:after{display:table;clear:both;content:""}.cw-hairline[data-v-16cccdff],\n.cw-hairline--bottom[data-v-16cccdff],\n.cw-hairline--left[data-v-16cccdff],\n.cw-hairline--right[data-v-16cccdff],\n.cw-hairline--surround[data-v-16cccdff],\n.cw-hairline--top[data-v-16cccdff],\n.cw-hairline--top-bottom[data-v-16cccdff]{position:relative}.test[data-v-16cccdff]{border:2px solid red}.cw-hairline--bottom[data-v-16cccdff]:after,\n.cw-hairline--left[data-v-16cccdff]:after,\n.cw-hairline--right[data-v-16cccdff]:after,\n.cw-hairline--surround[data-v-16cccdff]:after,\n.cw-hairline--top-bottom[data-v-16cccdff]:after,\n.cw-hairline--top[data-v-16cccdff]:after,\n.cw-hairline[data-v-16cccdff]:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;-webkit-transform:scale(.5);transform:scale(.5)}.cw-hairline--top[data-v-16cccdff]:after{border-top-width:1px}.cw-hairline--left[data-v-16cccdff]:after{border-left-width:1px}.cw-hairline--right[data-v-16cccdff]:after{border-right-width:1px}.cw-hairline--bottom[data-v-16cccdff]:after{border-bottom-width:1px}.cw-hairline--top-bottom[data-v-16cccdff]:after{border-width:1px 0}.cw-hairline--surround[data-v-16cccdff]:after{border-width:1px}.cw-notify__container[data-v-16cccdff]{position:fixed;top:0;left:0;box-sizing:border-box;width:100%}[data-v-16cccdff]:host{font-size:0;line-height:1}.cw-loading[data-v-16cccdff]{display:-webkit-inline-flex;display:inline-flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.cw-loading__spinner[data-v-16cccdff]{position:relative;box-sizing:border-box;width:30px;max-width:100%;max-height:100%;height:30px;-webkit-animation:cw-rotate-data-v-16cccdff .8s linear infinite;animation:cw-rotate-data-v-16cccdff .8s linear infinite}.cw-loading__spinner--spinner[data-v-16cccdff]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.cw-loading__spinner--circular[data-v-16cccdff]{border:1px solid transparent;border-top-color:initial;border-radius:100%}.cw-loading__text[data-v-16cccdff]{margin-left:8px;color:#969799;font-size:14px;line-height:20px}.cw-loading__text[data-v-16cccdff]:empty{display:none}.cw-loading--vertical[data-v-16cccdff]{-webkit-flex-direction:column;flex-direction:column}.cw-loading--vertical .cw-loading__text[data-v-16cccdff]{margin:8px 0 0}.cw-loading__dot[data-v-16cccdff]{position:absolute;top:0;left:0;width:100%;height:100%}.cw-loading__dot[data-v-16cccdff]:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.cw-loading__dot[data-v-16cccdff]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.cw-loading__dot[data-v-16cccdff]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.cw-loading__dot[data-v-16cccdff]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.cw-loading__dot[data-v-16cccdff]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.cw-loading__dot[data-v-16cccdff]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.cw-loading__dot[data-v-16cccdff]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.cw-loading__dot[data-v-16cccdff]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.cw-loading__dot[data-v-16cccdff]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.cw-loading__dot[data-v-16cccdff]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.cw-loading__dot[data-v-16cccdff]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.cw-loading__dot[data-v-16cccdff]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.cw-loading__dot[data-v-16cccdff]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes cw-rotate-data-v-16cccdff{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cw-rotate-data-v-16cccdff{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},fa54:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={cwUploader:a("7ba4").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-page"},[a("v-uni-view",{staticClass:"u-demo-block"},[a("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("基础用法")]),a("v-uni-view",{staticClass:"u-demo-block__content"},[a("v-uni-view",{staticClass:"u-page__upload-item"},[a("cw-uploader",{attrs:{fileList:t.fileList1,name:"1",maxCount:10},on:{"after-read":function(e){arguments[0]=e=t.$handleEvent(e),t.afterRead.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePic.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"u-demo-block"},[a("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("上传视频")]),a("v-uni-view",{staticClass:"u-demo-block__content"},[a("v-uni-view",{staticClass:"u-page__upload-item"},[a("cw-uploader",{attrs:{fileList:t.fileList2,name:"2",multiple:!0,maxCount:10,accept:"video"},on:{"after-read":function(e){arguments[0]=e=t.$handleEvent(e),t.afterRead.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePic.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"u-demo-block"},[a("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("关闭文件预览")]),a("v-uni-view",{staticClass:"u-demo-block__content"},[a("v-uni-view",{staticClass:"u-page__upload-item"},[a("cw-uploader",{attrs:{fileList:t.fileList3,name:"3",multiple:!0,maxCount:10,previewFullImage:!1},on:{"after-read":function(e){arguments[0]=e=t.$handleEvent(e),t.afterRead.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePic.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"u-demo-block"},[a("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("限制上传数量 3个")]),a("v-uni-view",{staticClass:"u-demo-block__content"},[a("v-uni-view",{staticClass:"u-page__upload-item"},[a("cw-uploader",{attrs:{fileList:t.fileList3,name:"5",multiple:!0,maxCount:3},on:{"after-read":function(e){arguments[0]=e=t.$handleEvent(e),t.afterRead.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePic.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"u-demo-block"},[a("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("自定义上传样式")]),a("v-uni-view",{staticClass:"u-demo-block__content"},[a("v-uni-view",{staticClass:"u-page__upload-item"},[a("cw-uploader",{attrs:{fileList:t.fileList6,name:"6",multiple:!0,maxCount:1},on:{"after-read":function(e){arguments[0]=e=t.$handleEvent(e),t.afterRead.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePic.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{width:"80px",height:"80px"},attrs:{src:"http://qiniu.yuencode.cn/public/2023/01/14/upload-icon.png",mode:"widthFix"}})],1)],1)],1)],1)],1)},r=[]},fab2:function(t,e,a){"use strict";a.r(e);var i=a("7d1e"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a}}]);