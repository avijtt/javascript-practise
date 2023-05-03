
//string
//string format is UTF-16
//store in double quote ,single quote or backticks
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
//Single and double quotes are essentially the same. Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}:
function ASum
(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${ASum
(1, 2)}.`); // 1 + 2 = 3.

// Special characters
let guestList = "Guests:\n * John\n * Pete\n * Mary";

//String length
console.log( `My\n`.length ); // 3 as \n is count

//Accesssing characters
// To get a character at position pos, use square brackets [pos]
let aba=`hello`
console.log( aba[0] ); // 'h'
console.log(aba.at(0)); 
console.log( aba[aba.length - 1] ); // o
console.log( aba.at(-1) );
// So .at(-1) means the last character, and .at(-2) is the one before it, etc.

// The square brackets always return undefined for negative indexes, for instance:

let sTr = `Hello`;

console.log( sTr[-2] ); // undefined
console.log( sTr.at(-2) ); // l

//iterative the characters  uding for..for
for(let char in "Hello"){
  console.log(char) //h,e,l,l,o
}


//string is immutable in js as value cannot be changed 
// let c='hi'
// str[0]='H'
// console.log(str[0]) //error


//Changing the case
//Methods toLowerCase() and toUpperCase() change the case:

console.log( 'Interface'.toUpperCase() ); // INTERFACE
console.log( 'Interface'.toLowerCase() ); // interface

//str.indexOf
let val = 'As sly as a fox, as strong as an ox';
let target='as'
let pos = -1;
while ((pos = val.indexOf(target, pos + 1)) != -1) {
  console.log( pos );
}

// There is a slight inconvenience with indexOf in the if test. We can’t put it in the if like this:
let va = "Widget with id";

if (va.indexOf("Widget")) {
    console.log("We found it"); // doesn't work!
}
if (str.indexOf("Widget") != -1) {
  console.log("We found it"); // works now!
}


// includes, startsWith, endsWith
//modern method returrns true or falde
alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

//getting a substring
        //3 methods substring, substr, splice

// variable.slice(start [, end])
    //return part of  string from start to end
    let valu='stringify'
    console.log(valu.splice(0,5)) //// 'strin', the substring from 0 to 5 (not including 5)

// str.slice(start [, end], [, start])
// Returns the part of the string from start, with the given length.

//substring
alert( valu.substring(2, 6) ); // "ring"
alert(valu.substring(6, 2) ); // "ring"

//substr
alert( valu.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters


//variable.codePointAt(pos)
// different case letters have different codes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)


//String.fromCodePoint(code)

//Creates a character by its numeric code

alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

/*
Summary

    There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
    We can use special characters, such as a line break \n.
    To get a character, use: [] or at method.
    To get a substring, use: slice or substring.
    To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
    To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
    To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.

There are several other helpful methods in strings:

    str.trim() – removes (“trims”) spaces from the beginning and end of the string.
    str.repeat(n) – repeats the string n times.
    */