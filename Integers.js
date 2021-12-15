

let aStringOrANumber = parseInt('15')


let thisInt = parseInt("5 o'clock")
console.log(thisInt)
// => 5

let thatInt = parseInt("It's 5 0'clock somewhere.")
console.log(thatInt)
// => NaN

let noDecimals = parseInt(5.56)
console.log(noDecimals)
// => 5

let thisFloat = parseFloat('05.36 dollars')
console.log(thisFloat)
// => 5.36

let thatFloat = parseFloat(5.36)
console.log(thatFloat)
// => 5.36

console.log(thisFloat + thatFloat)
// => 10.72

let parsedBiggie = parseInt('146949749724097209475924502945709275907249879479470592450924579852934750927509724957094')
console.log(parsedBiggie)
// => 1.469497497240972e+86

let thisBiggie = BigInt('146949749724097209475924502945709275907249879479470592450924579852934750927509724957094')
console.log(thisBiggie)
// => 146949749724097209475924502945709275907249879479470592450924579852934750927509724957094n

let wholeBiggie = BigInt(parseInt(5.36))
console.log(wholeBiggie)
// => 5n

let parsedBinary = parseInt('0b11')
console.log(parsedBinary)
// => 0

let bigIntBinary = BigInt('0b11')
console.log(bigIntBinary)
// => 3n

let binaryTotal = BigInt('0b' + '11') + BigInt('0b' + '101')
console.log(binaryTotal)
// => 8n

