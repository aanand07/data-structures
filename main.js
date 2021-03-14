var strStr = function(str, sub) {
    let i=0;
    while(i<=str.length-sub.length){
      if(str.charAt(i) === sub.charAt(0)){
        let tmp=str.charAt(i)
        for(let j=1;j<sub.length;j++){
          tmp+=str.charAt(i+j)
        }
        if(tmp===sub) return i;
      }
    }
    return -1;
};

// multiple pointers
function averagePair(arr, avg){
    let start = 0, end= arr.length-1;
    while(start<end){
        let av=(arr[start]+arr[end])/2;
        if(av===avg) return true;
        else if(av<avg) start++;
        else end--;
    }
    return false;
}
// averagePair([1, 2, 3], 2.5);
// averagePair([1, 2, 3, 5, 6, 7, 10, 12, 19], 8);
function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let i=0;
  for(let j=0; j<str2.length; j++){
    if(str1.charAt(i) === str2.charAt(j)) i++;
  }
  return i===str1.length;
}

isSubsequence('hello', 'hello world');

// sliding window
const maxSubarraySum = (arr, n) => {
    if (arr.length < n) return null;
  
    let ret = 0;
    let temp = 0;
  
    for (let i = 0; i < n; i++) ret += arr[i];
  
    temp = ret;
    for (let i = n; i < arr.length; i++) {
      temp = temp - arr[i - n] + arr[i];
      ret = Math.max(ret, temp);
    }
  
}
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);

function minSubArrayLen(arr, num){
  let i = 0; // start
  let j = 0; // end
  let sum = 0;
  let ret = Infinity;

  while (i < arr.length) {
    if (sum < num && j < arr.length) {
      sum += arr[j];
      j++;
    } else if (sum >= num) {
      ret = Math.min(ret, j - i);
      sum -= arr[i];
      i++;
    } else {
      break;
    }
  }

  return ret === Infinity ? 0 : ret;
}

minSubArrayLen([2, 3, 4], 2);

function spiderMove(x, y) {

    x = Math.abs(x);
    y = Math.abs(y);
  
    var n = [];
    for (var i = 0; i < x + 1; i++) {
      n.push(1);
    }
  
    for (var i = 0; i < y; i++) {
      for (var j = 1; j < x + 1; j++) {
        n[j] = n[j - 1] + n[j];
      }
    }
    return n[n.length-1];
  }
// spiderMove(2, -2)


// findLongestSubstring returns longest substring with all distinct characters
const findLongestSubstring = str => {
    let ret = 0;
    let seen = {};
    let i = 0;
  
    for (let j = 0; j < str.length; j++) {
      let char = str[j];
      if (seen[char]) i = Math.max(i, seen[char]);
      ret = Math.max(ret, j - i + 1);
      seen[char] = j + 1;
    }
  
    return ret;
  };

// findLongestSubstring('rithmschool');

// recursion
function nestedEvenSum (obj, sum=0) {
  
  let tmp = {};
  let isobj = false;
  for(let o in obj){
    if(typeof obj[o] === 'object') isobj = true;
    if(obj[o] % 2=== 0) sum+=2;
    else Object.assign(tmp, obj[o]);;
  }
  if(!isobj) return sum;
  return nestedEvenSum(tmp,sum );
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

  function stringifyNumbers(obj){
    // Object.keys(obj).forEach(o => {
(function(){
  for(let o in obj){
    if(typeof obj[o] === 'object'){
      return stringifyNumbers(obj[o]);
    } else {
      obj[o] = (typeof obj[o] === 'number') ? obj[o].toString() : obj[o];
    }
  }
})()
    // })
      return obj;
  }


let ob = {
    num: 1,
    
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(ob));


function collectStrings(obj, arr=[]){
  Object.keys(obj).forEach(e => {
    if(typeof obj[e] === 'object'){
      return collectStrings(obj[e], arr);
    } else if(typeof obj[e] === 'string') {
      arr.push(obj[e]);
    }
  })
  return arr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj));

