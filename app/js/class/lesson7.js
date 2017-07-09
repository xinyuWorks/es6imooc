//函数
{
  function test(c,x=23,f=8){
    console.log(x,f,c);
  }
  test('majian');

  let x='23';
  function test2(x,y=x){
    console.log(x,y)
  }
  test2('hello');
  function more(...arg){
    for(let v of arg){
      console.log(v);
    }
  }
  more('ss','zz',23,'sdf',{name:'majian'});

}
{
  let arr = v => v*3;
  let arr1 = ()=>'good';
  console.log(arr(6));
  console.log(arr1());
}
{
  let test3 = ()=>console.log('test3');
  let test5 =()=>test3();
  test5();
}
