{
  let arr = Array.of(1,23,51,5458,458);
  console.log(`arr= ${arr}`);
}
{
  let p=document.querySelectorAll('p');
  let parr = Array.from(p);
  parr.forEach(function(item){
    console.log(item.textContent);
  });
  console.log(Array.from([1,2,354,45,56],function(item){return item*2}));
  console.log(['a','b','c','a'].fill('majian',0,2));
}
{
  // for(let index of [1,454,154785,15785].keys()){
  //   console.log(index);
  // }
  for(let [index,value] of ['a','b','c','es'].entries()){
    console.log(index,value);
  }
}
{
  console.log([1,23,45,248,1447].copyWithin(0,1,4));
}
{
  console.log([1,2,3,4,5,6,7,8,9].find(function(item){
    return item>3;
  }));
  console.log([1,2,3,4,5,6,7,8,9].includes(1));
}
