// find the second largest number
// let numbers = [6,2,3,9,1,4];
/* function bignum(numbers) {
    let aa = numbers.sort();
    return aa[aa.length - 2];
    
}
console.log(bignum(numbers)); */

// sortin assending order

/* console.log(numbers.sort(function (a, b) {
    return a-b;
})); */

// sortin desending order

/* console.log(numbers.sort(function (a, b) {
    return b-a;
})); */


// vowel count form an array

/* const vowel = ["a", "e", "i", "o", "u"];

function countVowel(arr) {
    let count = 0;
    let lowcase = arr.toLowerCase();
    let letters = Array.from(lowcase);
    // let letters = [...arr];
    // console.log(letters);
    letters.forEach(function (value) {
        if(vowel.includes(value)){
            count++;
        }
    })
    // console.log('count', count);
    return count;
    
    
}
countVowel("aeiouAe") */

// finding duplicate number from an array

/* const numbers = [2, 3, 4, 2, 5, 6, 5];
function findDuplicate(arr) {
    let dupArray = arr.filter((n, index) => index !== arr.indexOf(n))
    return dupArray;
}
console.log(findDuplicate(numbers)); */

// finding unique number from an array

/* const numbers = [2, 3, 4, 2, 5, 6, 5];
function findDuplicate(arr) {
    let dupArray = arr.filter((n, index) => index === arr.indexOf(n))
    return dupArray;
}
console.log(findDuplicate(numbers));
 */  

// finding how much time yamin in this array?

/* const sentense = "yamin how are you yamin can yeo talk yamin";
function countName(sent) {
    let arr = sent.split(" ");
    let countarr = [];
    arr.forEach((e, index) => {
        if(e == 'yamin'){
            countarr.push(e)
        }
    });
    return {countarr};
}
console.log(countName(sentense), countName(sentense).countarr.length); */


// if the element fist time found then the function can not continue

/* function linearsearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val){
            return i;
        }
        
    }
    return 'not found!';
}
console.log(linearsearch([2, 4, 3, 5, 4], 4)); */

// how to find biggest string in the array and that element index?

/* let names = ['abir', 'tamim', 'nayeem', 'mahinjghjg'];
function bigName(arr) {
    let numarr = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > numarr.length){
            numarr = arr[i];
        }
    }
    return [numarr, arr.indexOf(numarr)];
}
console.log(bigName(names)); */

// how to find the second largest string in the array?

/* function secondLargest(arr) {
    let newarr = arr.sort((a, b) => (b.length - a.length));
    let finalvalue = newarr[1];
    console.log(finalvalue);
    
}
let names = ['abir', 'tamiddm', 'nayeem', 'mahinjghjg'];
secondLargest(names) */

// find the value which is divided by the 3 and 5, from 1 to 100.

/* function divided() {
    let marr = [];
    for (let i = 0; i < 100; i++) {
        if(i%3 === 0 && i%5 === 0){
            console.log(i);
            marr.push(i);
            
        }
        
    }
    return marr;
}
console.log(divided()); */

// how to remove/delete falsey value from an array?

const mixedArr = ['yamin', undefined, false, "", NaN, "k", 't', 66];

// first way
/* function falseRemover(arr) {
    let newArr = [];
    for (const el of arr) {
        if(!el){
            continue;
        }
        newArr.push(el);
    }
    console.log(newArr);
    
}
falseRemover(mixedArr); */

// second way
/* function falseRemover2(arr) {
    let trueArr = arr.filter((el) => (el))
    console.log(trueArr);
    
}
falseRemover2(mixedArr); */

// how to delete/remove true value form an array?

// first way
/* function falseRemover(arr) {
    let newArr = [];
    for (const el of arr) {
        if(el){
            continue;
        }
        newArr.push(el);
    }
    console.log(newArr);
    
}
falseRemover(mixedArr); */

// second way
/* function falseRemover2(arr) {
    let trueArr = arr.filter((el) => (!el))
    console.log(trueArr);
    
}
falseRemover2(mixedArr); */