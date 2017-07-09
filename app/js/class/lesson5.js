{
  console.log(0b111110111);
  console.log(0o767);
}
{
  // Number.isFinite
  console.log(Number.isFinite(15));
  console.log(Number.isFinite(NaN));
}
{
  console.log(Number.isInteger(450.0));
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
  console.log(Number.MAX_VALUE,Number.MIN_VALUE);
  let num=232.9823;
  console.log(Number.parseInt(num));
  console.log(Math.trunc(num));
  console.log(Math.sign(-59));
  console.log(Math.sign(59));
  console.log(Math.sign(0));
}
