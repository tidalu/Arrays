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
