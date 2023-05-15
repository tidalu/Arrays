
/// /////////////////////////\/
// ======================////\/
//==   IsArray() method  ==//\/
// ======================////\/
/////////////////////////////\/


// syntax

// Array.isArray(value)

// value is to be chacked


console.log(Array.isArray([1, 2, 3]));

console.log(Array.isArray('[]'));

console.log(Array.isArray(new Array(5)));

console.log(Array.isArray(new Int16Array([15, 33])));

// examples

// array following calls return true 

Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// little known fact: Array.prototype itself is an array
Array.isArray(Array.prototype);


// all following calls return false

Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// this is not an array, cuz it was not created using array literal or the array constructor 

console.log(Array.isArray({ __proto__: Array.prototype }));


// instanceof vs Array.isArray()

// const iframe = document.createElement('iframe');
// document.body.appendChild(iframe);
// const xArray = window.frames[window.frames.length - 1].Array;
const arr = new Array(1, 2, 3); // [1, 2, 3] xarray

// correctly checking  for Array 

Array.isArray(arr); // true
// the prototype of arr is xArray.prototype, which is a 
// different object from Array.prototype
console.log(arr instanceof Array); // xArray



/// /////////////////////////\/
// ======================////\/
//==   indexOf() method  ==//\/
// ======================////\/
/////////////////////////////\/


// syntax

// Array.indexOf(searchElement)
// array.indexOf(searchElement, fromIndex)




const beasts = ['ant', 'bat', 'cat', 'dog', 'elephant', 'bison'];

console.log(beasts.indexOf('bison')); // 

console.log(beasts.indexOf('bat')); //

console.log(beasts.indexOf('elephant')); // 


// using indexOf()

const array = [2, 9, 9];

console.log(array.indexOf(2));
console.log(array.indexOf(7));
console.log(array.indexOf(9, 2));
console.log(array.indexOf(2, -1));
console.log(array.indexOf(2, -3));

// -1 result is returned if the element is not found

// indefOf() method skips empty slots in sparse arrays

// you cannot use indexOf() to search for NaN

const array1 = [NaN];
array1.indexOf(NaN); // -1


///


/// finding all the occurrences of an element

const indices = [];
const array3 = ["a", "b", "a", "c", "a", "d"];
const element = 'a';
let idx = array3.indexOf(element);
while (idx !== -1) {
    indices.push(idx);
    idx = array3.indexOf(element, idx + 1); // !!!
}

console.log(    indices);



// finding if an element exists in the array or not an updating the array

function updateVegetablesCollection(veggies, veggie)
{
    if(veggies.indexOf(veggie) === -1){
        veggies.push(veggie);
        console.log(`New veggie collection is : ${veggies}`);

    }else{
        console.log(`${veggie} is already in the collection`);
    }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "onion"); // push worked here
updateVegetablesCollection(veggies, "tomato"); // exists


// using indexOf() on sparse arrays

// you cannot use indexOf() to search fro empty slots in sparse arrays

console.log([1, , 3].indexOf(undefined)); // -1

// calling indexOf() on non-array objects

const arrayLike  ={
    length: 3, 
    0: 2,
    1: 3,
    2: 4
};

console.log(Array.prototype.indexOf.call(arrayLike, 2)); // 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));  // -1


/// /////////////////////////\/
// ======================////\/
//== lastIndexOf() method =//\/
// ======================////\/
/////////////////////////////\/

// syntax
// array.lastIndexOf(searchElement)
// array.lastIndexOf(searchElement, fromIndex)

// from index here is an index to search element from that index
// it is optional, when it is given it saves some time and memory
// otherwise it look for whole array

// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

const animal = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animal.lastIndexOf('Dodo'));
// we do have two 'dodo' but lastIndexOf() returns the last index here it is 3

console.log(animal.lastIndexOf('Tiger')); // 1 cuz it is here only one exists


const numbers3 = [2, 5, 9, 2];
numbers3.lastIndexOf(2); // 3
numbers3.lastIndexOf(7); // -1 cuz not exists
numbers3.lastIndexOf(2, 3); // 3
numbers3.lastIndexOf(2, 2); // 0
numbers3.lastIndexOf(2, -1); // 3
numbers3.lastIndexOf(2, -2); // 0

// finding all the occurrences of an element

const indices1 = [];
const array2 = ["a", "b", "a", "c", "a", "d"];
const element1 = 'a';
let idx1 = array2.lastIndexOf(element1);
while (idx1 !== 1) {
    indices1.push(idx1);
    idn = idx > 0 ? array.lastIndexOf(element1, idx -1) : -1; // !!!
}

console.log(indices1);

// using lastIndexOf() on sparse arrays

console.log([1, , 3].lastIndexOf()); // -1 we cannot use lastIndexOf to search for empty slots in sparse arrays


// calling lastIndexOf() on non-array objects

