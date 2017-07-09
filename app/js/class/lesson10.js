{
  let list = new Set();
  list.add(34);
  list.add('Kael');
  console.log(list.size);
  list.add(34);
  console.log(list);
  let arr = [12, 154, 458, 654, 648, 654, 120, 12, 1, 2, 3, 4, 5, 6, 6, 6, 6, 8, 8, 8, 9];
  let list1 = new Set(arr);
  console.log(list1);
  console.log(typeof list1);
  list1.delete(458);
  console.log(list1);
  // list1.clear([12,9]);
  console.log(list1.has(8));
  for (let [key, value] of list1.entries()) {
    console.log(key, value);
  }
  for (let key of list1.keys()) {
    console.log(key);
  }
  for (let value of list1.values()) {
    console.log(value);
  }
  list1.forEach(function(item) {
    console.log(item); 
  })
}
