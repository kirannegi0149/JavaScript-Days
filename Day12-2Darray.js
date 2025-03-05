let arr= [
    [1, 2],
    [3, 4],
    [5, 6],
];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

//Find largest number?
let numbers=[3,45,2,60,34,556,345];
let largest=numbers[0];
for(let i= 1; i<numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}
console.log(largest);

//Find smallest number?
let num=[3,45,2,60,34,556,345];
let smallest=num[0];
for(let i= 1; i<numbers.length; i++){
    if(num[i] < smallest){
        smallest = num[i];
    }
}
console.log(smallest);