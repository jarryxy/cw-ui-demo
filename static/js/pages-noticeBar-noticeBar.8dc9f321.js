(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-noticeBar-noticeBar"],{"0300":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getAllRect=function(t,e){return new Promise((function(n){uni.createSelectorQuery().in(t).selectAll(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n(t[0])}))}))},e.getCurrentPage=function(){var t=getCurrentPages();return t[t.length-1]},e.getRect=function(t,e){return new Promise((function(n){uni.createSelectorQuery().in(t).select(e).boundingClientRect().exec((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n(t[0])}))}))},e.getSystemInfoSync=l,e.groupSetData=function(t,e){(0,o.canIUseGroupSetData)()?t.groupSetData(e):e()},e.nextTick=function(t){r.default.nextTick(t)},e.pickExclude=function(t,e){if(!(0,c.isPlainObject)(t))return{};return Object.keys(t).reduce((function(n,i){return e.includes(i)||(n[i]=t[i]),n}),{})},e.range=function(t,e,n){return Math.min(Math.max(t,e),n)},e.requestAnimationFrame=function(t){var e=l();if("devtools"===e.platform)return setTimeout((function(){t()}),1e3/30);return uni.createSelectorQuery().selectViewport().boundingClientRect().exec((function(){t()}))},e.toPromise=function(t){if((0,c.isPromise)(t))return t},n("d3b7"),n("ac1f"),n("13d5"),n("b64b"),n("caad"),n("2532");var a,o=n("c933"),c=n("3da5"),r=i(n("e143"));function l(){return null==a&&(a=uni.getSystemInfoSync()),a}},2520:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.cw-ellipsis[data-v-12960ac3]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.cw-multi-ellipsis--l2[data-v-12960ac3]{-webkit-line-clamp:2}.cw-multi-ellipsis--l2[data-v-12960ac3],\n.cw-multi-ellipsis--l3[data-v-12960ac3]{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.cw-multi-ellipsis--l3[data-v-12960ac3]{-webkit-line-clamp:3}.cw-clearfix[data-v-12960ac3]:after{display:table;clear:both;content:""}.cw-hairline[data-v-12960ac3],\n.cw-hairline--bottom[data-v-12960ac3],\n.cw-hairline--left[data-v-12960ac3],\n.cw-hairline--right[data-v-12960ac3],\n.cw-hairline--surround[data-v-12960ac3],\n.cw-hairline--top[data-v-12960ac3],\n.cw-hairline--top-bottom[data-v-12960ac3]{position:relative}.test[data-v-12960ac3]{border:2px solid red}.cw-hairline--bottom[data-v-12960ac3]:after,\n.cw-hairline--left[data-v-12960ac3]:after,\n.cw-hairline--right[data-v-12960ac3]:after,\n.cw-hairline--surround[data-v-12960ac3]:after,\n.cw-hairline--top-bottom[data-v-12960ac3]:after,\n.cw-hairline--top[data-v-12960ac3]:after,\n.cw-hairline[data-v-12960ac3]:after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;-webkit-transform:scale(.5);transform:scale(.5)}.cw-hairline--top[data-v-12960ac3]:after{border-top-width:1px}.cw-hairline--left[data-v-12960ac3]:after{border-left-width:1px}.cw-hairline--right[data-v-12960ac3]:after{border-right-width:1px}.cw-hairline--bottom[data-v-12960ac3]:after{border-bottom-width:1px}.cw-hairline--top-bottom[data-v-12960ac3]:after{border-width:1px 0}.cw-hairline--surround[data-v-12960ac3]:after{border-width:1px}.cw-notify__container[data-v-12960ac3]{position:fixed;top:0;left:0;box-sizing:border-box;width:100%}.cw-notice-bar[data-v-12960ac3]{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;height:40px;padding:0 16px;font-size:14px;color:#ed6a0c;line-height:24px;background-color:#fffbe8}.cw-notice-bar--withicon[data-v-12960ac3]{position:relative;padding-right:40px}.cw-notice-bar--wrapable[data-v-12960ac3]{height:auto;padding:8px 16px}.cw-notice-bar--wrapable .cw-notice-bar__wrap[data-v-12960ac3]{height:auto}.cw-notice-bar--wrapable .cw-notice-bar__content[data-v-12960ac3]{position:relative;white-space:normal}.cw-notice-bar__left-icon[data-v-12960ac3]{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;margin-right:4px;vertical-align:middle}.cw-notice-bar__left-icon[data-v-12960ac3],\n.cw-notice-bar__right-icon[data-v-12960ac3]{font-size:16px;min-width:22px}.cw-notice-bar__right-icon[data-v-12960ac3]{position:absolute;top:10px;right:15px}.cw-notice-bar__wrap[data-v-12960ac3]{position:relative;-webkit-flex:1;flex:1;overflow:hidden;height:24px}.cw-notice-bar__content[data-v-12960ac3]{position:absolute;white-space:nowrap}.cw-notice-bar__content.cw-ellipsis[data-v-12960ac3]{max-width:100%}',""]),t.exports=e},"2a87":function(t,e,n){n("d81d"),n("4de4"),n("d3b7"),n("ddb0");var i=n("e685"),a=n("52d4");t.exports=function t(e){return a.isArray(e)?e.filter((function(t){return null!=t&&""!==t})).map((function(e){return t(e)})).join(";"):"[object Object]"===Object.prototype.toString.call(e)?i.keys(e).filter((function(t){return null!=e[t]&&""!==e[t]})).map((function(t){return[t,[e[t]]].join(":")})).join(";"):e}},"3da5":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.isBoolean=function(t){return"boolean"===typeof t},e.isDef=function(t){return void 0!==t&&null!==t},e.isFunction=o,e.isImageUrl=function(t){return r.test(t)},e.isNumber=function(t){return/^\d+(\.\d+)?$/.test(t)},e.isObj=function(t){var e=(0,a.default)(t);return null!==t&&("object"===e||"function"===e)},e.isPlainObject=c,e.isPromise=function(t){return c(t)&&o(t.then)&&o(t.catch)},e.isVideoUrl=function(t){return l.test(t)},n("ac1f"),n("00b4");var a=i(n("53ca"));function o(t){return"function"===typeof t}function c(t){return null!==t&&"object"===(0,a.default)(t)&&!Array.isArray(t)}var r=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,l=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i},"3e0e":function(t,e,n){"use strict";n.r(e);var i=n("a5a3"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"43f7":function(t,e,n){var i=n("2520");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("18724ce8",i,!0,{sourceMap:!1,shadowMode:!1})},5281:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={cwNoticeBar:n("b7d5").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-page"},[n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("基础功能")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("cw-notice-bar",{attrs:{text:t.text1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("可关闭")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("cw-notice-bar",{attrs:{text:t.text5,mode:"closeable"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("自定义横向滚动速度")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("cw-notice-bar",{attrs:{text:t.text2,speed:"500",mode:"closable"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("可跳转(点击右箭头)")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("cw-notice-bar",{attrs:{text:t.text3,mode:"link",url:"/pages/tag/tag"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("左侧图标")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("cw-notice-bar",{attrs:{text:t.text4,leftIcon:"notice"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("右侧自定义")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("cw-notice-bar",{attrs:{text:t.text4},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[t._v("图标")]},proxy:!0}])})],1)],1),n("v-uni-view",{staticClass:"u-demo-block"},[n("v-uni-text",{staticClass:"u-demo-block__title"},[t._v("自定义样式")]),n("v-uni-view",{staticClass:"u-demo-block__content"},[n("cw-notice-bar",{attrs:{text:t.text3,color:"#ffffff",backgroundColor:"#8e44ad"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})],1)],1)],1)},o=[]},5705:function(t,e,n){"use strict";n.r(e);var i=n("5281"),a=n("8db5");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("94d5");var c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"72afd5f9",null,!1,i["a"],void 0);e["default"]=r.exports},"5e87":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{text1:"故事的小黄花从出生那年就飘着，童话的荡秋千随记忆一直飘到现在。",text2:"哈哈哈哈哈哈哈",text3:"裹着心的光，很暖，与你有关。有梦就听得到，用爱呼应感叹。",text4:"一路有雨也有霜，月落乌啼江南",text5:"可关闭的 可关闭的 可关闭的"}},onLoad:function(){},methods:{click:function(t){console.log(t)}}};e.default=i},"5efb":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={cwIcon:n("463b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{class:t.rootClass,style:t.rootStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.leftIcon?n("cw-icon",{staticClass:"cw-notice-bar__left-icon",attrs:{size:"16px",name:t.leftIcon}}):t._t("left-icon"),n("v-uni-view",{staticClass:"cw-notice-bar__wrap"},[n("v-uni-view",{class:"cw-notice-bar__content "+(t.scrollable||t.wrapable?"":"cw-ellipsis"),attrs:{animation:t.animationData}},[t._v(t._s(t.text)),t.text?t._e():t._t("default")],2)],1),"closeable"===t.mode?n("cw-icon",{staticClass:"cw-notice-bar__right-icon",attrs:{name:"cross"},nativeOn:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.onClickIcon.apply(void 0,arguments)}}}):"link"===t.mode?n("v-uni-navigator",{attrs:{url:t.url,"open-type":t.openType}},[n("cw-icon",{staticClass:"cw-notice-bar__right-icon",attrs:{name:"arrow"}})],1):t._t("right-icon")],2):t._e()},o=[]},"8db5":function(t,e,n){"use strict";n.r(e);var i=n("5e87"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"94d5":function(t,e,n){"use strict";var i=n("d164"),a=n.n(i);a.a},a5a3:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3835"));n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0");var o=n("0300"),c=i(n("a97f")),r={name:"cw-notice-bar",mixins:[c.default],props:{customClass:{type:String,default:""},text:{type:String,default:""},mode:{type:String,default:""},url:{type:String,default:""},openType:{type:String,default:"navigate"},delay:{type:Number,default:1},speed:{type:[Number,String],default:50},scrollable:{type:Boolean,default:!0},leftIcon:{type:String,default:""},color:String,backgroundColor:String,background:String,wrapable:Boolean},data:function(){return{show:!0,animationData:null}},created:function(){this.resetAnimation=uni.createAnimation({duration:0,timingFunction:"linear"})},destroyed:function(){this.timer&&clearTimeout(this.timer)},mounted:function(){this.init()},methods:{init:function(){var t=this;(0,o.requestAnimationFrame)((function(){Promise.all([(0,o.getRect)(t,".cw-notice-bar__content"),(0,o.getRect)(t,".cw-notice-bar__wrap")]).then((function(e){var n=(0,a.default)(e,2),i=n[0],o=n[1];if(null!=i&&null!=o&&i.width&&o.width){var c=t.speed,r=t.scrollable,l=t.delay;if(r||o.width<i.width){var u=i.width/c*1e3;t.wrapWidth=o.width,t.contentWidth=i.width,t.duration=u,t.animation=uni.createAnimation({duration:u,timingFunction:"linear",delay:l}),t.scroll()}}}))}))},scroll:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=null,this.animationData=this.resetAnimation.translateX(this.wrapWidth).step().export(),setTimeout((function(){(0,o.requestAnimationFrame)((function(){t.animationData=t.animation.translateX(-t.contentWidth).step().export()})),t.timer=setTimeout((function(){t.scroll()}),t.duration)}),100)},onClickIcon:function(t){"closeable"===this.mode&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.show=!1,this.$emit("close",t.detail))},onClick:function(t){this.$emit("click",t)}},watch:{text:{handler:function(){var t=this;this.$nextTick((function(){t.init()}))},immediate:!1},speed:{handler:function(){var t=this;this.$nextTick((function(){t.init()}))},immediate:!1}}};e.default=r},a97f:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2a87")),o=(i(n("3b08")),{computed:{rootStyle:function(){var t=this.color,e=this.background,n=this.backgroundColor;return(0,a.default)({color:t,"background-color":n,background:e})},rootClass:function(){var t=this.customClass,e=this.mode,n=this.wrapable;return t+" "+this.$o.utils.bem("notice-bar",{withicon:e,wrapable:n})}}});e.default=o},b7d5:function(t,e,n){"use strict";n.r(e);var i=n("5efb"),a=n("3e0e");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c948");var c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"12960ac3",null,!1,i["a"],void 0);e["default"]=r.exports},b7f6:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".u-demo-block__content[data-v-72afd5f9]{display:flex;flex-direction:column}",""]),t.exports=e},c933:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.canIUseAnimate=function(){return a("2.9.0")},e.canIUseCanvas2d=function(){return a("2.9.0")},e.canIUseFormFieldButton=function(){return a("2.10.3")},e.canIUseGroupSetData=function(){return a("2.4.0")},e.canIUseModel=function(){return a("2.9.3")},e.canIUseNextTick=function(){return uni.canIUse("nextTick")},n("14d9"),n("e25e");var i=n("0300");function a(t){var e=(0,i.getSystemInfoSync)();return function(t,e){t=t.split("."),e=e.split(".");var n=Math.max(t.length,e.length);while(t.length<n)t.push("0");while(e.length<n)e.push("0");for(var i=0;i<n;i++){var a=parseInt(t[i],10),o=parseInt(e[i],10);if(a>o)return 1;if(a<o)return-1}return 0}(e.SDKVersion,t)>=0}},c948:function(t,e,n){"use strict";var i=n("43f7"),a=n.n(i);a.a},d164:function(t,e,n){var i=n("b7f6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("012e80c0",i,!0,{sourceMap:!1,shadowMode:!1})}}]);