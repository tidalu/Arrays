const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(arr[5]);
console.log(arr[arr.length - 1]);

const newArr = arr.every((x) => x*2);

console.log(newArr);

const arr2 = new Array(100).fill(1);
console.log(arr2);


const arr3 = Array.from({length: 100}, (_, i) => i + 1)

const even = arr3.filter((x) => x % 2 === 0);
console.log(even);
const odd = arr3.filter((x) => x % 2 !== 0);
console.log(odd);

const sumArr3 = arr3.reduce((sum, current) => sum + current, 0);
console.log(sumArr3);
const sumEven = even.reduce((sum, curr) => sum + curr, 0);
console.log(sumEven);
const sumOdd = odd.reduce((sum, current) => sum + current, 0);
console.log(sumOdd);

console.log(odd.indexOf(2));

arr3.sort((a, b) => a % 2 ? a - b : b - a);
console.log(arr3);
