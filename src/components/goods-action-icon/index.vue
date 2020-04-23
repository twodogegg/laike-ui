<template>
  <div class="goods-action-icon"  @click="$emit('click')">
    <img :src="icon" modl="aspectFit" alt="">
    <p>{{text}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        // 这里本来应该传入代码的。没有使用 iconfont 传入图片得了
        type: String
      },
      text: {
        type: String
      }
    }
  }
</script>

<style scoped lang="less">
  .goods-action-icon {
    width: 180rpx;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: white;

    img {
      width: 36rpx;
      height: 36rpx;
      margin-bottom: 8rpx;
    }
    p {
      display: block;
      color: #1D2941FF;
      font-size:22rpx;
    }
  }
</style>
