// *
// * *
// * * *
// * * * *
// * * * * *

const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    str += '\n';
}
console.log(str);

// * 
// * * 
// *   * 
// *     * 
// * * * * * 
const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === n) {
            str += '* ';
        } else {
            str += '  ';
        }
    }
      str += '\n';
}

console.log(str);  

//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    
    for (let j = 1; j <= n; j++) {
        if (j <= n - i) {
            str += '  ';
        } else {
            str += '* ';
        }
    }
    str += '\n';
}    

console.log(str);

//     *
//    ***
//   *****
//  *******
// *********
const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += '*';
    }
    str += row + '\n';
}

console.log(str);
