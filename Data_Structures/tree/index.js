const TreeNode = require('./treeNode');
const startTime = Date.now();
let numbers = [15, 93, 23, 3, 1, 10, 54];





const root = new TreeNode(15);

numbers.forEach((number,index)=>{
  root.insertInOrder(number);
});

const endTime = Date.now();
console.log(root);
console.log('completion time: ',endTime - startTime,'ms');