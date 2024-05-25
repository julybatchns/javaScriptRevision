// // Execution Context

// // * In JavaScript, the execution context is an abstract concept that represents the environment within which JavaScript code is evaluated and executed.

// // ! 1. Global Execution Context (GEC).
// // ! 2. Execution Context (GEC).

// // JS is a synchronous and single threaded

// // Phase 1 => Execution Context = Variable Environment or Memory Allocation Phase
// // Phase 2 =>  Thread of Execution

// // Global Execution Execution

// // console.log(x); // undefined
// // var x = 5;

// // function foo() {
// //   console.log(y); // undefined
// //   var y = 10;
// //   console.log(y); // 10

// //   function bar() {
// //     console.log(z); // undefined
// //     var z = 15;
// //     console.log(z); // 15
// //   }

// //   bar();
// // }

// // foo();
// // console.log(x);

// // Device > OS > Browser > (JS Engine + Browser APIs + Other)
// // JS Engine > Call Stack > Global Exceution Context > Execution Context.

// // Hoisting

// // ? Hoisting with Variables (var)

// // console.log(a); // undefined
// // var a = 10; //
// // console.log(a); // 10

// // ? Hoisting with Functions

// // console.log(hello()); // Hello, World

// // function hello() {
// //   return "Hello, World!";
// // }

// // ? Hoisting with let and const

// // console.log(b);
// // let b = 20;
// // console.log(b);

// // * let and const declarations are hoisted but are not initialized.
// // * This results in a "temporal dead zone" from the start of the block until the declaration is encountered, causing a ReferenceError if accessed before initialization.

// // ? Hoisting with Function Expressions
// // console.log(bar); // undefined
// // console.log(bar());

// // function bar() {
// //   return "Hello, again";
// // }

// // let bar = function () {
// //   return "Hello, again!";
// // };
// // console.log(bar());

// // ? 1. The variable bar is hoisted, so console.log(bar) before the assignment prints undefined.
// // ? 2. However, the function expression assigned to bar is not hoisted, so calling bar() before the assignment results in a TypeError.

// // Reference Error is not defined
// // Syntax Error
// // Type Error

// // Window => Global Object in your Dear Browser

// // ! The window object in JavaScript represents the browser's window in which the script is running. It is the global object for JavaScript running in the browser, meaning all global variables and functions are properties and methods of the window object.

// // function showAlert() {
// //   window.alert("This is an Alert!");
// // }

// // function getWIndowDimensions() {
// //   let width = window.innerWidth;
// //   let height = window.innerHeight;
// //   console.log("Window width: " + width + ", height: " + height);
// // }

// // // function openNewWindow() {
// // //   let newWindow = window.open("www.google.com", "_blank", "width=600, height=400");
// // // }

// // var myName = "Shubham Shrivastava";
// // console.log(window.myName);

// // "this keyword in JS";

// // ? In JavaScript, the this keyword refers to the object it belongs to. Its value depends on where it is used:

// // ! In a method, this refers to the owner object.
// // ! Alone, this refers to the global object (in browsers, it’s the window object).
// // ! In a function, this refers to the global object (strict mode: undefined).
// // ! In an event, this refers to the element that received the event.
// // ! In an arrow function, this retains the value of the enclosing lexical context's this.

// // Global Context
// // console.log(this);

// // // Function context
// // function show() {
// //   console.log(this);
// // }

// // show(); // In non-strict mode, logs the global object (window in browsers)
// // In strict mode, logs undefined

// // Constructor Function
// // function Person(name) {
// //   this.name = name;
// // }

// // const person1 = new Person("Bob");
// // console.log(person1.name);

// // const button = document.createElement("button");
// // button.textContent = "Click me";
// // button.onclick = function () {
// //   console.log(this);
// // };

// // Object Method
// // const obj = {
// //   name: "Alice",
// //   greet: function () {
// //     console.log(this.name);
// //   },
// // };

// // obj.greet(); // Alice

// // Arrow Function
// // const obj3 = {
// //   name: "Shubham",
// //   greet: () => {
// //     console.log(this.name);
// //   },
// // };

// // obj3.greet();

// // ? In JavaScript, arrow functions do not have their own this context. Instead, they inherit this from the parent scope at the time they are defined. This is known as lexical scoping. This behavior is different from traditional functions, which have their own this depending on how they are called.

// // Regular function example
// // const obj1 = {
// //   name: "Alice",
// //   regularFunction: function () {
// //     console.log(this.name); // 'this' refers to obj1
// //   },
// // };

// // obj1.regularFunction(); // Logs 'Alice'

// // Arrow function example
// // const obj2 = {
// //   name: "Bob",
// //   arrowFunction: () => {
// //     console.log(this.name); // 'this' refers to the global object (or undefined in strict mode)
// //   },
// // };

// // obj2.arrowFunction(); // Logs undefined (in strict mode) or the global object's name (which is not common)

