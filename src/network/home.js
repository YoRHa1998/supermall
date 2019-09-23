import {request} from './request'

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

//对每个页面的网络请求再单独封装一下，这样可以有非常清晰的代码结果