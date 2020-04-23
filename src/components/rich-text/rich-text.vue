<!--uni-app框架下 富文本解析-->
<template>
  <view class="rich-text-wrap">
    <rich-text class="rich-text" :nodes="nodes" />
  </view>
</template>

<script>
  import htmlParse from '../../common/html-parser'
  export default {
    props: {
      content: {
        type: String,
        default: '',
      }
    },
    computed: {
      nodes() {
        let content = this.content.replace(/src/g,"style='width:100%!important;height: auto!important;' src").replace(/table/g,`table style="width:100%!important;"`)
        return htmlParse(content)
      }
    },
  }
</script>

<style scoped lang="less">
  .rich-text-wrap {
    width: 100%;
    max-width: 100%;
    .rich-text {
      font-size: 14px;width: 100%;max-width: 100%;
    }
  }
</style>
