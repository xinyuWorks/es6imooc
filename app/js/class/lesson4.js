{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);
  console.log('s',`\u{20BB7}`);
}
{
  let s='𠮷';
  console.log(s.length);
  console.log('0',s.charAt(0));
  console.log('0',s.charCodeAt(0));
  console.log('0',s.charCodeAt(1));
  let s1='𠮷a';
  console.log(s1.length);
  console.log('code',s1.codePointAt(0));
  console.log('code',s1.codePointAt(0).toString(16));
  console.log('code',s1.codePointAt(2).toString(16));
}
{
  console.log(String.fromCharCode("0x20bb7"));
  console.log(String.fromCodePoint("0x20bb7"));
}
{
  let s4='\u{20bb7}abc';
  for(let i=0;i<s4.length;i++){
    console.log('es5',s4[i]);
  }
  for(let code of s4){
    console.log('es6',code);
  }
}
{
  let str='majianKael';
  console.log(str.includes("K"));
  console.log(str.startsWith('majia'));
  console.log(str.endsWith('el'));
  console.log(str.repeat(4));
  let name='Kael';
  let age=21;
  let info = 'hello wrold';
  let all=`hello world ${name} ${age} ${info}`;
  console.log(all);
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