// // Since arrow functions capture the this value from their enclosing context, they are particularly useful in scenarios where you want to maintain the this context from the surrounding scope, such as within methods, event listeners, or nested functions.

// ("This Keyword with Regular Function & Arrow Functions");

// const obj = {
//   name: "Shubham",
//   regularFunction: function () {
//     console.log(this.name);
//   },
//   arrowFunction: () => {
//     console.log(this.name);
//   },
// };

// obj.regularFunction();
// obj.arrowFunction();

// const myName = () => {}

// const myObject = {
//   name: "Mayank",
//   printMyName: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   },
// };

// myObject.printMyName();

// () => {console.log(this.name);} >> setTimeout() >> printMyName >>

// ? Undefined and Not Defined

// function checkVariable(variableName) {
//   try {
//     let variableValue = eval(variableName); // undefined
//     if (variableName === undefined) {
//       return `The Variable ${variableName} is undefined.`;
//     } else {
//       return `The Variable ${variableName} has value: ${variableValue}`;
//     }
//   } catch (error) {
//     if (error instanceof ReferenceError) {
//       return `The Variable ${variableName} is not defined.`;
//     } else {
//       throw error;
//     }
//   }
// }

// let a;
// let b = 29;

// console.log(checkVariable("a")); // Output:
// console.log(checkVariable("b")); // Output:
// console.log(checkVariable("c")); // Output:

// ? Scope in JavaScript defines the accessibility of variables and functions.
// 1. Global
// 2. Local
// 3. Block {} control - if ,else, for,
// 4. Lexical Environment.

// Global Scope
// let globalVar = "I am a global variable.";

// function outerFunction() {
//   // Local Scope
//   let outerVar = "I am an outer Function variable.";

//   function innerFunction() {
//     let innerVar = "I am an inner Function variable.";

//     console.log(globalVar);
//     console.log(outerVar);
//     console.log(innerVar);
//   }

//   innerFunction();
//   console.log(innerVar);
// }

// outerFunction();
// // console.log(outerVar);
// console.log(globalVar);

// 1. Global Scope: The variable globalVar is declared in the global scope, so it can be accessed from anywhere in the code.
// 2. Function Scope: The variable outerVar is declared inside outerFunction, so it can only be accessed within outerFunction and its nested functions.

// Scope Chain: Inside innerFunction, the globalVar is found in the global scope, outerVar is found in the outer function's scope, and innerVar is found in its own local scope. This demonstrates the scope chain in action.

// 3.

// Block Scope

// let globalVar = "I am a global variable.";

// function exampleFunction() {
//   let functionVar = "I am a function variable.";

//   if (true) {
//     let blockVar = "I am a bloc-scoped variable.";
//     console.log(blockVar);

//     let globalVar = "I am shadowing the global variable.";
//     console.log(globalVar);
//   }
//   console.log(blockVar);
//   console.log(functionVar);
//   console.log(globalVar);
// }

// exampleFunction();
// console.log(globalVar);

// I am a bloc-scoped variable.
// I am shadowing the global variable.
// Refernce Error : blockVar is not defined.
// I am a function variable.
// I am a global variable.
// I am a global variable.

// Write a function that takes a string and returns it reversed.

// 1. Understand the Problem:-
// ? Input: a string("Shubham")
// ? Output: a reverse string("mahbuhS")
// ? Constraints: Handling a empty string("") or single characters("s")

// 2. Break Down the Problem:-
// ! Split the string into an array of characters.
// ! Reverse the array.
// ! Join the array back to string.

// function reverseString(string) {
//   const stringArraySplitted = string.split("");
//   console.log(stringArraySplitted);
//   const reversedArray = stringArraySplitted.reverse();
//   console.log(reversedArray);
//   const result = reversedArray.join("");
//   return result;
// }

// console.log(reverseString("Abhishek"));

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }

//   return y;
// }

// var z = x(); // var z = y // var z = function y() {console.log(a)}
// console.log(z());

// b();
// var a = 10;
// var b = function () {
//   console.log(a);
// };
// b();

// Closures

// Function bundled along with it's lexical scope is closure.

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z());

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }

// z();

// Advantages of Closures
// ? 1. Module Design Pattern.
// ? 2. Currying
// ? 3. Memoization.
// ? 4. Data Hiding & Encapsulation.
// ? 5. setTimeouts.

// ? 1. Module Design Pattern.

// JS File: - Auth.js
// const authModule = (function () {
//   let loggedInUser = null;

//   function login(username, password) {
//     loggedInUser = username;
//   }

//   function logout() {
//     loggedInUser = null;
//   }

//   function getUserInfo() {
//     return loggedInUser;
//   }

//   return {
//     login,
//     logout,
//     getUserInfo,
//   };
// })();

// authModule.login("Shubham", "newtonSchool");

// ? 2. Currying

// function add(x, y) {
//   return x + y;
// }

// console.log(add(4, 5));

// function curriedAdd(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const addTwo = curriedAdd(2); // 2 + function (y) {return x + y;};
// console.log(addTwo(3)); // 2 + 3

