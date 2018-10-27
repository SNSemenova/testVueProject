export default {
  SET_ORDER (state, data) {
    if ((state.last_price - data.price) / 100 * state.last_price > 10) {
      state.error = 'The price should not differ by more than 10% from the last price';
    } else {
      if (data.type === 'buy') {
        if (state.USD_balance > data.price * data.sum) {
          state.USD_balance -= data.price * data.sum;
          state.error = '';
          state.orders.push(data);
        } else {
          state.error = 'Excess your balance';
        }
      } else {
        if (state.BTC_balance > data.price * data.sum) {
          state.BTC_balance -= data.price * data.sum;
          state.error = '';
          state.orders.push(data);
        } else {
          state.error = 'Excess your balance';
        }
      }
    }
  },
  CANCEL_ORDER (state, index) {
    state.orders.splice(index, 1);
  }
}
