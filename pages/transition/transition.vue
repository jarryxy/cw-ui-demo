<template>
    <view class="u-page">
        <!-- <u-gap height="20" bgColor="#fff"></u-gap> -->
        <cw-cell-group border>
            <cw-cell
                titleStyle="font-weight: 500;"
                @click="openTransition(item.mode)"
                :title="item.title"
                v-for="(item, index) in list"
                :key="index"
                clickable
            >
                <image
                    slot="icon"
                    class="u-cell-icon"
                    :src="item.iconUrl"
                    mode="widthFix"
                ></image>
            </cw-cell>
            <cw-transition
                :name="mode"
                :show="show"
                :custom-style="style"
                @click="click"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @beforeleeave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
            >
                <view class="transition"></view>
            </cw-transition>
        </cw-cell-group>
    </view>
</template>

<script>
export default {
    data() {
        return {
            mode: "",
            show: false,
            style: {
                position: "fixed",
                top: `${uni.getWindowInfo().windowHeight / 2 - 50}px`,
                left: `${uni.getWindowInfo().windowWidth / 2 - 50}px`,
                width: "120px",
                height: "120px",
                backgroundColor: "#54ba8b",
            },
            list: [
                {
                    mode: "fade",
                    title: "淡入",
                },
                {
                    mode: "fade-up",
                    title: "上滑淡入",
                },
                {
                    mode: "zoom",
                    title: "缩放",
                },
                {
                    mode: "fade-zoom",
                    title: "缩放淡入",
                },
                {
                    mode: "fade-down",
                    title: "下滑淡入",
                },
                {
                    mode: "fade-left",
                    title: "左滑淡入",
                },
                {
                    mode: "fade-right",
                    title: "右滑淡入",
                },
                {
                    mode: "slide-up",
                    title: "上滑进入",
                },
                {
                    mode: "slide-down",
                    title: "下滑进入",
                },
                {
                    mode: "slide-left",
                    title: "左滑进入",
                },
                {
                    mode: "slide-right",
                    title: "右滑进入",
                    iconUrl: "http://qiniu.yuencode.cn/cwui/demo/transition/slideRight.png",
                },
            ],
        };
    },
    // mixins: [uni.$u.mixin],
    methods: {
        openTransition(mode) {
            this.mode = mode;
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 1500);
        },
        click() {
            // console.log("click");
        },
        beforeEnter() {
            // console.log("beforeEnter");
        },
        enter() {
            // console.log("enter");
        },
        afterEnter() {
            // console.log("afterEnter");
        },
        beforeLeave() {
            // console.log("beforeLeave");
        },
        leave() {
            // console.log("leave");
        },
        afterLeave() {
            // console.log("afterLeave");
        },
    },
};
</script>

<style lang="scss">
.u-page {
    padding: 0;
}

.transition {
    background-color: #3498db;
}
</style>
