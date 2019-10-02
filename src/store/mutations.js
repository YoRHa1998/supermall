export default {
  addCart(state,payload){  //第一个参数是默认传入的state，第二个为组件中传的参数
    let oldProduct = state.cartList.find(item => payload.iid === item.iid)  //根据iid判断state中是否已经有
                                                                            //该商品，有的话则返回该商品

    if(oldProduct){  //如果有值，则该商品的count + 1
      oldProduct.count += 1
    }else{  //如果没有找到，则将传过来的商品加进数组中
      state.cartList.push(payload)
    }
  }
}