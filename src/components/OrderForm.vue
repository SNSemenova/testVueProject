<template>
  <div class="order-form">
    <h4 class="section-header">My orders</h4>
    <label for="sum">Sum</label>
    <input v-model="sum" id="sum">
    <label for="price">Price</label>
    <input v-model="price" id="price">
    <button type="button" @click="setOrder('buy')">Buy</button>
    <button type="button" @click="setOrder('sell')">Sell</button>
    <span class="error">{{error}}</span>
  </div>
</template>

<script>
  export default {
    name: 'order-form',
    data () {
      return {
        sum: null,
        price: null
      }
    },
    computed: {
      error () {
        return this.$store.state.error;
      }
    },
    methods: {
      setOrder (type) {
        this.$store.dispatch('setOrder', {
          type: type,
          price: this.price,
          sum: this.sum
        });
      }
    }
  }
</script>

<style>
  .error {
    color: red;
  }
  .order-form {
    margin-top: 32px;
  }
</style>
