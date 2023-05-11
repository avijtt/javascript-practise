
//NUMBERS
//two types of number
//1. regular number that stored in 64 bit format
//2. bright numberes represent integer of arbitay length 


//shorten number by e
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

console.log( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
console.log(billion)

let mcs = 1e-6; // five zeroes to the left from 1
console.log(mcs)

//HEX OCTAl AND BINARY
//Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there exists a shorter way to write them: 0x and then the number.


// r instance:

console.log( 0xff ); // 255
console.log( 0xFF ); // 255 (the same, case doesn't matter)

//Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log( a == b ); // true, the same number 255 at both sides

 
//toString() method
//The method num.toString(base) returns a string representation of num in the numeral system with the given base.
let num=255
console.log(num.toString(16))
console.log(   num.toString(2))


//Rounidng
//several built in function for rounding
//math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.

let n=1.23456
console.log(Math.round(n*100)/100)// 1.23456 -> 123.456 -> 123 -> 1.23
console.log(n.toFixed(1))//"1.2"

//We can convert it to a number using the unary plus or a Number() call, e.g write console.log(+n.toFixed(5)).

//imprise clacuation
/*
Consider this (falsy!) equality test:

console.log( 0.1 + 0.2 == 0.3 ); // false

That’s right, if we check whether the sum of 0.1 and 0.2 is 0.3, we get false.

Strange! What is it then if not 0.3?

console.log( 0.1 + 0.2 ); // 0.30000000000000004

Ouch! Imagine you’re making an e-shopping site and the visitor puts $0.10 and $0.20 goods into their cart. The order total will be $0.30000000000000004. That would surprise anyone.

But why does this happen?

A number is stored in memory in its binary form, a sequence of bits – ones and zeroes. But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form.

What is 0.1? It is one divided by ten 1/10, one-tenth. In decimal numeral system such numbers are easily representable. Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).

So, division by powers 10 is guaranteed to work well in the decimal system, but division by 3 is not. For the same reason, in the binary numeral system, the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.

There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal fraction.

The numeric format IEEE-754 solves this by rounding to the nearest possible number. These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.
*/

//numeric format.

// Can we work around the problem? Sure, the most reliable method is to round the result with the help of a method toFixed(n):

let sum = 0.1 + 0.2;
console.log( +sum.toFixed(2) ); // 0.30
//toFixed always return string so use +  for interer


//Tests: isFinite and isNaN
//NaN represents error
// infinity represents greater or less than anything


// isNaN(value) converts its argument to a number and then tests it for being NaN:
console.log(isNaN(NaN)) //true
console.log(isNaN(Infinity)) //false
console.log(isNaN("str")) //true


// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:
console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, because a special value: NaN
console.log( isFinite(Infinity) ); // false, because a special value: Infinity


//Other math functions
// Math.random()
console.log( Math.random() ); // 0.1234567894322
console.log( Math.random() ); // 0.5435252343232
console.log( Math.random() ); // ... (any random numbers)


//Math.max(a, b, c...) and Math.min(a, b, c...)
console.log( Math.max(3, 5, -10, 0, 1) ); // 5
console.log( Math.min(1, 2) ); // 1


// Math.pow(n, power)
console.log( Math.pow(2, 10) ); // 2 in power 10 = 1024






