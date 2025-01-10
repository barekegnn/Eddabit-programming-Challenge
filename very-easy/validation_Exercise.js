// #1) Is the Number Less than or Equal to Zero?
// **Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.**

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// // lessThanOrEqualToZero(-2) ➞ true

// understand the problem

// =>write a function.
// => takes a Number as its only argument.
// => if a number entered is lessthan or equeal to 0, it return true.
// => otherwise it returns false.

//    CODE

// var num;
// function validateNumber(num) {
//   if (num < 0 || num == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//  console.log(validateNumber(-3));

// #3) Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true
// Notes
// N/A

//      STPES(psuedo code)
//  write a Function  called checkNumber
//  the function accepts two numbers as an arguments
//  if isNaN(num1, num2), return "Please enter only inter value"
//  else if num1 + num2 < 100, then return true
//  else return false

//  CODE
let a, b;
function checkNumber(a, b) {
  let total = a + b;
  if (isNaN(a) || isNaN(b)) {
    return "please enter only numerical value";
  } else if (total < 100) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumber('kebe', 45));
