//1 arraus add/remove items
//already cover 

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginni

//MTHODS
    //1 splice()
    //2 slice()
    //3 concat()
    //4 forEach()
    //5 searching-indexOF() and includes()
    //6 find()
    //filter()
    //map()
    //sort()
    //reverse()
    //split()
    // join()
    //reduce()
    //reduceRight()
    //some()
    //every()
    //findIndex()
    //fill()
    //copyWithin()

//splice
//delete from arrays
let arr=['I','go','home']
delete arr[1] //remove go

console.log((arr[1])) //undefined
console.log(arr.length) //3

//arr.splice is used to insert remove and replace elements\

//arr.splice(start[, deleteCount, elem1, ..., elemN])

//It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.


arr.splice(1,1)  //// from index 1 remove 1 element
console.log(arr)  // [ 'I', 'home' ]

let aar=['I','study','javascript','right','now']

//remove 3 elements from first(0) and replace with 'lets' and 'dance'
aar.splice(0,3,'lets','dance')

console.log(aar) //now ["Let's", "dance", "right", "now"]




//see splice elements
// remove first two elements
let removed=aar.splice(0,2)
console.log(removed) //'lets' , 'dance'

//splice can add elementsd without removing. we need to set deleteCount
// add from after 3rd Element
aar.splice(3,0,'firstInsert','secondInsert')
console.log(aar) //[ 'right', 'now', 'firstInsert', 'secondInsert' ]


//NEgitive indexes
let val=[1,2,5]

// -1 is last index,0 is delte 0 Element,3 4 is to added then 
val.splice(-1,0,3,4)
console.log(val) //[ 1, 2, 3, 4, 5 ]



//slice
// simple form of splice ,copy that array and work witjout affecting the array
// syntax: arr.slice([start],[end])

//It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
let slicePart=['t','e','s','t']
console.log(slicePart.slice(1,3)) //'e', 's'
console.log(slicePart)
console.log( slicePart.slice(-2) ); // s,t (copy from -2 till the end)



//concat
// concatenate two arrays
//arr.concat(arg1, arg2...)

// It accepts any number of arguments – either arrays or values.
// The result is a new array containing items from arr, then arg1, arg2 etc.
// If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copired


let concatArr=['a','b','c']

// create an array from: arr and ['d','e']
console.log(concatArr.concat(['d','e'])) //[ 'a', 'b', 'c', 'd', 'e' ]

console.log(concatArr.concat(['d','e'],['f','g'])) //[ 'a', 'b', 'c', 'd', 'e' ,'f','g']
//only coies orignsl array and work

// concat of array object is not possible 
let arrayLike = {
    0: "something",
    length: 1
  };
  console.log(concatArr.concat(arrayLike))//[ 'a', 'b', 'c', { '0': 'something', length: 1 } ]

//   …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

let arraYLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
  };
  console.log(concatArr.concat(arraYLike)) //[ 'a', 'b', 'c', 'something', 'else' ]


//forEach
// the arr.forEach method allows ti run a function for every Element of array 
//syntax:
arr.forEach(function(item, index, array) {
    // ... do something with item
});

  ['Bilbo' ,'Gandalf','Nazgul'].forEach((item,index,array)=>{
    console.log(`${item} is at index ${index} in ${array}`)
  })
/*Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
Nazgul is at index 2 in Bilbo,Gandalf,Nazgul
*/



//seaarching in array
//  arr.indexOf() and arr.includes()

// arr.indexOf(item,from)- looks item from starting from index from and return index if found else -1
// arr.includes(item,from) -looks item from starting from index from and return  true if found

let serrch=[1,0,false,NaN]
console.log(serrch.indexOf(0)) //1
console.log(serrch.indexOf(null)) //-1

console.log(serrch.includes(false)) //true
//include method also handles NaN properly 
console.log(serrch.includes(NaN)) //true

//indexOf uses the strict equality === for comparison.


//find method
//find array of specific condition
//syntax:arr.find(fn)

let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });

 //If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

let users=[
    {id:1,name:'john'},
    {id:2,name:'jane'},
    {id:3,name:'mary'}
]

console.log(users.findIndex(user=>user.name=='john')) //0
let user=users.find(item=>item.id==1)
console.log(user.name) //john


//filter method
//The syntax is similar to find, but filter returns an array of all matching elements:
//suntax:
let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
  });

//// returns array of the first two users
let soneUser=users.filter(item=>item.id>1)
console.log(soneUser.length) //2


//map
//map method returns a new array with the results of calling a provided function on every element in the calling array
//syntax:
let resultVl = arr.map(function(item, index, array) {
  // returns the new value instead of item
});


//here length of each itwem of ARRAY
let lengths=['Bilbo','gandalf','naxgal']
lengtVal=lengths.map(item=>item.length)
console.log(lengtVal)

//sort
// sort the array arr.sort()
let a=[2,5,5,10,55,87,25,68]
console.log(a.sort()) //[  10,  2, 25,  5,   5, 55, 68, 87]
//which is incorrect cause the number is converted into string and order as  ascending order




//reverse
//reverse the array arr.reverse()
let rever=[1,2,3,4,5]
console.log(rever.reverse()) //[ 5, 4, 3, 2, 1]


//split and join
//Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?

// The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

// In the example below, we split by a comma followed by space:
let names='my, name, is, avijeet, upadhyaya'
let splitName=names.split(',')
for(let name of splitName)
console.log(`split string is ${names}`)

//pass the argument numeric value to limit arrray length
let golName= 'Bilbo, Gandalf, Nazgul, Saruman'.split(',',2)
console.log(golName) //[ 'Bilbo', ' Gandalf' ]

//split into letters
let constant='test'
console.log(constant.split(''))//[ 't', 'e', 's', 't' ]

// join
// join the array arr with the delimiter delim
// call arr.join(glue) does rhee reverse of split
let splitStr= ['Bilbo', 'Gandalf', 'Nazgul'];
console.log(splitStr.join('+')) //Bilbo+Gandalf+Nazgul


//reduce/reduceright
// for iterate array we use forEach,for and DOMRect.apply..of
// map and filter are iterate array each element
// reduce/reduceRight is iterate array return a single value
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, //[initial]) 
)
//accumulator=result of prev function item=array item,index=pos, and array=is that array
let somVal=[1,2,3,4,5,6,7,8,9,10]
let add=somVal.reduce((a,b)=>a+b,0)
console.log(add)
// Let’s see the details of what’s going on.

//     On the first run, a is the initial value (the last argument of reduce), equals 0, and b is the first array element, equals 1. So the function result is 1.
//     On the second run, a = 1, we add the second array element (2) to it and return.
//     On the 3rd run, a = 3 and we add one more element to it, and so on…


let str=['my', 'Long', 'Word']
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
