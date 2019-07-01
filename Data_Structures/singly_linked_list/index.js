const List = require('./list');


const timeStart = Date.now();


let l1 = new List();

l1.add('Hello');
l1.add('world');
l1.add('my');
l1.add('name');
l1.add('is');
l1.add('Sean');
l1.add('Sean');

console.log(l1.indexOf('my'));

console.log(l1.toString());
l1.removeAtIndex(2);
console.log(l1.toString());

const timeEnd = Date.now();
console.log('est time to completion:', timeEnd-timeStart, 'ms');