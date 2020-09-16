const idol = {
    name: '蔡x抻',
    phone: 10086,
    price: 1000000  //报价
  }
  
class  agent  {
    get() {
        //拦截明星电话的请求,只提供经纪人电话
        return '经纪人电话:10010'
      }
    set (object:any) {
        if(object.key === 'price' ) {
          //经纪人过滤资质
          if(object.value < idol.price) throw new Error('报价过低')
          idol.price = object.value;
        }
      }
} 
let agent1 = new agent(); 
let message = agent1.get();
console.log(message);
let object = {
    key:'price',
    value:10000000
}
 agent1.set(object);

  
  