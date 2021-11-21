let original = [2, 4, 1, 7, 3]

let sorted = original.sort()

console.log(sorted)
// [ 1, 2, 3, 4, 7 ]

let alphaOriginal = ['d', 'a', 'c', 'e', 'b']

let alphaSorted = alphaOriginal.sort()

console.log(alphaSorted)
// => [ 'a', 'b', 'c', 'd', 'e' ]

/*
let plusDoubleDigits = [2, 10, 4, 1, 7, 20, 3]

let plusDoubleDigitsSorted = plusDoubleDigits.sort()

console.log(plusDoubleDigitsSorted)
[1, 10, 2, 20, 3, 4, 7]
*/

let plusDoubleDigits = [2, 10, 4, 1, 7, 20, 3]

let plusDoubleDigitsSorted = plusDoubleDigits.sort((a, b) => {
    if(a > b){
        return -1
    } else if (a < b){
        return 1
    }else {
        return 0
    }
})

console.log(plusDoubleDigitsSorted)
// [20, 10, 7, 4, 3, 2, 1]

/*
let plusDoubleDigits = [2, 10, 4, 1, 7, 20, 3]

let plusDoubleDigitsSorted = plusDoubleDigits.sort((a, b) => a - b)

console.log(plusDoubleDigitsSorted)
[1, 2, 3, 4, 7, 10, 20]
*/