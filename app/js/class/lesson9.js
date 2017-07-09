{
  let a=Symbol();
  let b=Symbol();
  console.log(a===b);
  let s =Symbol.for('Kael');
  let g =Symbol.for('Kael');
  console.log(s===g);
}
{
  let a1=Symbol.for('abc');
  let obj={
    [a1]:123,
    'abc':456,
    name:'Kael'
  }
  for(let [key,value] of Object.entries(obj)){
    console.log(key,value);
  }
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(item,obj[item]);
  })
  Reflect.ownKeys(obj).forEach(function(item){
    console.log(item,obj[item]);
  })
}
