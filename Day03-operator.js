//Arithmetic Operators
let a = 10;
let b = 5;

console.log(a + b);  // Addition: 10 + 5 = 15
console.log(a - b);  // Subtraction: 10 - 5 = 5
console.log(a * b);  // Multiplication: 10 * 5 = 50
console.log(a / b);  // Division: 10 / 5 = 2
console.log(a % b);  // Modulus: 10 % 5 = 0 (Remainder)
console.log(a ** b); // Exponentiation: 10^5 = 100000

//Comparison Operators
let a1 = 10;
let b1 = 5;
let c = "10";

console.log(a1 == c);   // Equal to (Loose Equality) -> true (checks only value)
console.log(a1 === c);  // Strict Equal to -> false (checks value and type)
console.log(a1 != b);   // Not Equal to -> true
console.log(a1 !== c);  // Strict Not Equal to -> true (checks value and type)

console.log(a1 > b1);    // Greater than -> true
console.log(a1 < b1);    // Less than -> false
console.log(a1 >= 10);  // Greater than or equal to -> true
console.log(b1 <= 5);   // Less than or equal to -> true

//Bitwise Operator
let num1 = 5;   // Binary:  0101
let num2 = 3;   // Binary:  0011

console.log(num1 & num2);  // Bitwise AND -> 0101 & 0011 = 0001 (1)
console.log(num1 | num2);  // Bitwise OR  -> 0101 | 0011 = 0111 (7)
console.log(num1 ^ num2);  // Bitwise XOR -> 0101 ^ 0011 = 0110 (6)
console.log(~num1);        // Bitwise NOT -> ~0101 = 1010 (-6)
console.log(num1 << 1);    // Left Shift  -> 0101 << 1 = 1010 (10)
console.log(num1 >> 1);    // Right Shift -> 0101 >> 1 = 0010 (2)
console.log(num1 >>> 1);   // Zero-fill Right Shift -> 0101 >>> 1 = 0010 (2)

//postfix increment and prefix increment

let num3 = 5;
let num4 = 10;

// Pre-increment: Increments first, then returns the new value
console.log(++num3);  // Output: 6
console.log(num3);    // Output: 6 (value is updated)

// Post-increment: Returns the original value first, then increments
console.log(num4++);  // Output: 10 (original value before increment)
console.log(num4);    // Output: 11 (value is updated)

//postfix decrement and prefix decrement
let num5 = 8;
let num6 = 15;

// Pre-decrement: Decrements first, then returns the new value
console.log(--num5);  // Output: 7
console.log(num5);    // Output: 7 (value is updated)

// Post-decrement: Returns the original value first, then decrements
console.log(num6--);  // Output: 15 (original value before decrement)
console.log(num6);    // Output: 14 (value is updated)

//Logical operator
let num7 = 10;
let num8 = 5;

// Logical AND (&&) → Returns true if both conditions are true
console.log(num7 > 5 && num8 < 10);  // true (both conditions are true)
console.log(num7 < 5 && num8 < 10);  // false (first condition is false)

// Logical OR (||) → Returns true if at least one condition is true
console.log(num7 > 5 || num8 > 10);  // true (first condition is true)
console.log(num7 < 5 || num8 > 10);  // false (both conditions are false)

// Logical NOT (!) → Reverses the boolean value
console.log(!(num7 > 5));  // false (num7 > 5 is true, so !true → false)
console.log(!(num8 < 2));  // true  (num8 < 2 is false, so !false → true)


//Ternary Operator
let num9 = 15;
let num10 = 20;

// Check which number is greater
let result = (num9 > num10) ? "num9 is greater" : "num10 is greater";
console.log(result);  // Output: "num10 is greater"

// Check if num9 is even or odd
let isEven = (num9 % 2 === 0) ? "num9 is even" : "num9 is odd";
console.log(isEven);  // Output: "num9 is odd"

// Nested ternary example
let checkNum10 = (num10 > 10) ? (num10 > 25 ? "Greater than 25" : "Between 10 and 25") : "10 or less";
console.log(checkNum10);  // Output: "Between 10 and 25"


//Comma Operator
let num11 = (5, 10);  
console.log(num11);  // Output: 10 (returns the last value)

let num12 = 0;
num12 = (num12 += 2, num12 *= 3, num12 - 1);
console.log(num12);  // Output: 5
