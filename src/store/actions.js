export default {
  setOrder ({commit}, data) {
    commit('SET_ORDER', data);
  },
  cancelOrder ({commit}, index) {
    commit('CANCEL_ORDER', index);
  }
}
