{
  let obj={
    name:"majian",
    time:'2017-05-07',
    age:22,
    _dir:'c/user/document'
  }
  let monitor = new Proxy(obj,{
    get(target,key){
      return target[key].replace('2017','2018');
    },
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    has(target,key){
      if(key==='name'){
        return target[key];
      }else{
        return false;
      }
    },
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key];
      }
    },
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time')
    }
  })

console.log(monitor.time);
monitor.time='majian';
monitor.name='god';
console.log(monitor);
console.log('time' in monitor,'name' in monitor);
// delete monitor._dir;
// delete monitor.time;
console.log(monitor);
console.log(Object.keys(monitor));
console.log(Reflect.get(monitor,'time'));
console.log(Reflect.set(monitor,'name','Kael'));
console.log(Reflect.ownKeys(monitor));
}
