function concat(...arguments) {
    // return Array.prototype.concat.call(...arguments); // this is a solution also but there is another simpler way 
    var res = [].concat(...arguments).sort((x, y) => y - x)
    for(let i = res.length - 1 ; i > 0 ; i--) {
      if(res[i] == res[i-1]) {
        res.splice(i-1, 1)
      }
    }
    /** 
     * res.forEach((el, idx) => {
    if(idx > 0 && el == res[idx - 1]) {
      res.splice(idx, 1)
    }
  })  // just with for each method
     */
    return res // there it is being repetition we should remove it 
  }
  
  var arr1=[1, 2, 3],
      arr2 = [4,5, 6, 6, 3, 4 ,1, 2], 
      arr3 = [0, 7, 8];
  
  console.log(concat(arr1, arr2, arr3));
  
  // 

  function concatination(strArr) {
    return "".concat(...strArr);
  }
  
  console.log(concatination(["alif", "gamma", "betta"]))
  
  function hardConcat(arr1, arr2) {
    var res = []
    arr1.forEach((x, idx) => {
      if (arr2.includes(x)){
      res.push(x);
      res.unshift(x)
    }
    }
                ) 
    
    return res
  }
  
  console.log(hardConcat([2, 4, 6], [3, 6, 4]));

  function substring(strArr, str) {
  return strArr.every(x => x.includes(str));
  
}
const stringsArray1 = ['apple', 'banana', 'cherry'];
const substring1 = 'an';
console.log(substring(stringsArray1, substring1))

function arryPositive(arr) {
  return arr.every(x => x > 0)
}


console.log(arryPositive([1, 2, -4]))

// 

function copywithin(arr) {
  return arr.copyWithin(0, arr.length-1)
}

console.log(copywithin([1, 2, 3,4, 5]))


function firstHalf(arr) {
  return arr.copyWithin(0, arr.length/2 + 1)
}

console.log(firstHalf([1, 2,3, 4, 5]))



function fill(arr) {
  return arr.fill(1)
}


console.log(fill([2, 4, 3, , 3, 4,3,3, ,2,4,3 ,3]));


function filler(arr, num) {
   arr.forEach((x, idx) => {
     if( x  > num ) {
       arr.fill(0, idx, idx+1)
     }
   })
  
  return arr
}

console.log(filler([3, 4,2 ,5, 1, 7, 4, 6, 8, 9, 10, 4], 5))

//    
function toString(arg) {
  return arg.toString();
}


console.log(toString([1, 2, 3, 4])) // somehow if we use this method with matrix, tosTRING METHOD  thinks that whnat we gaev is flattened
console.log(toString(['a', 'b', 'c']))

function join(args, separate) {
  return args.join(separate)
}

console.log(join(["hello", "Mister", "alif"], "TIRE"));
console.log(join([1, 2, 3, 4, 5], ' '))

function deleted(arr, idx) {
  delete arr[idx]
  return arr
}


console.log(deleted([1, 2, 3, 4], 0 ))  // recommended to use this delete, cuz it may be a problem later on when we need the length of the array 

 
const sort = (arr) => arr.map(word => word.split('').sort((a, b) => b.localeCompare(a)).join('')).sort((a, b) => b.localeCompare(a));


console.log(sort(["alfa", "gamma", "betta"]))



//    
function toString(arg) {
  return arg.toString();
}


console.log(toString([1, 2, 3, 4])) // somehow if we use this method with matrix, tosTRING METHOD  thinks that whnat we gaev is flattened
console.log(toString(['a', 'b', 'c']))

function join(args, separate) {
  return args.join(separate)
}

console.log(join(["hello", "Mister", "alif"], "TIRE"));
console.log(join([1, 2, 3, 4, 5], ' '))

function deleted(arr, idx) {
  delete arr[idx]
  return arr
}


console.log(deleted([1, 2, 3, 4], 0 ))  // recommended to use this delete, cuz it may be a problem later on when we need the length of the array 

 
const sorts = (arr) => arr.map(word => word.split('').sort((a, b) => b.localeCompare(a)).join('')).sort((a, b) => b.localeCompare(a));


console.log(sorts(["alfa", "gamma", "betta"]))



function applyEach(arr, cllbck) {
  var ner = [], 
      sec  = [];
  arr.forEach(x => console.log(x))
  arr.forEach( x => {
    ner.push(cllbck(x))
    
     sec = arr.map(x => cllbck(x-1))
  }
             )
  return [ner, sec]
}

console.log(applyEach([1, 2, 3, 4], (x) => x*2))


console.log((function capitalise(arr) {
  return arr.map(x => x.charAt(0).toUpperCase() + x.slice(1))
})(['alfa', 'gamma']));

console.log((function name(arr, cll) {
  return arr.filter(cll)
})([1, 2, 3, 4, 5, 6], x => (x/2) % 2 == 0 ))


console.log([1, 2, 3, 4, 5].reduce((el, res) => res*el, 1))

function fn(a, b) {
  return a * b
}

var fn = (a, b) => a*b


var gen = Array.from({length: 100}, (_, i) => i)

console.log(gen)


console.log(Array.from(String(1233), x => parseInt(x) % 10))

function ret(arg) {
  return Array.isArray(arg) ? "yes it si an array" : `no it is ${typeof arg}`
}

console.log(ret())

console.log((function indexof(arr, num) {
  return arr.indexOf(num)
})([1, 2, 3, 4, 5], 4))


console.log((function find(arr, cll) {
  return [arr.find(cll), arr.findIndex(cll)]
})([1, 2, 43 ,5], x => x > 10))

const arr = [1, 2, 3, 4];

console.log(arr.flatMap((x) => [x, x * 2]));

const arr1 = ["it's Sunny in", "", "California"];

console.log(arr1.map((x) => x.split(" ")));
console.log(arr1.flatMap((x) => x.split(""))); 

console.log([1, 2, 3, 4, 5, 6].flatMap(x => [[x, x**2]]))
console.log(["hello", "mister"].flatMap(x => [[x,", it's length is : ", x.length]]))

console.log([...[1,2 ,3, 4, 5, ].keys()])