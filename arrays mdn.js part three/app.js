
/// /////////////////////////
// ======================////
//==   delete()  method  ==//
// ======================////
/////////////////////////////

// it deleted specific element on the array and leaves an empty slot

let darr = [1, 2, 3, 4, 5];
delete darr[2];
console.log(darr);


// it is not recommended to use delete operator, cuz later it may happen problems with length of the array

// instead splice() method or filter() method


const Employee = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(Employee.firstName);

delete Employee.firstName;
console.log(Employee.firstName); // undefined because firstName is deleted

// syntax
// delete object.property
// delete object[property]


/// /////////////////////////
// ======================////
//==    sort()  method   ==//
// ======================////
/////////////////////////////


// sort method is used to sort array elements in ascending or descending order

// syntax
// array.sort()
// array.sort(compare function())
// array.sort(function(a, b) { return a - b; }) // ascending
// array.sort(function(a, b) { return b - a; }) // descending

const sarr = [4, 2, 8, 5, 1, 3];
sarr.sort((a, b) => b - a);
console.log(sarr);

// sorting an array of strings
const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];
words.sort();
console.log(words);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
months.sort();
console.log(months);

const Arr1 = [1, 30, 4, 21, 100000];
Arr1.sort();
console.log(Arr1);

// creating , displaying and sorting an array

const stringArray = ['blue', 'red', 'green', 'yellow'];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ['404', '122', '2542', '2300'];
const mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
    return a - b;
}

stringArray.join();
stringArray.sort();
console.log(stringArray);

numberArray.join();
numberArray.sort();
console.log(numberArray);
numberArray.sort(compareNumbers);
console.log(numberArray);

numericStringArray.join();
numericStringArray.sort();
console.log(numericStringArray);
numericStringArray.sort(compareNumbers);
console.log(numericStringArray);

// sorting array of objects

const items = [
    {
        name: 'Edward',
        age: 30
    },
    {
        name: 'Sharpe',
        age: 37
    },
    {
        name: 'And',
        age: 30
    },
    {
        name: 'The',
        age: 30
    },
    {
        name: 'Magentic',
        age: 30
    },
    {
        name: 'Zerors',
        age: 30
    },

];

// sort by value

items.sort((a, b) => a.age - b.age);
console.log(items);

//sorting  by name
items.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(items);

// sort non-ASCII characters

const itemm = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
itemm.sort((a, b) => a.localeCompare(b));
console.log(itemm);

// sorting with map 

const data = ["delta", "alpha", "charlie", "bravo"];
console.log(data.sort());

const mapped = data.map((v, i) => {
    return { i, value: someSlowOperation(v) };
});

function someSlowOperation(v) {
    return v.toUpperCase();
}

mapped.sort((a, b) => {
    if (a.value > b.value) {
        return 1;
    } if (a.value < b.value) {
        return -1;
    }
    return 0;


});
const result1 = mapped.map((v) => data[v.i]);
console.log(result1);

// sort returns reference to the same array 

const numbersSort = [1, 2, 5, 7, 2, 6, 3];
const sorted = numbersSort.sort((a, b) => a - b);
console.log(sorted);
sorted[0] = 10;
console.log(sorted);
console.log(numbersSort[0]);

// in case  you want sort not to mutate original array 
// at such moment you can create shallow copy then it wont happen

const numbersShal = [1, 2, 5, 7, 2, 6, 3];
// [...numbersShal]; creates a shallow copy ,so sort does not mutate the original
const sorted1 = [...numbersShal].sort((a, b) => a - b);
sorted1[0] = 10;
console.log(numbersShal[0]); // as here it is not affecting to main array // 1

// sort stability

const students = [
    {
        name: 'John',
        grade: 15
    },
    {
        name: 'Jane',
        grade: 12
    },
    {
        name: 'Bob',
        grade: 14
    },
    {
        name: 'Mary',
        grade: 11
    },
];
students.sort((a, b) => a.grade - b.grade);
// what actually sort stability here is? if there are a b then it will be again a and b not b and a , according to ecmaScript 2019

// sorting with non-well-formed comparator

const arr4 = [3, 1, 4, 5, 8];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr4.sort(compareFn);
console.log(arr4.sort(compareFn));

// be aware of there it might make you lost

// use sort() on sparse arrays

console.log(['a', 'b', , 'c'].sort());  // empty slot will be moved to the end of the array
console.log([, undefined, 'd'].sort()); // undefined will be moved to the end of the array but before empty array


// calling sort() on non-array objects

const arrayLike3 = {
    length: 3,
    unrelated: 'foo',
    0: 5,
    2: 6,
};

console.log(Array.prototype.sort.call(arrayLike3));

/// /////////////////////////
// ======================////
//==   splice() method   ==//
// ======================////
/////////////////////////////

// syntax
// array(start)
// array.splice(start, deleteCount)
// array.splice(start, deleteCount, item1)
// array.splice(start, deleteCount, item1, item2, ...itemN)

const months1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

months1.splice(1, 0, 'Feb');
console.log(months1);

months1.splice(4, 1, 'may');
console.log(months1);

months1.splice(1);
console.log(months1);


const myFish = ["angel", "clown", "mandarin", "sturgeon"];
myFish.splice(2, 0, 'drum');
console.log(myFish);

const removed = myFish.splice(2, 0, "drum", "guitar");
console.log(removed);

removed3 = myFish.splice(2, 1, "trumpet");
console.log(removed3);


// using splice() method on sparse arrays

const myLike = {
    length: 3,
    unrelated: 'foo',
    0: 5,
    2: 4,
};

console.log(Array.prototype.splice.call(myLike, 0, 1, 2, 4));
console.log(myLike);



/// /////////////////////////
// ======================////
//==    slice() method   ==//
// ======================////
/////////////////////////////

// syntax

// slice()
// slice(start)
// slice(start, end)



// it makes shallow copy of the array and and returns a new array
// it does not mutate the original array

const anims = ['angel', 'clown', 'mandarin', 'sturgeon'];
let sliced = anims.slice(2); // cut from index 2 tilll the end
console.log(sliced);

sliced = anims.slice(2, 4);
console.log(sliced);

sliced = anims.slice();
console.log(sliced);


// using slice() method

// Using slice, create newCar from myCar.
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// calling slice() on non-array objects

const arrayLike2 = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};
console.log(Array.prototype.slice.call(arrayLike2, 1, 3));
  // [ 3, 4 ]


// using slice() on sparse arrays

console.log([1, 2, 3, , 5].slice(1, 4));

/// /////////////////////////
// ======================////
//==  reverse() method   ==//
// ======================////
/////////////////////////////

// it reverse the array, and original array also

// syntax
// array.reverse()

const numa = ['one', 'two', 'three'];
const numb = numa.reverse();
console.log(numb);
console.log(numa);

// here both arrays are reversed, 
// in order not to mutateoriginal one, use toReversed()


const numbers = [3, 2, 4, 1, 5];
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3

// using reverse() method on sparse arrays

console.log([1, 2, , 4, 5].reverse());
console.log([1, 2,4, , 5].reverse());

// calling the reverse on non-array objects

const ARRLIKE = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
};

console.log(Array.prototype.reverse.call(ARRLIKE));
