// concat method

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = arr1.concat(arr2) // [1, 2, 3, 4, 5, 6]

// 
const str1 = 'Hello'
const str2 = 'World'

console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));


// syntax 
// concat(str1)
// concat(str1, str2)
// concat(str1, atr2, /* ..., */ strN) // one or more strings can be written , if there is not any parameter it makes the shallow copy of the element
//

const hello = "Hello, "
console.log(hello.concat("Kevin", ". Have a nice day"))
// hello Kevin. Have a nice day

const greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList)); // "Hello Venkat!" ...greetList is why written, it has 3 elemeents to cover all of them, we write it with 3 dots in the beginning
console.log("".concat({}));
console.log("".concat([]));// gives empty string
console.log("".concat(null));
console.log("".concat(true));
console.log(4,5); // '45'



// 
const fruits = ['apple ', 'orange ', 'banana '];
const prefix = 'My favorite fruits are: ';
const suffix = '!';

const message = prefix.concat(...fruits, suffix);

console.log(message); // My favorite fruits are : apple,orange,banana

//

const params = { name: 'Alice', age: 36, city: 'San Francisco' };

const queryString = Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

const url = `https://example.com?${queryString}`;

console.log(url);

console.log(queryString);

//////////////////////////////////////////////////////////////////////
// every() method
// syntax
// Array.every(callback, [thisArg])  // every() method test whether every element passes the test implemented by a function, and it returns boolean value

const numbers = [12, 15, 18, 20];

const allGreaterThanTen = numbers.every((num) => num > 10);

console.log(allGreaterThanTen); // returns true

///

const words = ['apple', 'banana', 'cherry', 'dragonfruit'];

const allLengthGreaterThanFive = words.every((word) => word.length > 5);

console.log(allLengthGreaterThanFive); // returns

// checking if all elements in an array are of the same data type

const arrr1 = [1, 2, 3, 4];
const arrr2 = ['apple', 'banana', 'cherry', 'dragonfruit'];
const arrr3 = [true, false, true, false];

const isArr1AllNumbers = arrr1.every((item) => typeof item === 'number');
console.log(isArr1AllNumbers);


