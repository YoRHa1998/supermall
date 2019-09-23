import axios from "axios"  //在封装的文件中导入axios

export function request(config){    //导出一个方法
  //1.创建一个axios实例
  const instance = axios.create({   
    baseURL:"http://123.207.32.32:8000/api/v1",  //url前面一定要加http://，不然获取不到数据
    timeout:5000
  })
  
  //2.axios的拦截器
  //axios的拦截器可以通过 实例名（或者axios 全局）.interceptors.request.use()这种格式使用
  //四种拦截器：请求成功拦截、请求失败拦截、响应成功拦截、响应失败拦截

  instance.interceptors.request.use(config=>{   //请求类型的拦截通过request.use()来拦截，里面有两个参数，两个参数都是方法，
                                                //第一个参数config(),表示请求的配置信息
    // console.log(config);     //这里是对配置信息的操作
    return config       //操作完之后一定要把参数返回，否则其他地方就获取不到了            
  },err=>{     //第二个参数为请求失败的拦截，err()表示错误信息
    // console.log(err);
  })

  instance.interceptors.response.use(result=>{  //响应类型的拦截通过response.use()来拦截，同样的，有两个参数,
                                              //都是方法，第一个参数是result()，参数中放的是服务器返回的数据
    return result.data     //同样的，操作完之后一定要把参数返回，否则其他地方就获取不到了，这里我们一般只返回data就行了
  },err=>{               //第二个参数为请求失败的拦截，err()表示错误信息
    console.log(err);
  })



  //3.发送真正的请求
  return instance(config)   //直接return我们的instance实例，因为instance本身返回一个promise，所以我们这里
                            //return的本身就是一个promise，当请求成功的时候，函数会执行resolve，失败时会执行reject,
                            //所以我们可以直接在调用的地方直接.then，
}

//封装的好处是当第三方框架失效时，或者要换第三方框架时，只需要修改这一个文件就好了