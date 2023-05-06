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