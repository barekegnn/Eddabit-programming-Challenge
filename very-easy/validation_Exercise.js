// Is the Number Less than or Equal to Zero?
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

//    puedo Code
var num;
function validateNumber(num){
  if (num < 0 || num == 0) {
    return true;
  } 
else {
    return false;
  }
}

console.log(validateNumber(-3));