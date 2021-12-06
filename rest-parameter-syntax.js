/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
// Will output 6 as the sumAll function only takes 3 arguments
console.log("Sum2:", sum2);
// Function using ...rest
// Rest syntax places all other values in an array which is then looped over and added to the sum
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3);
