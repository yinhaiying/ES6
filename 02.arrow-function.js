// 箭头函数  只能赋值，不能作为声明

let xxx = (p1,p2) => {
  console.log("1");
  return 1;
}

// 如果只有一个参数，可以不写括号
let yyy = p1 => {
    console.log("2");
    return 2;
}

yyy();

// 如果函数体只return一句话，可以不写花括号,同时不写return;如果加上花括号，那么必须写return
let zzz = (p1,p2) => p1 + p2;


// 为什么会有箭头函数

// function fn(p1,p2){
// //   let p1 = arguments[0];
// //   let p2 = arguments[1];
//   console.log("p1:",p1);
//   console.log("p2:",p2);
// }
// fn(1,2);


// function fn1(p1,p2){
//     console.log("..............")
//     console.log(this);
// }
// fn1();

obj = {
    name:"hello,world",
    show:function(/*this,*/p1,p2){
      console.log("this:",this);
      console.log("p1:",p1);
      console.log("p2:",p2);
    }
}

// 其实每个函数都有一个this。用来确定是谁在调用自己。这个this在python等其他语言中
// 就是第一个参数，只不过在js中做了处理，不展示出来。如果你想看到它，可以使用call查看
// obj.show.call(obj,1,2)。this 的值是call的第一个参数。
// obj.show(1,2,3);
// obj.show.call(obj,1,2);     // 这样就能够清除地看到this。



// this是调用时传的一个参数，因此如果他不调用，我们永远不知道这个参数是什么。
//
let constroller = {
    el:"#app",
    init:function(){
        $(this.el).on("click",this.onClick)
    },
    onClick:function(){
        // 这里的this会是controller吗？this是一个参数。这个参数现在是什么我们知道吗？
        // onClick这个函数没有调用肯定不知道。
        this.getUsers();
    },
    getUsers:function(){
       console.log("users");
    }
}


// 为了获得确定的this,我们考虑把外面的this保存起来。
let constroller2 = {
  el: "#app",
  init: function () {
    let self = this;
    $(this.el).on("click", function(){
        self.onClick();
    });
  },
  onClick: function () {
    this.getUsers();
  },
  getUsers: function () {
    console.log("users");
  },
};


// 箭头函数来解决这个问题
// 箭头函数没有this的概念,因此箭头函数中的this其实是外界的函数的this。

let fn3 = () => {
    console.log("1111")
    console.log(this);   // 输出windows  说明箭头函数是没有this。因此this实际上都是外面的变量。
}

fn3.call({name:"Hello"});    

let constroller3 = {
  el: "#app",
  init: function () {
    $(this.el).on("click",  () => {
      this.onClick();
    });
  },
  onClick: function () {
    this.getUsers();
  },
  getUsers: function () {
    console.log("users");
  },
};






