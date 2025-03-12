// Call, Apply and Bind in JS-Call

var person1 = {firstName:'Prepbytes', lastName:'Students'};
function test(greeting, year){
    console.log(greeting +' '+ this.firstName +' '+ this.lastName +' '+ year);
}
test.call(person1,'Hello'); //Hello Prebytes Students 2021

// Call, Apply and Bind in JS-Apply

var person = {firstName:'Lithum', lastName:'Merry'};
function test(greeting, year){
    console.log(greeting +' '+ this.firstName +' '+ this.lastName +' '+ year);
}
test.apply(person,['Hello',2021]); //Hello Prebytes Students 2021

//create objects using function constructor
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
const car1= new Car('Eagle', 'Talon TSi', 1993);
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);

//create objects using Class Constructor
class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}
const square = new Rectangle(10,10);
console.log(square.height);
console.log(square.width);

// Object.keys
const user = {
    a:'students',
    b:42,
};
console.log(Object.keys(user));

// Obejct.values
const user1 = {
    a:'student',
    b:24,
};
console.log(Object.values(user));



//Question : Create a object using function and class constructor both, and give two properties to it name and age.

// class constructor
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const per =new Person('Raghav',50);
console.log(per.name);
console.log(per.age);

// using function
 function Perso(name,age){
    this.name=name;
    this.age=age;
 }
 const pers = new Perso("Jyoti",20);
console.log(pers.name); // Output: Jyoti
console.log(pers.age);  // Output: 20
