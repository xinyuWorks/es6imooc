// 第三方修饰器core-decorators
export let A ='majian';
export function test(){
  console.log('test is methods');
};
export class Test{
  hello(){
    console.log('hello world');
  }
}
export default{
  A,
  Test
}
