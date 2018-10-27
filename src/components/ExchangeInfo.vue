<template>
  <div>
    <div class="balance-section">
      <span>Your balance: </span>
      <div class="balance-section--currencies">
        <div v-for="(currentBalance, currency) in balance">
          {{currency}}: {{currentBalance}}
        </div>
      </div>
    </div>
    <div class="last-price-section">
      Last price: {{ lastPrice }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'exchange-info',
    computed: {
      balance() {
        return this.$store.getters.getBalance;
      },
      lastPrice() {
        return this.$store.state.last_price;
      }
    }
  }
</script>

<style scoped>
  .balance-section {
    display: flex;
    margin-bottom: 16px;
  }
  .balance-section--currencies {
    display: inline-block;
    margin-left: 8px;
  }
</style>
