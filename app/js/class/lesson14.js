{
  let arr=[1,2,3,4,5,6,8845,748,5];
  let map = arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
  for(let value of arr){
    console.log(value);
  }
}
{
  let obj={
    start:[1,2,3,4,54],
    end:[45,458,66,455],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end);
      let len=arr.length;
      return {
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  let arr1=obj[Symbol.iterator]();
  console.log(arr1.next(),'----&&--');

  for(let value of obj){
    console.log(value,'----->');
  }

}
