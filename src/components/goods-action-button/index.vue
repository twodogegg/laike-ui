<template>
  <view class="index" :style="{background: color }" @click="$emit('click')">
    <p :style="{color: textColor}">{{text}}</p>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        externalClasses: ['my-class']
      }
    },
    props: {
      color: {
        // 这里本来应该传入代码的。没有使用 iconfont 传入图片得了
        type: String,
        default: '#FFFFFF'
      },
      text: {
        type: String
      },
      textColor: {
        type: String,
        default: '#000000'
      }
    }
  }
</script>

<style scoped lang="less">
  .index {
    width: 100%;
    display: flex;
    height: 98rpx;
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;
    font-size: 30rpx;
  }
</style>
