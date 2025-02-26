

// var num ="I am developer and desginer";
// let res= num.indexOf("desginer");
// console.log(res);
 
// var num ="I am developer and desginer and desginer";
// let res= num.lastIndexOf("desginer");
// console.log(res);

// var num ="I am developer and desginer and desginer";
// let res= num.lastIndexOf("desginer",20);
// console.log(res);


//Concatenation
var string1 ="Developer";
var string2 ="Designer";
let string3 = string1 + " "+ string2;
console.log(string3);

//Concatenate more strings
let str1="Hello";
let str2="World";
let res1=str1.concat(str2);
console.log(res1);

//Slice method
var str ="I am developer and desginer and desginer";
let res= str.slice(1,-4);
console.log(res);

//SubString method

var str ="I am developer and desginer and desginer";
let rest= str.substring(10,20);
console.log(rest);

//Replace method
var str ="I am developer and desginer and desginer";
// let re= str.replace("d","D");
let re= str.replaceAll("d","D");
console.log(re);

//trim method
var str ="I am developer and desginer and desginer";
let str3=  str.trim();
console.log(str3);

//split method
let num="1,2,3,4,5,6,7";
let res2=num.split("[,]");
console.log(res2);

//length
let num1="I am developer and desginer";

//Example..........
let str=["Hi", "Prepbytes"];
let res12=str.slice(1);
console.log(res12);