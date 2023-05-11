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
    console.log({num});
    numCallBackRuns++;
});
console.log(numCallBackRuns);

// converting a for loop to forEach()

const items = ['item1', 'item2', 'item3'];
const copyItems = [];

//before 
for(let i = 0; i < items.length; i++){
    copyItems.push(items[i]);
}

// after 
items.forEach((item) => {
    copyItems.push(item);
})

console.log(copyItems);

// printing the content of the array 

const logArrayElements = (element, index/* array */) =>{
    console.log(`a[${index}] = ${element}`);
}

//
//
[2, 5, , 9].forEach(logArrayElements);


// using this arg

class Counter {
    constructor(){
        this.sum = 0;
        this.count= 0;
    }
    add(array){
        array.forEach(function countEntry(entry){
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
    if(word === 'two'){
        words.shift();
    }
});

console.log(words); 

// flatten an array

const flatten = (arr) => {
    const result = [];
    arr.forEach((item) => {
        if(Array.isArray(item)){
            result.push(...flatten(item));
        }else{
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
