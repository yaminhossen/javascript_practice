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

// sudoku solver implementation

/* function solveSudoku(board) {
    const findEmpty = (board) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    return [row, col]; // Return the first empty cell
                }
            }
        }
        return null; // No empty cells found
    };

    const isValid = (board, num, row, col) => {
        // Check the row
        for (let j = 0; j < 9; j++) {
            if (board[row][j] === num) return false;
        }

        // Check the column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }

        // Check the 3x3 box
        const boxRowStart = Math.floor(row / 3) * 3;
        const boxColStart = Math.floor(col / 3) * 3;
        for (let i = boxRowStart; i < boxRowStart + 3; i++) {
            for (let j = boxColStart; j < boxColStart + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }

        return true; // Number is valid
    };

    const backtrack = () => {
        const emptyCell = findEmpty(board);
        if (!emptyCell) return true; // Puzzle solved

        const [row, col] = emptyCell;
        for (let num = 1; num <= 9; num++) {
            const numStr = num.toString();
            if (isValid(board, numStr, row, col)) {
                board[row][col] = numStr; // Place the number

                if (backtrack()) return true; // Recursively attempt to solve

                // Undo the move (backtrack)
                board[row][col] = '.';
            }
        }

        return false; // Trigger backtracking
    };

    backtrack(); // Start the backtracking process
    return board; // Return the solved board
}

// Example usage:
const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(solveSudoku(board)); */
// let b = 'yaminshahinnahin';
// function aaa(par) {
//     for (let i = 0; i < par.length; i++) {
//         console.log(par.slice(i, i+1));
//     }
// };
// aaa(b);

// let numbers = [45, 4, 9, 16, 25];

// function myFunc(total, value, index, array) {
//     console.log(array);
//     return total+value;
// };

// let newNumbers = numbers.reduce(myFunc, 10);
// console.log(newNumbers);

// let aaa = 'yaminhossen';
// console.log(Array.from(aaa));
// let a = new Date(milliseconds);
console.log(Math.trunc(4.1));
