{
  let s=23;
  let k=3;
  let es5={
    s:s,
    k:k
  }
  let es6={
    s,
    k
  }
  console.log(es5,es6);
  let es5_method={
    hello:function(){
      console.log('hello world');
    }
  };
  let es6_method={
    hello (){
      console.log('hello world');
    }

  }
  console.log(es5_method.hello(),es6_method.hello());
}
{
  let a='X';
  let obj_es5={
    X:a
  }
  let obj_es6={
    [a]:'X'
  }
  console.log(obj_es5,obj_es6);
}
{
  console.log(Object.is('abc','abc'),'abc'==='abc');
  console.log(Object.is([],[]),[]===[]);
  console.log(Object.assign({a:'majian'},{b:'Kael'}));
}
{
  let peron={
    name:'majian',
    age:45,
    sex:'boy'
  }
  for(let [key,value] of Object.entries(peron)){
    console.log(key,value);
  }
}
