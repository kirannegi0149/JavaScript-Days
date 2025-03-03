
//maps.............................

let map1 = new Map();

map1.set("name", "Ravi");
map1.set("age",50);
map1.set("contact",true);

console.log(map1.get("name"));
console.log(map1.get("1"));// when we don't have any defined value so we get undefined..


//has()
console.log(map1.has("Email"));

//clear() --- by this mathod we can clear whole object
// map1.clear();
// console.log(map1);

//delete()----by this method we can delete a particular elements
map1.delete("age");
console.log(map1.size);

// sets............................

let set1= new Set();

set1.add("Aman");
set1.add(7830881234);
set1.add(true);

console.log(set1.values());
console.log(set1.has("Aman"));
console.log(set1.entries());

// set1.clear();
// set1.delete("Aman");
console.log(set1.size);


// Example 1 --

let sayings= new Map();
sayings.set("dog", "woof");
sayings.set("cat","meow");
sayings.size;
sayings.get("dog");
sayings.get("fox");
sayings.has("fox");
sayings.delete("fox");
sayings.size;

for(let[key,value] of sayings){
    console.log(key + " goes " + value);
}

// Example 2-----

let mySet = new Set();
mySet.add(1);

for(let[key,value] of sayings) {
    console.log(key + " goes " + value);
}

