import {request} from './request'

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}


export function getGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

//对每个页面的网络请求再单独封装一下，这样可以有非常清晰的代码结果