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
    return numarr;
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
