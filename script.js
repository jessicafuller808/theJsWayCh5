// == IMPROVED HELLO ==
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  console.log(message);
}

// TODO: ask user for first and last name
//let firstName = prompt('What is your first name?');
//let lastName = prompt('What is your last name?');

// TODO: call sayHello() and show its result
 //sayHello(firstName, lastName);

//----------------------------------------------------------------------------

// == NUMBER SQUARING ==
// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  // TODO: complete the function code
  return(Math.pow(x,2));
}

// Square the given number x
const square2 = (x) => {return(Math.pow(x,2))}; // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

//When it's done, update the program so that it shows the square of every number between 0 and 10.

function update() {
  for (i = 1; i < 11; i++) {
    console.log(`${i}: ` + square1(i));
  }
}

update();

//----------------------------------------------------------------------------

// == Calculator ==

// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program

function calculate(num1, op, num2) {
  if (op === "+") {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  } else if (op == "-") {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  } else if (op == "*") {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
  } else if (op == "/") {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
  }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

//----------------------------------------------------------------------------

// == Circumfrence and area of a Circle ==
//Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
//The value of number π (Pi) is obtained with Math.PI in JavaScript.
//You might want to use the exponentiation operator ** to perform computations.

// C = 2πr
// A = πr2

let radius = prompt('What is the radius?');

function circleCircumference() {
  let circumference = 2 * Math.PI * radius;
  console.log('Circumference: ' + circumference);
}

function circleArea() {
  let area = Math.PI * radius ** 2;
  console.log('Area: ' + area);
}

circleCircumference();
circleArea();