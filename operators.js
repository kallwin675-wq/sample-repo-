//arithmetic operators
console.log("Arithmetic Operators:")
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

//assignment operators
console.log("Assignment Operators:")
let c = 10;
c += 5; // c = c + 5
console.log(c);
c -= 5; // c = c - 5
console.log(c);
c *= 5; // c = c * 5
console.log(c);
c /= 5; // c = c / 5
console.log(c);

//comparison operators
console.log("Comparison Operators:")
let x = 10;
let y = 5;
console.log(x == y); // Equal to
console.log(x != y); // Not equal to
console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x >= y); // Greater than or equal to
console.log(x <= y); // Less than or equal to 
console.log(x === y); // Strict equal to
console.log(x !== y); // Strict not equal to
 
//logical operators
console.log("Logical Operators:")
var v =10
var d =5 
console.log(v > 5 && d < 10); // Logical AND
console.log(v > 5 || d < 10);       // Logical OR
console.log(!(v > 5));              // Logical NOT

//unary operators
console.log("Unary Operators:")
var e = 30;
console.log(e++)
console.log(e--)  
console.log(++e) 
console.log(--e)

//ternary operator
console.log("Ternary Operator:")
var s= 10
var z =30
var result = (s > z) ? "s is greater than z" : "s is not greater than z"
console.log(result)


//data types 
console.log("Wecome to primitive data types ")
var number = 42; // Number
console.log(number)
var string = "Hello, World!"; // String
console.log(string)
var boolean = true; // Boolean
console.log(boolean)
var bigInt = 9007199254740991n // BigInt
console.log(bigInt)
var symbol = Symbol("unique") // Symbol
console.log(symbol)
var nullValue = null; // Null
console.log(nullValue)

//non-primitive data types
console.log("Wecome to non-primitive data types ")
var object = { name: "Alice", age: 30 }; // Object
console.log(object)
var array = [1, 2, 3, 4, 5]; // Array
console.log(array[0])
console.log(array.length)
var functionExample = function() { // Function
    console.log("This is a function");
}
console.log(functionExample)

//