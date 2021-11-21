let singleArray = [10, 20, 30, 40]
singleArray.includes(2)
// => true
singleArray.includes(5)
// => false

let multipleArrays = [[1, 2, "where", 7], [1, "am", 3, 5], [8, "I", 4, 2]]

let filtered = multipleArrays.filter(array => array.includes(2))
// filtered = [ [ 1, 2, 'where', 7 ], [ 8, 'I', 4, 2 ] ]

let doubleDigitArray = [10, 20, 30, 40]
doubleDigitArray.some(number => number < 10)
// => false (there are no values less than 10)

let singleDigitArray = [2, 3, 5, 7, 8]
singleDigitArray.some(number => number >= 10)
// => false (there are no values 10 or greater)