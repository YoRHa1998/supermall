import {request} from "./request"

export function getDetail(iid){
  return request({
    url:"/detail",
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:"/recommend"
  })
}


export class Goods{
  constructor(columns,itemInfo,services){
    this.title = itemInfo.title,
    this.discount = itemInfo.discountDesc,
    this.newPrice = itemInfo.price,
    this.oldPrice = itemInfo.oldPrice,
    this.columns = columns,
    this.services = services
  }
}