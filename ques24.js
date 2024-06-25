let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banan", "orenge"];
// Tests for equality and inequality with strings
console.log("is apple is equal to apple");
console.log(apple == "apple");
// inequality
console.log("\n is apple is not equal to apple");
console.log(apple != "apple");
// Tests using the lowercase function
console.log("\nis APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical test equal to
console.log("\n ten is equl to twenty?");
console.log(ten == twenty);
// not equal
console.log("\n ten is not equl to twenty?");
console.log(ten != twenty);
// greater than
console.log("\n is Ten greater than zero?");
console.log(ten > 0);
//  less than
console.log("\n is twenty is less than 10?");
console.log(twenty < 10);
// greater than equal too
console.log("\n Ten grater than or Equl to 5?");
console.log(ten >= 5);
// less than
console.log("\n Twenty less than or Equl to 10?");
console.log(twenty <= 10);
// Tests using "and" and "or" operators
// using && (and)
console.log("\n Twenty is not aqual to 10 and 20 is greter than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\n Twenty is not aqual to 10 and 20 is greter than 10?");
console.log(twenty != 10 && twenty > 40);
// using || (OR)
console.log("\n Twenty is greater than 50 OR twenty is equl 20?");
console.log(20 > 50 || 20 == 20);
console.log("\n Twenty is greater than 50 OR twenty is not equl 20?");
console.log(20 > 50 || 20 != 20);
// Test whether an item is include array
console.log("\n is orenge include in my fruide array");
console.log(fruits.includes("orenge"));
// not include
console.log("is orenge not include in my fruide array");
console.log(!fruits.includes("orenge"));
export {};
