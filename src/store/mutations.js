export default {
  addCounter(state,payload){
    payload.count += 1
  },
  addGoods(state,payload){
    state.cartList.push(payload)
  }
}