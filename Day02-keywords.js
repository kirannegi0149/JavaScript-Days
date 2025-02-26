//var can be reassigned
//var can be redeclared because it works on global scope
var num=20;
var num=90;
console.log(num);

//let can be reassigned
//let can not redeclared beacuse it is works on block scope
let num1=50;
num1=30;
console.log(num1);

//const can not reassigned and redeclared it is a fixed value
const num2=69;
//num2=50;
console.log(num2);

// Exercise num 1
let a =2;
let b =5;
let sum=a+b;
console.log(sum);

//Exercise num 2
let c = 4567;
let res = Math.floor(c/1000);
console.log(res);
