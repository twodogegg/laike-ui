## 组件列表

1. 富文本组件


2. 商品

https://youzan.github.io/vant-weapp/#/goods-action

```
<coures-goods-action v-if="showGoodsAction">
  <coures-goods-action-icon :icon="service" text="客服" @click="onClickService"/>
  <coures-goods-action-button v-if="!isVip" color="#A48E4AFF" text="￥99 升级VIP" text-color="#F9F1C3FF" @click="onClickService"/>
  <coures-goods-action-button color="#6E5E2BFF" text="立即购买" text-color="#F9F1C3FF" @click="onClickService"/>
</coures-goods-action>
```
