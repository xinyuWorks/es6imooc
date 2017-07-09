{
  let a,b,c;
  [a,b]=[1,2];
  console.log(a,b);
}
{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest);
}
{ let a,b,rest;
  ({a,b}={a:1,b:3});
  console.log(a,b);
}
{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}
{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}
{
  function f(){
    return [1,2];
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}
{
  function gets(){
    return [1,2,3,4,5,6]
  }
  let a,b,c;
  [a,,,b,...c]=gets();
  console.log(a,b,c);
}
{
  let obj={a:12,b:23};
  let {a,b}=obj;
  console.log(a,b);
}
{
  let metaData={
    title:'majian',
    test:[{
      title:'age',
      name:'Kael'
    }]
  }
  let {title:mainTitle,test:[{title:age}]}=metaData;
  console.log(mainTitle,age);ul

}
