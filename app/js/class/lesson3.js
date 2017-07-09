{
  let regexp = new RegExp('xzy','i');
  let regexp2 = new RegExp(/xyz/i);
  console.log(regexp.test('xyz32323'),regexp2.test('xyz3233'));
  let regexp3=RegExp(/xyz/i,'i');
  console.log(regexp3.test('xyz32323'));
}
{
  let  s= 'bbb_bb_b';
  let a1=/b+/g;
  let a2=/b+/y;
  console.log(a1.exec(s),a2.exec(s));
  console.log(a1.exec(s),a2.exec(s));
  console.log(a1.sticky,a2.sticky);
  console.log(`\u{20BB7}`);
}
