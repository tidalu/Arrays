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
console.log(4, 5); // '45'



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

const isArr2AllStrings = arrr2.every((item) => typeof item === 'string');
console.log(isArr2AllStrings);


const isArr3AllBoolean = arrr3.every((item) => typeof item === 'boolean');
console.log(isArr3AllBoolean);

//// checking if all elements in an array satisfy a condition based on the index

const hey = [2, 4, 6, 8];

const allIndexesEven = hey.every((item, index) => index % 2 === 0 && item % 2 === 0);
console.log(allIndexesEven);

const allIndexesOdd = hey.every((item, index) => index % 2 === 1 && item % 2 === 1);
console.log(allIndexesOdd);


/// checking if every element in an array are truthy

const hey1 = [true, 1, 'hello', [], {}];
const hey2 = [true, 1, '', [], {}];

const areAllTruthy1 = hey1.every(Boolean);
console.log(areAllTruthy1); // true

const areAllTruthy2 = hey1.every(Boolean);
console.log(areAllTruthy2); // true


// mdn syntax 
// every(callbackFn)
// every(callback, thisArg)


//

function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true


//

const isSubset = (array1, array2) =>
    array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


// 

console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true

/////


// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
    arr[index + 1]--;
    console.log(`[${arr}][${index}] -> ${elem}`);
    return elem < 2;
});

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
    arr.push("new");
    console.log(`[${arr}][${index}] -> ${elem}`);
    return elem < 4;
});

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
    arr.pop();
    console.log(`[${arr}][${index}] -> ${elem}`);
    return elem < 4;
});

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2



////

const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
};
console.log(
    Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true


