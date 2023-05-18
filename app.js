const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(consoleItem);
numbers.forEach((item, index) => {
    console.log('a[' + index + "] =" + item);
})


function consoleItem(item, index, arr) {
    console.log(item);
    console.log('a[' + index + "] =" + item);
}

let sum = 0;

numbers.forEach((item) => {
    sum += item;

})
console.log(sum)


const letters = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'];
let counter = {};

letters.forEach((item) => {
    if (counter[item]) {
        counter[item]++;
    } else {
        counter[item] = 1;
    }
})

console.log(counter);

function func() {
    //original way
    const items = [12, 24, 36];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item + item + 2);

    });
    console.log(copy);
}
func();

function square() {
    const items = [1, 29, 47];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item * item);
    })
    console.log(copy);
}
square();


//map

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersDouble = numbers.map(double);

function double(value, index, arr) {
    return value * index;
}

console.log(numbersDouble);

const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },
    {
        name: 'desktop',
        price: 1500,
        count: 2
    },
    {
        name: 'phone',
        price: 500,
        count: 10
    }
]

const totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count
}));

console.log(totalProductsValue);


const stringNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const nums = stringNumbers.map(Number);// here NUmber is a constructor function

console.log(nums);


//filter method

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = arr1.filter(evenNum)

function evenNum(value) {
    return value % 2 === 0;
}

console.log(even);

//

const people = [
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Mary',
        age: 30
    },
    {
        name: 'Peter',
        age: 15
    }
];

const adults = people.filter(person => person.age >= 18);

console.log(adults);

//remove duplicates

const numberH = [1, 2, 3, 4, 2, 8, 7, 8, 9, 7];

const numberH2 = numberH.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(numberH2);


//reduce method

const arr3 = [1, 2, 3, 4, 5, 11, 7, 8, 9, 10];

const max = arr3.reduce(callback, -Infinity)   // calback function and initial value

function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator;
    } else {
        return value;
    }
}

console.log(max);



/// 

const maga = [
    {
        products: 'laptop',
        price: 1000,
        count: 5
    },
    {
        products: 'desktop',
        price: 1500,
        count: 4
    },
    {
        products: 'mobile',
        price: 500,
        count: 9
    }
    
];

const totalStore = maga.reduce(
    (accumulator, item) => accumulator + item.price * item.count,
    0
);

console.log(totalStore);


// slice method


const sliced = arr3.slice(2, 5);
const last = arr3.slice(-5);
const startFixed = arr3.slice(2);
console.log(sliced)
console.log(last)
console.log(startFixed)


const participants = ['ala', 'hhh', 'wded', 'wwdw', 'wdwdwe']

const winners = participants.slice(0, 3);
console.log(winners);


// splice method

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removed = arr4.splice(2, 3, 5, 6, 7);  // first one is the initial index to remove second is count// after initiator and count there we can write any numbers() to replace the deleted idems with what we want, 
//for count we can write 0 not to remove anything but to add only
console.log(removed); // it gives me deleted items, so i do have only threee eleements


// sort method

const names = ['florin', 'liam', 'jai', 'ivan']

names.sort()

console.log(names);

const sortNum = [ 24, 23, 5, 7, 90, 34, 76, 100]

sortNum.sort(compare)

console.log(sortNum);  

function compare(a, b){
    // < 0 ... a
    // =0  ... nothing will be changed
    // > 0 ... b
    return a - b;
}


// array object are above


maga.sort((a, b) => {
    return a.price - b.price
})

console.log(maga);

// concat

const a = [1, 2]
const b = [3, 4]
const d = [5, 6]

const c = a.concat(b, d) /// if we give no parametr it will copy
const c2 = a.concat(1, 3)
const c3 = a.concat() //to copy
console.log(c)
console.log(c2)
console.log(c3)


// fill method
const fillMethod = [ 1, 2, 3, 4, 5, 6]

fillMethod.fill(0)
fillMethod.fill(0,1,4) // it fills between 1 and 4 indexes

console.log(fillMethod)

function fillInNum (n){
    return Array(n).fill().map((_, index)=>index+1)
}

console.log(fillInNum(100));
///



/// includes method

const res = names.includes('ivanushka')
console.log(res);

const fruits = ['apple', 'banana', 'orange']
const res1 = fruits.includes('banana')
if(res1)
{
    console.log('yuppy')
}else{
    console.log('sad')
}


// join method

const countries = ['usa', 'india', 'china']
const join = countries.join(', ')
console.log(join)

console.log('I want to visit to ' + join)

//

// reverse method

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr5.reverse()
const newArr = [...arr5].reverse()
console.log(arr5)
console.log(newArr)


const string1 = 'Coding is fun!'
const string2 = string1.split('').reverse().join('')
console.log(string2)


// push method

const arrayyy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayyy.push(11, 12, 1,21, 23, 34, 45, 23); // if we console log this line it returns the psuhed array length
console.log(arrayyy);


// pop method

arrayyy.pop();
console.log(arrayyy); // and it also returns the last element(removed)

// unshift

arrayyy.unshift(1, 2, 3, 4, 5, 6, 7);
console.log(arrayyy);

// shift  method

arrayyy.shift();
console.log(arrayyy);

// indexOf and lastIndexOf

const nanes = ['jane', 'fred', 'jane', 'jane', 'jim'];

console.log(nanes.indexOf('jane')); 
//n returns the first occurance of the element // if there is not that element returns -1

console.log(nanes.lastIndexOf('jane'));


// EVERY METHOD

// function-->every(value)

const every = [1, 2,3, 4, 5];

const yes =every.every((x) => x > 0 );
console.log(yes);


const  person4 = [
    {name : 'john', age: 25}, 
    {name : 'mary', age: 30},
    {name : 'peter', age: 15}


];

const hasName = person4.every((person) => person.name !== undefined);

console.log(hasName);

const arrArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const isArr = arrArr.every((arr) => Array.isArray(arr));
console.log(isArr);

// some method

const res4 = every.some(x => x > 5);
console.log(res4);

const res6 = person4.some((person) => person.age > 20);
console.log(res6);


// find method

console.log(nanes.find((x) => x = 'jane'));
console.log(person4.find((person) => person.age > 20));


// findIndex method

console.log(nanes.findIndex((x) => x = 'jane'));
// returns the index of the first occurence


// from array method

// new shallow copy

const arr6 = '12345678910';


const arr7 = Array.from(arr6, (x) => Number(x));
arr7.push(1, 2, 3, 4, 5, 6);
console.log(arr7);

const res2 = Array.from(new Set(arr7));
console.log(res2);
