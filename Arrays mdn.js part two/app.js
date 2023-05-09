/// /////////////////////////
// ======================////
//==  toString() method  ==//
// ======================////
/////////////////////////////

// syntax
// array.toString();


// converting an array to string using toString method

const tarr = [1, 2, 3, 4, 5];
const tstring = tarr.toString();

console.log(typeof tstring);
console.log(tstring.length);
console.log(tstring);

// convertinf an array of objects to a string using toString() method

const tarr2 = [
    {
        name: 'john',
        age: 20
    },
    {
        name: 'peter',
        age: 30
    },
    {
        name: 'jane',
        age: 40
    }
];

const tstring2 = tarr2.toString();
console.log(tstring2);

// using toString() method to join array elements into a string

const tarr3 = ['apple', 'banana', 'orange'];
const tstring3 = tarr3.join(" and ").toString();
console.log(tstring3);

// mdn toString() method

const tarr4 = [];
tarr4.join = 1; // re-assign 'join' with a non-function
console.log(tarr4.toString()); // [object Array]

console.log(Array.prototype.toString.call({join: () => 1}));


/// /////////////////////////
// ======================////
//==    join() method    ==//
// ======================////
/////////////////////////////

// syntax
// array.join(separator);
// array.join();

const jarr = ['Fire', 'Air', 'Water'];

console.log(jarr.join()); // default separator is comma
console.log(jarr.join(''));
console.log(jarr.join('-'));

// joining array with four ways

const a = [
    'Fire',
    'Air',
    'Water'
]

a.join(); // 'Fire,Air,Water'
a.join(', '); // 'Fire, Air, Water'
a.join(' + '); // 'Fire + Air + Water'
a.join(""); // 'FireAirWater'


// using join() on sparse arrays

// join treats empty slots the same as undefined and produces an extra separator

console.log([1, , 3].join()); // '1,,3'
console.log([1,undefined,3].join()); // '1,,3'


//calling join() on non-array objects
//The join() method reads the length property of this and then accesses each integer index.

const jarrLike = {
    length: 3,
    0: 'Fire',
    1: 'Air',
    2: 'Water'
};
console.log(Array.prototype.join.call(jarrLike));
console.log(Array.prototype.join.call(jarrLike, '-'));

/// /////////////////////////
// ======================////
//==    pop()  method    ==//
// ======================////
/////////////////////////////
