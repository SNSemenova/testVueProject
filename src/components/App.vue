<template>
  <div id="app">
    <exchange-info></exchange-info>
    <order-form></order-form>
    <my-orders></my-orders>
  </div>
</template>

<script>
  import ExchangeInfo from './ExchangeInfo';
  import OrderForm from './OrderForm';
  import MyOrders from './MyOrders';

  export default {
    name: 'app',
    components: {
      ExchangeInfo,
      OrderForm,
      MyOrders
    }
  }
</script>

<style scoped>
  #app {
    font-family: arial, sans-serif;
    font-size: 24px;
    margin: 16px;
  }
</style>