const arrayLike1 = {
    length: 3, 
    0: 2,
    1: 3,
    2: 4
}

console.log(Array.prototype.lastIndexOf.call(arrayLike1, 2)); // 0
console.log(Array.prototype.lastIndexOf.call(arrayLike1, 5));  // -1




/// /////////////////////////\/
// ======================////\/
//==     find() method    =//\/
// ======================////\/
/////////////////////////////\/

//IF ELEMENT IS NOT FOUND 'UNDEFINED' IS RETURNED

// syntax
// array.find(callback)
// array.find(callback, thisArg)


// it returns the first element of the array that satisfies the provided testing function
// findIndex() and indexOf() returns the index of the first element find, oppositely lastIndexOf() returns the last element satisfies the provided testing function

const array4 = [5, 12, 8, 130, 44];

const found = array1. find(element => element > 10);
console.log(found); // 12 THE FIRST ELEMENT THAT IS GREATER THAN 10

// find and object in an array by one of it's properties

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));

// using arrow function and destructing 

const inventory1 = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

const result = inventory1.find(({ name }) => name === 'cherries');

console.log(result);

// find a prime number in an array 

function isPrime(element, index, array){
    let start = 2;
    while(start <= Math.sqrt(element)) {
        if(element % start++ < 1){
            return false;

        }
    }
    return element > 1;
}


console.log([4, 6, 8, 10].find(isPrime));  // undefined no tfound
console.log([4, 5, 6, 8]).find(isPrime); // 5


// using find() os sparse arrays

// empty slots in sparse arrays are visited and are treated  the same as undefined

const array5 = [0, 1, , , ,5, 6];
// showing all indexes 
array5.find((value, index) => {
    console.log("Visited index: ", index, "Value: ", value);
})

// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6



// show all indexes, including deleted

array5.find((value, index) => {
    // delete element 5 on first iteration
    if(index === 0) {
        console.log("Deleting array[5] with value", array[5]);
        delete array[5];
    }

    console.log("Visited index: ", index, "Value: ", value);
    // element 5 is still visible even though it was deleted
    // but it is shown undefined
})


// calling find on non-array objects

const arrayLike3 = {
    length: 3, 
    0: 2,
    1: 7.3,
    2: 4
};
console.log(Array.prototype.find.call(arrayLike3, (x) => !Number.isInteger(x)));
// 7.3



/// /////////////////////////\/
// ======================////\/
//==  findIndex() method  =//\/
// ======================////\/
/////////////////////////////\/

// syntax
// array.findIndex(callback)
// array.findIndex(callback, thisArg)

// it returns the first index at which a given element can suit on a given function

const array6 = [5, 12, 8, 130, 44];

const isLargerNumber = (element) => element > 13;

console.log(array6.fromINdex(isLargerNumber)); // 3 => 130

// find the idex of the prime number in the array

function isPrime1(element) {
    if(element % 2 === 0 || element < 2) {
        return false;
    }
    for(let factor =3; factor <= Math.sqrt(element); factor += 2) {
        if(element % factor === 0) {
            return false;
        }
    }
    return true;
}

// using findIndex() on sparse arrays

console.log([1, ,4].findIndex((x) =>x === undefined)); // 1


// calling findIndex() on non-array objects

console.log(Array.prototype.findIndex.call(arrayLike3, (x) => !Number.isInteger(x))); // 1




/// /////////////////////////\/
// ======================////\/
//==   includes() method  =//\/
// ======================////\/
/////////////////////////////\/

// returns boolean
// includes() method determines whether an array includes a certain value among its entries, returninng true or false as appropriate

// syntax
// array.includes(searchValue)
// array.includes(searchValue, fromIndex )

const array7 = [2, 3, 4];

console.log(array7.includes(2));
// true

const pets = ['cat', 'dog', 'fish'];
console.log(pets.includes('cat'));
// true

console.log(pets.uncludes('at'));
// false


//using includes()