function countZeroes(arr){
  let start = 0, end = arr.length-1, mid =  Math.floor(end / 2);
  while(start<end){
    if(arr[mid] ==1){
      if(arr[mid+1] ==0) return arr.length-mid-1;
      start = mid+1;
    } else {
      if(arr[mid-1]==1) return arr.length-mid;
      end = mid-1;
    }
    mid=Math.floor((start+end)/2);
  }
  return arr[0] === 0 ? arr.length : 0;
}

console.log(countZeroes([1, 0, 0, 0, 0]));

// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.
//This function should return true if the pair exists or false if it does not.
function findPair(arr, num){
  let obj={};
  for(let i of arr){
    if(obj[i]) obj[i]++;
    else obj[i] = 1;
  }
  for(let i in obj){
    if(obj[i-num]) return true;
  }
  return false;
}

findPair([2, 5, 4], 3);

var containsDuplicate = function(arr) {
    let obj = {};
    for(let i of arr){
      if(obj[i]) return true;
      else obj[i] = 1;
    }
    return false;
};

var rotate = function (arr, num) {
  if(num<1) return arr;
  let tmp;
  for (let i = 1; i <= num; i++) {
    tmp = [];
    tmp[0] = arr[arr.length - 1];
    for (let k = 0; k < arr.length - 1; k++) {
      tmp.push(arr[k]);
    }
    arr = tmp;
  }
  return arr;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));


var twoSum = function(arr, num) {
  for(let i=0; i<arr.length; i++){
    let sec = arr.slice(i+1).indexOf(num-arr[i]);
    if(sec>-1 ) return [i, sec+i+1];
  }
  
};

// console.log(twoSum([2, 7, 11], 9));

function commonSubstring(a, b) {
  // Write your code here
for(let i=0; i<a.length; i++){
  let first = a[i], second=b[i], tmp=false;
 sec: for(let j=0; j<first.length; j++){
      let val = first.charAt(j);
      if(second.indexOf(val)>-1){
          tmp=true;
           console.log('YES');
           break sec;
      }
  }
  if(!tmp) console.log('NO');
}
}

commonSubstring(['hello', 'hi'], ['world', 'bye']);
// function getDigit(num, index) {
//     const str = Math.abs(num).toString();
//     return Number(str.charAt(str.length - index - 1));
// }

// function digitCount(num) {
//     return Math.abs(num).toString().length;
// }

// function mostDigits(arr) {                                                                    
//     let rVal = 0;
//     for (let el of arr) {
//         const count = digitCount(el);
//         if (count > rVal) {
//             rVal = count;
//         }
//     }
//     return rVal;
// }

// function radixSort(arr) {
//     const mostDigitCount = mostDigits(arr);
//     for (let i = 0; i < mostDigitCount; i++) {
//         let digitBuckets = Array.from({ length: 10 }, () => []);
//         for (let j = 0; j < arr.length; j++) {
//             const digit = getDigit(arr[j], i);
//             digitBuckets[digit].push(arr[j]);
//         }
//         arr = [].concat(...digitBuckets);
//     }
//     return arr;  
// }

// function dfs(){
//     let current = node;
//     q.push(current);
//     current = current.left;
//     while(current){
//         q.push(current);
//         if(current.left) q.push(current.left);
//         if(current.right) q.push(current.right);
//         current = current.left;
//         if(!current) current = current.right;
//     }
// }

// var longestCommonSubsequence = function(text1, text2) {
//     let i= j = 0;
//     while(i<text1.length && j<text2.length){
        
//     }
// };

// const swap = (ar, first, second) => [ar[first], ar[second]] = [ar[second], ar[first]];


// function pivot(arr, start = 0, end = arr.length - 1) {
//     
//     const piv = arr[start]; let p = start; 
//     for (let j = start + 1; j <= end; j++) {
//         if (arr[j] < piv) {
//             p++;
//             swap(arr, j, p);
//         }
//     }
//     swap(arr, p, start);
//     return p;
// }

// function quickSort(arr, start = 0, end = arr.length - 1) {
//     if (start < end) {
//         let pivotIndex = pivot(arr, start, end);
//         quickSort(arr, start, pivotIndex - 1);
//         quickSort(arr, pivotIndex + 1, end);
//     }
//     return arr;
// }

