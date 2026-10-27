// this is how you add external js
console.log("Natsuki Subaru")
// console.log() is the command to print something to the developer console in your browser

// ========================================================
// Variable = building block of any program..
//            you can think of variables as "storage containers" for data in your code

// You can declare varibales using the "let" keyword

let firstname = "Akshat";
let lastname = "Trivedi";

console.log(firstname,lastname);
console.log(lastname);

let age = 18;
// age = 88;

console.log(age)

// Notice the lack of let on line 4 - we don’t need it since the variable has already been declared earlier and we are just re-assigning it here!

// Re-assigning is cool and all, but what if we don’t want it to happen? For example we might have a constant pi which will never need to be re-assigned. We can accomplish this using the const keyword

const pi = 3.14;

// pi= 10; an error will be thrown 

console.log(pi)

// ways to declare a variable:
// "let", which we can re-assign.
// "const", which we can’t re-assign and will throw an error if we try.
// "var", its also a old way but not used anymore



// ==============================================================
// Numbers = numbers are building block of programming logic
// js follows the standard mathematical order of operations (PEMDAS, BODMAS)
// Paranthesis>Exponentiation>Multiplication and Division from left to right >Addition and Subtraction from left to right


