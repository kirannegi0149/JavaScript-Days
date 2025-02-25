// if else
let x=5;
if(x>10)
{
    console.log("x is greater than 10");
}
else
{
    console.log("x is less than or equal to 10");
}

//If reminder is 0,print the statement true.....
//num=13
let num=13;
if(num%2==0)
{
    console.log("true");
}
else
{
    console.log("false");
}

//Prompt = A dialog box to the user with the message.......
// Using  Prompt.....................
let num1 = prompt("Enter your number");
if(num1 % 2==0)
{
    console.log("true");
}
else
{
    console.log("false");
}

//A school has following grading rule 

// 1.below 10 and 10-E
// 2.11-20-D
// 3.21-30-C
// 4.31-40-B
// 5.41-50-A
// ask user to enter marks out of 50 and print the grades using switch statement.
// Input:30
// Output:C

let marks =prompt("Enter your marks");
let grade;
switch(true){
    case marks>=41 && marks<=50:
    grade="A";
    break;
    case marks>=31 && marks<=40:
    grade="B";
    break;
    case marks>=21 && marks<=30:
    grade="C";
    break;
    case marks>=11 && marks<=20:
    grade="D";
    break;
    case marks>=0 && marks<=10:
    grade="E";
    break;
    default:
    grade= "Invalid Marks";
}
console.log(grade);

//Print the days of week..
let num2=prompt("Enter number");
let days;
switch(true){
    case num2==1:
        days="Sunday";
        break;
        case num2==2:
        days="Monday";
        break;
        case num2==3:
        days="Tuesday";
        break;
        case num2==4:
        days="Wednesday";
        break;
        case num2==5:
        days="Thursday";
        break;
        case num2==6:
        days="Friday";
        break;
        case num2==7:
        days="Saturday";
        break;
        default:
            days="Invalid num"
}
console.log(days);
