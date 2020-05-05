<template>
  <button
    class="goods-action-icon"
    @click="onClick"
    :open-type="openType"
    :session-from="sessionFrom"
    :send-message-title="sendMessageTitle"
    :send-message-path="showMessagePath"
    :send-message-img="showMessageImg"
    :show-message-card="showMessageCard"
  >
    <img :src="icon" model="aspectFit" alt="">
    <p>{{text}}</p>
  </button>
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
      },
      openType: {
        default: ''
      },
      sessionFrom: {
        default: ''
      },
      sendMessageTitle: {
        default: ''
      },
      showMessagePath: {
        type: String,
        default: ''
      },
      showMessageImg: {
        type: String,
        default: ''
      },
      showMessageCard: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick () {
        this.$emit('click')
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
      box-sizing: border-box;
      margin-bottom: 8rpx;
    }
    p {
      display: block;
      color: #1D2941FF;
      font-size:22rpx;
      line-height: 30rpx;
    }
  }
</style>
