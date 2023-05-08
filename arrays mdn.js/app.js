/// /////////////////////////
// ======================////
//==  concat() method    ==//
// ======================////
/////////////////////////////

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
/// /////////////////////////
// ======================////
//==   every() method    ==//
// ======================////
/////////////////////////////

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

console.log([1, , 3].every((x) => x !== undefined)); // true //every command skip the empty slot
console.log([2, , 2].every((x) => x === 2)); // true //like here it is skipping and saying there all are 2

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


/// /////////////////////////
// ======================////
//== CopyWithin() method ==//
// ======================////
/////////////////////////////

// it shalloow copies part of the array to another location in the same array and returns it without modifying its length

//syntax

// array.copyWithin(target, start, end)

const cpy = [1, 2, 3, 4, 5];

cpy.copyWithin(0, 3);
console.log(cpy);


const cpy1 = ['apple', 'orange',  'cherry', 'date'];
cpy1.copyWithin(1, 2, 4);
// a c d b c d 
console.log(cpy1);

const let1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let1.copyWithin(3, 1, 4);
// a b c  b c d  g 


// 
const cpy3 = [1, 2, 3, 4, 5];

cpy3.copyWithin(2, 0, 2);
console.log(cpy3);
// 1, 2, 1,2, 5,

//

const cpy4 = ['a', 'b', 'c', 'd', 'e'];

cpy4.copyWithin(1, 3, 4) 
console.log(cpy4);
// a, d, c, d, e


///
const cols = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
cols.copyWithin(2, 4);
console.log(cols);

// 'red', 'orange', 'blue', 'indigo',  'blue', 'indigo', 'violet'

//
const prices = [10, 20, 30, 40, 50];

prices.copyWithin(0, 3, 4);

console.log(prices);

// 40, 20, 30, 40, 50

/// mdn syntax
// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start, end)


// 
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// 1, 2, 3, 1, 2, 


//
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3 ,-1));
//  1 2 3 3 4  

// it cares about empty slot

console.log([1, , 3].copyWithin(2, 1, 2));

// calling copyWithin() method ON NON-array objects

const arrayLike1 = {
    length: 5,
    3: 1,

};

console.log(Array.prototype.copyWithin.call(arrayLike1, 0, 3));



/// /////////////////////////
// ======================////
//==  entries() method   ==//
// ======================////
/////////////////////////////


// SYNTAX
// array.entries()

const ent1 = ['apple', 'banana', 'orange'];
const entries = ent1.entries();

console.log(entries.next(2).value);
console.log(entries.next().value);
console.log(entries.next().value);


//
const colors1 = ['red', 'green', 'blue'];

for(let [index, value] of colors1.entries()) {
    console.log(`The value of element ${index} is ${value}`);
}


//


const ent2 = [1, 2, 3, 4, 5];

const filteredEntries = Array.from( ent2.entries()).filter(([index, value]) => value % 2 === 0);

console.log(filteredEntries);
console.log(filteredEntries);


//
const a = ['a', 'b', 'c'];

for(const [index, value] of a.entries()) {
    console.log(`The value of element ${index} is ${value}`);
}

const arrEnt = a.entries();

for(const element of arrEnt) {
    console.log(element);
}

// entries() will visit empty slots as if they are undefined

for(const element of [, 'a'].entries()){
    console.log(element);
}

// calling entries on non-array objects

// the entries() method reads the length property of this and then accesses each integer index


const arrLike = {
    length: 3,
    0: 'a',
    1: 'b',
    2: 'c',
}

for( const entry of Array.prototype.entries.call(arrLike)) {
    console.log(entry);
}



/// /////////////////////////
// ======================////
//==   fill() method     ==//
// ======================////
/////////////////////////////

// Syntax 
// array.fill(value[, start[, end]]) // index end is not included
// array.fill(value)
//array.fill(value, start, end)
//array.fill(value, start)
// start(default 0)

const fill = new Array(5);
fill.fill(1);
console.log(fill);

// fillling the part of the array with single value

const fill1 = [1, 2, 3, 4, 5];

fill1.fill(0, 2, 4);
console.log(fill1);

/// filling the array with different value

const fill2 = new Array(5);
fill2.fill(0, 0, 2);
fill2.fill(1, 2);
console.log(fill2);

// fill an array with objects

const fill3 = new Array(3);
const obj = {name: 'john', age: 30};
fill3.fill(obj);
console.log(fill3);

// simple from mdn

console.log([1,2,3,4].fill(0, 2, 4));
console.log([1,2,3,4].fill(5, 1));
console.log([1,2,3,4].fill(6));


// using fill 

console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3] exit is not included so it is not filling anything
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3] this is also the same 
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]   
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3] as you see here if it is empty it is out of scope so it is not filing anything
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3] fill gives the same length so it is not filling anything
console.log(Array(3).fill(4)); // [4, 4, 4] 

// object
const fill4 = Array(3).fill({});
fill4[0].hi = 'Hello';
console.log(fill4);


// using fill to create a matrix of all 1

const fill5 = new Array(3);
for( let i = 0; i < fill5.length; i++){
    fill5[i] = new Array(4).fill(1);

}
fill5[0][0] = 1;
console.log(fill5[1][0]);
console.log(fill5[2][0]);
console.log(fill5);