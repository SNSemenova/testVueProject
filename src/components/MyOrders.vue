<template>
  <div class="orders-table">
    <h4 class="section-header">My orders</h4>
    <div class="table--row">
      <div v-for="column in columns" class="table--cell">{{column}}</div>
    </div>
    <div v-for="(order, index) in orders" class="table--row">
      <div v-for="column in columns" class="table--cell">{{order[column]}}</div>
      <button @click=cancelOrder(index)>Cancel</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-orders',
    data () {
      return {
        columns: [
          'type',
          'price',
          'sum'
        ]
      }
    },
    computed: {
      orders () {
        return this.$store.state.orders;
      }
    },
    methods: {
      cancelOrder (index) {
        this.$store.dispatch('cancelOrder', index);
      }
    }
  }
</script>

<style>
  .orders-table {
    margin-top: 32px;
  }
  .section-header {
    margin: 8px 0;
  }
  .table--row {
    display: flex;
  }
  .table--cell {
    width: 140px;
  }
</style>
