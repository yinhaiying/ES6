 // ES3
//  a = 1;    //   含义不明:是声明变量还是赋值了。
//  console.log(window.a);

//  function fn(){
//      var a ;
//      function fn1(){
//          a = 2;      // 这里的a = 2就是一个赋值了。
//          console.log(a);
//      }
//  }

//  fn();


// var 变量提升带来问题   1. 不会执行的代码影响了其他的执行的代码

// function fn(){
//     if(true){
//         console.log(a);
//     }else{
//         var a = 2;
//         // 按理来说这里应该不会执行
//         console.log("这里不会执行");
//     }
// }

// fn();
// var 变量提升带来问题   不想暴露的局部变量也能够被访问到
// {
//     var a = 2;
//     window.xxx = function(){
//         console.log(a);
//     }
// }

// 用函数来处理这种局部变量的问题：
// function fn(){
//     var a = 2;
//     window.xxx = function(){
//         console.log(a);
//     }
// }

// 用函数来处理，同时又会带来新的问题，函数必须要有个名字吧。而有名的函数又是一个全局变量，相当于又多了一个
// 暴露的变量。有点顾此失彼了。因此，又有了新的方法：闭包。

// (function () {
//   var a = 2;
//   window.xxx = function () {
//     console.log(a);
//   };
// }())


// let:为了更加方便地使用局部变量。

// 1. let的作用域只在当前{}里面，在{}外面使用就报错。
// if (true) {
//   let a = 1;
//   console.log(1);
// } else {
//   console.log(2);
// }
// console.log(a);
// 2.临时死区。如果在当前代码块中未声明就使用，直接报错。这就是临时死区
// 所谓死区：指的是在你声明之前这些都是死区，不能让你使用。

// {
//     let b = 2;
//     {
//         let b = 3;
//         {
//             console.log(b);   // 报错。既不会用外面的，也不会用里面没有声明之前的变量。
//             let b = 4;
//         }
//     }
// }

    // 1、块级作用域
    // 2、无变量提升
    // 3、暂时性死区
    // 4、禁止重复声明

// const 与let的区别就是const只能赋值一次，其他功能跟let完全相同。


var a = 1;
function fn(){
    console.log(a);
}
a = 2;
fn();