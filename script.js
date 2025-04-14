/* // Simple test code to check execution
console.log("Script is executing successfully!");
//single line comment
/*
multi line comment
multi line comment
*/
// This is a single line comment

// variables - containers tha store data.
// declaration of variables
//1. var - function scoped, can be declared multiple times
// syntax - variableName = value;
var name = "John Doe";
console.log(name); // john   doe
//2. let - block scoped, cannot be redeclared
// syntax - let variableName = value;
let age = 25;
console.log(age); // 25
//3. const - block scoped, cannot be redeclared, cannot be reassigned
// syntax - const variableName = value;
const pi = 3.14;
console.log(pi); // 3.14

// data types
// primitive data types - number, string, boolean, null, undefined, symbol
//1. sring - sequence of characters
//2. number - integer, float
//3. boolean - true or false
let isStudent = true; // boolean
console.log(isStudent); // true
//4. null - empty value
let distance = null; // null
console.log(distance); // null
//5. undefined - variable is declared but not assigned a value
let score; // undefined
console.log(score); // undefined
//6. symbol - unique and immutable value

// non-primitive data types - object, array, function
//1. object - collection of key-value pairs
let person = {
  name: "John Doe",
  age: 25,
  isStudent: true,
};
console.log(person); // { name: 'John Doe', age: 25, isStudent: true }

console.log(person.name); // John Doe
console.log(person["age"]); // 25

//2. array - collection of values
//syntax - let arrayName = [value1, value2, value3];
let fruits = ["apple", "banana", "orange"];
console.log(fruits); // [ 'apple', 'banana', 'orange' ]
console.log(fruits[0]); // apple

// Creating an object for a house
let house = {
  color: "blue",
  size: "2000 sqft",
  rooms: 4,
  hasGarage: true,
  PaymentAddress: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  getHouseInfo: function () {
    return `${this.color} house with ${this.rooms} rooms`;
  },
};
console.log(house); // { color: 'blue', size: '2000 sqft', rooms: 4, hasGarage: true }

// Creating an array of African countries
let africanCountries = ["Nigeria", "Kenya", "South Africa", "Egypt", "Ghana", "Burudi"];
console.log(africanCountries); // [ 'Nigeria', 'Kenya', 'South Africa', 'Egypt', 'Ghana' ]
console.log(africanCountries[6]); // Nigeria


//Operators
//1. Arithmetic operators - +, -, *, /, %, ++, --
// assign value 10 to x
//+= - addition assignment operator
//-= - subtraction assignment operator
//*= - multiplication assignment operator
//%= - modulus assignment operator
//**= - exponentiation assignment operator
let x = 5; // assign value 5 to x
let additionAssignment = x += 5; // 15
let subtractionAssignment = x -= 5; // 5
let multiplicationAssignment = x *= 5; // 50
let modulusAssignment = x %= 5; // 0
let exponentiationAssignment = x **= 5; // 100000

//2. Arithmetic operators - +, -, *, /, %, ++, --
// assign value 10 to x
let y = 10; // assign value 10 to y
let addition = x + y; // 15
let subtraction = x - y; // 5
let multiplication = x * y; // 50
let division = x / y; // 0.5
let modulus = x % y; // 0
let exponentiation = x ** y; // 100000


//3. Comparison operators - ==, ===, !=, !==, >, <, >=, <=
// == - equal to
let c = 5;
let d = 10;
// === - equal value and equal type
let isEqual = c === d; // false
// != - not equal to
let isNotEqual = c != d; // true
// !== - strict not equal value and not equal type
let isStrictNotEqual = c !== d; // true
// > - greater than
let isGreaterThan = c > d; // false
// < - less than
let isLessThan = c < d; // true
// >= - greater than or equal to
let isGreaterThanOrEqualTo = c >= d; // false
// <= - less than or equal to
let isLessThanOrEqualTo = c <= d; // true

//type conversion
//1. implicit type conversion
let implicitConversion = 5 + "5"; // 55
//2. explicit type conversion
let explicitConversion = Number("5") + 5; // 10
console.log(c == d); //true - implicit conversion
console.log(c === d); //false - explicit conversion


//logical operators
//1. logical AND - &&
console.log(c>d && c == d); // false
//2. logical OR - ||

console.log(c>d || c == d); // true
//3. logical NOT - !
console.log(!(c>d)); // true
//Functions reusable blocks of code that perform a specific task
// syntax - function functionName(parameters) { code to be executed }
//1. function declaration
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Brian")); // Hello Brian

// Function to introduce a person
function introduce(name, origin, occupation) {
  return `My name is ${name}. I am from ${origin} and I am a ${occupation}.`;
}
console.log(introduce("Brian", "USA", "Developer")); // My name is John Doe. I am from USA and I am a Developer.

// Function to calculate the exponential of two integers
function calculateExponential(base, exponent) {
  return base ** exponent;
}
console.log(calculateExponential(2, 3)); // 8
