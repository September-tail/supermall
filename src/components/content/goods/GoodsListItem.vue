<template>
  <div class="goods-list-item">
    <img :src="goods.show.img"/>
    <div>
      <p>{{goods.title}}</p>
      <span class="price">{{goods.price}}</span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>