
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

console.log([1, , 3].lastIndexOf()); // -1



