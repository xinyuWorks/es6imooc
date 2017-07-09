{
  let hello = function* (){
    yield 1;
    yield 2;
    yield 3;
    return true;
  }
  console.log(hello().next());
  // console.log(hello().next());
  // console.log(hello().next());
  // console.log(hello().next());
  // console.log(hello().next());
}
{
  let state=function*(){
    while(1){
       yield 1;
       yield 2;
       yield 3;
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}
{
  let draw=(count)=>{
    console.log(`剩余 ${count} 次`);
  }
  let start = function*(count){
    while(count>0){
      count--;
      yield draw(count);
    }
  }
  let begin = start(5);
  let btn = document.createElement('button');
  btn.textContent="抽奖";
  btn.id='start';
  document.body.appendChild(btn);
  let btns=document.getElementById('start');
  btns.onclick=()=>{
    begin.next();

    }
}
