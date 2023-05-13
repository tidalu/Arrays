/// /////////////////////////
// ======================////
//==  forEach() method   ==//
// ======================////
/////////////////////////////


// syntax
// array.forEach(callback)
// array.forEach(callback, thisArg)
// the  forEach() method executes a provided function once for each array element.
// it does not change the original array.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => console.log(num));


const ratings = [5, 4, 5];

let sum = 0;

ratings.forEach((rat) => {
    sum += rat;
});
console.log(sum);

// using forEach() on sparse arrays

const arraySparse = [1, 3, , 7];
let numCallBackRuns = 0;

arraySparse.forEach((num) => {
    console.log({ num });
    numCallBackRuns++;
});
console.log(numCallBackRuns);

// converting a for loop to forEach()

const items = ['item1', 'item2', 'item3'];
const copyItems = [];

//before 
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i]);
}

// after 
items.forEach((item) => {
    copyItems.push(item);
})

console.log(copyItems);

// printing the content of the array 

const logArrayElements = (element, index/* array */) => {
    console.log(`a[${index}] = ${element}`);
}

//
//
[2, 5, , 9].forEach(logArrayElements);


// using this arg

class Counter {
    constructor() {
        this.sum = 0;
        this.count = 0;
    }
    add(array) {
        array.forEach(function countEntry(entry) {
            this.sum += entry;
            ++this.count;
        }, this);
    }
}

const obj = new Counter();
obj.add([1, 2, 3, 4, 5]);
console.log(obj.count);
console.log(obj.sum);


// an object copy function 

const copy = (obj) => {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach((name) => {
        const desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc);
    });
    return copy;
};

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}
const obj2 = copy(obj1);
console.log(obj2);

// modifying the array during iteration

const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
    console.log(word);
    if (word === 'two') {
        words.shift();
    }
});

console.log(words);

// flatten an array

const flatten = (arr) => {
    const result = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
};

const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested));

// calling foeEach() on non-array objects

const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};

Array.prototype.forEach.call(arrayLike, (num) => console.log(num));

/// /////////////////////////\/
// ======================////\/
//==    map() method     ==//\/
// ======================////\/
/////////////////////////////\/


// syntax
// array.map(callback)
// array.map(callback, thisArg)

// map() method creates a new array populated with result of callong a provided function on every element in the calling array

const marr = [1, 4, 9, 16];

const map1 = marr.map(x => x * 2);
console.log(map1);

// mapping an array of numbers to an array of square roots

const num1 = [1, 4, 9];
const roots = num1.map(x => Math.sqrt(x));
console.log(roots);

// using map() to reformat objects in an array
const kvArray = [
    {
        key: 1,
        value: 10
    },
    {
        key: 2,
        value: 20
    },
    {
        key: 3,
        value: 30
    },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray);
console.log(kvArray);

// mapping  an array of numbers usinng a function containing an argument

const num2 = [1, 4, 9];
const doubles = num2.map((num) => num * 2);
console.log(doubles);
console.log(num2);

// calling map() on non-array objects

const arrayLike2 = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};

console.log(Array.prototype.map.call(arrayLike2, (num) => num ** 2));

// using map() generically on a NODEList

const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);

console.log(values);

// using map( on sparse arrays

console.log(
    [1, , 3].map((x, index) => {
        console.log(`Visit ${index}`);
        return x * 2;
    }),
);

// using parseInt() with map()

console.log(['1', '2', '3'].map(parseInt));

const returnInt = (element) => parseInt(element, 10);
console.log(['1', '2', '3'].map(returnInt));

console.log(['1', '2', '3'].map((str) => parseInt(str)));


// simpler way too achieve above 

console.log(['1', '2', '3'].map(Number));

//but Unlike parseInt(), NUmber() will also return a float or (resolved) exponential notation:

console.log(["1.1", "2.2e2", "3e300"].map(Number));[1.1, 220, 3e+300]

// for the comparison we use parseInt for the ex above

console.log(["1.1", "2.2e2", "3e300"].map((str) => parseInt(str))); // 1, 2, 3

const string = ["10", "10", "10"];
const numbers1 = string.map(parseInt);

console.log(numbers1);
// Actual result of [10, NaN, 2] may be unexpected based on the above description.

// mapped array contains undefined

const numbers2 = [1, 2, 3, 4];
const filteredNumbers = numbers2.map((num, index) => {
    if (index < 3) {
        return num;
    }
});

console.log(filteredNumbers);

/// /////////////////////////\/
// ======================////\/
//==   filter() method   ==//\/
// ======================////\/
/////////////////////////////\/

// syntax
// array.filter(callback)
// array.filter(callback, thisArg)

// filter() method creates a new array populated with elements from the calling array for which the provided function returns a truthy value

const worrr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = worrr.filter((word) => word.length > 6);
console.log(result1);

// filtering out all small values 
function inBIg(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(inBIg);
console.log(filtered);

// FIND ALL prime numbers in an array

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};
console.log(array.filter(isPrime));

// filtering invalid entries from json file
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

const arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries =", invalidEntries);
// Number of Invalid Entries = 5

// searching in array

const fri = ['apple', 'banana', 'orange', 'pear', 'grape', 'kiwi', 'mango'];

/**
 * Filter array items based on search criteria (query)
 */

function filterItems(fri, query) {
    return fri.filter((el) => el.toLowerCase().includes(query.toLowerCase()));


}


console.log(filterItems(fri, 'ap'));
console.log(filterItems(fri, 'a'));

