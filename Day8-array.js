
//length
let arr=[1,2,4,6,7];
console.log(arr.length);

//push()
const arr1=["hello","India"]
let res=arr1.push("& World");
console.log(arr1);

//slice()
const arr2=["Jarvis","The","Developer"];
let re=arr2.slice(0,1);
console.log(re);

//toString()
const arr3=["Hello","India","And","World"];
let res2=arr3.toString();
console.log(res2);

//shift
const arr4=["Hello","India","And"];
let res3=arr4.shift();
console.log(arr4);

//map()
let arr5=[1,2,3,4,5,6];
let res4=arr5.map(a=> a+2);
console.log(res4);

//pop()
let arr6=["Hello","India","World"];
let res5=arr6.pop();
console.log(res5);

//filter()
let arr7=["Javis","The","Developer"];
let res6=arr7.filter(word=>word.length>3);
console.log(res6);

//find()
let arr8=[1,2,3,4,5,6];
let res7=arr8.find(x=>x>3);
console.log(res7);

//findIndex()
let arr9=[1,2,3,4,5,6];
let res8=arr9.findIndex(x=>x==2);
console.log(res8);

//reverse()
let arr10=[1,2,3,4,5,6];
let res9=arr10.reverse();
console.log(res9);

//unshift
let arr11=[1,2,3,4,5,6];
let res10=arr11.unshift(10);
console.log(arr11);

// //delete
// let arr12=[1,2,3,4,5,6];
// let res11=arr12.delete(arr12[4]);
// console.log(arr12);

//Example..........
let arr13=["Hi", "Prepbytes"];
let res12=arr13.pop();
console.log(res12);

//Example..........
let arr14=[1,2,3,4];
let sum=0;
for(let i=0;i<arr14.length;i++){
    sum+=arr14[i];    
}
console.log(sum);