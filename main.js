function getDigit(num, index) {
    const str = Math.abs(num).toString();
    return Number(str.charAt(str.length - index - 1));
}

function digitCount(num) {
    return Math.abs(num).toString().length;
}

function mostDigits(arr) {                                                                    
    let rVal = 0;
    for (let el of arr) {
        const count = digitCount(el);
        if (count > rVal) {
            rVal = count;
        }
    }
    return rVal;
}

function radixSort(arr) {
    const mostDigitCount = mostDigits(arr);
    for (let i = 0; i < mostDigitCount; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;  
}

function dfs(){
    let current = node;
    q.push(current);
    current = current.left;
    while(current){
        q.push(current);
        if(current.left) q.push(current.left);
        if(current.right) q.push(current.right);
        current = current.left;
        if(!current) current = current.right;
    }
}

var longestCommonSubsequence = function(text1, text2) {
    let i= j = 0;
    while(i<text1.length && j<text2.length){
        
    }
};

const swap = (ar, first, second) => [ar[first], ar[second]] = [ar[second], ar[first]];


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


// console.log(m); You're in Pune or Mumbai
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

