<template>
  <div class="goods-action">
    <div class="action">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // 是否为 iPhoneX 留出底部安全距离
      safeAreaInsetBottom: {
        //TODO 还未适配Iphonx 底部安全距离
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="less">
  .goods-action {
    .action {
      background: white;
      border-top: 1rpx solid #eee;
      position: fixed;
      bottom: 0;
      display: flex;
      // height: 98rpx;
      width: 100%;
      flex: 1 1 100%;
    }
  }
</style>