// console.log(quickSort([23, 34, 35, 21, 12, 23, 11, 90]));
// function merge(arr1, arr2) {
//     let i = j = 0, arr = [];
//     while ((i + j) < (arr1.length + arr2.length)) {
//         if (arr1[i] <= arr2[j] || !arr2[j]) {
//             arr.push(arr1[i]);
//             i += 1;
//         } else if (arr2[j] <= arr1[i] || !arr1[i]) {
//             arr.push(arr2[j]);
//             j += 1;
//         }
//     }
//     return arr;
// }

// Merge sort first divides the array into equal halves and then combines them in a sorted manner.
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }

// console.log(mergeSort([23, 34, 35, 21, 12, 23, 11, 90]));

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currentVal = arr[i], swapVal = i;
//         for (let j = i - 1; j >= 0; j--) {
//             if (arr[j] > currentVal) {
//                 arr[j + 1] = arr[j];
//                 swapVal = j;
//             }
//         }
//         arr[swapVal] = currentVal;
//     }
//     return arr;
// }

// console.log(insertionSort([23, 34, 35, 21]));
// This sorting algorithm is an in -place comparison - based algorithm in which the list is divided into two parts,
// the sorted part at the left end and the unsorted part at the right end.Initially,
// the sorted part is empty and the unsorted part is the entire list.
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if (min !== i) {
//             arr[i] += arr[min];
//             arr[min] = arr[i] - arr[min];
//             arr[i] = arr[i] - arr[min];
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([23, 34, 35, 21]));

// This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared 
// and the elements are swapped if they are not in order.
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let swapped = false;
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 arr[j] += arr[j + 1];
//                 arr[j + 1] = arr[j] - arr[j + 1];
//                 arr[j] = arr[j] - arr[j + 1];
//                 swapped = true;
//             }
//         }
//         if(!swapped) return arr;
//     }
//     return arr;
// }
// console.log(bubbleSort([21, 23, 34, 35, 11]));
// (function () {
//   // var num = document.querySelector('input').value;
//   function fact() {
//     var num = Number(document.querySelector('input').value);
//     if(num){
//     console.log(num);
//     if (num == 1) return;
//     document.querySelector('input').value -=1; return num*fact();
//     // document.getElementById('dummyDiv').innerText =  s;
//     }
//   }
//   setTimeout(() => console.log(fact()), 5000);
//   // document.querySelector('button').addEventListener('click', fact);
// })();


// console.log(m);
// function binarySearch(arr, el){
//     if(arr.length===0) return -1;
//   var s = 0, e = arr.length - 1, m = Math.floor(e / 2);
//     while (s < e) {
//         // console.log(m);
//         if (el === arr[m]) return m;
//         if (el < arr[m]) {
//             e = m - 1;
//         } else {
//             s = m + 1;
//         } m = Math.floor((e + s) / 2);

//     }
//     return -1;
// }
// var a = binaryS([1, 2, 3, 4, 5], 2);
// console.log(a);

// function sameFre(num1, num2) {
//     var str1 = num1.toString(), str2 = num2.toString(), obj1 = {}, obj2 = {};
//     if(str1.length !== str2.length){ return false; }
//     for (var i of str1) {
//         if (!obj1[i]) { obj1[i] = 1 }
//         else { obj1[i] += 1 };
//     }
//     for (var i of str2) {
//         if (!obj2[i]) { obj2[i] = 1 }
//         else { obj2[i] += 1 };
//     }
//     for (var i in obj1) {
//         if (!obj2[i] && obj1[i] !== obj2[i]) { return false; }
//     }
//     return true;
// }
// console.log(sameFre(182, 28100));

//     function isSubsequence(str1, str2) {
//         var i = 0;
//         var j = 0;
//         if (!str1) return true;
//         while (j < str2.length) {
//           if (str2[j] === str1[i]) i++;
//           if (i === str1.length) return true;
//           j++;
//         }
//         return false;
//       }

//       console.log(isSubsequence('hell', 'hello'));
// }

