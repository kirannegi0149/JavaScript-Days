//let str=[0,0,0,0,1,0,1,1,1,0] count the element
let str=[0,0,0,0,1,0,1,1,1,0];
let one=0;
let zero=0;
for(let i of str){
    if(i==0){
        zero++;
    }
    else{
        one++;
    }
}
console.log("zero " +"= "+zero);
console.log("one "+"= "+one);

//let str1=[50,16,80,70,10] find the largest element
let str1=[50,16,80,70,10];
let res=str1.sort();
let res1=res.pop()
console.log(res1);

//let str1=[50,16,80,70,10] find the smallest element
let str2=[50,16,80,70,10];
let sm=str1.sort();
let sm1=sm.shift();
console.log(sm1);

//let str2=[2,1,3,8,4,6,5] find the odd and even
let str3=[2,1,3,8,4,6,5,9,7,5,3,14];
let even=0;
let odd=0;
for(let i of str3){
    if(i%2==0){
        even++
    }
    else{
        odd++;
    }
}
console.log("even " + "= " + even);
console.log("odd " + "= "+ odd);

//let string="Kiran" find the vowels 
let string1 = "Kiran";
let re=string1.toLowerCase();
let newStr=0;
for(let i=0; i<=re.length; i++)
{
    if(re[i]=="a"||re[i]=="e"||re[i]=="i"||re[i]=="o"||re[i]=="u")
    {
       newStr++;
    }
    else{}
}
console.log(newStr);
