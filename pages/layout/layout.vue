<template>
    <view class="u-page">
        <view class="u-demo-block">
            <text class="u-demo-block__title">基础使用</text>
            <view class="u-demo-block__content">
                <cw-row customClass="mb-12">
                    <cw-col span="12">
                        <view class="demo-layout bg-purple-light"></view>
                    </cw-col>
                    <cw-col span="12">
                        <view class="demo-layout bg-purple"></view>
                    </cw-col>
                </cw-row>
                <cw-row customClass="mb-12">
                    <cw-col span="8">
                        <view class="demo-layout bg-purple"></view>
                    </cw-col>
                    <cw-col span="8">
                        <view class="demo-layout bg-purple-light"></view>
                    </cw-col>
                    <cw-col span="8">
                        <view class="demo-layout bg-purple-dark"></view>
                    </cw-col>
                </cw-row>
                <cw-row justify="space-between">
                    <cw-col span="6">
                        <view class="demo-layout bg-purple"></view>
                    </cw-col>
                    <cw-col span="6">
                        <view class="demo-layout bg-purple-light"></view>
                    </cw-col>
                    <cw-col span="6">
                        <view class="demo-layout bg-purple"></view>
                    </cw-col>
                    <cw-col span="6">
                        <view class="demo-layout bg-purple-light"></view>
                    </cw-col>
                </cw-row>
            </view>
        </view>
       <view class="u-demo-block">
            <text class="u-demo-block__title">分栏间隔</text>
            <view class="u-demo-block__content">
                <cw-row justify="space-between" gutter="10">
                    <cw-col span="6">
                        <view class="demo-layout bg-purple"></view>
                    </cw-col>
                    <cw-col span="6">
                        <view class="demo-layout bg-purple-light"></view>
                    </cw-col>
                    <cw-col span="6">
                        <view class="demo-layout bg-purple"></view>
                    </cw-col>
                    <cw-col span="6">
                        <view class="demo-layout bg-purple-light"></view>
                    </cw-col>
                </cw-row>
            </view>
        </view>
        <view class="u-demo-block">
            <text class="u-demo-block__title">混合布局</text>
            <view class="u-demo-block__content">
                <cw-row justify="space-between" gutter="10">
                    <cw-col span="4">
                        <view class="demo-layout bg-purple-light"></view>
                    </cw-col>
                    <cw-col span="8">
                        <view class="demo-layout bg-purple"></view>
                    </cw-col>
                    <cw-col span="12">
                        <view class="demo-layout bg-purple-dark"></view>
                    </cw-col>
                </cw-row>
            </view>
        </view>
        <view class="u-demo-block">
            <text class="u-demo-block__title">分栏偏移</text>
            <view class="u-demo-block__content">
                <cw-row
                    customClass="mb-12">
                    <cw-col span="6" offset="6">
                        <view class="demo-layout bg-purple-light"></view>
                    </cw-col>
                    <cw-col span="6" offset="6">
                        <view class="demo-layout bg-purple"></view>
                    </cw-col>
                </cw-row>
                <cw-row>
                    <cw-col span="6">
                        <view class="demo-layout bg-purple-light"></view>
                    </cw-col>
                    <cw-col span="6" offset="6">
                        <view class="demo-layout bg-purple"></view>
                    </cw-col>
                </cw-row>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.demo-layout {
    height: 25px;
    border-radius: 4px;
}

.bg-purple {
    background: #cfd8dc;
}

.bg-purple-light {
    background: #eceff1;
}

.bg-purple-dark {
    background: #78909c;
}
</style>
