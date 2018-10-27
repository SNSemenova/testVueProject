export default {
  getBalance (state) {
    return {
      USD: state.USD_balance,
      BTC: state.BTC_balance
    }
  }
}