// use filter on sparse arrays
// filter() will skip empty slots

console.log([1, , undefined].filter((x) => x === undefined));
console.log([1, , undefined].filter((x) => x !== 2));

// calling filter() on non-array objects
// filter method reads the length propertry of this and then accesses each integer index

const farrayLike = {
    length: 3,
    0: 'a',
    1: 'b',
    2: 'c',
};

console.log(Array.prototype.filter.call(farrayLike, (x) => x <= 'b'));

// affecting initial Array(modifying, appending and deleting)

//modifying each word

let wordss = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const midofiedWords = wordss.filter((word, index, arr) => {
    arr[index + 1] += ' extra';
    return word.length < 6;
});

console.log(midofiedWords);

//appending new words 
wordss = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const appendedWords = wordss.filter((word, index, arr) => {
    arr.push('new');
    return word.length < 6;

});

console.log(appendedWords);
console.log(wordss);

// deleting words 
wordss = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const deletedWords = wordss.filter((word, index, arr) => {
    arr.pop();
    return word.length < 6;
});
console.log(deletedWords);



/// /////////////////////////\/
// ======================////\/
//==   reduce() method   ==//\/
// ======================////\/
/////////////////////////////\/

// syntax 
// array.reduce(callback)
// array.reduce(callback, initialValue)


// chat open Ai syntax
// array.reduce(function(accumulator, currentValue, currentIndex, array){
// CODE TO PROCESS TE CURRENT ELEMENT
// }, initialValue);

const rarr = [1, 2, 3, 4];

const initialValue = 0;
const summWithinInitial = rarr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(summWithinInitial);

const getMax = (a, b) => Math.max(a, b);


// callback is invoked for each element in the array starting  at index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50


// function is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax); // 100

// callback is not invoked
[50].reduce(getMax); // 50  
[].reduce(getMax, 1); // 1

// [].reduce(getMax); // TYPE ERROR
// finding the sum of all elements in an array

const numr = [1, 2, 3, 4, 5];

const sumr = numr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sumr);

// flattening 
nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArray.reduce(function (accumulator, currentValue) {
    return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray);

// finding the maximum value in the array

const rnums = [10, 20, 5, 40, 30];

const max = rnums.reduce(function (accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}, -Infinity);

console.log(max);


// how reduce() works without an initial value

const arrayY = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

const res = arrayY.reduce(reducer);
console.log(res);

// how reduce() works with an initial value


console.log([15, 16, 17, 18, 19].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
));

// sum of values in an object arrays 

const ojects = [
    { x: 1 },
    { x: 2 },
    { x: 3 }
];

const sumobj = ojects.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    0,
);
console.log(sumobj);

// flatten an array of arrays

const flattened = [
    [
        0, 1
    ],
    [
        2, 3
    ],
    [
        4, 5
    ],
].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    [],
);

console.log(flattened);


// counting instances of values in a object

const names = ['alice', 'bob', 'carl', 'david', 'eve'];

const countesNames = names.reduce(
    (allNames, name) => {
        const currCount = allNames[names] ?? 0;
        return {
            ...allNames,
            [name]: currCount + 1,
        };
    }, {});

console.log(countesNames);

// grouping objects by a property

const people = [
    { name: 'alice', age: 20 },
    { name: 'bob', age: 21 },
    { name: 'carl', age: 20 },
    { name: 'david', age: 23 },
    { name: 'eve', age: 21 },

];

function groupBy(objectsArray, property) {
    return objectsArray.reduce((acc, obj) => {
        const key = obj[property];
        const curGroup = acc[key] ?? [];

        return { ...acc, [key]: [...curGroup, obj] };
    }, {});
}


const groupedPeople = groupBy(people, 'age');

console.log(groupedPeople);

// conctentaing arrays contained in an array of objects using the spread syntax and initialValue 

const friends = [
    {
        name: "Anna",
        books: ["Bible", "Harry Potter"],
        age: 21,
    },
    {
        name: "Bob",
        books: ["War and peace", "Romeo and Juliet"],
        age: 26,
    },
    {
        name: "Alice",
        books: ["The Lord of the Rings", "The Shining"],
        age: 18,
    },
];

const allbooks = friends.reduce(
    (accumulator, currentValue) => [...accumulator, ...currentValue.books],
    ["Alphabet"],
);

console.log(allbooks);

// remove duplicate items in an array

const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

const myArrayWithNoDuplicates = myArray.reduce(
    (accumulator, currentValue) => {
        if(!accumulator.includes(currentValue)){
            return [...accumulator, currentValue];
        }
        return accumulator;
    }, []

);

console.log(myArrayWithNoDuplicates);

// replace .filter().map() with reduce()

const numbersrr = [-5, 6, 2, 0];

const doubledPositivenumbers = numbersrr.reduce((accumulator, value) =>{
    if(value > 0){
        const doubled = value * 2;
        return [...accumulator, doubled];
    }
    return accumulator;
}, []);

console.log(doubledPositivenumbers);

// using reduce() with sparse arrays 

console.log([1, 2, , 4].reduce(
    (a, b) => a + b
)); // no effect , // 7

console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

// calling the reduc on non-array objects

const arrLike = {
    length: 3,
    0: 'a',
    1: 'b',
    2: 'c',
};

console.log(Array.prototype.reduce.call(arrLike, (a, b) => a + b));




/// /////////////////////////\/
// ======================////\/
//==reduceRight() method ==//\/
// ======================////\/
/////////////////////////////\/

