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

console.log(Array.prototype.toString.call({ join: () => 1 }));


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
console.log([1, undefined, 3].join()); // '1,,3'


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

// syntax
// array.pop();
// deletes the last element of the array

const parr = [1, 2, 3, 4, 5];
const lastparr = parr.pop();
console.log(lastparr);
console.log(parr);

//using a pop() on an empty array

const parr1 = [];
const parr2 = parr1.pop();
console.log(parr2);
console.log(parr1);

// mdn

const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'


// calling pop() on an non-array objects

const parrLike = {
    length: 3,
    unrelated: "foo",
    2: 4
};

console.log(Array.prototype.pop.call(parrLike));
console.log(parrLike);


const plainObj = {};
Array.prototype.pop.call(plainObj);
console.log(plainObj);

// using an object in an array-like fashion

const collection = {
    length: 0,
    addElements(...elements) {
        // obj.length will be incremented automatically
        // every time an element is added.

        // Returning what push returns; that is
        // the new value of length property.
        return [].push.call(this, ...elements);
    },
    removeElements() {
        // obj.length will be decremented automatically
        // every time an element is removed.

        // Returning what pop returns; that is
        // the removed element.
        return [].pop.call(this);
    },

};

collection.addElements(10, 20, 30);
console.log(collection.length); // 3
collection.removeElements();
console.log(collection.length); // 2


/// /////////////////////////
// ======================////
//==    push() method    ==//
// ======================////
/////////////////////////////

// allows to add elements to the end of an array
// syntax 
// array.push(element1, element2, ..., elementN)

let pfrr = ['apple', 'banana', 'orange'];
let newLength = pfrr.push('pear', 'mango');

console.log(pfrr);
console.log(newLength);


// 

let pnumbers = [1, 2, 3, 4, 5];
pnumbers.push(6, 7, 8, 9, 10);

console.log(pnumbers);

//

let pemptyArray = [];
pemptyArray.push(1, 2, 3, 4, 5);

console.log(pemptyArray);

//mdn

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']


// calling push() on an non-array objects

const arrLIkep = {
    length: 3,
    unrelated: "foo",
    2: 4
};

Array.prototype.push.call(arrLIkep, 1, 2);
console.log(arrLIkep);

const plainObject = {};
Array.prototype.push.call(plainObject, 1, 2);
console.log(plainObject);

// using an object in an array-like fashion

const pobj = {
    length: 0,

    addEl(elem) {
        // obj.length will be incremented automatically
        // every time an element is added.
        [].push.call(this, elem);
    }, 
};

// let's add some empty objects just to illustrate

pobj.addEl({});
pobj.addEl({});
pobj.addEl({});
pobj.addEl({});
console.log(pobj.length);


/// /////////////////////////
// ======================////
//==    shift() method   ==//
// ======================////
/////////////////////////////

// removes the first from array

// syntax
// array.shift();

const sarr = [1, 2, 3, 4, 5];
const first = sarr.shift();
console.log(first);
console.log(sarr);

//remove an elment from an array

const smyFish = ["angel", "clown", "mandarin", "sturgeon"];

console.log("My fish before: ", JSON.stringify(smyFish));

const shifted = smyFish.shift();

console.log("My fish after: ", JSON.stringify(smyFish));

console.log("removed first element: ", shifted);


// using shift() method on a while loop

const snames = ["angel", "clown", "mandarin", "sturgeon"];

while(typeof (i = snames.shift()) !== 'undefined') {
    console.log(i);
}

// calling shift() on non-array objects

const sArrLike = {
    length: 3,
    unrelated: "foo",
    2: 4
};

console.log(Array.prototype.shift.call(sArrLike));
// undefined, because it is an empty slot
console.log(sArrLike);


const sPlainObj = {};
Array.prototype.shift.call(sPlainObj);
console.log(sPlainObj);




/// /////////////////////////
// ======================////
//==   unshift() method  ==//
// ======================////
/////////////////////////////