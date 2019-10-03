export default {
  addCart(context,payload){  //第一个参数是默认传入的state，第二个为组件中传的参数
    return new Promise((resolve,reject)=>{
    let oldProduct = context.state.cartList.find(item => payload.iid === item.iid)  //根据iid判断state中是否已经有
                                                                            //该商品，有的话则返回该商品
    if(oldProduct){  //如果有值，则该商品的count + 1
      context.commit('addCounter',oldProduct)
      resolve('该商品数量加1')
    }else{  //如果没有找到，则将传过来的商品加进数组中
      
      context.commit('addGoods',payload)
      resolve('添加到购物车成功')
    }
    })
  }
}