// parameters, variables, function,etc.

// function calculateTotalPrice(taxRate) {
//   return function (price) {
//     return price + price * (taxRate / 100);
//   };
// }

// const calculateTotalPrice = (taxRate) => (price) =>
//   price + price * (taxRate / 100);

// const calculateSalesTax = calculateTotalPrice(8);
// const totalPrice = calculateSalesTax(100);
// console.log(totalPrice);

// ? 5. setTimeouts.

// function showMessage(message, delay) {
//   setTimeout(() => {
//     console.log(message);
//   }, delay);
// }

// showMessage("Hello July Batch", 3000);

// Tricky Questions

// function x() {
//   for (var i = 1; i <= 8; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Closures Learning!");
// }

// x();

// 1. Continue with Closure
// 2. Functions
// 3. Callbacks
// 4. JavaScript Event Loop
// 5. Coding Challenges

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// outer()();

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// outer()();

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// outer()();

// Will inner function have the access to outer function argument?
// function outer(str) {
//   let a = 10;
//   function inner() {
//     console.log(a, str);
//   }
//   return inner;
// }
// outer("Hello There")();

// function outest() {
//   var c = 20;
//   function outer(str) {
//     let a = 10;
//     function inner() {
//       console.log(a, c, str);
//     }
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// outest()("Hello There")();

// Functions in JavaScript

// Function is a machine which takes an Input and returns you back an Output

// function solveME(num) {
//   return num + 2;
// }

// solveME(3); // 5

// What is Function Statement or Function Declaration?
// Normal or Regular Functions

// function a() {
//   console.log("This is called a function statement.");
// }

// a();

// What is Function Expression?
// Anonymous Function
// var b = function () {
//   console.log("Hello, I am a Anonymous Function.");
// };
// Arrow Function
// var b = () => {
//   console.log("Hello, I am a Anonymous Function.");
// };

// Differnce between Function Statement and Function Expression
// 1. Hoisting

// var a = 2;

// vikas();

// function vikas() {
//   console.log("I am learning");
// }

// var hemant = function () {
//   console.log("Hello, me as Hemant");
// };
// hemant();

// function() {

// }

// Named Function Expression

// var abhishek = function mayank() {
//   console.log("We are almost there!");
// };

// abhishek();
// mayank();

var b = function (a, c) {
  //1
  console.log(a, c);
};

b(2, 4); // 2

// ! What is First Class Function aka First Class Citizens?
// * We can pass functions inside a function as arguments and /or return a function(HOF). These ability are altogether known as First class function. It is programming concept available in some other languages too.

// var abc = function (param1) {
//   console.log(param1);
// };
// abc(function () {});

// Write a function that takes an array of numbers and returns the largest number.

// function findLargestNumber(arr) {
//   return Math.max(...arr);
// }

// console.log(findLargestNumber([2, 44, 56, 23, 999, 34567, 12]));

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayGoodbye() {
//   console.log("GoodBye!");
// }

// greet("Vikas", sayGoodbye);

// function showMessage() {
//   console.log("This message is shown after 2 seconds");
// }

// setTimeout(showMessage, 2000);

// document.getElementById("myButton").addEventListener("click", function () {
//   alert("Button was clicked!");
// });

// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map(function (number) {
//   return number * number;
// });

// console.log(squaredNumbers);

// Asynchronous Callback Chain with Arguments

// function firstFunction(callback) {
//   console.log("First Function is Executing...");
//   setTimeout(function () {
//     const data = "Data from firstFunction";
//     console.log("Asynchronous operation in first function is done.");
//     callback(data);
//   }, 1000);
// }

function firstFunction() {
  console.log("First function is executing.");
  return new Promise((resolve) => {
    setTimeout(function () {
      const data = "Data from firstFunction";
      console.log("Asynchronous operation in first function is done.");
      resolve(data);
    }, 1000);
  });
}

// function secondFunction(data, callback) {
//   console.log("Second Function is Executing..." + data);
//   setTimeout(function () {
//     const moreData = data + "Data from secondFunction";
//     console.log("Asynchronous operation in second function is done.");
//     callback(moreData);
//   }, 1000);
// }

function secondFunction(data) {
  console.log("Second function received:", data);
  return new Promise((resolve) => {
    setTimeout(function () {
      const moreData = data + " and data from secondFunction";
      console.log("Asynchronous operation in second function is done.");
      resolve(moreData);
    }, 1000);
  });
}

function thirdFunction(finalData) {
  console.log("Third function recieved", finalData);
}

// firstFunction(function (dataFromFirst) {
//   secondFunction(dataFromFirst, function (dataFromSecond) {
//     thirdFunction(dataFromSecond);
//   });
// });

firstFunction()
  .then((dataFromFirst) => {
    return secondFunction(dataFromFirst);
  })
  .then((dataFromSecond) => {
    thirdFunction(dataFromSecond);
  })
  .catch((error) => {
    console.error("erro", error);
  });
