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