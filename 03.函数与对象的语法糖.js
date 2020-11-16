/* 
1. 函数的默认参数
2. 函数的剩余参数
3. 展开操作
4. 解构赋值
5. 对象属性加强
*/

// 1. 默认参数

// function sum(a,b){
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }
// console.log(sum(1))
// 但是如果这个参数非常多的时候，那么我们就需要写非常多的。
// 如果没有传入值，那么就等于0。因此，我们会使用a = a||0这样的写法来传默认参数


// 使用默认值
// function sum(a = 0, b = 0) {
//   a = a || 0;
//   b = b || 0;
//   return a + b;
// }
// console.log(sum(1));




// 2.剩余参数

//求任意个参数的和
// function sum(a,b,c,d,e){
//   console.log(arguments);
//   let sum = 0;
//   for(let i = 0;i < arguments.length;i++){
//       sum += arguments[i];
//   }
//   return sum;
// }
// console.log(sum(1,2,3,4,5,6));

// function sum(name, a, b, c, d, e) {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 1; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return name + "求和得到的结果是" + sum;
// }
// console.log(sum("小明",1, 2, 3, 4, 5, 6));  // 小明求和得到的结果是21

// 实际上我们就是要对参数进行区分，但是每次区分我们都需要改变函数体的逻辑。
// ES6提供了剩余参数来帮助我们进行区分


// function sum(name, ...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return name + "求和得到的结果是" + sum;
// }
// console.log(sum("小明",1, 2, 3, 4, 5, 6));  // 小明求和得到的结果是21




// 3.数组和对象的解构

let arr1 = [1,2,3,4,5,6];
// let arr2 = [4,5,6]   arra是arr1的后三项
let [a,b,c,...arr2] = arr1;
let [,,,...arr3] = arr1;   // 省略前面的值
let arr4 = [0,...arr1,7] ;
console.log(arr2);
console.log(arr3);
console.log(arr4);