[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
['1', '2', '3'].includes(1); // false

// fromIndex is grater than or equal to the array lenth

const array8 = ['a', 'b', 'c'];

array8.includes('c', 3); // false cuz fromIndex is greater than the array length

array8.includes('c', 100);  // false similar to the previous one


// computed index is less than 0
// when computed index is less than or equal to the 0 entire array will be checked


// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -3

const array9 = ['a', 'b', 'c'];

array9.includes('a', -100); // true
array9.includes('b', -100); // true
array9.includes('c', -100); // true
array9.includes('a', -2); // false  // here false cuz computed index is 3 + (-2) = 1 which is nt less than 0, so it did not search entire array 
// and a is not in index 1 so it is not true

// using includes() on sparse arrays

// if we search for // undefined in a sparse array we will get true

console.log([1, , 3].includes(undefined)); // true

// calling includes() on non-array objects

const arrayLike4 = {
    length: 3, 
    0: 2,
    1: 3,
    2: 4
};

console.log(Array.prototype.includes.call(arrayLike4, undefined)); // false
console.log(Array.prototype.includes.call(arrayLike4, 3)); // true
console.log(Array.prototype.includes.call(arrayLike4, 1)); // false


/// /////////////////////////\/
// ======================////\/
//==     flat() method    =//\/
// ======================////\/
/////////////////////////////\/

// flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth


const array10 = [0, 1, 2, [3, 4]];

console.log(array10.flat());
// expected output: array: [0, 1, 2, 3, 4]

const array11 = [0, 1, 2, [[[3, 4]]], 6];
console.log(array11.flat(2)); // when argument(depth) is give like there ex. 2 then it will return 2 arrays inside
// [0, 1, 2, array[3, 4], 6]



// flattening nested arrays

const array12 = [0, 1, 2, [3, 4]];
array12.flat(); // [0, 1, 2, 3, 4]

const array13 = [0, 1, [3, 4, [5, 6]]];
array13.flat(); 
// [0, 1, 3, 4, [5, 6]];

const array14 = [0, 1, [3, 4, [5, 6]]];
array14.flat(2);
// [0, 1, 3, 4, 5, 6];

const array15 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
array15.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using flat() on sparse arrays

const array16 = [1, 2, , 4, 5];
console.log(array16.flat()); // [1, 2, 4, 5] // it ignores undefined values


const array17 = [1, , 3, ['a', , 'c']];
console.log(array17.flat()); // [1, 3, 'a', 'c']

const array18 = [1, , 3, ['a',  ,['d', , 'e']]];
console.log(array18.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array18.flat(2)); // [ 1, 3, "a", "d", "e"]

// calling flat() on non-array objects

const arrayLike5 = {
    length: 3, 
    0: [1, 2],
    // Array-like objects aren't flattened
    1: {
        length: 2,
        0: 'a',
        1: 'b'
    }, 
    2: 'c'
};

console.log(Array.prototype.flat.call(arrayLike5));
// [ 1, 2, { '0': 'a', '1': 'b', length: 2 }, 'c' ]




/// /////////////////////////\/
// ======================////\/
//==   flatMap() method   =//\/
// ======================////\/
/////////////////////////////\/

// syntax
// array.flatMap(callback)
// array.flatMap(callback, thisArg)

const array19 = [1, 2, 1];

const rslt = array19.flatMap((x) => (x === 2? [2, 2]: 1));

console.log(rslt);
// expected: [1, 2, 2, 1];


// return value: a new array with each element being the result of the callback function  and flattened by the depth of 1.


// alternative 

// pre-allocate and explicitly iterate 


const array20 = [1, 2, 3, 4];
array20.flatMap(
    (x) => [x, x*2, x*3]
);
// is equivalent to 
const n = array20.length;
const acc = new Array(n*2);
for (let i = 0; i < n; i++){
    const x = array20[i];
    acc[i * 2] = x;
    acc[i * 2 + 1] = x * 2;
} // [1, 2, 2, 4, 3, 6, 4, 8]

// examples

// map() and flatMap()
const array21 = [1, 2, 3, 4];

array21.map((x) => [x*2]);
// [[2], [4], [6], [8]]

array21.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

//  only one level is flattened
array21.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

// This kinda works can be done using map() or for loop, here is the better showcase done with flatMap()    

// let's generate list of words from list of sentences

const array22 = ["it's sunny in ", "", "california"];

array22.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

array22.flatMap((x) => x.split(" "));
//  ["it's","Sunny","in", "", "California"]


// for adding and removing items during  a map()


// let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1

const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result1 = a.flatMap((n) => {
    if(n < 0){
        return [];
    }
    return n % 2 === 0? [n]: [n-1, 1];
});
console.log(result1); // [4, 1, 4, 20, 16, 1, 18];

// using flatMap() on sparse arrays

console.log([1, 2, , 4, 5].flatMap((x) => [x, x*2, x*3])); // // [1, 2, 2, 4, 4, 8, 5, 10] //  it ignores undefined values

console.log([1, 2, 3, 4].flatMap((x) => [, x*2])); // [2, 4, 6, 8] // in this case not , somehow


// calling flatMap() on non-array objects

const arrayLike2 = {
    length: 2, 
    0: 1, 
    1: 2,
    2: 3
};

console.log(Array.prototype.flatMap(arrayLike2, (x) => [x, x*2, x*3]));
// [1, 2, 2, 4, 3, 6]

// Array-like objects returned from the callback won't be flattened

console.log(
    Array.prototype.flatMap.call(arraylike2, (x) => ({
        length: 1, 
        0: x
    })), 
);


/// /////////////////////////\/
// ======================////\/
//==     keys() method    =//\/
// ======================////\/
/////////////////////////////\/

// keys()  methods returns a new array iterator object that contains the keys for each index in the array


// syntax
// array.keys()

const array23 = ['a', 'b', 'c'];
const iterator = array23.keys();
