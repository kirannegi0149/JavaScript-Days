// Loops......................

//     for loop.........................
const n = 5;
//looping from i=1 to 5
for (let i = 1; i <= n; i++) {
    console.log("i am a programmer..");
}

// for..in = in each iteration of the loop,a key is assigned to the key variable.The loop continues for all object properties...
const student={
    name:"Manisha",
    class:7,
    age:12
}
//using for..in
for(let key in student){
    //display the properties
    console.log(`${key} => ${student[key]}`);
}

//Problem: Write a program which takes a number from user and print the table.
const num=prompt("Enter a number");
for(let i=1; i<=10; i++)
{
   console.log(`${num}*${i}= ${num * i}`);
}

// while loop.............................
let i =4;
while(i<10){
    console.log("The number is  "+ i);
    i++;
}

//do while loop................
let j =4;
do{
    console.log("The number is  "+ j);
    j++;
}while(j <= 10);

